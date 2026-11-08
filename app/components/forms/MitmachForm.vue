<template>
  <div class="mitmach-formular">
    <form ref="formRef" class="contact-form needs-validation" @submit.prevent="submitForm" novalidate>
      <div class="row gx-4">
        <div class="col-md-6">
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

        <div class="col-md-6">
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

        <div class="col-lg-6 col-sm-12">
          <div class="form-floating mb-4">
            <input
              type="text"
              name="strasse"
              class="form-control"
              :class="{ 'is-invalid': errors.strasse && (showErrors || touched.strasse) }"
              placeholder="Strasse"
              required
              v-model="form.strasse"
              @blur="setTouched('strasse')"
            />
            <label>Straße und Hausnr. *</label>
            <div v-if="errors.strasse && (showErrors || touched.strasse)" class="invalid-feedback">{{ errors.strasse }}</div>
          </div>
        </div>

        <div class="col-lg-3 col-sm-12">
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

        <div class="col-lg-3 col-sm-12">
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

        <div class="col-12 mb-4">
          <h4>Paket auswählen</h4>
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div class="form-check" v-for="paket in pakete1">
                <input class="form-check-input" type="checkbox" v-model="paket.chosen" :id="paket.label">
                <label class="form-check-label" :for="paket.label">{{ paket.label }}</label>
              </div>
            </div>
            <div class="col-lg-9 col-md-6 col-sm-12">
              <div class="form-check" v-for="paket in pakete2">
                <input class="form-check-input" type="checkbox" v-model="paket.chosen" :id="paket.label">
                <label class="form-check-label" :for="paket.label">{{ paket.label }}</label>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12">
          <div class="form-floating mb-4">
            <textarea
              name="bemerkung"
              class="form-control"
              placeholder="Bemerkung (optional)"
              style="height: 150px"
              v-model="form.bemerkung"
            ></textarea>
            <label>Bemerkung</label>
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

        <div class="col-12">
          <button type="submit" class="btn btn-primary rounded-pill btn-send mb-3" :disabled="submitting">
            {{ submitting ? 'Sende...' : 'Absenden' }}
          </button>
        </div>
      </div>

      <div class="messages">
        <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
        <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
      </div>

    </form>
  </div>
</template>

<script setup>
import { sendMitmachen } from '@/services/MailService'
import { computed, reactive, ref } from 'vue'

const formRef = ref(null)
const submitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const honeypot = ref("")
const startTime = Date.now()

const pakete1 = reactive([
  {
    label: "Social Media",
    chosen: false,
  },
  {
    label: "Newsletter",
    chosen: false,
  },
  {
    label: "Veranstaltungskalender",
    chosen: false,
  },
  {
    label: "Veranstaltungsteilnahme",
    chosen: false,
  },
  {
    label: "Abobetreuung",
    chosen: false,
  },
  {
    label: "Heftverteilung",
    chosen: false,
  },
])

const pakete2 = reactive([
  {
    label: "Recherche",
    chosen: false,
  },
  {
    label: "Redaktion",
    chosen: false,
  },
  {
    label: "Fotos",
    chosen: false,
  },
  {
    label: "Printausgabe",
    chosen: false,
  },
  {
    label: "Anzeigenverkauf, Social-Gamification und Mitmachaktionen",
    chosen: false,
  },
])

const chosenPakete = computed(() => {
  const chosenPakete1 = pakete1.filter((p1) => p1.chosen === true)
  const chosenPakete2 = pakete2.filter((p2) => p2.chosen === true)
  return [ ...chosenPakete1, ...chosenPakete2 ]
})

const form = reactive({
  vorname: '',
  nachname: '',
  email: '',
  telefon: '',
  ort: '',
  strasse: '',
  plz: '',
  bemerkung: '',
})

const errors = reactive({
  vorname: '',
  nachname: '',
  email: '',
  telefon: '',
  ort: '',
  strasse: '',
  plz: '',
})

const touched = reactive({
  vorname: false,
  nachname: false,
  email: false,
  telefon: false,
  ort: false,
  strasse: false,
  plz: false,
})

const showErrors = ref(false)

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate() {
  Object.keys(errors).forEach((key) => (errors[key] = ''))

  let ok = true
  if (!form.vorname || !form.vorname.trim()) {
    errors.vorname = 'Bitte Vornamen angeben.'
    ok = false
  }
  if (!form.nachname || !form.nachname.trim()) {
    errors.nachname = 'Bitte Nachnamen angeben.'
    ok = false
  }
  if (!form.email || !emailRe.test(form.email)) {
    errors.email = 'Bitte geben Sie eine gültige Email an.'
    ok = false
  }
  if (!form.telefon || !form.telefon.trim()) {
    errors.telefon = 'Bitte Telefonnummer angeben.'
    ok = false
  }
  if (!form.ort || !form.ort.trim()) {
    errors.ort = 'Bitte Ort angeben.'
    ok = false
  }
  if (!form.strasse || !form.strasse.trim()) {
    errors.ort = 'Bitte Straße und Hausnummer angeben.'
    ok = false
  }
  if (!form.plz || !form.plz.trim()) {
    errors.plz = 'Bitte PLZ angeben.'
    ok = false
  }

  return ok
}

function setTouched(field) {
  if (field in touched) {
    touched[field] = true
  }
}

function resetForm() {
  form.vorname = ''
  form.nachname = ''
  form.email = ''
  form.telefon = ''
  form.ort = ''
  form.strasse = ''
  form.plz = ''
  form.bemerkung = ''
}

async function submitForm() {
  successMessage.value = ''
  errorMessage.value = ''
  showErrors.value = false

  if (honeypot.value || Date.now() - startTime < 3000) {
    return
  }

  if (!validate()) {
    showErrors.value = true
    errorMessage.value = 'Bitte füllen Sie alle Pflichtfelder korrekt aus.'
    Object.keys(touched).forEach((key) => {
      touched[key] = true
    })
    const firstError = Object.keys(errors).find((key) => errors[key])
    if (firstError && formRef.value) {
      const el = formRef.value.querySelector(`[name="${firstError}"]`)
      el?.focus()
    }
    return
  }

  submitting.value = true
  try {
    await sendMitmachen(form.vorname, form.nachname, form.email, form.telefon, form.strasse, form.plz, form.ort, chosenPakete, form.bemerkung)

    successMessage.value = 'Erfolgreich eingetragen!'
    resetForm()
  } catch (e) {
    errorMessage.value = 'Beim Senden des Formulars ist ein Fehler aufgetreten.'
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.mitmach-formular {
  width: 100%;
}

.messages {
  margin-bottom: 1rem;
}

.form-control.is-invalid,
.form-select.is-invalid,
textarea.is-invalid {
  border-color: #dc3545;
}

.invalid-feedback {
  display: block;
}
</style>
