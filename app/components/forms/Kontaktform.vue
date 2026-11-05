<template>
      <div class="row">
        <div class="col-12">
          <div class="row gy-10 gx-lg-8 gx-xl-12">
            <div class="col-lg-8">
              <form
                ref="formRef"
                class="contact-form needs-validation"
                @submit.prevent="submitForm"
                novalidate
              >
                <div class="messages">
                  <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
                  <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
                </div>
                <div class="row gx-4">
                  <div class="col-md-6">
                    <div class="form-floating mb-4">
                      <input
                        type="text"
                        name="vorname"
                        class="form-control"
                        :class="{ 'is-invalid': errors.vorname && (showErrors || touched.vorname) }"
                        placeholder="Erika"
                        required
                        v-model="form.vorname"
                        @blur="setTouched('vorname')"
                      />
                      <label>Vorname *</label>
                      <div class="valid-feedback">Passt!</div>
                      <div class="invalid-feedback">{{ errors.vorname || 'Bitte Vornamen angeben.' }}</div>
                    </div>
                  </div>
                  <!-- /column -->
                  <div class="col-md-6">
                    <div class="form-floating mb-4">
                      <input
                        type="text"
                        name="nachname"
                        class="form-control"
                        :class="{ 'is-invalid': errors.nachname && (showErrors || touched.nachname) }"
                        placeholder="Musterfrau"
                        required
                        v-model="form.nachname"
                        @blur="setTouched('nachname')"
                      />
                      <label>Nachname *</label>
                      <div class="valid-feedback">Passt!</div>
                      <div class="invalid-feedback">{{ errors.nachname || 'Bitte Nachnamen angeben.' }}</div>
                    </div>
                  </div>
                  <!-- /column -->
                  <div class="col-md-12">
                    <div class="form-floating mb-4">
                      <input
                        type="email"
                        name="email"
                        class="form-control"
                        :class="{ 'is-invalid': errors.email && (showErrors || touched.email) }"
                        placeholder="e.musterfrau@mail.de"
                        required
                        v-model="form.email"
                        @blur="setTouched('email')"
                      />
                      <label>Email *</label>
                      <div class="valid-feedback">Passt!</div>
                      <div class="invalid-feedback">{{ errors.email || 'Bitte geben Sie eine gültige Email an.' }}</div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-floating mb-4">
                      <input
                        type="text"
                        name="strasse"
                        class="form-control"
                        :class="{ 'is-invalid': errors.strasse && (showErrors || touched.strasse) }"
                        placeholder="Strasse & Hausnr."
                        required
                        v-model="form.strasse"
                        @blur="setTouched('strasse')"
                      />
                      <label>Straße & Hausnr. *</label>
                      <div class="valid-feedback">Passt!</div>
                      <div class="invalid-feedback">{{ errors.strasse || 'Bitte geben Sie eine gültige Straße und Hausnummer an.' }}</div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-floating mb-4">
                      <input
                        type="text"
                        name="plz"
                        class="form-control"
                        :class="{ 'is-invalid': errors.plz && (showErrors || touched.plz) }"
                        placeholder="37281"
                        required
                        v-model="form.plz"
                        @blur="setTouched('plz')"
                      />
                      <label>PLZ *</label>
                      <div class="valid-feedback">Passt!</div>
                      <div class="invalid-feedback">{{ errors.plz || 'Bitte PLZ angeben.' }}</div>
                    </div>
                  </div>
                  <!-- /column -->
                  <div class="col-md-6">
                    <div class="form-floating mb-4">
                      <input
                        type="text"
                        name="ort"
                        class="form-control"
                        :class="{ 'is-invalid': errors.ort && (showErrors || touched.ort) }"
                        placeholder="Eschwege"
                        required
                        v-model="form.ort"
                        @blur="setTouched('ort')"
                      />
                      <label>Ort *</label>
                      <div class="valid-feedback">Passt!</div>
                      <div class="invalid-feedback">{{ errors.ort || 'Bitte Ort angeben.' }}</div>
                    </div>
                  </div>

                  <!-- /column -->
                  <div class="col-12">
                    <div class="form-floating mb-4">
                      <textarea
                        name="message"
                        class="form-control"
                        :class="{ 'is-invalid': errors.message && (showErrors || touched.message) }"
                        placeholder="Ihre Nachricht"
                        style="height: 150px"
                        required
                        v-model="form.message"
                        @blur="setTouched('message')"
                      ></textarea>
                      <label>Nachricht *</label>
                      <div class="valid-feedback">Passt!</div>
                      <div class="invalid-feedback">{{ errors.message || 'Bitte geben Sie eine Nachricht an.' }}</div>
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

                  <!-- /column -->
                  <div class="col-12">
                    <div class="form-check mb-4">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="accepted"
                        v-model="form.accepted"
                        :class="{ 'is-invalid': errors.accepted && (showErrors || touched.accepted) }"
                        @blur="setTouched('accepted')"
                      />
                      <label class="form-check-label">
                        Ich akzeptiere die Datenschutzerklärung.
                      </label>
                      <div class="invalid-feedback">{{ errors.accepted || 'You must agree before submitting.' }}</div>
                    </div>
                  </div>
                  <!-- /column -->
                  <div class="col-12">
                    <input
                      type="submit"
                      class="btn btn-primary rounded-pill btn-send mb-3"
                      :disabled="submitting"
                      :value="submitting ? 'Sende...' : 'Abschicken'"
                    />
                    <p class="text-muted">
                      <strong>*</strong> Diese Felder sind Pflichtangaben.
                    </p>
                  </div>
                  <!-- /column -->
                </div>
                <!-- /.row -->
              </form>
              <!-- /form -->
            </div>
            <!--/column -->
            <div class="col-lg-4">
              <div
                class="d-flex flex-row"
              >
                <div>
                  <div class="icon text-primary fs-28 me-6 mt-n1">
                    <i class="uil uil-location-pin-alt"></i>
                  </div>
                </div>
                <div>
                  <h5>Adresse</h5>

                  <address>
                    Marktstraße 29<br class="d-none d-md-block" />
                    37269 Eschwege
                  </address>
                </div>
              </div>

              <div
                class="d-flex flex-row mb-3"
              >
                <div>
                  <div class="icon text-primary fs-28 me-6 mt-n1">
                    <i class="uil uil-phone-volume"></i>
                  </div>
                </div>
                <div>
                  <h5>Telefon</h5>

                  <a :href="`tel:${+491608989401}`">
                    0160 89 89 401
                  </a>
                </div>
              </div>

              <div
                class="d-flex flex-row"
              >
                <div>
                  <div class="icon text-primary fs-28 me-6 mt-n1">
                    <i class="uil uil-envelope"></i>
                  </div>
                </div>
                <div>
                  <h5>Email</h5>

                  <a :href="`mailto:redaktion@die-eschweger.de`">redaktion@die-eschweger.de</a>
                </div>
              </div>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!-- /column -->
      </div>
