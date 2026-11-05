<template>
    <h4>Nur <b>nicht gewerbliche Inserate</b> aus dem Verbreitungsgebiet.</h4>
    
    <section class="mb-5">
            Beispiele für Inserate von Privatpersonen, gemeinnützige Organisationen und Kirchen:<br/>
            Trauer & Gedenken, Grüße, Geburt, Hochzeit, Jubiläum, Konfirmation, Jugendweihe, Kommunion, Einschulung, bestandene Prüfungen, Schul-, Ausbildungs-, Studiumsabschluss uvm.<br/>
            <b>Kleinanzeigen</b> in Textform bis 500 Zeichen ohne gewerblichen Charakter sind <b>kostenfrei</b>!<br/>
            <a href="/kleinanzeigen">Hier</a> können Sie Kleinanzeigen aufgeben.
    </section>

    <section>
        <h2 class="mb-0">Format auswählen</h2>
        <small>Preise inkl. 19% MwSt.</small>
        <div class="row g-3 mt-1 mb-5">
            <AdFormatCard
                class="col-sm-12 col-md-6 col-lg-3"
                v-for="f in formats"
                :key="f.id"
                :value="f.id"
                :title="f.title"
                :width="f.width"
                :height="f.height"
                :subtitle="f.subtitle"
                :price="f.price"
                :selected="selectedId === f.id"
                @select="setSelectedId"
            />
        </div>
    </section>

    <section>
        <form ref="formRef" class="contact-form needs-validation" @submit.prevent="submitForm" novalidate>
            <div class="row mt-4 mb-6">
                <div class="col-12">
                    <strong v-if="selectedId === 'newsletter'">Ausgewähltes Format: Newsletter</strong>
                    <strong v-else-if="selectedFormat">Ausgewähltes Format: {{ selectedFormat.title }} <span v-if="selectedFormat.subtitle !== ''">| {{ selectedFormat.subtitle }}</span></strong>
                    <strong class="text-red" v-else>Bitte Format auswählen!</strong>
                </div>
            </div>

            <div class="row">
                <h4>Gewünschte Ausgabe/n</h4>
                <div class="col-auto d-flex flex-wrap">
                    <div class="form-check me-5">
                        <input
                            id="selectAusgabenYearP"
                            v-model="yearAusgabenSelected"
                            class="form-check-input"
                            type="checkbox"
                        />
                        <label class="form-check-label" for="selectAusgabenYearP">Nächsten 12 Ausgaben</label>
                    </div>
                    <div class="form-check">
                        <input
                            id="selectAusgabenHalfyearP"
                            v-model="halfyearAusgabenSelected"
                            class="form-check-input"
                            type="checkbox"
                        />
                        <label class="form-check-label" for="selectAusgabenHalfyearP">Nächsten 6 Ausgaben</label>
                    </div>
                </div>
                <div v-if="errors.ausgabe && (showErrors || touched.ausgabe)" class="col-12">
                    <div class="text-danger">{{ errors.ausgabe }}</div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-12">
                    <hr class="mt-1 mb-4">
                </div>
            </div>
            <div v-if="ausgaben.length" class="row mb-5">
                <div
                    v-for="(ausgabe, optionIndex) in ausgaben"
                    :key="ausgabe.id"
                    class="col-12 col-md-4"
                >
                    <div class="form-check">
                        <input
                            :id="`privat-ausgabe-${optionIndex}`"
                            v-model="ausgabe.selected"
                            class="form-check-input"
                            type="checkbox"
                            name="ausgabe"
                            :value="ausgabe.id"
                            @change="setTouched('ausgabe')"
                        />
                        <label
                            class="form-check-label"
                            :for="`privat-ausgabe-${optionIndex}`"
                        >
                            {{ ausgabe.label }}
                        </label>
                    </div>
                </div>
            </div>
            <div v-else class="mb-5">
                <p class="mb-0">Ausgaben werden geladen…</p>
            </div>

            <div class="row gx-4">
                <hr class="mb-2">
                <div class="col-md-12 col-lg-6">
                    <div class="form-floating mb-4">
                        <input
                        type="text"
                        name="kundennummer"
                        class="form-control"
                        placeholder="Kundennummer"
                        v-model="form.kundennummer"
                        />
                        <label>Kundennummer (falls vorhanden)</label>
                    </div>
                </div>
                <div class="col-lg-6"></div>
                <div class="col-md-12 col-lg-6">
                    <div class="form-floating mb-4">
                        <input
                        type="text"
                        name="vorname"
                        class="form-control"
                        :class="{ 'is-invalid': errors.vorname && (showErrors || touched.vorname) }"
                        placeholder="Vorname"
                        required
                        v-model="form.vorname"
                        @blur="setTouched('vorname')"
                        />
                        <label>Vorname *</label>
                        <div v-if="errors.vorname && (showErrors || touched.vorname)" class="invalid-feedback">{{ errors.vorname }}</div>
                    </div>
                </div>

                <div class="col-md-12 col-lg-6">
                    <div class="form-floating mb-4">
                        <input
                        type="text"
                        name="nachname"
                        class="form-control"
                        :class="{ 'is-invalid': errors.nachname && (showErrors || touched.nachname) }"
                        placeholder="Nachname"
                        required
                        v-model="form.nachname"
                        @blur="setTouched('nachname')"
                        />
                        <label>Nachname *</label>
                        <div v-if="errors.nachname && (showErrors || touched.nachname)" class="invalid-feedback">{{ errors.nachname }}</div>
                    </div>
                </div>

                <div class="col-12 col-md-10">
                    <div class="form-floating mb-4">
                        <input
                        type="text"
                        name="strasse"
                        class="form-control"
                        :class="{ 'is-invalid': errors.strasse && (showErrors || touched.strasse) }"
                        placeholder="Straße"
                        required
                        v-model="form.strasse"
                        @blur="setTouched('strasse')"
                        />
                        <label>Straße *</label>
                        <div v-if="errors.strasse && (showErrors || touched.strasse)" class="invalid-feedback">{{ errors.strasse }}</div>
                    </div>
                </div>
                <div class="col-12 col-md-2">
                    <div class="form-floating mb-4">
                        <input
                        type="text"
                        name="hausnr"
                        class="form-control"
                        :class="{ 'is-invalid': errors.hausnr && (showErrors || touched.hausnr) }"
                        placeholder="Hausnr."
                        required
                        v-model="form.hausnr"
                        @blur="setTouched('hausnr')"
                        />
                        <label>Hausnr. *</label>
                        <div v-if="errors.hausnr && (showErrors || touched.hausnr)" class="invalid-feedback">{{ errors.hausnr }}</div>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="form-floating mb-4">
                        <input
                        type="text"
                        name="plz"
                        class="form-control"
                        :class="{ 'is-invalid': errors.plz && (showErrors || touched.plz) }"
                        placeholder="PLZ"
                        required
                        v-model="form.plz"
                        @blur="setTouched('plz')"
                        />
                        <label>PLZ *</label>
                        <div v-if="errors.plz && (showErrors || touched.plz)" class="invalid-feedback">{{ errors.plz }}</div>
                    </div>
                </div>
                <div class="col-12 col-md-8">
                    <div class="form-floating mb-4">
                        <input
                        type="text"
                        name="ort"
                        class="form-control"
                        :class="{ 'is-invalid': errors.ort && (showErrors || touched.ort) }"
                        placeholder="Ort"
                        required
                        v-model="form.ort"
                        @blur="setTouched('ort')"
                        />
                        <label>Ort *</label>
                        <div v-if="errors.ort && (showErrors || touched.ort)" class="invalid-feedback">{{ errors.ort }}</div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-floating mb-4">
                        <input
                        type="email"
                        name="email"
                        class="form-control"
                        :class="{ 'is-invalid': errors.email && (showErrors || touched.email) }"
                        placeholder="Email"
                        required
                        v-model="form.email"
                        @blur="setTouched('email')"
                        />
                        <label>Email *</label>
                        <div v-if="errors.email && (showErrors || touched.email)" class="invalid-feedback">{{ errors.email }}</div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-floating mb-4">
                        <input
                        type="tel"
                        name="telefon"
                        class="form-control"
                        :class="{ 'is-invalid': errors.telefon && (showErrors || touched.telefon) }"
                        placeholder="Telefon"
                        required
                        v-model="form.telefon"
                        @blur="setTouched('telefon')"
                        />
                        <label>Telefon *</label>
                        <div v-if="errors.telefon && (showErrors || touched.telefon)" class="invalid-feedback">{{ errors.telefon }}</div>
                    </div>
                </div>
                <hr class="mb-2">
                <div class="col-md-6">
                    <div class="form-floating mb-4">
                        <input
                        type="text"
                        name="uebernahme"
                        class="form-control"
                        :class="{ 'is-invalid': errors.uebernahme && (showErrors || touched.uebernahme) }"
                        placeholder="Übernahme aus"
                        required
                        v-model="form.uebernahme"
                        @blur="setTouched('uebernahme')"
                        />
                        <label>Übernahme aus</label>
                        <div v-if="errors.uebernahme && (showErrors || touched.uebernahme)" class="invalid-feedback">{{ errors.uebernahme }}</div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-floating mb-4">
                        <input
                        type="email"
                        name="korrekturabzug"
                        class="form-control"
                        :class="{ 'is-invalid': errors.korrekturabzug && (showErrors || touched.korrekturabzug) }"
                        placeholder="Korrekturabzug an"
                        required
                        v-model="form.korrekturabzug"
                        @blur="setTouched('korrekturabzug')"
                        />
                        <label>Korrekturabzug an (Email) *</label>
                        <div v-if="errors.korrekturabzug && (showErrors || touched.korrekturabzug)" class="invalid-feedback">{{ errors.korrekturabzug }}</div>
                    </div>
                </div>

                <!-- <div class="col-md-6">
                    <FileUpload
                        v-model="uploadedFile"
                        name="vorlage"
                        label="Vorlage (kann nachgereicht werden, max. 10MB)"
                        :accepted-file-types="['image/*', 'application/pdf']"
                        :allow-multiple="false"
                        max-file-size="10MB"
                    />
                </div> -->

                <div class="col-12">
                    <div class="form-floating mb-4">
                        <textarea
                        name="notizen"
                        class="form-control"
                        placeholder="Notizen"
                        v-model="form.notizen"
                        style="height: 134px;"
                        ></textarea>
                        <label>Notizen</label>
                    </div>
                </div>

                <!-- HONEYPOT -->
                <input
                    v-model="honeypot"
                    type="text"
                    name="website"
                    tabindex="-1"
                    autocomplete="off"
                    aria-hidden="true"
                    style="position:absolute; left:-9999px"
                />

                <em class="mb-3">Wir setzen uns bzgl. der Anzeigenvorlage(n) mit Ihnen in Verbindung. Gerne erstellen wir auch für Sie kostenpflichtig individuelle Anzeigenvorlagen.</em>

                <input type="hidden" name="gewinnspiel" value="00_2026" />

                <div class="col-12 justify-content-center mb-3">
                    <button type="submit" class="btn btn-primary rounded-pill btn-send" :disabled="submitting">
                        {{ submitting ? 'Sende...' : 'Absenden' }}
                    </button>
                    <small class="ms-3" v-if="livePreisLoading">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Lädt...</span>
                        </div>
                    </small>
                    <small class="ms-3" v-else>{{ livePreis === 0 ? 'Bitte wählen Sie ein Format aus' : `${livePreis} € inkl. MwSt.` }}</small>
                </div>
            </div>
        </form>

        <div class="messages">
            <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
            <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import AdFormatCard from '@/components/forms/anzeigen/AdFormatCard.vue'
