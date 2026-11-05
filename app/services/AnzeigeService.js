import { ApiService } from "./APIService";

function requirePublicationId(publicationId) {
    if (publicationId === null || publicationId === undefined || publicationId === '') {
        throw new Error('NUXT_PUBLIC_PUBLICATION_ID ist nicht konfiguriert.')
    }
    return String(publicationId)
}

export async function getAnzeigenKatalog(publicationId) {
    /** Unterscheidung Privat/Geschäftlich? */
    return await ApiService.get(`/publikationen/${encodeURIComponent(requirePublicationId(publicationId))}/anzeigen-katalog`)
}

export async function getPreisinfos(publicationId) {
    return await ApiService.get(`/publikationen/${encodeURIComponent(requirePublicationId(publicationId))}/preisinfos`)
}

export async function getLivePreis(formatCode, preiskategorie, platzierungswunsch, newsletter, publicationId) {
    return await ApiService.post("/anzeigen-preis", {
        publikation_id: requirePublicationId(publicationId),
        format_code: formatCode,
        preiskategorie: preiskategorie,
        platzierungswunsch: platzierungswunsch,
        newsletter_abonnenten: newsletter
    })
}

export async function sendBestellung(kundennummer, ausgabeAm, formatCode, preiskategorie, platzierungswunsch, uebernahmeAus, korrekturabzug, notizen, besteller, publicationId) {
    return await ApiService.post("/anzeigen-bestellung", {
        publikation_id: requirePublicationId(publicationId),
        kundennummer: kundennummer,
        ausgabe_id: ausgabeAm,
        format_code: formatCode,
        preiskategorie: preiskategorie,
        newsletter_abonnenten: null,
        platzierungswunsch: platzierungswunsch,
        uebernahme_aus: uebernahmeAus,
        korrekturabzug_an: korrekturabzug,
        notizen: notizen,
        besteller: besteller,
    })
}

export async function uploadVorlage(id, file) {
    return await ApiService.uploadFile(`/anzeigen-bestellung/${id}/vorlage`, file)
}
