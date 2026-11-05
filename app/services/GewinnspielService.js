import { ApiService } from "./APIService";

export async function sendLoesung(einsender, einsendungen) {
    return await ApiService.post("/gewinnspiel-einsendung", { einsender: einsender, einsendungen: einsendungen })
}