import { ref, watch } from "vue"
import { getLivePreis } from "@/services/AnzeigeService"

export function useLivePreis(form, selectedId, selectedAusgaben, publicationId) {
    let timer = null
    const livePreis = ref(0)
    const livePreisLoading = ref(false)
    watch([form, selectedId, selectedAusgaben], () => {
        if (form.kategorie && selectedId.value) {
            livePreisLoading.value = true
            clearTimeout(timer)
            timer = setTimeout(() => {
                getLivePreis(selectedId.value, form.kategorie, form.platzierung !== "", form.newsletter, selectedAusgaben.value, publicationId).then(res => {
                    livePreis.value = res.summe_netto
                })
            }, 1000)
        } else livePreis.value = 0
        livePreisLoading.value = false
    }, { deep: true })

    return { livePreis: livePreis, livePreisLoading: livePreisLoading }
}