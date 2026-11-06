<template>
  <section id="snippet-2" class="wrapper bg-gray wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <h2 class="display-4 mb-3">Bei unseren Projekten mitmachen</h2>
      <p class="lead fs-lg mb-8">
        Als ehrenamtliche:r Helfer:in den <span class="underline">Gemeinnutzen</span> unterstützen.
      </p>
      <div class="row gx-lg-8 gx-xl-12 gy-6 process-wrapper line">
        <div
          class="col-md-6 col-lg-3"
        > 
        <span
          class="icon btn btn-circle btn-lg btn-soft-primary pe-none mb-4"
          >
            <span class="number">1</span>
          </span>
          <h4 class="mb-1">Eintragen</h4>
          <p class="mb-0">Tragen Sie sich über das Formular bei uns als Mitmacher:in ein.</p>
        </div>

        <div
          class="col-md-6 col-lg-3"
        > 
        <span
          class="icon btn btn-circle btn-lg btn-soft-primary pe-none mb-4"
          >
            <span class="number">2</span>
          </span>
          <h4 class="mb-1">Anfrage</h4>
          <p class="mb-0">Wenn wir Unterstützung benötigen, melden wir uns bei Ihnen.</p>
        </div>

        <div
          class="col-md-6 col-lg-3"
        > 
        <span
          class="icon btn btn-circle btn-lg btn-primary pe-none mb-4"
          >
            <span class="number">3</span>
          </span>
          <h4 class="mb-1">Mitmachen</h4>
          <p class="mb-0">Helfen Sie auf Veranstaltungen, Auf- und Abbau oder in organsiatorischen Themen.</p>
        </div>

        <div
          class="col-md-6 col-lg-3"
        > 
        <span
          class="icon btn btn-circle btn-lg btn-soft-primary pe-none mb-4"
          >
            <span class="number">4</span>
          </span>
          <h4 class="mb-1">Abmelden</h4>
          <p class="mb-0">Wenn Sie nicht mehr dabei sein möchten, können Sie uns einfach kontaktieren und wir nehmen Sie aus der Mitmach-Liste raus.</p>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
</section>

<section class="wrapper bg-light angled upper-end lower-end">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <h2 class="display-4 mb-3">Wie kann ich mitmachen?</h2>

      <div class="row gx-lg-8 gx-xl-12 gy-10">
        <div class="col-lg-6">
          <h3>Für welchen Menschentyp könnte dieses Mitmachen eine Bereicherung sein?</h3>
          <ul>
            <li>Du bist bereit dich ehrenamtlich zu engagieren, und suchst eine interessante Tätigkeit mit Entwicklungspotential bei freier Zeiteinteilung und ohne Leistungsdruck.</li>
            <li>Du liebst es selbstständig in Ruhe zu arbeiten und trotzdem Teil eines Teams zu sein, mit dem man sich immer mal wieder austauschen kann, um neue Anregungen in die eigene Arbeit zu integrieren.</li>
            <li>Du genießt es, wenn ein guter Teil deiner Arbeit routinemäßig anfällt, aber immer wieder neue herausfordernde Momente dein tägliches Leben bereichern.</li>
            <li>Du möchtest nicht von der Bühne des Lebens abtreten, ohne vorher Spuren hinterlassen zu haben, sei es im Internet, in der Bürgerzeitung, bei den Menschen mit denen du „beruflich“ in Kontakt warst, oder im Freundes- und Bekanntenkreis.</li>
            <li>Du warst schon einmal journalistisch tätig, bei einer Schülerzeitung oder einer studentischen Zeitung oder als „Influencer“ im Internet und möchtest deine Fähigkeiten mit einbringen und dabei weiterentwickeln.</li>
            <li>Du hast bei einer Zeitung gearbeitet, liebst den Beruf und möchtest jetzt ohne betriebliche Zwänge weiter journalistisch arbeiten.</li>
          </ul>
        </div>
        <div class="col-lg-6">
          <h3>Wir sind an neuen Mitmacher:innen interessiert</h3>
          <ul>
            <li>Weil wir uns über neue Kontakte freuen</li>
            <li>Weil wir gerne neue Sichtweisen kennenlernen</li>
            <li>Weil unsere Bürgerzeitung dadurch eine Bereicherung erfährt</li>
            <li>Weil sich unser Netzwerk vergrößern wollen</li>
            <li>Weil die Arbeit, die wir bisher geleistet haben, von Vielen weitergetragen werden sollte</li>
          </ul>
          <strong>Kommt doch einfach mal unverbindlich zu unserer nächsten Redaktionssitzung vorbei. Jeder und Jede ist herzlich willkommen. Den Termin findet Ihr auf der Startseite.</strong>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
