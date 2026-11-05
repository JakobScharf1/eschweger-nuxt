<template>
  <div class="file-upload">
    <label v-if="label" class="form-label d-block mb-2">{{ label }}</label>
    <file-pond
      :name="name"
      :label-idle="labelIdle"
      :accepted-file-types="acceptedFileTypes"
      :allow-multiple="allowMultiple"
      :max-file-size="maxFileSize || undefined"
      :disabled="disabled"
      :files="modelValue"
      credits="false"
      @updatefiles="handleFileUpdate"
    />
  </div>
</template>

<script setup>
import vueFilePond from 'vue-filepond'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'

import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

const FilePond = vueFilePond(
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType,
  FilePondPluginFileValidateSize
)

defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  name: {
    type: String,
    default: 'dateien',
  },
  label: {
    type: String,
    default: 'Dateien',
  },
  labelIdle: {
    type: String,
    default: "Dateien hierher ziehen oder <span class='filepond--label-action'>auswählen</span>",
  },
  acceptedFileTypes: {
    type: Array,
    default: () => [],
  },
  allowMultiple: {
    type: Boolean,
    default: true,
  },
  maxFileSize: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

function handleFileUpdate(files) {
  emit('update:modelValue', files.map(({ file }) => file))
}
</script>
