<template>
    <div class="bg-gray" style="height: 50vh">
        <div class="container">
            <section class="py-10">
                <template v-if="status === 'bestaetigt'">
                    <h1>Bestellung bestätigt</h1>
                    <span>Vielen Dank. Ihre Anzeigenbestellung wurde erfolgreich bestätigt. Wir setzen uns in Kürze mit Ihnen in Verbindung.</span>
                </template>
                <template v-if="status === 'bereitsBestaetigt'">
                    <h1>Bestellung wurde bereits bestätigt</h1>
                    <span>Ihre Anzeigenbestellung wurde bereits erfolgreich bestätigt. Wir setzen uns in Kürze mit Ihnen in Verbindung.</span>
                </template>
                <template v-if="status === 'error'">
                    <span>Die aufgerufene URL ist unvollständig oder fehlerhaft, bitte klicken Sie erneut auf den Link in der Bestätigungs-Email</span>
                </template>
            </section>
        </div>
    </div>
</template>

<script setup>
import router from '@/router';
import { ApiService } from '@/services/APIService';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const status = ref("")
const processing = ref(false)

onMounted(async () => {
    const route = useRoute()
    const query = route.query
    if ("token" in query) {
        try {
            processing.value = true
            const res = await ApiService.get(`/anzeigen-bestellung/bestaetigen/${query.token}`)
            status.value = res.anzahl_gruppe === res.neu_bestaetigt  ? "bestaetigt" : (res.anzahl_gruppe === res.bereits_bestaetigt ? "bereitsBestaetigt" : "error")
        } catch {
            status.value = "error"
        }
    } else {
        status.value = "error"
    }
})
</script>