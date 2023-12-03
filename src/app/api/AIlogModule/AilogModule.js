export class AILogModule {
    constructor(interval, api_url) {
        this.logBuffer = [];
        this.bufferInterval = interval; // 1 seconds
        this.isBufferLocked = false;
        this.totalSent = 0;
        this.apiURL = api_url;
        this.currentLog = {};

        this.console_log = false;

        this.run(interval);
    }

    static toMySQLFormat(date) {
        return date.getFullYear() + '-' +
               ('0' + (date.getMonth() + 1)).slice(-2) + '-' +
               ('0' + date.getDate()).slice(-2) + ' ' +
               ('0' + date.getHours()).slice(-2) + ':' +
               ('0' + date.getMinutes()).slice(-2) + ':' +
               ('0' + date.getSeconds()).slice(-2);
    }

    static sleep(delay) {
        const start = Date.now();
        while (Date.now() - start < delay) {}
    }

    reset() {
        this.stop();
        this.run(this.bufferInterval);
    }

    enableLog() {
        this.console_log = true;
    }

    run() {

        // Start the timer to flush logs every 5 seconds.
        if (this.bufferInterval > 0) {
            this.handlerLog = setInterval(() => this.flushBuffer(), this.bufferInterval);
        }

        // Event handler to send all logs in the buffer when the window is about to be unloaded.
        this.funcUnload = () => {
            this.flushBuffer();

            AILogModule.sleep(100);
        };
        this.handlerUnload = window.addEventListener('beforeunload', this.funcUnload);

    }

    stop() {
        while (this.isBufferLocked) {
            AILogModule.sleep(1000);
        }
        clearInterval(this.handlerLog);
        window.removeEventListener("beforeunload", this.handlerUnload);

        this.logBuffer.splice(0, this.logBuffer.length);
        // this.bufferInterval = 5000; // 5 seconds
        this.isBufferLocked = false;
        this.totalSent = 0;
        if (this.console_log) console.log("stopped.");
    }

    setInterval(interval) {
        this.bufferInterval = interval;
    }

    flushBuffer() {
        if (this.isBufferLocked || this.logBuffer.length === 0) {
            return;
        }

        this.isBufferLocked = true;

        const logsToSend = [...this.logBuffer];
        this.logBuffer = [];

        let log_body = JSON.stringify(logsToSend);
        // if (this.console_log) console.log(log_body);

        if (this.console_log) console.log("Sending logs to " + this.apiURL);
        fetch(this.apiURL, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: log_body
        }).then(() => {
            this.isBufferLocked = false;
            this.totalSent += logsToSend.length;
            if (this.console_log) console.log("sent: " + logsToSend.length);
            // if (this.console_log) console.clear();
            if (window.AILogUnload) { window.AILogUnload(); window.AILogUnload = null; }

        }).catch(error => {
            // if (this.console_log) console.clear();
            if (this.console_log) console.error('Error sending logs:', error);
            this.isBufferLocked = false;
            if (window.AILogUnload) { window.AILogUnload(); window.AILogUnload = null; }
        });
    }

    write(u_id, t_id, action_id, set_id) {
        const log = {
            u_id: u_id,
            t_id: t_id,
            action_id: action_id,
            set_id: set_id,
            user_time: AILogModule.toMySQLFormat(new Date())
        };
        this.currentLog = log;

        if (this.logBuffer.length < 50) {
            this.logBuffer.push(log);
            if (this.console_log) console.table(this.logBuffer);
        }
    }
}

export default AILogModule;