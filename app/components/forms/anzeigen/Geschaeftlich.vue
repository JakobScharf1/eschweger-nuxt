<template>    
    <section class="mb-5">
        <strong>Auslage: </strong>{{ infos.auslage }}<br/>
        <strong>Erscheinungsweise: </strong>{{ infos.erscheinungsweise }}<br/>
        <strong>Auflage: </strong>{{ infos.auflage }} Exemplare<br/>
        <strong>Verbreitung: </strong>{{ infos.verbreitung }}<br/>
    </section>

    <template v-if="infos.sonderaktionen.length > 0">
        <div class="alert alert-primary" role="alert" v-for="aktion of infos.sonderaktionen">
            {{ aktion.text }}
        </div>
    </template>

    <section>
        <h2 class="mb-0">Format auswählen</h2>
        <small>Preise exkl. MwSt. - Nur für Gewerbetreibende mit Sitz im Verbreitungsgebiet</small>

        <h3 class="mb-0 mt-3">Anzeigen</h3>
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
            :priceBusiness="f.priceBusiness"
            :selected="selectedId === f.id"
            @select="setSelectedId"
            />
        </div>

        <div class="row">
            <div class="col-md-12 col-lg-6">
                <h3 class="mb-0 mt-3">Gewinnspiele</h3>
                <div class="row g-3 mt-1 mb-5">
                    <AdFormatCard
                    class="col-sm-12 col-md-6"
                    v-for="f in gewinnspiele"
                    :key="f.id"
                    :value="f.id"
                    :title="f.title"
                    :width="f.width"
                    :height="f.height"
                    :subtitle="f.subtitle"
                    :priceBusiness="f.priceBusiness"
                    :selected="selectedId === f.id"
                    @select="setSelectedId"
                    />
                </div>
                <small>Gewinnspiele werden redaktionell gestaltet und setzen die Bereitstellung von mindestens einem Gewinn voraus.</small>
            </div>
            <div class="col-md-12 col-lg-6">
                 <h3 class="mb-0 mt-3">Umschlagseiten</h3>
                <div class="row g-3 mt-1 mb-5">
                    <AdFormatCard
                    class="col-sm-12 col-md-6"
                    v-for="f in umschlagseiten"
                    :key="f.id"
                    :value="f.id"
                    :title="f.title"
                    :width="f.width"
                    :height="f.height"
                    :subtitle="f.subtitle"
                    :priceBusiness="f.priceBusiness"
                    :selected="selectedId === f.id"
                    @select="setSelectedId"
                    />
                </div>
            </div>
        </div>

        <div class="row">
            <div class="mb-5 col-sm-12 col-lg-6">
                <h3 class="mb-0 mt-3">Newsletter</h3>
                <AdFormatCard
                class="mt-3 col-sm-12 col-lg-6"
                newsletter
                title="Newsletter"
                value="newsletter"
                subtitle="Pro 1.000 Abonnenten"
                :price="preise.newsletter.preisPro1000"
                :selected="selectedId === 'newsletter'"
                @select="setSelectedId('newsletter')"
                >
                </AdFormatCard>
                <div class="form-floating mt-2 col-sm-12 col-lg-6" v-if="selectedId === 'newsletter'">
                    <input
                        type="text"
                        name="newsletter-wochen"
                        class="form-control"
                        :class="{ 'is-invalid': errors.newsletter && (showErrors || touched.newsletter) }"
                        placeholder="Newsletter-Werbung in Wochen"
                        v-model="form.newsletter"
                        @blur="setTouched('newsletter')"
                    />
                    <label>Newsletter-Werbung in Wochen *</label>
                    <div v-if="errors.newsletter && (showErrors || touched.newsletter)" class="invalid-feedback">{{ errors.newsletter }}</div>
                </div>
            </div>
            <div class="mb-5 col-sm-12 col-lg-4">
                <h3 class="mb-0 mt-3">Jahresrabatte</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Schaltungen</th>
                            <th>Rückerstattungen</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item of preise.jahresrabatte">
                            <td>{{ item.schaltungen }}</td>
                            <td>{{ item.prozent }} %</td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
                <div class="col-auto d-flex">
                    <div class="form-check me-5">
                        <input v-model="yearAusgabenSelected" id="selectAusgabenYearG" class="form-check-input" type="checkbox" >
                        <label for="selectAusgabenYearG">Nächsten 12 Ausgaben</label>
                    </div>
                    <div class="form-check">
                        <input v-model="halfyearAusgabenSelected" id="selectAusgabenHalfyearG" class="form-check-input" type="checkbox" >
                        <label for="selectAusgabenHalfyearG">Nächsten 6 Ausgaben</label>
                    </div>
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
                            :id="`ausgabe-${optionIndex}`"
                            v-model="ausgabe.selected"
                            class="form-check-input"
                            type="checkbox"
                            :value="ausgabe.id"
                        />
                        <label class="form-check-label" :for="`ausgabe-${optionIndex}`">
                            {{ ausgabe.label }}
                        </label>
                    </div>
                </div>
            </div>
            <div v-else class="mb-5">
                <p class="mb-0">Ausgaben werden geladen…</p>
            </div>

            <div class="row gx-4">
                <div class="col-md-6">
                    <div class="form-floating mb-4">
                        <select class="form-select" id="preiskategorie" v-model="form.kategorie">
                            <option value="ortspreis">Ortspreis</option>
                            <option value="grundpreis">Basispreis</option>
                            <option v-if="selectedFormat && selectedFormat.id.startsWith('1')" value="social_gamification">Social-Gamification</option>
                        </select>
                        <label for="preiskategorie">Preiskategorie</label>
                        <small>Ortspreise gelten nur für Kunden mit Eschweger Postleitzahl</small>
                    </div>
                </div>
                <hr class="mb-2">
                <div class="col-md-12 col-lg-6">
                    <div class="form-floating mb-4">
                        <input
                        type="text"
                        name="kundennummer"
                        class="form-control"
                        placeholder="Kundennummer"
                        required
                        v-model="form.kundennummer"
                        />
                        <label>Kundennummer (falls vorhanden)</label>
                    </div>
                </div>
                <div class="col-md-12 col-lg-6">
                    <div class="form-floating mb-4">
                        <input
                        type="text"
                        name="firma"
                        class="form-control"
                        :class="{ 'is-invalid': errors.firma && (showErrors || touched.firma) }"
                        placeholder="Firma"
                        required
                        v-model="form.firma"
                        @blur="setTouched('firma')"
                        />
                        <label>Firmenname *</label>
                        <div v-if="errors.firma && (showErrors || touched.firma)" class="invalid-feedback">{{ errors.firma }}</div>
                    </div>
                </div>
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

                <div class="col-md-12 col-lg-6">
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

                <div class="col-md-12 col-lg-6">
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
                <div class="col-md-12 col-lg-6">
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
                <div class="col-md-12 col-lg-6">
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
                        <label>Korrekturabzug an (Email)*</label>
                        <div v-if="errors.korrekturabzug && (showErrors || touched.korrekturabzug)" class="invalid-feedback">{{ errors.korrekturabzug }}</div>
                    </div>
                </div>

                <div class="col-12">
                    <div class="form-floating mb-4">
                        <input
                        type="text"
                        name="platzierung"
                        class="form-control"
                        :class="{ 'is-invalid': errors.platzierung && (showErrors || touched.platzierung) }"
                        placeholder="Platzierungswunsch"
                        required
                        v-model="form.platzierung"
                        @blur="setTouched('platzierung')"
                        />
                        <label>Platzierungswunsch (+5% Zuschlag)</label>
                        <div v-if="errors.platzierung && (showErrors || touched.platzierung)" class="invalid-feedback">{{ errors.platzierung }}</div>
                    </div>
                </div>

                <div class="col-md-6">
                    <!-- <FileUpload
                        v-model="uploadedFile"
                        name="vorlage"
                        label="Vorlage (kann nachgereicht werden, max. 10MB)"
                        :accepted-file-types="['image/jpg', 'image/png', 'application/pdf', 'application/octet-stream']"
                        :allow-multiple="false"
                        max-file-size="10MB"
                    /> -->
                </div>

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

                <div class="col-12 justify-content-center mb-3">
                    <button type="submit" class="btn btn-primary rounded-pill btn-send" :disabled="submitting">
                        {{ submitting ? 'Sende...' : 'Absenden' }}
                    </button>
                    <small class="ms-3" v-if="livePreisLoading">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Lädt...</span>
                        </div>
                    </small>
                    <small class="ms-3" v-else>{{ livePreis === 0 ? 'Bitte wählen Sie ein Format aus' : `${livePreis} € exkl. MwSt.` }}</small>
                </div>
            </div>

            <div class="messages">
                <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
                <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
            </div>
        </form>
    </section>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import AdFormatCard from '@/components/forms/anzeigen/AdFormatCard.vue'
