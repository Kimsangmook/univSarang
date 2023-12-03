/*jshint esversion: 6 */

/*
const CONFIG = {};
//import('http://110.10.129.216:8008/js/config.js').then(config => {
// import('https://ai.adotenglish.com/js/config.js').then(config => {
// import('https://ds.adotenglish.com/js/config.js').then(config => {
import('http://0.0.0.0:443/js/config.js').then(config => {
    CONFIG.API_URL = config.default.API_URL;
    CONFIG.LOG_INTERVAL = config.default.LOG_INTERVAL;
});

let AILog = null;
//import('http://110.10.129.216:8008/js/AILogModule.js').then(module => {
// import('https://ai.adotenglish.com/js/AILogModule.js').then(module => {
// import('https://ds.adotenglish.com/js/AILogModule.js').then(module => {
import('http://0.0.0.0:443/js/AILogModule.js').then(module => {
    AILog = new module.AILogModule(interval = CONFIG.LOG_INTERVAL, api_url = CONFIG.API_URL);
});
*/


const CONFIG = {};
let AILog = null;
// import('http://0.0.0.0:443/js/config.js').then(config => {
import('https://univ-sarang.vercel.app/api/AIlogModule/AILogModule.js')
.then(module => {
    console.log("AILogModule.js");
    AILog = new module.AILogModule(interval = CONFIG.LOG_INTERVAL, api_url = CONFIG.API_URL);

    // 모든 모듈이 로드되었으므로 콜백 함수 호출
    if(window.AILogLoad) {
        window.AILogLoad();
    }
});