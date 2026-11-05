<template>
  <div class="row text-center">
    <div class="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
      <h2 class="fs-15 text-uppercase text-muted mb-3">Was wir tun</h2>
      <h3 class="display-4 mb-9">
        Unsere Mission
      </h3>
    </div>
    <!-- /column -->
  </div>
  <!-- /.row -->
  <div class="row gx-md-8 gx-xl-12 gy-8 text-center">
    <div class="col-md-4">
      <div
        :class="[
          'icon',
          'btn',
          'btn-block',
          'btn-lg',
          'btn-soft-green',
          'pe-none',
          'mb-5',
        ]"
      >
        <img src="/assets/img/icons/lineal/group-2.svg" class=" icon-svg icon-svg-sm text-primary" alt="Symbolbild: Von BürgerInnen für BürgerInnen" />
      </div>
      <h4>Unabhängiger Journalismus von Bürger:innen für Bürger:innen</h4>
      <span class="mb-3 text-block">DIE ESCHWEGER steht für Journalismus von unten: Wir wollen selbst erzählen, was uns bewegt, was gut läuft und wo es hakt. Von uns über uns – direkt aus dem Leben unserer Stadt. Wir sind unabhängig, weltoffen und demokratisch und stehen für positive, optimistische Inhalte, die Mut machen. Dabei schauen wir kritisch hin und sprechen Probleme offen an.<br/>Wir orientieren uns bei der Erstellung an den Prinzipien des <a href="https://up2date.uni-bremen.de/artikel/konstruktiver-journalismus-wenn-medien-nach-loesungen-suchen" target="_blank" class="fw-bold link-blue">konstruktiven Journalismus</a>.</span>
    </div>

    <div class="col-md-4">
      <div
        :class="[
          'icon',
          'btn',
          'btn-block',
          'btn-lg',
          'btn-soft-green',
          'pe-none',
          'mb-5',
        ]"
      >
        <img src="/assets/img/icons/lineal/paper.svg" class=" icon-svg icon-svg-sm text-primary" alt="Symbolbild: Berichterstattung" />
      </div>
      <h4>Transparente und gemeinschaftliche Berichterstattung</h4>
      <p class="mb-3 text-block">Unsere Redaktion ist offen. Alle können mitmachen: mit einem Foto, einem Text, einer Idee, einem Vorschlag oder mit Kritik. Auch ein kleiner Beitrag zählt. Ihr müsst keine Profis sein – wir helfen einander. Gemeinsam geben wir Vereinen, engagierten Menschen und Organisationen eine Plattform. Wir zeigen, was in Eschwege los ist, hören unterschiedliche Stimmen und machen sichtbar, wie unsere Beiträge entstehen.<br/>
        Veranstaltungshinweise und Einträge in den Veranstaltungskalender sind für gemeinnützige Institutionen oder Privatpersonen natürlich kostenfrei!</p>
    </div>

    <div class="col-md-4">
      <div
        :class="[
          'icon',
          'btn',
          'btn-block',
          'btn-lg',
          'btn-soft-green',
          'pe-none',
          'mb-5',
        ]"
      >
        <img src="/assets/img/icons/lineal/megaphone.svg" class=" icon-svg icon-svg-sm text-primary" alt="Symbolbild: Frei Informationen für alle Haushalte" />
      </div>
      <h4>Frei zugängliche, verlässliche Informationen für alle Haushalte</h4>
      <p class="mb-3 text-block">Wir wollen Informationen aus unserer Stadt für alle Haushalte frei zugänglich machen: verständlich, sorgfältig recherchiert und nah am Alltag. <b>Das Heft wird kostenlos an vielen Auslagestellen in der Stadt verfügbar sein</b>. Wir berichten über Veranstaltungen, Angebote und bürgerschaftliches Engagement – und erzählen von Menschen, die etwas bewegen.<br/>
Dahinter steht die gemeinnützige <b>BrombeerLand gUG</b>, die bereits seit April 2024 erfolgreich die Bürgerzeitung <b>DER WANNEFREDDER</b> herausgibt. Diese Erfahrung bringen wir auch in DIE ESCHWEGER ein – gemeinsam mit euch.</p>
    </div>
    <!--/column -->
  </div>
</template>

<script setup>
import { ref } from "vue";

const fatures = ref([
  {
    id: 1,
    title: "24/7 Support",
    icon: "uil uil-phone-volume",
    color: "purple",
    description:
      "Fusce dapibus tellus cursus porta tortor condimentum euismod massa justo vehicula sit amet et risus cras.",
    link: "#support",
  },
  {
    id: 2,
    title: "Secure Payments",
    icon: "uil uil-shield-exclamation",
    color: "green",
    description:
      "Fusce dapibus tellus cursus porta tortor condimentum euismod massa justo vehicula sit amet et risus cras.",
    link: "#payments",
  },
  {
    id: 3,
    title: "Daily Updates",
    icon: "uil uil-laptop-cloud",
    color: "orange",
    description:
      "Fusce dapibus tellus cursus porta tortor condimentum euismod massa justo vehicula sit amet et risus cras.",
    link: "#updates",
  },
]);
</script>

<style scoped>
.link-blue {
  color: #060080;
}
.link-blue:hover {
  color: #0a00c1;
}
</style>
