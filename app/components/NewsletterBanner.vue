<template>
<div class="container pt-15 pt-md-17 pb-13 pb-md-15">
    <div class="row gx-md-8 gx-xl-12 gy-10">
        <div class="col-12">
            <div class="card bg-pale-blue">
                <div class="card-body p-12">
                    <img
                    src="/assets/img/icons/lineal/email.svg"
                    class="icon-svg icon-svg-sm mb-4"
                    alt="Symbolbild Newsletter"
                    />
                    <h2 class="display-4 mb-3 pe-lg-10">
                    Unser Newsletter
                    </h2>
                    <p class="lead pe-lg-12 mb-0">
                    Abonnieren Sie unseren Newsletter und erhalten Sie die neuesten Informationen und Gewinnspiele direkt in Ihren Posteingang.
                    </p>
                    <button class="btn btn-primary mt-5" @click="openPopup()">Jetzt abonnieren</button>
                </div>
                <!-- /column -->
            </div>
            <!-- /.row -->
        </div>
        <!--/.card-body -->
    </div>
    <!--/.card -->
</div>

<RapidMailPopup ref="popup"></RapidMailPopup>
</template>

<script setup>
import { ref } from 'vue';
import RapidMailPopup from './RapidMailPopup.vue';

const popup = ref(null)

function openPopup() {
    popup.value.openPopup()
}
</script>