<template>
  <section id="snippet-4" class="wrapper bg-light wrapper-border">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-lg-7 order-lg-2">
          <div class="row gx-md-5 gy-5">
            <div
              v-for="(item, index) in cards"
              :key="index"
              :class="item.classes"
            >
                <NuxtLink v-if="item.path !== '/shop'" :to="item.path">
                    <div class="card" :class="item.cardClass">
                        <div class="card-body">
                        <img
                            :src="item.iconSrc"
                            :class="item.iconClass"
                            :alt="item.title"
                        />
                        <h4>{{ item.title }}</h4>
                        <p class="mb-0">{{ item.description }}</p>
                        </div>
                        <!--/.card-body -->
                    </div>
                </NuxtLink>
                <a v-else href="https://wannefredder.sumupstore.com/" target="_blank">
                  <div class="card" :class="item.cardClass">
                        <div class="card-body">
                        <img
                            :src="item.iconSrc"
                            :class="item.iconClass"
                            alt=""
                        />
                        <h4>{{ item.title }}</h4>
                        <p class="mb-0">{{ item.description }}</p>
                        </div>
                        <!--/.card-body -->
                    </div>
                </a>
              <!--/.card -->
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
        <div class="col-lg-5">
          <h2 class="fs-15 text-uppercase text-muted mb-3">Angebote</h2>
          <h3 class="display-4 mb-5">
            Entdecken Sie Ihre Region!
          </h3>
          <p>
            Neben unserer Funktion als Bürgerzeitung bieten wir zudem verschiedene Angebote, wie einen Veranstaltungskalender, Gewinnspiele und Kleinanzeigen an. Natürlich alles kostenlos!
          </p>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
</template>

<script setup>
const cards = [
  // {
  //   id: 1,
  //   classes: "col-md-5 offset-md-1 align-self-end",
  //   cardClass: "bg-pale-yellow",
  //   iconSrc: "/assets/img/icons/lineal/calendar.svg",
  //   iconClass: "icon-svg icon-svg-md text-yellow mb-3",
  //   title: "Veranstaltungs-kalender",
  //   description:
  //     "Entdecken Sie alle Veranstaltungen in der Umgebung!",
  //   path: "/veranstaltungen"
  // },
  {
    id: 2,
    classes: "col-md-6 align-self-end",
    cardClass: "bg-pale-red",
    iconSrc: "/assets/img/icons/lineal/award-2.svg",
    iconClass: "icon-svg icon-svg-md text-red mb-3",
    title: "Gewinnspiele",
    description:
      "Gewinnen Sie spannende Preise aus der Region!",
    path: "/gewinnspiele"
  },
  // {
  //   id: 3,
  //   classes: "col-md-5",
  //   cardClass: "bg-pale-leaf",
  //   iconSrc: "/assets/img/icons/lineal/shop.svg",
  //   iconClass: "icon-svg icon-svg-md text-leaf mb-3",
  //   title: "Merchandise",
  //   description: "Regional hergestellt und gestaltet.",
  //   path: "/shop"
  // },
  {
    id: 3,
    classes: "col-md-6 align-self-start",
    cardClass: "bg-pale-yellow",
    iconSrc: "/assets/img/icons/lineal/pin.svg",
    iconClass: "icon-svg icon-svg-md text-primary mb-3",
    title: "Kostenlose Kleinanzeigen",
    description:
      "Inserieren Sie digital und in unserer Zeitung, um Bürger:innen in Ihrer Umgebung zu erreichen!",
    path: "/kleinanzeigen"
  },
];
</script>