import { getPreisinfos, sendBestellung, getLivePreis } from '@/services/AnzeigeService.js'
import { useAnzeigeForm } from '@/composables/useFormHandling.js'
import { privat as formats } from './anzeigenFormate'

const honeypot = ref("")
const startTime = Date.now()
const config = useRuntimeConfig()

const selectedId = ref("")
const ausgaben = ref([])

onMounted(async () => {
    const res = await getPreisinfos(config.public.publicationId)
    ausgaben.value = res.ausgabenliste.map(ausgabe => ({ ...ausgabe, selected: false }))
})

const yearAusgabenSelected = computed({
    get: () => ausgaben.value.length >= 12
        && ausgaben.value.slice(0, 12).every(ausgabe => ausgabe.selected),
    set: selected => ausgaben.value.slice(0, 12).forEach(ausgabe => {
        ausgabe.selected = selected
    }),
})

const halfyearAusgabenSelected = computed({
    get: () => !yearAusgabenSelected.value
        && ausgaben.value.length >= 6
        && ausgaben.value.slice(0, 6).every(ausgabe => ausgabe.selected),
    set: selected => {
        ausgaben.value.slice(0, 6).forEach(ausgabe => {
            ausgabe.selected = selected
        })

        if (selected) {
            ausgaben.value.slice(6, 12).forEach(ausgabe => {
                ausgabe.selected = false
            })
        }
    },
})