import { getPreisinfos, sendBestellung } from '@/services/AnzeigeService'
import { useLivePreis } from './useLivePreis'
import { useAnzeigeForm } from '@/composables/useFormHandling.js'
import { formatsGeschaeftlich as formats, gewinnspiele, umschlagseiten, alleGeschaeftlich as allFormats } from './anzeigenFormate'

const honeypot = ref("")
const startTime = Date.now()
const config = useRuntimeConfig()

// ### METAINFOS ###
const infos = reactive({
    auflage: "",
    erscheinungsweise: "",
    verbreitung: "",
    auslage: "",
    sonderaktionen: []
})

const preise = reactive({
    newsletter: { preisPro1000: 0 },
    platzierungswunsch: { zuschlagProzent: 0, rubriken: [] },
    jahresrabatte: [],
})

const ausgaben = ref([])

function getInfos() {
    getPreisinfos(config.public.publicationId).then((res) => {
        infos.auflage = res.publikation.auflage
        infos.erscheinungsweise = res.publikation.erscheinungsweise
        infos.verbreitung = res.publikation.verbreitung
        infos.auslage = res.publikation.auslage
        preise.newsletter.preisPro1000 = res.newsletter.preis_pro_1000
        preise.platzierungswunsch = res.platzierungswunsch
        preise.jahresrabatte = res.jahresrabatte
        infos.sonderaktionen = res.sonderaktionen
        res.ausgabenliste.forEach((a) => ausgaben.value.push({ ...a, selected: false }))
    })
}

