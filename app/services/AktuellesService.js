import { ApiService } from "./APIService";

export async function getAktuelles(publicationId) {
    if (publicationId === null || publicationId === undefined || publicationId === '') {
        throw new Error('NUXT_PUBLIC_PUBLICATION_ID ist nicht konfiguriert.')
    }
    return await ApiService.get(`/publikationen/${encodeURIComponent(String(publicationId))}/redaktionssitzung`)
}