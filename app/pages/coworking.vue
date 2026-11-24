<template>
  <div>
    <section class="wrapper bg-gray">
      <div class="container pt-15 pt-md-17 pb-8 pb-md-10">
        <div class="row text-center">
          <div class="col-lg-10 col-xl-9 mx-auto">
            <h1 class="display-1 mb-4">STARTRAMPE</h1>
            <p class="lead fs-lg mb-0">Dein Arbeitsplatz auf Zeit – mitten in Eschwege</p>
          </div>
        </div>
      </div>
    </section>
    <section class="wrapper bg-light">
      <div class="container pt-8 pt-md-14 pb-13 pb-md-15">
        <div class="row gx-lg-8 gx-xl-12 gy-8 align-items-center">
          <div class="col-lg-6">
            <p>
              Du suchst einen Ort, an dem du in Ruhe arbeiten kannst und trotzdem ab und zu jemanden zum
              Austausch triffst? Du hast eine Idee und möchtest daraus etwas Eigenes machen? Dann komm
              in die STARTRAMPE. Unser Coworking-Space ist im Stadtladen mitten in der Eschweger
              Innenstadt. Gründer:innen sind bei uns herzlich willkommen.
            </p>
            <h2 class="display-4 mb-4">Was wir dir bieten</h2>
            <ul class="icon-list bullet-bg bullet-soft-primary mb-0">
              <li><i class="uil uil-check"></i>Einen Schreibtisch und eine 1000er-Internetleitung</li>
              <li><i class="uil uil-check"></i>Einen A3-Farblaserdrucker</li>
              <li><i class="uil uil-check"></i>Einen Raum für Besprechungen und gemeinsame Arbeit</li>
              <li><i class="uil uil-check"></i>Einen ungestörten Platz für Telefonate und Videokonferenzen</li>
              <li><i class="uil uil-check"></i>Frische Kaffeespezialitäten</li>
              <li><i class="uil uil-check"></i>Die Möglichkeit, den Arbeitsplatz rund um die Uhr zu nutzen</li>
            </ul>
            <a class="mt-7 btn btn-success btn-lg" href="https://startrampe.die-eschweger.de/" target="_blank">
              Jetzt buchen
            </a>
          </div>
          <div class="col-lg-5">
            <div
              class="rounded h-1/4"
              role="img"
              aria-label="Coworking-Space Symbolbild"
            >
              <img src="/assets/img/eschweger/coworking.svg">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="wrapper bg-gray">
      <div class="container pt-13 pt-md-15 pb-13 pb-md-15">
        <div class="row gx-lg-8 gx-xl-12 gy-6">
          <div class="col-lg-6">
            <h2 class="display-4 mb-3">In Ruhe arbeiten und sich austauschen</h2>
            <p>
              Bei uns kannst du erledigen, was gerade ansteht, an deinem Projekt weiterarbeiten oder
              dir Schritt für Schritt eine eigene Existenz aufbauen. Im Stadtladen triffst du auf
              Menschen, die sich für Eschwege engagieren und gern etwas auf die Beine stellen. Mit
              unserer Bürgerzeitung DIE ESCHWEGER sind wir selbst vor Ort. Wenn du eine Idee besprechen
              möchtest oder bei einer Frage festhängst, kannst du dich mit uns und anderen im Stadtladen
              austauschen.
            </p>
          </div>
          <div class="col-lg-6">
            <h2 class="display-4 mb-3">Wir freuen uns über deine Ideen</h2>
            <p>
              Was brauchst du, um hier gut arbeiten zu können? Was würdest du gern gemeinsam mit
              anderen ausprobieren? Sag uns, was dir für die STARTRAMPE vorschwebt. Auch ein kleiner
              Vorschlag zählt.
            </p>
            <p class="mb-0">
              Du möchtest mehr erfahren oder dir den Arbeitsplatz anschauen? Melde dich bei uns. Wir
              freuen uns, dich kennenzulernen.
              <router-link to="/kontakt" class="link-blue fw-bold">Nimm Kontakt mit uns auf.</router-link>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.space-image-placeholder {
  display: grid;
  min-height: 22rem;
  place-items: center;
  background: #e9ecef;
  color: #6c757d;
  font-size: 1.1rem;
}

.link-blue {
  color: #060080;

  &:hover {
    color: #0a00c1;
  }
}
</style>