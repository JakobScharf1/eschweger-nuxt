<template>
  <section class="wrapper bg-gray">
    <div class="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
      <div class="row">
        <div class="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto">
          <h1 class="display-1 mb-3">Satzung</h1>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>


  <div class="container">
    <div class="row gx-0">
      <aside
        class="col-xl-3 sidebar sticky-sidebar mt-md-0 pt-16 d-none d-xl-block"
      >
        <div class="widget">
          <nav id="sidebar-nav">
            <ul class="list-unstyled text-reset scrollspyLinks">
              <li v-for="(item, index) in navLinks" :key="index">
                <a
                  :class="['nav-link', 'scroll', { active: item.active }]"
                  :href="item.href"
                >
                  {{ item.number }}. {{ item.title }}
                </a>
              </li>
            </ul>
          </nav>
          <!-- /nav -->
        </div>
        <!-- /.widget -->
      </aside>
      <!-- /column -->
      <div class="col-xl-8">
        <section id="praeambel" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">Präambel</h2>
              <p>
               Die Gesellschafter beabsichtigen, einen informierten öffentlichen Diskurs mit dem Ziel einer sachlich aufgeklärten Gesellschaft zu fördern und zu unterstützen. Dieses Leitbild soll dadurch verwirklicht werden, dass die vorliegende Gesellschaft die in dieser Satzung genannten Zwecke erfüllt.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>
        <section id="firma" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">§ 1 Firma, Sitz, Geschäftsjahr</h2>
              <p>
                (1) Die Gesellschaft führt die Firma: „Gemeinnützige Unternehmergesellschaft BrombeerLand (haftungsbeschränkt)“
              </p>
              <p>
                (2) Sitz der Gesellschaft ist 37281 Wanfried, Unter den Weiden 5
              </p>
              <p class="mb-0">
                (3) Das Geschäftsjahr ist das Kalenderjahr.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>
        <section id="zweck" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">§ 2 Gegenstand der Gesellschaft (Zweck)</h2>
              <p>
               (1) Die Gesellschaft verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke im Sinne der §§51 ff. AO.
              </p>
              <p>
                (2) Zweck der Gesellschaft ist:
              </p>
              <ul>
                <li>die Förderung der Volks- und Berufsbildung</li>
                <li>die Förderung der Jugendhilfe und Kunst und Kultur</li>
                <li>die Förderung der Heimatpflege</li>
                <li>die Förderung der Toleranz auf allen Gebieten der Kultur und des Völkerverständigungsgedankens</li>
                <li>die Förderung der Verbraucherberatung und des Verbraucherschutzes</li>
                <li>sowie die Förderung des demokratischen Staatswesens im Geltungsbereich der Abgabenordnung</li>
              </ul>
              <p class="mb-0">
                (3) Die Gesellschaft verwirklicht ihre Satzungszwecke insbesondere durch folgende Maßnahmen:
              </p>
              <ul>
                <li>durch objektive und neutrale Wissensvermittlung und Aufklärung über Hintergründe und Zusammenhänge zu wichtigen Gegenwarts- und Zukunftsthemen wie insbesondere Klimawandel, soziale Gerechtigkeit, Migration, bürgerschaftliches Handeln und politisches Engagement von Bürgern</li>
                <li>durch objektive und neutrale Nachrichtenaufbereitung und –beschaffung über vielfältige lokal- und allgemeinpolitische, gesellschaftliche, kulturelle und historische Zusammenhänge.</li>
                <li>durch eine kritische Funktion in Hinsicht auf Fehlentwicklungen und Missstände.</li>
                <li>durch die Archivierung und Veröffentlichung lokaler historischer Geschehnisse auch unter dem Aspekt der Heimatpflege.</li>
                <li>Im Sinne eines innovativen, gemeinwohlorientierten publizistischen Angebots zur Förderung einer lebendigen und vielfältigen Medienkultur in Deutschland durch eine Stärkung der überparteilichen, grundsätzlichen gesellschaftspolitischen Diskussion und Meinungsbildung in Deutschland, indem sie das Meinungsspektrum verbreitert und die Qualität der Meinungsbildung verbessert, mit dem Ziel, einen informierten Diskurs nachhaltig im Sinne einer aufgeklärten und verantwortungsbewussten Gesellschaft als zu wahrendes Kulturgut zu fördern.</li>
              </ul>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>
        <section id="selbstlosigkeit" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">§ 3 Selbstlosigkeit</h2>
              <p>
                (1) Die Gesellschaft ist selbstlos tätig. Sie verfolgt nicht in erster Linie eigenwirtschaftliche Zwecke.
              </p>
              <p>
               (2) Mittel der Gesellschaft dürfen nur für die satzungsmäßigen Zwecke verwendet werden.
              </p>
              <p>
                (3) Die Gesellschafter dürfen keine Gewinnanteile und auch keine sonstigen Zuwendungen aus den Mitteln der Gesellschaft erhalten. Sie erhalten bei ihrem Ausscheiden, bei Auflösung der Gesellschaft oder bei Wegfall steuerbegünstigter Zwecke nicht mehr als ihre eingezahlten Kapitalanteile und den gemeinen Wert ihrer geleisteten Sacheinlagen zurück.
              </p>
              <p class="mb-0">
                (4) Es darf keine Person durch Ausgaben, die dem Zweck der Gesellschaft fremd sind, oder durch unverhältnismäßig hohe Vergütungen begünstigt werden.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>
        <section id="stammkapital" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">§ 4 Stammkapital und Geschäftsanteile</h2>
              <p>
                (1) Das Stammkapital der Gesellschaft beträgt 100€.
              </p>
              <p class="mb-0">
                (2) Es ist wie folgt auf die Gesellschafter verteilt:<br/>
                Gesellschafter: Udo Scharf, Einlage: 100€ (EUR), Anteil: 100%
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>
        <section id="fuehrung" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">§ 5 Geschäftsführung und Vertretung</h2>
              <p>
                (1) Die Gesellschaft hat einen oder mehrere Geschäftsführer.
              </p>
              <p>
                (2) Die Gesellschaft wird durch einen Geschäftsführer allein vertreten.
              </p>
              <p>
                (3) Die Geschäftsführer sind von den Beschränkungen des §181 BGB befreit, soweit gesetzlich zulässig.
              </p>
              <p class="mb-0">
                (4) Die Bestellung und Abberufung der Geschäftsführung erfolgt durch Gesellschafterbeschluss.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>

        <section id="versammlungen" class="wrapper py-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">§ 6 Gesellschafterversammlungen</h2>
              <p>
                (1) Die ordentliche Gesellschafterversammlung findet einmal jährlich statt.</p>
              <p>
                (2) Sie ist außerdem einzuberufen, wenn es das Interesse der Gesellschaft erfordert.</p>
              <p>
                (3) Gesellschafterbeschlüsse werden mit einfacher Mehrheit der abgegebenen Stimmen gefasst, soweit Gesetz oder Vertrag nichts anderes vorsehen. </p>
              <p class="mb-0">
                (4) Jeder Gesellschafter hat eine Stimme je 1€ seines Geschäftsanteils. Das Stimmrecht aus einem Geschäftsanteil kann nur einheitlich ausgeübt werden.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>

         <section id="foerdermitglieder" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">§ 7 Fördermitglieder</h2>
              <p>
                (1) Fördermitglieder können natürliche oder juristische Personen werden, die die Zwecke der Gesellschaft ideell oder materiell freiwillig unterstützen, ohne Gesellschafter zu sein.
              </p>
              <p>
                (2) Fördermitglieder haben keine Gesellschafterrechte im Sinne des GmbH-Gesetzes. Sie sind insbesondere nicht an der Gesellschaft beteiligt, haben kein Stimmrecht, keinen Anspruch auf Gewinnanteile und keinen Anspruch auf Rückzahlung geleisteter Beiträge oder Spenden.
              </p>
              <p>
                (3) Über die Aufnahme von Fördermitgliedern entscheidet die Geschäftsführung. Ein Anspruch auf Aufnahme besteht nicht. Die Fördermitgliedschaft beginnt mit der schriftlichen Bestätigung durch die Gesellschaft.
              </p>
              <p>
                (4) Fördermitglieder leisten regelmäßige oder einmalige Beiträge, deren Höhe und Fälligkeit in einer von der Geschäftsführung zu beschließenden Fördermitgliedschaftsordnung festgelegt werden.
              </p>
              <p>
                (5) Die Fördermitgliedschaft kann jederzeit mit einer Frist von drei Monaten zum Jahresende schriftlich gekündigt werden. Die Gesellschaft kann die Fördermitgliedschaft ebenfalls aus wichtigem Grund oder bei grobem Verstoß gegen die Ziele der Gesellschaft beenden.
              </p>
              <p>
                (6) Fördermitglieder können auf Einladung der Geschäftsführung an Veranstaltungen, Sitzungen und Versammlungen beratend teilnehmen, haben jedoch kein Stimmrecht.
              </p>
              <p>
                (7) Förderbeiträge und Spenden werden ausschließlich und unmittelbar für die satzungsmäßigen Zwecke der Gesellschaft gem. § 2 verwendet.
              </p>
              <p class="mb-0">
                (8) Die Gesellschaft führt eine Liste der Fördermitglieder. Diese Liste ist nicht öffentlich und dient ausschließlich internen Zwecken. Auf Wunsch kann eine namentliche Nennung in Publikationen oder auf der Website erfolgen.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>

        <section id="verwendung" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">§ 8 Verwendung von Überschüssen</h2>
              <p>
                (1) Überschüsse der Gesellschaft dürfen ausschließlich für die gemeinnützigen Zwecke der Gesellschaft verwendet werden.
              </p>
              <p>
                (2) Diese umfassen insbesondere:<br/></p>
              <ul>
                  <li>Finanzierung von Kultur- und Bildungsangeboten,</li>
                  <li>Anschaffung gemeinnütziger Infrastruktur,</li>
                  <li>Durchführung von Veranstaltungen mit Gemeinwohlbezug.</li>
              </ul>
              <p class="mb-0">
                (3) Über die konkrete Gewinnverwendung beschließt die Gesellschafterversammlung. Im steuerlich zulässigen Umfang dürfen Rücklagen gebildet werden, insbesondere sind die §§ 51-68 AO zu beachten. Im Übrigen sind die Mittel zeitnah für den Geschäftszweck gem. § 2 dieser Satzung zu verwenden.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>

        <section id="abtretung" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">§ 9 Abtretung und Vererbung von Anteilen</h2>
              <p>
                (1) Die Abtretung von Geschäftsanteilen bedarf der Zustimmung aller Gesellschafter und notarieller Beurkundung.
              </p>
              <p class="mb-0">
                (2) Bei Tod eines Gesellschafters tritt der Erbe in die Gesellschafterstellung ein, sofern nicht anders geregelt.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>

        <section id="aufloesung" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">§ 10 Auflösung der Gesellschaft, Vermögensbindung</h2>
              <p>
                (1) Die Auflösung erfolgt durch Gesellschafterbeschluss oder gesetzlich vorgesehene Gründe.
              </p>
              <p>
                (2) Bei Auflösung erfolgt die Liquidation durch den Geschäftsführer, sofern nicht anders beschlossen.
              </p>
              <p class="mb-0">
                (3) Bei Auflösung oder Aufhebung der Gesellschaft oder bei Wegfall steuerbegünstigter Zwecke fällt das Vermögen der Gesellschaft soweit es die eingezahlten Kapitalanteile der Gesellschaft und den gemein Wert der von den Gesellschaftern geleisteten Sacheinlage übersteigt an eine juristische Person des öffentlichen Rechts oder eine andere steuerbegünstigte Körperschaft zwecks Verwendung für die Förderung des bürgerschaftlichen Engagements zugunsten gemeinnütziger, mildtätiger und kirchlicher Zwecke oder die Förderung von Kunst und Kultur.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>

        <section id="kuendigung" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">§ 11 Kündigung von Gesellschaftern</h2>
              <p>
                (1) Jeder Gesellschafter kann durch Kündigung seinen Austritt aus der Gesellschaft erklären.
              </p>
              <p>
                (2) Die Kündigung hat unter Einhaltung einer Frist von einem Jahr zum Ende eines Geschäftsjahres zu erfolgen. Die Kündigung ist erstmals zum 31.12.2026 zulässig. Das Recht zur Kündigung aus wichtigem Grund bleibt unberührt.
              </p>
              <p>
                (3) Die Kündigung hat schriftlich durch Einwurf-Einschreiben gegenüber den Mitgesellschaftern zu erfolgen. Für die Rechtzeitigkeit der Kündigung ist der Zugang bei der Gesellschaft maßgebend. Die Geschäftsführer haben alle Gesellschaft unverzüglich über die Kündigung zu informieren.
              </p>
              <p class="mb-0">
                (4) Im Falle der wirksamen Kündigung wird die Gesellschaft unter den verbleibenden Gesellschaftern fortgesetzt. Der kündigende Gesellschafter erhält eine Abfindung nach Maßgabe des § 3 Abs.3 Satz 2 dieser Satzung.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>

        <section id="dauer" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">§ 12 Dauer, Bekanntmachungen</h2>
              <p>
                (1) Die Gesellschaft wird auf unbestimmte Dauer gegründet.
              </p>
              <p class="mb-0">
                (2) Bekanntmachungen der Gesellschaft erfolgen im elektronischen Bundesanzeiger.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>

        <section id="dauer" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">§ 13 Satzungsänderungen</h2>
              <p>
                (1) Diese Satzung kann durch Beschluss der Gesellschafterversammlung geändert werden.
              </p>
              <p class="mb-0">
                (2) Beschlüsse über Änderungen des §2 und des §3 dürfen erst ausgeführt werden, wenn das zuständige Finanzamt die gemeinnützigkeitsrechtliche Unbedenklichkeit bescheinigt hat.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>

         <section id="dauer" class="wrapper py-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">§ 14 Schlussbestimmungen</h2>
              <p>
                (1) Änderungen dieses Gesellschaftsvertrags bedürfen der notariellen Beurkundung.
              </p>
              <p>
                (2) Sollten einzelne Bestimmungen dieses Vertrags unwirksam sein, bleibt der Vertrag im Übrigen wirksam.
              </p>
              <p class="mb-0">
                (3) Gerichtsstand ist der Sitz der Gesellschaft.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>
      </div>
      <!-- /column -->
    </div>
    <!-- /.row -->
  </div>
