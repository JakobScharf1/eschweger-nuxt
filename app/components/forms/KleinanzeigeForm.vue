<template>
  <div class="kleinanzeige-formular">
    <form ref="formRef" class="contact-form needs-validation" @submit.prevent="submitForm" novalidate>
      <div class="row gx-4">
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

        <div class="col-md-8">
          <div class="form-floating mb-4">
            <input
              type="text"
              name="strasse"
              class="form-control"
              :class="{ 'is-invalid': errors.strasse && (showErrors || touched.strasse) }"
              placeholder="Straße und Hausnr."
              required
              v-model="form.strasse"
              @blur="setTouched('strasse')"
            />
            <label>Straße und Hausnr. *</label>
            <div v-if="errors.strasse && (showErrors || touched.strasse)" class="invalid-feedback">{{ errors.strasse }}</div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="form-floating mb-4">
            <input
              type="text"
              name="plz"
              class="form-control"
              :class="{ 'is-invalid': errors.plz && (showErrors || touched.plz) }"
              placeholder="PLZ"
              required
              inputmode="numeric"
              maxlength="5"
              v-model="form.plz"
              @blur="setTouched('plz')"
            />
            <label>PLZ *</label>
            <div v-if="errors.plz && (showErrors || touched.plz)" class="invalid-feedback">{{ errors.plz }}</div>
          </div>
        </div>

        <div class="col-12">
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
              name="rubrik"
              class="form-select"
              :class="{ 'is-invalid': errors.rubrik && (showErrors || touched.rubrik) }"
              required
              v-model="form.rubrik"
              @blur="setTouched('rubrik')"
            >
              <option value="" disabled>Bitte wählen</option>
              <option v-for="option in rubriken" :key="option" :value="option">{{ option }}</option>
            </select>
            <label>Rubrik *</label>
            <div v-if="errors.rubrik && (showErrors || touched.rubrik)" class="invalid-feedback">{{ errors.rubrik }}</div>
          </div>
        </div>

        <div class="col-12">
          <div class="form-floating mb-4">
            <textarea
              name="anzeigentext"
              class="form-control"
              :class="{ 'is-invalid': errors.anzeigentext && (showErrors || touched.anzeigentext) }"
              placeholder="Anzeigentext"
              style="height: 150px"
              required
              v-model="form.anzeigentext"
              @blur="setTouched('anzeigentext')"
            ></textarea>
            <label>Anzeigentext *</label>
            <div v-if="errors.anzeigentext && (showErrors || touched.anzeigentext)" class="invalid-feedback">{{ errors.anzeigentext }}</div>
          </div>
        </div>

        <!-- <div class="col-12">
          <FileUpload
            v-model="uploadedFiles"
            name="datei"
            label="Bild (optional, max. 10MB)"
            :accepted-file-types="['image/*']"
            :allow-multiple="false"
            max-file-size="10MB"
          />
        </div> -->

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

        <div class="col-auto d-flex align-items-center">
          <button type="submit" class="btn btn-primary rounded-pill btn-send mb-3" :disabled="submitting">
            {{ submitting ? 'Sende...' : 'Absenden' }}
          </button>
        </div>
        <div class="col-auto d-flex align-items-center">
            <p v-if="price && price !== 0" class="text-muted mb-3">Kosten: {{ price }}€</p>
            <p v-else class="text-muted mb-3">kostenlos</p>
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
import { computed, ref } from 'vue'
import { sendKleinanzeige } from '@/services/MailService.js'
import { useAnzeigeForm } from '@/composables/useFormHandling.js'

const honeypot = ref("")
const startTime = Date.now()

const rubriken = [
  'Suche',
  'Biete',
]

const uploadedFiles = ref([])
const plzRe = /^\d{5}$/

const {
  form,
  errors,
  touched,
  showErrors,
  submitting,
  successMessage,
  errorMessage,
  setTouched,
  submitForm,
} = useAnzeigeForm({
  initialValues: {
    name: '',
    email: '',
    strasse: '',
    plz: '',
    ort: '',
    rubrik: '',
    anzeigentext: '',
  },
  honeypot,
  startTime,
  requiredFields: {
    name: 'Bitte Namen angeben.',
    strasse: 'Bitte Straße und Hausnr. angeben.',
    plz: 'Bitte eine gültige PLZ angeben.',
    ort: 'Bitte Ort angeben.',
    rubrik: 'Bitte eine Rubrik wählen.',
    anzeigentext: 'Bitte einen Anzeigentext angeben.',
  },
  emailFields: {
    email: 'Bitte geben Sie eine gültige Email an.',
  },
  validateAdditional: ({ form, errors }) => {
    if (form.plz && !plzRe.test(form.plz)) {
      errors.plz = 'Bitte eine gültige PLZ angeben.'
    }
  },
  onSubmit: async ({ form }) => {
    await sendKleinanzeige(form.name, form.email, form.strasse, form.plz, form.ort, form.rubrik, form.anzeigentext)
    uploadedFiles.value = []
  },
  onError: (error) => console.error(error),
  successText: 'Ihre Anzeige wurde erfolgreich eingereicht!',
})

const price = computed(() => {
  const textLength = form.anzeigentext.trim().length
  const extraBlocks = Math.max(0, Math.ceil((textLength - 500) / 500))
  const textPrice = textLength > 500 ? extraBlocks * 5 : 0
  const filePrice = uploadedFiles.value.length > 0 ? 5 : 0
  return textPrice + filePrice
})
</script>

<style scoped>
.kleinanzeige-formular {
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