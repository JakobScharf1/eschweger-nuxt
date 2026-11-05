import { reactive, ref } from 'vue'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clone(value) {
  return structuredClone(value)
}

function createShape(value, leafValue) {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, child]) => [key, createShape(child, leafValue)]),
    )
  }
  return leafValue
}

function mergeErrors(shape, initialErrors) {
  for (const [key, value] of Object.entries(initialErrors ?? {})) {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      shape[key] = mergeErrors(shape[key] ?? {}, value)
    } else {
      shape[key] = value
    }
  }
  return shape
}

function clearErrors(errors) {
  for (const [key, value] of Object.entries(errors)) {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      clearErrors(value)
    } else {
      errors[key] = ''
    }
  }
}

function containsError(errors) {
  return Object.values(errors).some((value) => {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      return containsError(value)
    }
    return Boolean(value)
  })
}

export function useAnzeigeForm(options) {
  const form = reactive(clone(options.initialValues))
  const errors = reactive(
    mergeErrors(createShape(options.initialValues, ''), clone(options.initialErrors ?? {})),
  )
  const touched = reactive(createShape(options.initialValues, false))
  const showErrors = ref(false)
  const formRef = ref(null)
  const submitting = ref(false)
  const successMessage = ref('')
  const errorMessage = ref('')

  function setTouched(field) {
    touched[field] = true
  }

  async function submitForm() {
    if (submitting.value) return

    submitting.value = true
    showErrors.value = true
    successMessage.value = ''
    errorMessage.value = ''
    clearErrors(errors)

    try {
      for (const [field, message] of Object.entries(options.requiredFields ?? {})) {
        const value = form[field]
        if (value === null || value === undefined || String(value).trim() === '') {
          errors[field] = message
        }
      }

      for (const [field, message] of Object.entries(options.emailFields ?? {})) {
        const value = String(form[field] ?? '').trim()
        if (value && !emailPattern.test(value)) {
          errors[field] = message
        }
      }

      const selectedId = options.selectedId?.value ?? options.selectedId ?? null
      await options.validateForm?.({ form, errors, selectedId })
      await options.validateAdditional?.({ form, errors, selectedId })

      if (containsError(errors)) return

      if (options.honeypot?.value) {
        errorMessage.value = 'Das Formular konnte nicht gesendet werden.'
        return
      }

      await options.onSubmit({ form, selectedId })
      successMessage.value = options.successText ?? 'Erfolgreich gesendet.'
    } catch (error) {
      errorMessage.value = error instanceof Error
        ? error.message
        : 'Beim Senden ist ein Fehler aufgetreten.'
      if (options.onError) {
        options.onError(error)
      } else {
        console.error(error)
      }
    } finally {
      submitting.value = false
    }
  }

  return {
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
  }
}
