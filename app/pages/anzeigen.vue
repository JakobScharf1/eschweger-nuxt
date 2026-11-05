<template>
    <section id="snippet-2" class="wrapper bg-gray wrapper-border">
        <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
            <h2 class="display-4 mb-3">Unterstützen Sie uns als Anzeigenkunde</h2>
            <p class="lead fs-lg mb-8">
                Wir finanzieren uns über Anzeigen. Wenn Sie uns unterstützen möchten, können Sie hier eine Anzeige buchen. Wir freuen uns über Ihre Unterstützung!
            </p>
        </div>
    </section>

    <section class="wrapper bg-white">
        <div class="container pt-12 pt-md-13 pb-2 pb-md-5">
            <div class="row mb-3">
                <div class="col-md-10 col-xl-9 col-xxl-7 mx-auto text-center">
                    <img
                    src="/assets/img/icons/lineal/shopping-cart.svg"
                    class="icon-svg icon-svg-md mb-4"
                    alt="photo"
                    />
                    <h2 class="display-4 mb-3 px-lg-14">
                        Anzeige buchen
                    </h2>
                </div>
            </div>
            <div>
                <ul class="nav nav-pills nav-justified mb-5" style="gap: 1rem;">
                    <li v-for="tab in tabs" :key="tab.key" class="nav-item d-flex">
                        <button
                        type="button"
                        class="btn nav-link"
                        :class="active === tab.key ? 'btn-primary active' : 'btn-secondary'"
                        :aria-current="active === tab.key ? 'page' : null"
                        @click="active = tab.key"
                        >
                        {{ tab.label }}
                        </button>
                    </li>
                </ul>

                <div v-show="active === 'privat'">
                    <Privat></Privat>
                </div>
                <div v-show="active === 'geschaeftlich'">
                    <Geschaeftlich></Geschaeftlich>
                </div>
            </div>
        </div>
    <!-- /.container -->
    </section>
</template>
<script setup>
import { reactive, ref } from 'vue'
import Privat from '@/components/forms/anzeigen/Privat.vue'
import Geschaeftlich from '@/components/forms/anzeigen/Geschaeftlich.vue'

const active = ref('geschaeftlich')

const tabs = reactive([
    { key: 'privat', label: 'Ich bin Privatkunde' },
    { key: 'geschaeftlich', label: 'Ich bin Geschäftskunde' },
])

</script>