function setSelectedId(id) {
  selectedId.value = id
}

const selectedFormat = computed(() => {
    let format = formats.find(f => f.id === selectedId.value)
    return format ? format : null
})

// const uploadedFile = ref(null) // TODO

const {
    form,
    errors,
    touched,
    successMessage,
    errorMessage,
    submitting,
    showErrors,
    formRef,
    setTouched,
    submitForm,
} = useAnzeigeForm({
    initialValues: {
        ausgabe: [],
        vorname: '',
        nachname: '',
        kundennummer: '',
        strasse: '',
        hausnr: '',
        plz: '',
        ort: '',
        telefon: '',
        email: '',
        uebernahme: '',
        korrekturabzug: '',
        notizen: '',
        vorlage: '',
        format: '',
    },
    selectedId,
    honeypot,
    startTime,
    requiredFields: {
        vorname: 'Bitte geben Sie Ihren Vornamen an.',
        nachname: 'Bitte geben Sie Ihren Nachnamen an.',
        strasse: 'Bitte geben Sie Ihre Straße an.',
        hausnr: 'Bitte geben Sie Ihre Hausnummer an.',
        plz: 'Bitte geben Sie Ihre Postleitzahl an.',
        ort: 'Bitte geben Sie Ihren Ort an.',
        telefon: 'Bitte geben Sie Ihre Telefonnummer an.',
        korrekturabzug: 'Bitte geben Sie eine Email für den Korrekturabzug an.',
    },
    validateAdditional: ({ errors }) => {
        if (!ausgaben.value.some(ausgabe => ausgabe.selected)) {
            errors.ausgabe = 'Bitte wählen Sie mindestens eine Ausgabe aus.'
        }
    },
    emailFields: {
        email: 'Bitte geben Sie eine gültige Email-Adresse an.',
    },
    onSubmit: async ({ form, selectedId }) => {
        const selectedAusgaben = ausgaben.value
            .filter(ausgabe => ausgabe.selected)
            .map(ausgabe => ausgabe.id)

        await sendBestellung(
            form.kundennummer,
            selectedAusgaben,
            form.newsletter ? 'newsletter' : selectedId,
            'privatpreis',
            null,
            form.uebernahme,
            form.korrekturabzug,
            form.notizen,
            {
                vorname: form.vorname,
                name: form.nachname,
                strasse: form.strasse,
                nr: form.hausnr,
                plz: form.plz,
                ort: form.ort,
                land: 'DE',
                zusatz: null,
                telefon: form.telefon,
                email: form.email,
            },
            config.public.publicationId,
        )
    },
    successText: 'Erfolgreich abgesendet! Ihre Anfrage wird schnellstmöglich bearbeitet.',
})

// ### LIVE-PREIS ###
let timer = null
const livePreis = ref(0)
const livePreisLoading = ref(false)
watch([form, selectedId], () => {
    if (selectedId.value) {
        livePreisLoading.value = true
        clearTimeout(timer)
        timer = setTimeout(() => {
            getLivePreis(selectedId.value, "privatpreis", false, form.newsletter, config.public.publicationId).then(res => {
                livePreis.value = res.summe_netto
            })
        }, 2000)
    } else livePreis.value = 0
    livePreisLoading.value = false
}, { deep: true })

</script>