onMounted(() => {
    getInfos()
})

// ### FORM ###
const selectedId = ref("")

// ### Ausgaben ###
const yearAusgabenSelected = computed({
    get: () => ausgaben.value.length >= 12 && ausgaben.value.slice(0, 12).every(ausgabe => ausgabe.selected),
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
    let format = allFormats.find(f => f.id === selectedId.value)
    return format ? format : null
})

// const uploadedFile = ref(null)

const {
    form,
    errors,
    touched,
    successMessage,
    errorMessage,
    submitting,
    showErrors,
    setTouched,
    submitForm,
} = useAnzeigeForm({
    initialValues: {
        ausgabe: [], vorname: '', nachname: '', strasse: '', hausnr: '', plz: '', ort: '',
        telefon: '', email: '', kundennummer: '', uebernahme: '', korrekturabzug: '',
        platzierung: '', notizen: '', format: '', newsletter: '', kategorie: 'ortspreis',
        firma: '',
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
        firma: 'Bitte geben Sie den Firmennamen an.',
        korrekturabzug: 'Bitte geben Sie eine Adresse für den Korrekturabzug an.',
    },
    emailFields: {
        email: 'Bitte geben Sie eine gültige Email-Adresse an.',
        korrekturabzug: 'Bitte geben Sie eine gültige Email-Adresse für den Korrekturabzug an.',
    },
    validateAdditional: ({ form, selectedId, errors }) => {
        if (!ausgaben.value.some(ausgabe => ausgabe.selected)) {
            errors.ausgabe = 'Bitte wählen Sie mindestens eine Ausgabe aus.'
        }

        if (selectedId === 'newsletter' && !form.newsletter) {
            errors.newsletter = 'Bitte geben Sie die Anzahl der Wochen für den Newsletter an.'
        }
    },
    onSubmit: async ({ form, selectedId }) => {
        const selectedAusgaben = ausgaben.value.filter(ausgabe => ausgabe.selected).map(a => a.id)
        await sendBestellung(
            form.kundennummer,
            selectedAusgaben,
            form.newsletter ? 'newsletter' : selectedId,
            form.kategorie,
            form.platzierung,
            form.uebernahme,
            form.korrekturabzug,
            form.notizen,
            {
                firma: form.firma,
                vorname: form.vorname,
                name: form.nachname,
                strasse: form.strasse,
                nr: form.hausnr,
                zusatz: null,
                plz: form.plz,
                ort: form.ort,
                land: 'DE',
                telefon: form.telefon,
                email: form.email,
            },
            config.public.publicationId,
        )
        // if (res.status === 'ok') {
        //     await uploadVorlage(res.bestellung_id, uploadedFile.value[0])
        // }
    },
    successText: 'Erfolgreich abgesendet! Bitte bestätigen Sie Ihre Email-Adresse, damit wir Ihre Anfrage bearbeiten können.',
})

const { livePreis, livePreisLoading } = useLivePreis(form, selectedId, config.public.publicationId)
</script>