<template>
  <section class="wrapper bg-gray" v-if="aktuelles.length > 0">

    <div class="container pb-10 pb-md-13 pb-lg-15">
      <div class="card shadow-none mt-n10 mt-md-n13 mt-lg-n15">
        <div class="card-body py-6 py-lg-7 px-lg-11 py-xl-8 px-xl-13">
          <div class="text-center">
            <h3 class="display-5 mb-5">Aktuelles</h3>
          </div>
          <div class="mb-4 d-flex justify-content-between" v-for="item of aktuelles" :key="item.id">
            <div>
              <b>{{ item.headline }}</b><br/>
              {{ item.bemerkung }}
            </div>
            <div class="ps-6 text-nowrap">
              📍 {{ item.ort }}<br/>
              🗓️ {{ item.am }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { getAktuelles } from '@/services/AktuellesService';
import { onMounted, ref } from 'vue';

type AktuellesItem = {
  id: number
  headline: string
  am: string // YYYY-MM-DDThh:mm:ss
  ort: string
  bemerkung: string
}

const aktuelles: Ref<AktuellesItem[]> = ref([])
const config = useRuntimeConfig()

onMounted(async () => {
  try {
    const res = await getAktuelles(config.public.publicationId)
    if (res) {
      aktuelles.value = res
      aktuelles.value.forEach(item => {
        item.am = new Date(item.am).toLocaleString('de-DE', {
          day: '2-digit', month: '2-digit', year: 'numeric',
          hour: '2-digit', minute: '2-digit',
        }) + " Uhr"
      })
    }
  } catch (error) {
    console.error('Aktuelle Hinweise konnten nicht geladen werden.', error)
  }
})
</script>

<style>

</style>