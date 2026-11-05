<template>
  <section id="snippet-2" class="wrapper bg-gray wrapper-border">
      <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
          <h2 class="display-4 mb-3">DIE ESCHWEGER bequem nach Hause bekommen</h2>
          <p class="lead fs-lg mb-8">
              Möchten Sie DIE ESCHWEGER per Post zugestellt bekommen? Wählen Sie das Abo, das zu Ihnen passt. Mit den höheren Beiträgen unterstützen Sie unsere Arbeit und helfen dabei, DIE ESCHWEGER für alle zugänglich zu machen.
          </p>
      </div>
  </section>

  <section>
    <div
      class="pricing-wrapper position-relative bg-white"
    >
      <div
        class="shape bg-dot primary rellax w-16 h-18"
        data-rellax-speed="1"
        style="top: 2rem; right: -2.4rem"
      ></div>
      <div
        class="shape rounded-circle bg-line red rellax w-18 h-18 d-none d-lg-block"
        data-rellax-speed="1"
        style="bottom: 0.5rem; left: -2.5rem"
      ></div>
      
      <div class="container">
        <div class="row justify-content-center pt-8">
          <ul class="nav nav-pills nav-justified mb-5" style="gap: 1rem;">
            <li class="nav-item d-flex">
                <button
                type="button"
                class="btn nav-link"
                :class="active === 'halbjahr' ? 'btn-primary active' : 'btn-secondary'"
                @click="active = 'halbjahr'"
                >
                Halbjahres-Abo
                </button>
            </li>
            <li class="nav-item d-flex">
                <button
                type="button"
                class="btn nav-link"
                :class="active === 'ganzjahr' ? 'btn-primary active' : 'btn-secondary'"
                @click="active = 'ganzjahr'"
                >
                Ganzjahres-Abo
                </button>
            </li>
        </ul>
        </div>
        <div class="row gy-6 pt-3 pt-md-5 justify-content-center">
          <div class="col-12 col-lg-4" v-for="abo of abos" :key="abo.id">
            <div
              class="pricing card h-100 text-center shadow-sm bg-gray"
              :class="{ 'pricing-selected': chosenAbo === abo.id }"
            >
              <div class="card-body px-4 px-md-5 py-5">
                <h4 class="card-title">{{ abo.title }}</h4>
                <div class="prices text-dark">
                  <div class="price price-show justify-content-center">
                    <span class="price-currency">€</span>
                    <span class="price-value">{{ active === 'ganzjahr' ? abo.price.ganz : abo.price.halb }}</span>
                    <span class="price-duration">{{ active === 'ganzjahr' ? 'Jahr' : '6 Monate' }}</span>
                  </div>
                </div>
                <div class="mb-4">
                  {{ abo.description }}
                </div>
                <button
                  type="button"
                  class="btn btn-primary rounded-pill"
                  :aria-pressed="chosenAbo === abo.id"
                  @click="chooseAbo(abo.id)"
                >
                  {{ chosenAbo === abo.id ? 'Ausgewählt' : 'Auswählen' }}
                </button>
              </div>
              <!--/.card-body -->
            </div>
            <!--/.pricing -->
          </div>
          <!--/column -->
        </div>
      </div>
      <!--/.row -->
    </div>
  </section>

  <section class="py-15">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h3 class="display-5">Sie entscheiden wie lange</h3>
            <p>
              Alle Abos gibt es für ein halbes oder ein ganzes Jahr ab dem nächsten Monat. Das Halbjahresabo kostet jeweils die Hälfte. Es gibt <strong>keine automatische Verlängerung</strong>. Wir informieren Sie rechtzeitig vor Ablauf, damit Sie in Ruhe entscheiden können, ob Sie weiterlesen möchten. Abonnieren Sie einfach wir übersenden Ihnen mit der ersten Ausgabe die Rechnung.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section ref="aboFormSection" class="bg-gray py-10">
      <div class="container">
        <AboForm v-model:active="active" v-model:chosenAbo="chosenAbo" :abos="abos"></AboForm>
      </div>
    </section>
</template>

<script setup>
import AboForm from '@/components/forms/AboForm.vue';
import { nextTick, reactive, ref } from 'vue';

const active = ref('ganzjahr')
const chosenAbo = ref(null)
const aboFormSection = ref(null)

function chooseAbo(aboId) {
  chosenAbo.value = aboId
  nextTick(() => {
    aboFormSection.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

const abos = reactive([
  {
    id: 'pwyw_frei',
    title: 'Gratis-Abo',
    price: { ganz: '0,00', halb: '0,00' },
    description: 'Für alle, die DIE ESCHWEGER lesen möchten, aber gerade keinen Beitrag bezahlen können.'
  },
  {
    id: 'pwyw_12',
    title: 'Mitmach-Abo',
    price: { ganz: '12,00', halb: '6,00' },
    description: 'Ein kleiner Beitrag, der uns hilft und gut in Ihr Budget passt.'
  },
  {
    id: 'pwyw_36',
    title: 'Basis-Abo',
    price: { ganz: '36,00', halb: '18,00' },
    description: 'Sie bekommen DIE ESCHWEGER nach Hause und tragen zur Finanzierung bei.'
  },
  {
    id: 'pwyw_48',
    title: 'Standard-Abo',
    price: { ganz: '48,00', halb: '24,00' },
    description: 'Unser reguläres Abo für alle, die DIE ESCHWEGER regelmäßig lesen und unsere Arbeit unterstützen möchten.'
  },
  {
    id: 'pwyw_60',
    title: 'Unterstützer-Abo',
    price: { ganz: '60,00', halb: '30,00' },
    description: 'Sie geben etwas mehr und schaffen damit zusätzlichen Spielraum für unsere Arbeit.'
  },
  {
    id: 'pwyw_120',
    title: 'Förder-Abo',
    price: { ganz: '120,00', halb: '60,00' },
    description: 'Sie unterstützen DIE ESCHWEGER besonders großzügig und helfen, auch Abos mit kleinen Beiträgen zu ermöglichen.'
  },
])
</script>

<style lang="scss" scoped>
.pricing {
  border: none;
  overflow: hidden;
  border-radius: 2rem;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.pricing.pricing-selected {
  border: 2px solid var(--bs-primary);
  box-shadow: 0 0.75rem 1.5rem rgba(52, 63, 82, 0.18) !important;
  transform: translateY(-0.25rem);
}

.pricing .card-body {
  padding: 3rem 1.5rem;
}

.pricing .price {
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 0.35rem;
  margin-bottom: 1.5rem;
}

.pricing .price-currency {
  font-size: 1.1rem;
  font-weight: 600;
}

.pricing .price-value {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1;
}

.pricing .price-duration {
  font-size: 1rem;
  color: #60697b;
}

.icon-list {
  padding-left: 0;
  margin-bottom: 2rem;
}

.icon-list li {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 1rem;
}

.icon-list li i {
  margin-top: 0;
  line-height: 1;
  font-size: 1.1rem;
}

@media (max-width: 991px) {
  .pricing-wrapper {
    margin-top: 2rem !important;
    margin-bottom: 2rem !important;
  }

  .pricing .card-body {
    padding: 2rem 1.25rem;
  }

  .pricing .price-value {
    font-size: 2.5rem;
  }
}
</style>