</template>

<script setup>
import addScrollspy from "@/utils/addScrollSpy";
import addSmoothScroll from "@/utils/smoothScroll";
import { onBeforeUnmount, onMounted, ref } from "vue";

const navLinks = ref([
  {
    number: 0,
    title: "Präambel",
    href: "#praeambel",
    active: true,
  },
  {
    number: 1,
    title: "Firma, Sitz, Geschäftsjahr",
    href: "#firma",
    active: false,
  },
  { number: 2, title: "Gegenstand der Gesellschaft (Zweck)", href: "#zweck", active: false },
  { number: 3, title: "Selbstlosigkeit", href: "#selbstlosigkeit", active: false },
  { number: 4, title: "Stammkapital und Geschäftsanteile", href: "#stammkapital", active: false },
  {
    number: 5,
    title: "Geschäftsführung und Vertretung",
    href: "#fuehrung",
    active: false,
  },
  {
    number: 6,
    title: "Gesellschafterversammlungen",
    href: "#versammlungen",
    active: false,
  },
  {
    number: 7,
    title: "Fördermitglieder",
    href: "#foerdermitglieder",
    active: false,
  },
  {
    number: 8,
    title: "Verwendung von Überschüssen",
    href: "#verwendung",
    active: false,
  },
  {
    number: 9,
    title: "Abtretung und Vererbung von Anteilen",
    href: "#abtretung",
    active: false,
  },
  {
    number: 10,
    title: "Auflösung der Gesellschaft, Vermögensbindung",
    href: "#aufloesung",
    active: false,
  },
  {
    number: 11,
    title: "Kündigung von Gesellschaftern",
    href: "#kuendigung",
    active: false,
  },
  {
    number: 12,
    title: "Dauer, Bekanntmachung",
    href: "#dauer",
    active: false,
  },
  {
    number: 13,
    title: "Satzungsänderungen",
    href: "#satzungsaenderungen",
    active: false,
  },
  {
    number: 14,
    title: "Schlussbestimmung",
    href: "#schluss",
    active: false,
  },
]);

function ititScrollspy() {
  addScrollspy("");
}

onMounted(() => {
  addSmoothScroll();
  window.addEventListener("scroll", ititScrollspy);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", ititScrollspy);
});
</script>
