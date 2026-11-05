import { ApiService } from './APIService.js'

async function sendMail(to, subject, html) {
  return await ApiService.post("/email", { profil: "Eschweger automailer", to: to, subject: subject, html: html })
}

export async function sendContact(from, message) {
  return await sendMail(
    "redaktion@die-eschweger.de",
    "Kontaktanfrage - DIE ESCHWEGER Website", 
    `Name: ${from.vorname} ${from.nachname}<br/>Email: ${from.email}<br/>Adresse: ${from.strasse}, ${from.plz} ${from.ort}<br/>Nachricht:<br/>${message}`
  )
}

export async function sendMitmachen(vorname, nachname, email, tel, strasse, plz, ort, pakete, bemerkung) {
  let paketeString = ""
  if (pakete.value.length > 1) {
    pakete.value.forEach(p => {
      paketeString = paketeString + p.label + ", "
    })
  } else paketeString = pakete.value[0].label
  return await sendMail(
    "redaktion@die-eschweger.de", 
    "Mitmachen Formular - DIE ESCHWEGER Website", 
    `Paket(e): ${paketeString}<br/>Name: ${vorname} ${nachname}<br/>Email: ${email}<br/>Telefon: ${tel}<br/>Adresse: ${strasse}, ${plz} ${ort}<br/>Bemerkung: ${bemerkung}`
  )
}

// Zu KleinanzeigenService
export async function sendKleinanzeige(name, email, strasse, plz, ort, rubrik, text) {
  return await sendMail(
    "redaktion@die-eschweger.de", 
    "Kleinanzeigen Formular - DIE ESCHWEGER Website",
    `Name: ${name}<br/>E-Mail: ${email}<br/>Adresse: ${strasse}, ${plz} ${ort}<br/>Rubrik: ${rubrik}<br>Beschreibung: ${text}`
  )
}

// Zu FoerderService
export async function sendFoerder(betrag, typ, email, name, strasse, plz, ort, zahlart) {
  return await sendMail(
    "redaktion@die-eschweger.de",
    "Fördermitgliedschaft - DIE ESCHWEGER Website",
    `Betrag: ${betrag}<br/>Typ: ${typ}<br/>E-Mail: ${email}<br/>Name: ${name}<br/>Adresse: ${strasse}, ${plz} ${ort}<br/>Zahlart: ${zahlart}`
  )
}