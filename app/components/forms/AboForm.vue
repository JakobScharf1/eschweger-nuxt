<template>
  <div class="w-100">
    <h5 class="display-5">Jetzt Abo bestellen!</h5>
    <small>Das Startdatum des Abonnements ist der erste Tag des nächsten Monats.</small>
    <form ref="formRef" class="contact-form needs-validation" @submit.prevent="submitForm" novalidate>

      <div class="row gx-4">
        <div class="col-12 mb-4">
          <div class="form-check">
            <input id="ist-geschenk" class="form-check-input" type="checkbox" v-model="form.ist_geschenk">
            <label class="form-check-label" for="ist-geschenk">Dieses Abo ist ein Geschenk</label>
          </div>
        </div>

        <div class="col-12 col-lg-6 mb-3">
            <div class="form-floating mb-4">
                <select id="chosen-interval" name="chosenInterval" class="form-select" v-model="selectedActive" required>
                    <option value="halbjahr">Halbjahres-Abo</option>
                    <option value="ganzjahr">Ganzjahres-Abo</option>
                </select>
                <label for="chosen-interval">Intervall *</label>
            </div>
        </div>
        <div class="col-12 col-lg-6 mb-3">
          <div class="form-floating mb-4">
            <select
              id="chosen-abo"
              name="chosenAbo"
              class="form-select"
              :class="{ 'is-invalid': errors.chosenAbo && showErrors }"
              v-model="selectedAbo"
              required
            >
              <option value="" disabled>Bitte Abo auswählen</option>
              <option v-for="abo in props.abos" :key="abo.id" :value="abo.id">
                {{ abo.title }} – {{ props.active === 'ganzjahr' ? abo.price.ganz : abo.price.halb }} € / {{ props.active === 'ganzjahr' ? 'Jahr' : '6 Monate' }}
              </option>
            </select>
            <label for="chosen-abo">Abo *</label>
            <div v-if="errors.chosenAbo && showErrors" class="invalid-feedback">
              {{ errors.chosenAbo }}
            </div>
          </div>
        </div>

        <div class="col-12" v-if="form.ist_geschenk">
          <h4 class="mb-4">Ihre Adresse (Rechnung)</h4>
        </div>

        <div
          v-for="field in [
            { key: 'name', label: 'Name', type: 'text', width: 'col-md-6' },
            { key: 'email', label: 'E-Mail', type: 'email', width: 'col-md-6' },
            { key: 'strasse', label: 'Straße', type: 'text', width: 'col-md-4' },
            { key: 'nr', label: 'Hausnummer', type: 'text', width: 'col-md-2' },
            { key: 'plz', label: 'PLZ', type: 'text', width: 'col-md-3' },
            { key: 'ort', label: 'Ort', type: 'text', width: 'col-md-3' },
          ]"
          :key="`zahler-${field.key}`"
          :class="field.width"
        >
          <div class="form-floating mb-4">
            <input
              :type="field.type"
              :name="`zahler.${field.key}`"
              class="form-control"
              :class="{ 'is-invalid': errors.zahler[field.key] && showErrors }"
              :placeholder="field.label"
              required
              v-model="form.zahler[field.key]"
            />
            <label>{{ field.label }} *</label>
            <div v-if="errors.zahler[field.key] && showErrors" class="invalid-feedback">
              {{ errors.zahler[field.key] }}
            </div>
          </div>
        </div>

        <template v-if="form.ist_geschenk">
          <div class="col-12">
            <h4 class="mb-4">Adresse des Empfängers</h4>
          </div>

          <div
            v-for="field in [
              { key: 'name', label: 'Name', type: 'text', width: 'col-md-6' },
              { key: 'email', label: 'E-Mail', type: 'email', width: 'col-md-6' },
              { key: 'strasse', label: 'Straße', type: 'text', width: 'col-md-4' },
              { key: 'nr', label: 'Hausnummer', type: 'text', width: 'col-md-2' },
              { key: 'plz', label: 'PLZ', type: 'text', width: 'col-md-3' },
              { key: 'ort', label: 'Ort', type: 'text', width: 'col-md-3' },
            ]"
            :key="`empfaenger-${field.key}`"
            :class="field.width"
          >
            <div class="form-floating mb-4">
              <input
                :type="field.type"
                :name="`empfaenger.${field.key}`"
                class="form-control"
                :class="{ 'is-invalid': errors.empfaenger[field.key] && showErrors }"
                :placeholder="field.label"
                required
                v-model="form.empfaenger[field.key]"
              />
              <label>{{ field.label }} *</label>
              <div v-if="errors.empfaenger[field.key] && showErrors" class="invalid-feedback">
                {{ errors.empfaenger[field.key] }}
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="form-floating mb-4">
              <textarea
                name="grussnachricht"
                class="form-control"
                :class="{ 'is-invalid': errors.grussnachricht && showErrors }"
                placeholder="Grußnachricht (optional)"
                style="height: 150px"
                v-model="form.grussnachricht"
              ></textarea>
              <label>Grußnachricht (optional)</label>
              <div v-if="errors.grussnachricht && showErrors" class="invalid-feedback">
                {{ errors.grussnachricht }}
              </div>
            </div>
          </div>
        </template>

        <div class="col-12 mt-3">
          <div class="form-floating mb-4">
            <textarea
              name="notiz_vom_besteller"
              class="form-control"
              :class="{ 'is-invalid': errors.notiz_vom_besteller && showErrors }"
              placeholder="Notiz vom Besteller (optional)"
              style="height: 50px"
              v-model="form.notiz_vom_besteller"
            ></textarea>
            <label>Notizen</label>
            <div v-if="errors.notiz_vom_besteller && showErrors" class="invalid-feedback">
              {{ errors.notiz_vom_besteller }}
            </div>
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

      <div class="messages mt-2">
        <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
        <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { postAbo } from '@/services/AboService.js'