</template>

<script setup>
import { ref } from 'vue'
import { sendContact } from '@/services/MailService';
import { useAnzeigeForm } from '@/composables/useFormHandling.js'

const props = defineProps(['preselection'])

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
    strasse: '',
    plz: '',
    ort: '',
    message: '',
    accepted: false,
  },
  honeypot,
  startTime,
  requiredFields: {
    vorname: 'Bitte Vornamen angeben.',
    nachname: 'Bitte Nachnamen angeben.',
    strasse: 'Bitte geben Sie eine gültige Straße und Hausnummer an.',
    plz: 'Bitte geben Sie eine gültige PLZ ein.',
    ort: 'Bitte geben Sie eine Ort ein.',
    message: 'Bitte geben Sie eine Nachricht an.',
  },
  emailFields: {
    email: 'Bitte geben Sie eine gültige Email an.',
  },
  validateAdditional: ({ form, errors }) => {
    if (!form.accepted) {
      errors.accepted = 'Sie müssen die Datenschutzerklärung akzeptieren.'
    }
  },
  onSubmit: async ({ form }) => {
    await sendContact(
      { vorname: form.vorname, nachname: form.nachname, email: form.email, strasse: form.strasse, ort: form.ort, plz: form.plz }, 
      form.message
    )
  },
  onError: (error) => console.error(error),
  successText: 'Kontaktanfrage erfolgreich verschickt.',
})
</script>