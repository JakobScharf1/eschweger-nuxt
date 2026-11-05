<template>
  <div class="foerder-form">
    <form ref="formRef" class="contact-form needs-validation" @submit.prevent="submitForm" novalidate>
      <div class="row gx-4">
        <div class="col-md-6">
          <div class="form-floating mb-4">
            <input
              type="number"
              name="spendenbetrag"
              class="form-control"
              :class="{ 'is-invalid': errors.spendenbetrag && (showErrors || touched.spendenbetrag) }"
              placeholder="Spendenbetrag"
              :min="minAmount ?? 12"
              step="0.01"
              required
              v-model.number="form.spendenbetrag"
              @blur="setTouched('spendenbetrag')"
            />
            <label>Spendenbetrag *</label>
            <div class="form-text text-muted">{{ amountInfo }}</div>
            <div v-if="errors.spendenbetrag && (showErrors || touched.spendenbetrag)" class="invalid-feedback">{{ errors.spendenbetrag }}</div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-floating mb-4">
            <select
              name="personentyp"
              class="form-select"
              :class="{ 'is-invalid': errors.personentyp && (showErrors || touched.personentyp) }"
              required
              v-model="form.personentyp"
              @blur="setTouched('personentyp')"
            >
              <option value="" disabled>Bitte wählen</option>
              <option value="Bürger:in">Bürger:in</option>
              <option value="Gewerbetreibende:r">Gewerbetreibende:r</option>
            </select>
            <label>Ich bin *</label>
            <div v-if="errors.personentyp && (showErrors || touched.personentyp)" class="invalid-feedback">{{ errors.personentyp }}</div>
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
              type="text"
              name="name"
              class="form-control"
              :class="{ 'is-invalid': errors.name && (showErrors || touched.name) }"
              placeholder="Name"
              required
              v-model="form.name"
              @blur="setTouched('name')"
            />
            <label>Name *</label>
            <div v-if="errors.name && (showErrors || touched.name)" class="invalid-feedback">{{ errors.name }}</div>
          </div>
        </div>

        <div class="col-md-6">
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

        <div class="col-md-6">
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

        <div class="col-md-6">
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

        <div class="col-md-6">
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
            <select
              name="zahlart"
              class="form-select"
              :class="{ 'is-invalid': errors.zahlart && (showErrors || touched.zahlart) }"
              required
              v-model="form.zahlart"
              @blur="setTouched('zahlart')"
            >
              <option value="" disabled>Bitte wählen</option>
              <option value="Rechnung">Rechnung</option>
              <option value="PayPal">PayPal</option>
              <option value="Überweisung">Überweisung</option>
            </select>
            <label>Zahlart *</label>
            <div class="form-text text-muted" v-if="form.zahlart === 'PayPal'">
                <a href="https://paypal.me/brombeerland" target="_blank">
                    Unser Paypal-Link
                </a>
                 / @brombeerland
            </div>
            <div class="form-text text-muted" v-if="form.zahlart === 'Überweisung'">
                BrombeerLand gUG, FINOM PAYMENTS BANK, BIC: FNOMDEB2<br/>
                IBAN: DE09 1001 8000 0626 0105 33
                {{ form.personentyp === 'Bürger:in' ? "Verwendungszweck: Ihr Name" : "Verwendungszweck: Ihr Name und Verein oder Gewerbe" }}
            </div>
            <div v-if="errors.zahlart && (showErrors || touched.zahlart)" class="invalid-feedback">{{ errors.zahlart }}</div>
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
    </form>

    <div class="messages">
      <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
      <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script setup>
import { sendFoerder } from '@/services/MailService'
import { computed, ref } from 'vue'
import { useAnzeigeForm } from '@/composables/useFormHandling.js'

const honeypot = ref("")
const startTime = Date.now()
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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
    spendenbetrag: null,
    personentyp: '',
    email: '',
    name: '',
    strasse: '',
    hausnr: '',
    plz: '',
    ort: '',
    zahlart: '',
  },
  honeypot,
  startTime,
  validateForm: ({ form, errors }) => {
    const minAmount = form.personentyp === 'Bürger:in'
      ? 12
      : form.personentyp === 'Gewerbetreibende:r' ? 36 : undefined

    if (!form.spendenbetrag || (minAmount &&form.spendenbetrag < minAmount)) {
      errors.spendenbetrag = `Bitte einen gültigen Spendenbetrag angeben.`
    }
    if (!form.personentyp) {
      errors.personentyp = 'Bitte Personentyp auswählen.'
    }
    if (!form.email || !emailRe.test(form.email)) {
      errors.email = 'Bitte geben Sie eine gültige Email an.'
    }
    if (!form.name || !form.name.trim()) {
      errors.name = 'Bitte Namen angeben.'
    }
    if (!form.strasse || !form.strasse.trim()) {
      errors.strasse = 'Bitte Straße angeben.'
    }
    if (!form.hausnr || !form.hausnr.trim()) {
      errors.hausnr = 'Bitte Hausnummer angeben.'
    }
    if (!form.plz || !form.plz.trim()) {
      errors.plz = 'Bitte PLZ angeben.'
    }
    if (!form.ort || !form.ort.trim()) {
      errors.ort = 'Bitte Ort angeben.'
    }
    if (!form.zahlart) {
      errors.zahlart = 'Bitte Zahlart auswählen.'
    }
  },
  onSubmit: async ({ form }) => {
    await sendFoerder(form.spendenbetrag, form.personentyp, form.email, form.name, form.strasse, form.plz, form.ort, form.zahlart)
  },
  onError: (error) => console.error(error),
  successText: 'Spende erfolgreich übermittelt.',
})

const minAmount = computed(() => {
  if (form.personentyp === 'Bürger:in') return 12
  if (form.personentyp === 'Gewerbetreibende:r') return 36
  return 1
})

const amountInfo = computed(() => {
  if (form.personentyp === 'Bürger:in') return 'Für Bürger:innen mind. 12 €/Jahr.'
  if (form.personentyp === 'Gewerbetreibende:r') return 'Für Gewerbetreibende mind. 36 €/Jahr.'
  return 'Für Bürger:innen mind. 12 €/Jahr, für Gewerbetreibende mind. 36 €/Jahr.'
})

</script>

<style scoped>
.foerder-form {
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
