// import AILogModule from "@/app/api/AIlogModule/AilogModule"
import { readFileSync } from "fs";

export async function GET(request:Request) {
    const body = readFileSync('./app/api/AIlogModule/AilogModule.js')
    return new Response(body,{headers:{'Content-Type':'text/javascript'}});
}