<template>
  <div class="gewinnspiel-formular">
    <form ref="formRef" class="contact-form needs-validation" @submit.prevent="submitForm" novalidate>
      <div class="row gx-4">
        <!-- <div class="col-12 mb-4">
          <div class="form-check">
            <label for="gewinnspiel-1" class="form-check-label">Online-Gewinnspiel</label>
            <input id="gewinnspiel-1" type="checkbox" class="form-check-input">
          </div>
        </div> -->
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

        <div class="col-12">
          <div class="form-floating mb-4">
            <textarea
              name="loesung"
              class="form-control"
              :class="{ 'is-invalid': errors.loesung && (showErrors || touched.loesung) }"
              placeholder="Lösung"
              v-model="form.loesung"
              @blur="setTouched('loesung')"
            ></textarea>
            <label>Lösung *</label>
            <div v-if="errors.loesung && (showErrors || touched.loesung)" class="invalid-feedback">{{ errors.loesung }}</div>
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

        <div class="col-12">
            <small>
                <strong>Teilnahmebedingungen</strong><br/>
                Teilnahmeberechtigt sind nur Personen unter Angabe ihres Namens, des Wohnortes und der E-Mail-Adresse. Jede Person kann nur einmal an einem Gewinnspiel teilnehmen. Werden Gewinne nicht innerhalb von drei Monaten nach Bekanntgabe abgeholt, verfällt der Gewinnanspruch und die Gewinne können erneut verlost werden.<br/>
Datenschutz: Die erfassten Adressen werden bei uns gespeichert und nicht an Dritte weitergegeben. Sie erhalten von uns nur Informationen, wenn Sie dem eindeutig zustimmen. Eine vollständige Löschung der Daten erfolgt umgehend, sobald Sie uns darüber schriftlich, über die Website oder per E-Mail informieren.
            </small>
        </div>
      </div>
    </form>

    <div class="messages">
      <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
      <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script setup>
import { sendLoesung } from '@/services/GewinnspielService'
import { ref } from 'vue'
import { useAnzeigeForm } from '@/composables/useFormHandling.js'

const honeypot = ref("")
const startTime = Date.now()

const {
  form,
  errors,
  touched,
  showErrors,
  formRef,
  submitting,
  successMessage,
  errorMessage,
  setTouched,
  submitForm,
} = useAnzeigeForm({
  initialValues: {
    vorname: '',
    nachname: '',
    email: '',
    telefon: '',
    strasse: '',
    hausnr: '',
    plz: '',
    ort: '',
    loesung: '',
  },
  honeypot,
  startTime,
  requiredFields: {
    vorname: 'Bitte Vornamen angeben.',
    nachname: 'Bitte Nachnamen angeben.',
    telefon: 'Bitte Telefonnummer angeben.',
    strasse: 'Bitte Straße angeben.',
    hausnr: 'Bitte Hausnummer angeben.',
    plz: 'Bitte PLZ angeben.',
    ort: 'Bitte Ort angeben.',
    loesung: 'Bitte Lösung angeben.',
  },
  emailFields: {
    email: 'Bitte geben Sie eine gültige Email an.',
  },
  onSubmit: async ({ form }) => {
    await sendLoesung(
      { anrede: null, titel: null, vorname: form.vorname, name: form.nachname, strasse: form.strasse, nr: form.hausnr, zusatz: null, plz: form.plz, ort: form.ort, land: "DE", email: form.email, telefon: form.telefon },
      [ { gewinnspiel_id: 2, antwort: form.loesung } ]
    )
  },
  onError: (error) => console.error(error),
  successText: 'Erfolgreich eingetragen!',
})
</script>

<style scoped>
.gewinnspiel-formular {
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
