export function useMetaStore() {
  const metadata = useState('metadata', () => ({
    id: 1,
    title: 'DIE ESCHWEGER',
    logo: '/assets/img/eschweger/logo.png',
    logoFooter: '/assets/img/eschweger/logo-clean.png',
    facebook: 'https://www.facebook.com/people/Die-Eschweger/61592634340997',
    instagram: 'https://instagram.com/dieeschweger',
    favicon: '/favicon.ico',
    strasse: 'Unter den Weiden 5',
    ort: '37281 Wanfried',
    email: 'info@brombeerland.de',
    tel: '05651 333 69 09',
  }))

  return metadata.value
}