</section>

<section class="wrapper bg-gray">
  <div class="container pt-12 pt-md-13 pb-2 pb-md-5">
    <div class="row mb-3">
      <div class="col-md-10 col-xl-9 col-xxl-7 mx-auto text-center">
        <img
          src="/assets/img/icons/lineal/box.svg"
          class="icon-svg icon-svg-md mb-4"
          alt="photo"
        />
        <h2 class="display-4 mb-3 px-lg-14">
          Unsere Pakete
        </h2>
      </div>
      <!--/column -->
    </div>
    <!--/.row -->
    <div class="position-relative">
      <!-- <div
        class="shape rounded-circle bg-soft-yellow rellax w-16 h-16"
        data-rellax-speed="1"
        style="bottom: 0.5rem; right: -1.7rem"
      ></div>
      <div
        class="shape rounded-circle bg-line red rellax w-16 h-16"
        data-rellax-speed="1"
        style="top: 0.5rem; left: -1.7rem"
      ></div> -->
      <div class="row mb-10 mb-md-14">
        <div class="col-12 mb-0">
          <div id="accordion" class="accordion-wrapper">
            <div v-for="(elm, i) in pakete" :key="i" class="card accordion-item">
              <div class="card-header" :id="`heading4-${elm.id}`">
                <button
                  class="collapsed"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#collapse4-${elm.id}`"
                  aria-expanded="false"
                  :aria-controls="`collapse4-${elm.id}`"
                >
                  {{ elm.title }} - <small>{{ elm.subtitle }}</small>
                </button>
              </div>
              <!--/.card-header -->
              <div
                :id="`collapse4-${elm.id}`"
                :class="`collapse`"
                :aria-labelledby="`heading4-${elm.id}`"
                data-bs-parent="#accordionExample-4"
              >
                <div class="card-body">
                  <ul>
                    <li v-for="el in elm.content">{{ el }}</li>
                  </ul>
                </div>
                <!--/.card-body -->
              </div>
              <!--/.accordion-collapse -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.accordion-wrapper -->
        </div>    
      <!--/column -->
    </div>
      <!-- /.swiper-container -->
    </div>
    <!-- /.position-relative -->
  </div>
  <!-- /.container -->
</section>

<section class="wrapper bg-light wrapper-border">
    <div class="container pb-13 pb-md-15">
        <div class="row pt-10">
            <h2>In die Mitmach-Liste eintragen</h2>
            <p>
              Wie man sehen kann, ist die journalistische Arbeit sehr vielfältig. Zum Glück kann sie in eine Reihe von kleinen Mitmachpaketen aufgeteilt werden. So kann sich jede:r für sich das heraussuchen, was er/sie bewältigen kann und/oder was ihm/ihr Spaß macht.<br/>
              Natürlich kann ein: Mitmacher:in mehrere Pakete auswählen oder auch Mitmachpakete, die ihm/ihr zu viel werden, abgeben. Von daher lässt sich der individuelle Arbeitsumfang maßschneidern.<br/>
            </p>
            <MitmachForm />
        </div>
    </div>
</section>

</template>

<script setup>
import MitmachForm from '@/components/forms/MitmachForm.vue';
import { reactive } from 'vue';

