import { AppData } from "./context";

const API_HOST = "https://randomcode.dev"
const API_ROOT = `${API_HOST}/warp7api/scouting`
const API_SEND = `${API_ROOT}/add_report`

export async function sendReport(data: AppData): Promise<Response | undefined> {
    const raw = data.serialize();
    const json = JSON.stringify(raw);

    try {
        return await fetch(API_SEND, {
            method: "POST",
            body: json,
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            }
        });
    } catch { };

    return undefined;
}
