import { ApiService } from './APIService.js'

export async function postAbo(active, chosenAbo, data, publicationId) {
    const interval = active === "halbjahr" ? "h" : "j"
    const angebot = chosenAbo + "_" + interval
    return await ApiService.post('/abo-bestellung', { publikation_id: publicationId, angebot: angebot, ...data }, {})
}