const pakete = reactive([
  {
    id: 1,
    title: "Social Media",
    subtitle: "Pflege der Social-Media-Beiträge von unserer Bürgerzeitung (1-2 Stunden/Monat)",
    content: [
      "Artikel übertragen",
      "Kommentare und Anfragen beantworten",
      "Lokale Facebook-Seiten auf neue Themen hin durchforsten",
      "Pflege des Seitenbestandes (Links) mit relevanten lokalen Themen",
    ]
  },
  {
    id: 2,
    title: "Newsletter",
    subtitle: "Erstellung eines wöchentlichen Newsletters (4-6 Stunden/Monat)",
    content: [
      "Pro Woche einen Artikel übernehmen",
      "Pro Woche 4-6 Veranstaltungen auswählen",
      "Ein Gewinnspiel / eine Mitmachaktion veröffentlichen",
      "Evtl. aktuelle Sportergebnisse veröffentlichen",
    ]
  },
  {
    id: 3,
    title: "Veranstaltungskalender",
    subtitle: "Pflege des Veranstaltungskalenders (1-3 Stunden/Monat)",
    content: [
      "Korrekturen oder Ergänzungen oder Streichung bestehender Termine",
      "Aufnahme neuer Termine die an uns herangetragen werden",
      "Durchforstung von relevanten Internet-Auftritten auf der Suche nach neuen Veranstaltungen",
    ]
  },
  {
    id: 4,
    title: "Veranstaltungsteilnahme",
    subtitle: "mit anschließender Berichterstattung (2-4 Stunden/Monat)",
    content: [
      "Teilnahme an den regelmäßigen öffentlichen Sitzungen der kommunalen Beiräte, der Stadtverordnetenversammlung, Mitgliederversammlungen der Vereine, etc.",
      "Herausfiltern zeitungsrelevanter Themen",
      "Zusammentragen von Hintergrundinformationen",
      "Gegebenenfalls darauf aufbauend auch eigene Artikel",
    ]
  },
  {
    id: 5,
    title: "Recherche",
    subtitle: "1-4 Stunden/Monat",
    content: [
      "Durchsuchung des Internets und anderer Quellen auf Informationen die für einen (möglicherweise) anstehenden Zeitungsbericht relevant sein könnten",
      "Termine mit Ansprechpartnern (Interviews) um Hintergrundinformationen einzusammeln",
      "Öffentliche Befragung von Passanten auf der Straße",
      "Ausgearbeitete Meinungsumfragen",
    ]
  },
  {
    id: 6,
    title: "Abobetreuung",
    subtitle: "1-4 Stunden/Monat",
    content: [
      "Kontakt halten zu den Menschen, die das Bürgermagazin per Postzustellung abonniert haben.",
      "Neue Abonnenten eintragen, abgelaufen Abonneten per Serienbrief anschreiben",
      "Hefte eintüten, frankieren und zur Post bringen",
    ]
  },
  {
    id: 7,
    title: "Redaktion",
    subtitle: "Verstärkung der Redaktionsarbeit auf Spezialgebieten (3-5 Stunden/Monat)",
    content: [
      "Allgemeines und Geschichtliches",
      "Sportberichterstattung",
      "Kunst und Kultur",
      "Schulen und Kindergärten",
      "Ökologische- und Zukunftsthemen",
      "Politik",
    ]
  },
  {
    id: 8,
    title: "Fotos",
    subtitle: "1-2 Stunden/Monat",
    content: [
      "Von benötigten Objekten selber Fotos machen",
      "Aus einschlägigen Portalen kostenfreie Fotos anfordern",
      "Von Institutionen, mit denen wir im Kontakt stehen, Pressefotos erbitten",
    ]
  },
  {
    id: 9,
    title: "Printausgabe",
    subtitle: "Arbeiten an der Printausgabe (3-10 Stunden/Monat)",
    content: [
      "Gesamtkonzeption (Welche Themen, welche Reihenfolge, welcher Umfang, … )",
      "Layoutgestaltung",
      "Ansprechen potentieller Inserenten",
      "Gestaltung von Inseraten (in Zusammenarbeit mit den Inserenten)",
      "Abrechnung von veröffentlichten Inseraten",
      "Interne Organisation der Zuarbeiter:innen",
      "Anwerben und Organisation der Verteiler",
      "Abholen und Bereitstellen der gedruckten Ausgabe",
    ]
  },
  {
    id: 10,
    title: "Anzeigenverkauf, Social-Gamification und Mitmachaktionen",
    subtitle: "Menschen und Unternehmen zusammenbringen (4-6 Stunden/Monat)",
    content: [
      "Ansprechpartner für örtliche Unternehmen sein und den Kontakt pflegen",
      "Neue Anzeigenkunden gewinnen und bestehende Kunden betreuen",
      "Das Konzept der Mitmachanzeigen und Mitmachaktionen vorstellen",
      "Lokale Sponsoren für Gewinnspiele, Mitmachmünzen und Prämien gewinnen",
      "Unternehmen bei der Auswahl passender Werbemöglichkeiten beraten",
      "Ideen für neue Social-Gamification-Aktionen entwickeln und gemeinsam mit der Redaktion umsetzen",
      "Kooperationen mit Vereinen, Schulen, Initiativen und Organisationen aufbauen",
      "Rückmeldungen von Teilnehmern und Unternehmen sammeln und in die Weiterentwicklung einbringen",
    ]
  },
  {
    id: 11,
    title: "Heftverteilung",
    subtitle: "Unterstützung bei der Verteilung der Hefte (3-10 Stunden/Monat)",
    content: [
      "Hefte zu den Auslagestellen bringen",
      "Hefte nachliefern",
      "Neue Auslagestellen finden",
      "Kommunikation mit den Auslagestellen",
    ]
  },
])
</script>