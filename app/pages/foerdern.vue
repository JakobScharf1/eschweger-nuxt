<template>
  <section id="snippet-14" class="wrapper bg-gray wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-md-8 gx-xl-12 gy-10 align-items-center">
        <!-- <div class="col-md-8 col-lg-6 mx-auto">
          <div class="img-mask mask-3 px-xxl-5">
            <img
              :width="560"
              :height="525"
              src="/assets/img/eschweger/foerdermitgliedschaft.jpg?url"
              alt=""
            />
          </div>
        </div> -->
        <!--/column -->
        <div class="col-lg-12">
          <h2 class="display-2 mb-3">Fördermitglied werden</h2>
          <p>
            Sie können uns durch eine Fördermitgliedschaft unterstützen für die wir Ihnen auch eine Spendenbescheinigung ausstellen dürfen. Damit dies dauerhaft möglich ist, müssen die monatlichen Herstellungs- und Betriebskosten aufgebracht werden. Neben den Erlösen aus Werbeanzeigen sind wir auf die Unterstützung unserer Leser:innen angewiesen, damit wir das Projekt dauerhaft betreiben können. Dazu bieten wir Fördermitgliedschaften (nicht stimmberechtigte Fördermitglieder) an. Durch Ihre Zuwendungen unterstützen Sie unser Vorhaben und helfen dabei, das unsere Zeitung regelmäßig erscheinen kann.
          </p>
          <p>
            Die jährliche Mitgliedschaft verlängert sich automatisch um ein weiteres Jahr, wenn nicht bis eine Woche vor Ablauf des Jahres gekündigt wurde. Dazu werden Sie rechtzeitig per E-Mail informiert.
          </p>
        </div>
        <!--/column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>

  <!-- Stempel-Hinweis, überlappt die Section-Grenze -->
  <div class="stamp-wrapper">
    <a
      href="https://paypal.me/brombeerland"
      target="_blank"
      rel="noopener"
      class="stamp"
    >
      <span class="stamp-line">Direkt spenden</span>
      <span class="stamp-line stamp-line--brand">via PayPal</span>
    </a>
  </div>

  <section class="wrapper bg-light wrapper-border">
    <div class="container pt-8 pt-md-10 pt-lg-13 pb-13 pb-md-15">
        <div class="row">
            <h2>Jetzt spenden!</h2>
            <FoerderForm />
        </div>
    </div>
  </section>
</template>

<script setup>
import FoerderForm from '@/components/forms/FoerderForm.vue';

</script>

<style lang="scss" scoped>
.stamp-wrapper {
  position: relative;
  height: 0;
  z-index: 5;
}

.stamp {
  position: absolute;
  top: -60px;
  right: 8%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 130px;
  padding: 10px;
  border-radius: 50%;
  border: 3px solid #c0392b;
  outline: 1px solid #c0392b;
  outline-offset: -6px;
  color: #c0392b;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  background: rgba(255, 255, 255, 0.85);
  transform: rotate(-8deg);
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0.85;

  &:hover {
    transform: rotate(-8deg) scale(1.05);
    opacity: 1;
    color: #c0392b;
  }

  &-line {
    display: block;
    line-height: 1.3;
  }

  &-line--brand {
    font-size: 0.7rem;
    opacity: 0.9;
  }
}

@media (max-width: 767px) {
  .stamp {
    right: 30%;
    transform: translateX(50%) rotate(-8deg);
    top: -45px;
    width: 105px;
    height: 105px;
    font-size: 0.7rem;

    &:hover {
      transform: translateX(50%) rotate(-8deg) scale(1.05);
    }
  }
}
</style>