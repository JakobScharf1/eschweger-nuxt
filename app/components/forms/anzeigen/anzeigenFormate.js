export const formatsGeschaeftlich = [
  { id: '1_1', title: '1/1 Seite', width: 210, height: 279, subtitle: "4-spaltig, hoch (+3mm Beschnitt)", priceBusiness: { ortspreis: 700, grundpreis: 875, social_gamification: 525 } },
  { id: '1_2_q', title: '1/2 Seite', width: 190, height: 136, subtitle: "4-spaltig, quer", priceBusiness: { ortspreis: 386, grundpreis: 482, social_gamification: 289 } },
  { id: '1_2_h', title: '1/2 Seite', width: 92.5, height: 264, subtitle: "2-spaltig, hoch", priceBusiness: { ortspreis: 386, grundpreis: 482, social_gamification: 289 } },
  { id: '1_3_q', title: '1/3 Seite', width: 190.3, height: 89, subtitle: "4-spaltig, quer", priceBusiness: { ortspreis: 269, grundpreis: 336, social_gamification: 202 } },
  { id: '1_4_q4', title: '1/4 Seite', width: 190, height: 65.5, subtitle: "4-spaltig, quer", priceBusiness: { ortspreis: 210, grundpreis: 263, social_gamification: 158 } },
  { id: '1_4_h2', title: '1/4 Seite', width: 92.5, height: 129.5, subtitle: "2-spaltig, hoch", priceBusiness: { ortspreis: 210, grundpreis: 263, social_gamification: 158 } },
  { id: '1_4_q3', title: '1/4 Seite', width: 141.2, height: 92.5, subtitle: "3-spaltig, quer", priceBusiness: { ortspreis: 210, grundpreis: 263, social_gamification: 158 } },
  { id: '1_4_h1', title: '1/4 Seite', width: 43.7, height: 264, subtitle: "1-spaltig, hoch", priceBusiness: { ortspreis: 210, grundpreis: 263, social_gamification: 158 } },
  { id: '1_6', title: '1/6 Seite', width: 92.5, height: 89, subtitle: "2-spaltig, hoch", priceBusiness: { ortspreis: 143, grundpreis: 179, social_gamification: 108 } },
  { id: '1_8_q4', title: '1/8 Seite', width: 190, height: 30.3, subtitle: "4-spaltig, quer", priceBusiness: { ortspreis: 110, grundpreis: 137, social_gamification: 83 } },
  { id: '1_8_q2', title: '1/8 Seite', width: 92.5, height: 65.5, subtitle: "2-spaltig, quer", priceBusiness: { ortspreis: 110, grundpreis: 137, social_gamification: 83 } },
]

export const gewinnspiele = [
    { id: 'gs_1_1', title: '1/1 Seite', width: 210, height: 279, subtitle: "4-spaltig, hoch", priceBusiness: { ortspreis: 560, grundpreis: 700 } },
    { id: 'gs_1_2_q', title: '1/2 Seite', width: 190, height: 136, subtitle: "4-spaltig, quer", priceBusiness: { ortspreis: 308, grundpreis: 386 } },
]

export const umschlagseiten = [
    { id: 'u4', title: 'Umschlagseite 4', width: 210, height: 279, subtitle: "", priceBusiness: { ortspreis: 875, grundpreis: 1093 } },
    { id: 'u2_3', title: 'Umschlagseite 2 oder 3', width: 210, height: 279, subtitle: "", priceBusiness: { ortspreis: 805, grundpreis: 1006 } },
]

export const alleGeschaeftlich = [...formatsGeschaeftlich, ...gewinnspiele, ...umschlagseiten]

export const privat = [
  { id: 'priv_1_1', title: '1/1 Seite', width: 210, height: 279, subtitle: "(+3mm Beschnitt)", price: 350 },
  { id: 'priv_1_2_q', title: '1/2 Seite', width: 190, height: 136, subtitle: "4-spaltig, quer", price: 190 },
  { id: 'priv_1_2_h', title: '1/2 Seite', width: 92.5, height: 264, subtitle: "2-spaltig, hoch", price: 190 },
  { id: 'priv_1_3_q', title: '1/3 Seite', width: 190.3, height: 89, subtitle: "4-spaltig, quer", price: 130 },
  { id: 'priv_1_4_q4', title: '1/4 Seite', width: 190, height: 65.5, subtitle: "4-spaltig, quer", price: 100 },
  { id: 'priv_1_4_h2', title: '1/4 Seite', width: 92.5, height: 129.5, subtitle: "2-spaltig, hoch", price: 100 },
  { id: 'priv_1_4_q3', title: '1/4 Seite', width: 141.2, height: 92.5, subtitle: "3-spaltig, quer", price: 100 },
  { id: 'priv_1_4_h1', title: '1/4 Seite', width: 43.7, height: 264, subtitle: "1-spaltig, hoch", price: 100 },
  { id: 'priv_1_6', title: '1/6 Seite', width: 92.5, height: 89, subtitle: "2-spaltig", price: 70 },
  { id: 'priv_1_8_q4', title: '1/8 Seite', width: 190, height: 30.3, subtitle: "4-spaltig, quer", price: 50 },
  { id: 'priv_1_8_q2', title: '1/8 Seite', width: 92.5, height: 65.5, subtitle: "2-spaltig, quer", price: 50 },
  { id: 'priv_1_16', title: '1/16 Seite', width: 43.7, height: 65.5, subtitle: "1-spaltig", price: 20 },
]