import { computed, ref } from 'vue'
import { useAnzeigeForm } from '@/composables/useFormHandling.js'

const honeypot = ref("")
const startTime = Date.now()
const config = useRuntimeConfig()

const props = defineProps({
    active: { type: String, required: true },
    chosenAbo: { type: String, default: null },
    abos: { type: Array, required: true },
})
const emit = defineEmits(['update:active', 'update:chosenAbo'])
const selectedActive = computed({
  get: () => props.active,
  set: (value) => emit('update:active', value),
})
const selectedAbo = computed({
  get: () => props.chosenAbo ?? '',
  set: (value) => {
    errors.chosenAbo = ''
    emit('update:chosenAbo', value || null)
  },
})

const startAm = computed(() => {
  const today = new Date()
  return new Date(today.getFullYear(), today.getMonth() + 1, 1)
    .toISOString()
    .slice(0, 10)
})

const {
  form,
  errors,
  showErrors,
  formRef,
  submitting,
  successMessage,
  errorMessage,
  submitForm,
} = useAnzeigeForm({
  initialValues: {
    ist_geschenk: false,
    start_am: startAm.value,
    empfaenger: {
      name: '',
      strasse: '',
      nr: '',
      plz: '',
      ort: '',
      land: 'DE',
      email: '',
    },
    zahler: {
      name: '',
      strasse: '',
      nr: '',
      plz: '',
      ort: '',
      land: 'DE',
      email: '',
    },
    grussnachricht: '',
    notiz_vom_besteller: '',
  },
  initialErrors: {
    chosenAbo: '',
    empfaenger: {
      name: '',
      strasse: '',
      nr: '',
      plz: '',
      ort: '',
      email: '',
    },
    zahler: {
      name: '',
      strasse: '',
      nr: '',
      plz: '',
      ort: '',
      email: '',
    },
    grussnachricht: '',
    notiz_vom_besteller: '',
  },
  honeypot,
  startTime,
  validateForm: ({ form, errors }) => {
    const fields = ['name', 'strasse', 'nr', 'plz', 'ort', 'email']
    const fieldLabels = {
      name: 'Namen',
      strasse: 'Straße',
      nr: 'Hausnummer',
      plz: 'PLZ',
      ort: 'Ort',
      email: 'E-Mail-Adresse',
    }
    const addressesToValidate = form.ist_geschenk ? ['empfaenger', 'zahler'] : ['zahler']

    for (const address of addressesToValidate) {
      for (const field of fields) {
        const value = form[address][field].trim()
        if (!value) {
          errors[address][field] = `Bitte geben Sie ${fieldLabels[field]} an.`
        } else if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errors[address][field] = 'Bitte geben Sie eine gültige E-Mail-Adresse an.'
        }
      }
    }

    if (!props.chosenAbo) {
      errors.chosenAbo = 'Bitte wählen Sie ein Abo aus.'
    }
  },
  onSubmit: async ({ form }) => {
    if (!form.ist_geschenk) {
      Object.assign(form.empfaenger, form.zahler)
    }
    await postAbo(props.active, props.chosenAbo, { ...form }, config.public.publicationId)
  },
  onError: (error) => console.error(error),
  successText: 'Erfolgreich gesendet! Bitte überprüfen Sie Ihre E-Mails, um die Bestellung zu bestätigen.',
})
</script>

<style scoped>
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
