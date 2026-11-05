import { ref } from "vue"
import { defineStore } from "pinia"

export const useMetaStore = defineStore('meta', () => {
    const id = ref(1)
    const title = ref("DIE ESCHWEGER")
    const logo = ref("/assets/img/eschweger/logo.png")
    const logoFooter = ref("/assets/img/eschweger/logo-clean.png")
    const facebook = ref("https://www.facebook.com/people/Die-Eschweger/61592634340997")
    const instagram = ref("https://instagram.com/dieeschweger")
    const favicon = ref("/favicon.ico")
    const strasse = ref("Marktstraße 29")
    const ort = ref("37269 Eschwege")
    const email = ref("info@brombeerland.de")
    const tel = ref("0160 89 89 401")

    async function fetchMeta() {
        return
    }

    return {
        id,
        title,
        logo,
        logoFooter,
        facebook,
        instagram,
        favicon,
        strasse,
        ort,
        email,
        tel,
        fetchMeta,
    }
})