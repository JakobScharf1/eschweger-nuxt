<template>
  <section class="wrapper bg-gray" v-if="aktuelles.length > 0">

    <div class="container pb-10 pb-md-13 pb-lg-15">
      <div class="card shadow-none mt-n10 mt-md-n13 mt-lg-n15">
        <div class="card-body py-6 py-lg-7 px-lg-11 py-xl-8 px-xl-13">
          <div class="text-center">
            <h3 class="display-5 mb-5">Aktuelles</h3>
          </div>
          <template v-for="(item, index) of aktuelles" :key="item.id">
            <div class="row mb-4">
              <div class="col-9">
                <b>{{ item.headline }}</b><br/>
                <span v-html="item.bemerkung" />
              </div>
              <div class="col-3">
                <div class="row mb-1">
                  <div class="col-auto pe-0">📍</div>
                  <div class="col-auto"><span v-html="item.ort" /></div>
                </div>
                <div class="row">
                  <div class="col-auto pe-0">🗓️</div>
                  <div class="col-auto">{{ item.am }}</div>
                </div>
              </div>
            </div>
            <hr class="m-0 p-0 mb-4" v-if="index !== aktuelles.length - 1 && aktuelles.length !== 1" />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { getAktuelles } from '@/services/AktuellesService';
import { onMounted, ref } from 'vue';
import DOMPurify from 'isomorphic-dompurify';

type AktuellesItem = {
  id: number
  headline: string
  am: string // YYYY-MM-DDThh:mm:ss
  ort: string
  bemerkung: string
}

const aktuelles: Ref<AktuellesItem[]> = ref([])
const config = useRuntimeConfig()

function cleanHTML(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['br', 'b', 'i', 'strong', 'em', 'p', 'ul', 'ol', 'li', 'a'],
    ALLOWED_ATTR: ['href'],
  })
}

function formatLocalDateTime(value: string): string {
  const localValue = value.replace(/(?:Z|[+-]\d{2}:?\d{2})$/, '')
  const [datePart, timePart] = localValue.split('T')
  const [year, month, day] = datePart!.split('-')
  const [hour, minute] = (timePart ?? '').split(':')

  if (!year || !month || !day || !hour || !minute) return value
  return `${day}.${month}.${year}, ${hour}:${minute} Uhr`
}

onMounted(async () => {
  try {
    const res = await getAktuelles(config.public.publicationId)
    if (res) {
      aktuelles.value = res.aktuelles
      aktuelles.value.forEach(item => {
        item.am = formatLocalDateTime(item.am)
        item.bemerkung = cleanHTML(item.bemerkung)
        item.ort = cleanHTML(item.ort)
      })
    }
  } catch (error) {
    console.error('Aktuelle Hinweise konnten nicht geladen werden.', error)
  }
  // } finally {
  //   aktuelles.value = [{ id: 1, headline: "Test 1", bemerkung: "Lorem ipsum Lorem ipsum Lorem ipsum Lorremum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum d d d d d d d", am: "2026-11-29T16:00:00+00:00", ort: "Isuma Tagungszentrum<br/>Im Rosengarten 18<br/>37269 Eschwege-Oberhone"}, { id: 2, headline: "Test 1", bemerkung: "Lorem ipsum", am: "2026-12-01T16:00:00", ort: "Eschwege Marktplatz"}]
  //     aktuelles.value.forEach(item => {
  //       item.am = formatLocalDateTime(item.am)
  //       item.bemerkung = cleanHTML(item.bemerkung)
  //       item.ort = cleanHTML(item.ort)
  //     })
  // }
})
</script>

<style>

</style>