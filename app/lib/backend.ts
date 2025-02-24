import { AppData } from "./context";

const API_HOST = "http://74.15.101.124:42069"
const API_ROOT = API_HOST + "/warp7api/scouting"
const API_SEND = API_ROOT + "/add_report"

export async function sendReport(data: AppData) {
    const raw = data.serialize();
    const json = JSON.stringify(raw);

    console.log(json);

    try {
        const response = await fetch(API_SEND, {
            method: "POST",
            body: json,
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Origin": "http://127.0.0.1:3000"
            }
        });
    } catch { };
}
