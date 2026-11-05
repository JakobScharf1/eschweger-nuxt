<template>
<section class="wrapper bg-gray pb-15">
    <div class="container pt-10 pt-md-14 text-center">
      <div class="row">
        <div class="col-xl-6 mx-auto">
          <h1 class="display-1 mb-4">Gewinnspiele</h1>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>

  <section class="wrapper bg-light angled upper-end lower-end">
    <div class="container pt-15 pt-md-17 pb-8 pb-md-12">
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-lg-6 position-relative order-lg-2">
          <div
            class="shape bg-dot primary rellax w-16 h-20"
            data-rellax-speed="1"
            style="top: 3rem; left: 5.5rem"
          ></div>
          <div class="overlap-grid overlap-grid-2">
            <div class="item">
              <figure class="rounded shadow">
                <img
                  src="/assets/img/eschweger/gewinnspiel/stadtplan.jpg"
                  alt="image"
                />
              </figure>
            </div>
            <div class="item">
              <figure class="rounded shadow">
                <img
                  src="/assets/img/eschweger/gewinnspiel/Gewinnspiel_drohne.png"
                  alt="image"
                />
              </figure>
            </div>
          </div>
        <small>Bildquelle: Von Lithographie v. E.W. Röbling n. Ph. H. Hempfing, Plan von Eschwege aus Hochhuth, J.Ch. "Erinnerungen an die Vorzeit und Gegenwart der Stadt Eschwege." - https://www.abebooks.de/kunst-grafik-poster/Stadtplan-Grundriss-Stadt-Eschwege/22680022806/bd, Gemeinfrei, https://commons.wikimedia.org/w/index.php?curid=193618048</small>
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <img
            src="/assets/img/icons/lineal/megaphone.svg"
            class="icon-svg icon-svg-md mb-4"
            alt="photo"
          />
          <h2 class="display-4 mb-3">Aktuelles Online-Gewinnspiel</h2>

            <h3>Gewinne eine E99 Drone!</h3>

            <div class="accordion-wrapper mt-4" id="accordionSimpleExample">
            <div class="card plain accordion-item">
              <div class="card-header" id="headingSimpleOne">
                <button
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSimpleOne"
                  aria-expanded="true"
                  aria-controls="collapseSimpleOne"
                >
                  Technische Daten & Ausstattung
                </button>
              </div>
              <!--/.card-header -->
              <div
                id="collapseSimpleOne"
                class="collapse show"
                aria-labelledby="headingSimpleOne"
                data-bs-parent="#accordionSimpleExample"
              >
                <div class="card-body">
                   <ul>
                        <li>Gewicht: ca. 120-180g (leicht und faltbar)</li>
                        <li>Kamera: Starre 720p- oder 1080p-Kamera</li>
                        <li>Flugzeit: ca. 7 bis 13 Minuten pro Akku</li>
                        <li>Steuerung: 2,4-GHz-Fernsteuerung und Live-Bild-Übertragung (FPV) über Smartphone-Apps (z.B. RC FPV, KY UFO oder HF UFO)</li>
                        <li>Besonderheiten: Eignet sich für 360-Grad-Flips, Headless-Modus und automatischer Start/Landung</li>
                    </ul>
                </div>
                <!--/.card-body -->
              </div>
              <!--/.accordion-collapse -->
            </div>
            <!--/.accordion-item -->
            </div>
          <p class="mb-6">
            <strong>Gewinnspielfrage:</strong> Wie viele Einwohner:innen hatte Eschwege durchschnittlich im 19. Jahrhundert (1819 - 1895)?
          </p>
          <h4>Einsendeschluss: 1.Dezember 2026</h4>
          <!--/.row -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>

  <section class="wrapper bg-light wrapper-border">
    <div class="container pb-13 pb-md-15">
        <div class="row pt-10">
            <h2>Jetzt teilnehmen</h2>
            <GewinnspielFormular></GewinnspielFormular>
        </div>
    </div>
</section>
</template>

<script setup>
import GewinnspielFormular from '@/components/forms/GewinnspielForm.vue';

</script>