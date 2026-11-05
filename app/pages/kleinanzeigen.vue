<template>
  <section id="snippet-1" class="wrapper bg-gray wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-lg-8 gx-xl-12 gy-10">
        <div class="col-lg-6">
          <figure>
            <img
              class="w-auto"
              src="/assets/img/eschweger/kleinanzeigen.png"
              alt=""
            />
          </figure>
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <h2 class="display-4 mb-3">Kleinanzeigen</h2>
          <p class="lead fs-lg mb-6 pe-xxl-10">
            Über das Formular unterhalb können Sie eine Kleinanzeige für die nächste Ausgabe in Auftrag geben. Weitere Infos finden Sie nachfolgend.
          </p>
          <div class="accordion-wrapper" id="accordionExample-1">

            <div
              class="card plain accordion-item"
            >
              <div class="card-header">
                <button
                  data-bs-toggle="collapse"
                  :data-bs-target="`#collapse1`"
                  aria-expanded="true"
                  :aria-controls="`collapse1`"
                >
                  Wann erscheint meine Kleinanzeige?
                </button>
              </div>
              <!--/.card-header -->
              <div
                :id="`collapse1`"
                class="collapse show"
                :aria-labelledby="`heading1`"
                data-bs-parent="#accordionExample-1"
              >
                <div class="card-body">
                  <p>Die von Ihnen aufgegebene Kleinanzeige erscheint automatisch in der nächsten Ausgabe. Der Redaktionsschluss für den nächsten Monat ist immer der 15. des Vormonats. Wenn Sie also eine Veröffentlichung in der Juni-Ausgabe wünschen, schicken Sie uns bitte spätestens am 15. Mai Ihre Kleinanzeige.
                    <br/>Wenn Sie die Veröffentlichung in einer späteren Ausgabe wünschen, schreiben Sie das bitte entsprechend in den Anzeigentext.
                </p>
                </div>
                <!--/.card-body -->
              </div>
              <!--/.accordion-collapse -->
            </div>

            <div
              class="card plain accordion-item"
            >
              <div class="card-header">
                <button
                  data-bs-toggle="collapse"
                  :data-bs-target="`#collapse2`"
                  aria-expanded="true"
                  :aria-controls="`collapse2`"
                >
                  Wie viel kostet eine Kleinanzeige?
                </button>
              </div>
              <!--/.card-header -->
              <div
                :id="`collapse2`"
                class="collapse show"
                :aria-labelledby="`heading2`"
                data-bs-parent="#accordionExample-2"
              >
                <div class="card-body">
                  <p>Eine Kleinanzeige mit maximal 500 Zeichen ist kostenlos, wenn sie keinen gewerblichen Charakter hat. Alle weiteren 500 Zeichen kosten 5 Euro. Sie erhalten in diesem Fall eine entsprechende Rechnung per E-Mail.
                    <br/>Wenn Sie ein Foto für Ihre Kleinanzeige wünschen, kostet diese ebenfalls zusätzlich 5 Euro.
                </p>
                </div>
                <!--/.card-body -->
              </div>
              <!--/.accordion-collapse -->
            </div>

            <!--/.accordion-item -->
          </div>
          <!--/.accordion -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
   
    <!-- /.container -->
  </section>

  <section class="wrapper bg-light wrapper-border">
    <div class="container pb-10 pb-md-13">
        <div class="row pt-8 pt-md-10 pt-lg-12">
            <h2>Kleinanzeige beauftragen</h2>
        </div>
        <KleinanzeigeForm />
    </div>
  </section>
</template>

<script setup>
import KleinanzeigeForm from '@/components/forms/KleinanzeigeForm.vue';

</script>