<template>
  <section id="snippet-3" class="wrapper bg-gray">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15 text-center">
      <div class="row gy-4">

        <div class="col-md-12 col-lg-6 col-xl-6 mx-auto text-center">
          <img
            src="/assets/img/icons/lineal/heart.svg"
            class="icon-svg icon-svg-md mb-4"
            alt=""
          />
          <h2 class="display-4 mb-3">Mitmachen</h2>
          <p class="lead fs-lg mb-6 px-xl-10 px-xxl-15">
            Möchten Sie uns in unseren Vorhaben, bspw. auf Veranstaltungen oder in der Organisation, tatkräftig unterstützen? Werden Sie ehrenamtliche:r Helfer:in und tragen Sie zu unserer gemeinnützigen Arbeit bei. 
          </p>
          <NuxtLink to="/mitmachen" class="btn btn-primary rounded">Jetzt mitmachen</NuxtLink>
        </div>

        <div class="col-md-12 col-lg-6 col-xl-6 mx-auto text-center">
          <img
            src="/assets/img/icons/lineal/invoice.svg"
            class="icon-svg icon-svg-md mb-4"
            alt=""
          />
          <h2 class="display-4 mb-3">Fördermitgliedschaft</h2>
          <p class="lead fs-lg mb-6 px-xl-10 px-xxl-15">
            Möchten Sie unser Projekt finanziell unterstützen? Neben den Erlösen aus Werbeanzeigen sind wir auf die Unterstützung unserer Leser:innen angewiesen, damit wir so weitermachen können wie bisher.
          </p>
          <NuxtLink to="/foerdern" class="btn btn-primary rounded">Jetzt Fördermitglied werden</NuxtLink>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
   
    <!-- /.container -->
  </section>

  <section id="snippet-2" class="wrapper bg-gray">
    <div class="container pb-13 pb-md-15">
      <div class="row">
        <div class="col-xl-10 mx-auto">
          <div
            class="card image-wrapper bg-full bg-image bg-overlay bg-overlay-400"
            style="background-image: url(/assets/img/photos/bg3.jpg)"
          >
            <div
              class="card-body p-6 p-md-11 d-lg-flex flex-row align-items-lg-center justify-content-md-between text-center text-lg-start"
            >
              <h3
                class="display-6 mb-6 mb-lg-0 pe-lg-10 pe-xl-5 pe-xxl-18 text-white"
              >
                Unterstützen Sie uns mit einem Abonnement und erhalten Sie unsere Ausgaben per Post!
              </h3>
              <NuxtLink to="/abo" class="btn btn-white rounded-pill mb-0 text-nowrap"
                >Zu den Abos</NuxtLink
              >
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
   
    <!-- /.container -->
  </section>
</template>

<script setup></script>