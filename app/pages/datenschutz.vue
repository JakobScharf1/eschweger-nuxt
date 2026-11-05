<template>
  <section class="wrapper bg-gray">
    <div class="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
      <div class="row">
        <div class="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto">
          <h1 class="display-1 mb-3">Datenschutzerklärung</h1>
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
        <section id="allgemeine-hinweise" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">Allgemeine Hinweise</h2>
              <p class="mb-0">
                Diese Datenschutzerklärung enthält ausführliche Informationen darüber, was mit Ihren persönlichen Daten passiert, wenn Sie unsere Website www.wannefredder.de besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie sich persönlich identifizieren können. Wir halten uns bei der Verarbeitung Ihrer Daten streng an die gesetzlichen Bestimmungen, insbesondere die Datenschutzgrundverordnung („DSGVO“), und legen großen Wert darauf, dass Ihr Besuch auf unserer Website absolut sicher ist.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>

        <section id="verantwortliche-stelle" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">Verantwortliche Stelle</h2>
              <p class="mb-0">
                Datenschutzrechtlich verantwortlich für die Erhebung und Verarbeitung von personenbezogenen Daten auf dieser Website ist:<br/>
                Udo Scharf<br/>
                Unter den Weiden 5<br/>
                37281 Wanfried<br/>
                Deutschland<br/>
                E-Mail: <a href="mailto:redaktion@die-eschweger.de">redaktion@die-eschweger.de</a>
                Telefon: <a href="tel:+491608989401">+49 160 89 89 401</a>
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>

        <section id="zugriffsdaten" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">Zugriffsdaten (Server-Logfiles)</h2>
              <p>
                Beim Aufruf unserer Website erheben wir und speichern automatisch in sogenannten Server-Logfiles Zugriffsdaten, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul>
                <li>Browsertyp und Browserversion Ihres PC</li>
                <li>von Ihrem PC verwendetes Betriebssystem</li>
                <li>Referrer URL (Quelle/Verweis, von welchem Sie auf unsere Website gelangten)</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Datum und Uhrzeit der Serveranfrage</li>
                <li>die aktuell von Ihrem PC verwendete IP-Adresse (ggf. in anonymisierter Form)</li>
              </ul>
              <p class="mb-0">
                Ein Personenbezug ist uns im Regelfall nicht möglich und auch nicht beabsichtigt. Die Verarbeitung solcher Daten erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO zur Wahrung unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>
        
        <section id="cookies" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">Cookies</h2>
              <p>
               Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter Funktionen zu ermöglichen, verwenden wir sogenannte Cookies. Hierbei handelt es sich um kleine Textdateien, die auf Ihrem Endgerät abgelegt werden. Cookies können keine Programme ausführen oder Viren auf Ihr Computersystem übertragen.
              </p>
              <p>
                Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Wir haben ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung unserer Dienste. Soweit andere Cookies (z.B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerklärung gesondert behandelt.
              </p>
              <p>
                Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies”. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
              </p>
              <p class="mb-0">
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>

        <!-- <section id="webanalyse" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">Webanalyse Tools und Werbung</h2>
              <p class="mb-0">
                Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas
                sed diam eget risus varius blandit sit amet non magna. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et.
                Nullam id dolor id nibh ultricies vehicula ut id elit. Donec
                ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Etiam porta sem malesuada
                magna mollis euismod. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et. Nulla vitae elit libero, a
                pharetra augue. Curabitur blandit tempus porttitor. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Aenean eu leo quam.
                Pellentesque ornare sem.
              </p>
            </div>
          </div>
        </section> -->

        <section id="newsletter" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">Newsletter</h2>
              <p>
                Sofern Sie ausdrücklich eingewilligt haben, senden wir an Ihre E-Mail-Adresse regelmäßig unseren Newsletter. Zum Erhalt unseres Newsletters müssen Sie uns Ihre E-Mail-Adresse mitteilen und sie anschließend verifizieren. Ergänzende Daten werden nicht erhoben oder sind freiwillig. Die Verwendung der Daten erfolgt ausschließlich für den Versand des Newsletters.
              </p>
              <p>
                Die bei der Newsletteranmeldung gemachten Daten werden ausschließlich auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO verarbeitet. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail oder Sie melden sich über den „Austragen“-Link im Newsletter ab. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
              </p>
              <p class="mb-0">
                Zur Einrichtung des Abonnements eingegebene Daten werden im Falle der Abmeldung gelöscht. Sollten diese Daten für andere Zwecke und an anderer Stelle an uns übermittelt worden sein, verbleiben diese weiterhin bei uns.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>

        <section id="kontaktformular" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">Kontaktformular</h2>
              <p>
                Sofern Sie mit uns Kontakt per E-Mail oder über ein Kontaktformular aufnehmen, werden übermittelte Daten einschließlich Ihrer Kontaktdaten gespeichert, um Ihre Anfrage bearbeiten zu können oder um für Anschlussfragen bereitzustehen. Eine Weitergabe dieser Daten findet ohne Ihre Einwilligung nicht statt.
              </p>
              <p>
                Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
              </p>
              <p class="mb-0">
                Über das Kontaktformular übermittelte Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder keine Notwendigkeit der Datenspeicherung mehr besteht. Zwingende gesetzliche Bestimmungen - insbesondere Aufbewahrungsfristen - bleiben unberührt.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>

        <section id="datenverwendung" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">Datenverwendung und -weitergabe</h2>
              <p>
                Die personenbezogenen Daten, die Sie uns z.B. per E-Mail mitteilen (z.B. Ihr Name und Ihre Adresse oder Ihre E-Mail-Adresse), werden wir weder an Dritte verkaufen noch anderweitig vermarkten. Ihre personenbezogenen Daten werden nur zur Korrespondenz mit Ihnen und nur für den Zweck verarbeitet, zu dem Sie uns die Daten zur Verfügung gestellt haben. Zur Abwicklung von Zahlungen geben wir Ihre Zahlungsdaten an das mit der Zahlung beauftragte Kreditinstitut weiter.
              </p>
              <p>
                Die Verwendung von Daten, die bei Ihrem Besuch unserer Website automatisch erhoben werden, erfolgt nur zu den vorstehend genannten Zwecken. Eine anderweitige Verwendung der Daten findet nicht statt.
              </p>
              <p class="mb-0">
                Wir versichern, dass wir Ihre personenbezogenen Daten im Übrigen nicht an Dritte weitergeben, es sei denn, dass wir dazu gesetzlich verpflichtet wären oder Sie uns vorher Ihre Zustimmung gegeben haben.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>

        <section id="verschluesselung" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">SSL- bzw. TLS-Verschlüsselung</h2>
              <p>
                Unsere Website benutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://” auf „https://” wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
              <p class="mb-0">
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>

        <section id="speicherdauer" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">Speicherdauer</h2>
              <p class="mb-0">
                Personenbezogene Daten, die uns über unsere Website mitgeteilt worden sind, werden nur so lange gespeichert, bis der Zweck erfüllt ist, zu dem sie uns anvertraut wurden. Soweit handels- und steuerrechtliche Aufbewahrungsfristen zu beachten sind, kann die Speicherdauer zu bestimmten Daten bis zu 10 Jahre betragen.
              </p>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>

        <section id="betroffenenrechte" class="wrapper pt-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">Betroffenenrechte</h2>
              <p>
                Hinsichtlich der Sie betreffenden personenbezogenen Daten haben als Betroffener der Datenverarbeitung nach Maßgabe der gesetzlichen Bestimmungen folgende Rechte gegenüber dem Verantwortlichen:
              </p>
              <ol>
                <li>
                  <strong>Widerrufsrecht</strong><br/>
                  <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sofern die Verarbeitung Ihrer Daten auf Ihrer Einwilligung beruht, haben Sie das Recht, eine einmal erteilte Einwilligung in die Verarbeitung von Daten gemäß Art. 7 Abs. 3 DSGVO jederzeit mit Wirkung für die Zukunft zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt. Speicherung der Daten für Abrechnungs- und buchhalterische Zwecke bleibt von einem Widerruf nicht berührt.</p>
                </li>
                <li>
                  <strong>Auskunfsrecht</strong><br/>
                  <p>Sie haben das Recht, gemäß Art. 15 DSGVO von uns eine Bestätigung darüber zu verlangen, ob wir personenbezogene Daten verarbeiten, die Sie betreffen. Liegt eine solche Verarbeitung vor, haben Sie das Recht auf Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten, die Verarbeitungszwecke, die Kategorien der verarbeiteten personenbezogenen Daten, die Empfänger oder Kategorien von Empfängern, gegenüber denen Ihre Daten offengelegt wurden oder werden, die geplante Speicherdauer bzw. die Kriterien für die Festlegung der Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch gegen die Verarbeitung, Beschwerde bei einer Aufsichtsbehörde, die Herkunft Ihrer Daten, wenn diese nicht durch uns bei Ihnen erhoben wurden, das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling und ggf. aussagekräftige Informationen über die involvierte Logik und die Sie betreffende Tragweite und die angestrebten Auswirkungen einer solchen Verarbeitung, sowie Ihr Recht auf Unterrichtung, welche Garantien gemäß Art. 46 DSGVO bei Weiterleitung Ihrer Daten in Drittländer bestehen.</p>
                </li>
                <li>
                  <strong>Recht auf Berichtigung</strong><br/>
                  <p>Sie haben das Recht, gemäß Art. 16 DSGVO jederzeit unverzügliche Berichtigung Sie betreffender unrichtiger personenbezogener Daten und/oder die Vervollständigung Ihrer unvollständigen Daten zu verlangen.</p>
                </li>
                <li>
                  <strong>Recht auf Löschung</strong><br/>
                  <p>Sie haben das Recht, gemäß Art. 17 DSGVO die Löschung Ihrer personenbezogenen Daten zu verlangen, sofern einer der folgenden Gründe zutrifft:</p>
                  <ol>
                    <li>Ihre personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig.</li>
                    <li>Sie widerrufen Ihre Einwilligung, auf die sich die Verarbeitung gemäß Art. 6 Abs. 1 lit. a oder Art. 9 Abs. 2 lit. a DSGVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung.</li>
                    <li>Sie legen gemäß Art. 21 Abs. 1 DSGVO Widerspruch gegen die Verarbeitung ein und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder Sie legen gemäß Art. 21 Abs. 2 DSGVO Widerspruch gegen die Verarbeitung ein.</li>
                    <li>Die personenbezogenen Daten wurden unrechtmäßig verarbeitet.</li>
                    <li>Die Löschung der personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht des Mitgliedstaates erforderlich, dem wir unterliegen.</li>
                    <li>Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gemäß Art. 8 Abs. 1 DSGVO erhoben.</li>
                  </ol>
                  <p>Dieses Recht besteht jedoch nicht, soweit die Verarbeitung erforderlich ist:</p>
                  <ol>
                    <li>zur Ausübung des Rechts auf freie Meinungsäußerung und Information;</li>
                    <li>zur Erfüllung einer rechtlichen Verpflichtung, die die Verarbeitung nach dem Recht der Union oder des Mitgliedstaates, dem wir unterliegen, erfordert, oder zur Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die uns übertragen wurde;</li>
                    <li>aus Gründen des öffentlichen Interesses im Bereich der öffentlichen Gesundheit gemäß Art. 9 Abs. 2 lit. h und i sowie Art. 9 Abs. 3 DSGVO;</li>
                    <li>für im öffentlichen Interesse liegende Archivzwecke, wissenschaftliche oder historische Forschungszwecke oder für statistische Zwecke gemäß Art. 89 Abs. 1 DSGVO, soweit das Betroffenenrecht voraussichtlich die Verwirklichung der Ziele dieser Verarbeitung unmöglich macht oder ernsthaft beeinträchtigt, oder</li>
                    <li>zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</li>
                  </ol>
                  <p>Haben wir Ihre personenbezogenen Daten öffentlich gemacht und sind wir nach Vorstehendem zu deren Löschung verpflichtet, so treffen wir unter Berücksichtigung der verfügbaren Technologie und der Implementierungskosten angemessene Maßnahmen, auch technischer Art, um für die Datenverarbeitung Verantwortliche, die die personenbezogenen Daten verarbeiten, darüber zu informieren, dass Sie als betroffene Person von ihnen die Löschung aller Links zu Ihren personenbezogenen Daten oder von Kopien oder Replikationen dieser personenbezogenen Daten verlangt haben.</p>
                </li>
                <li>
                  <strong>Recht auf Einschränkung der Verarbeitung</strong><br/>
                  <p>Sie haben das Recht, gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung (Sperrung) Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</p>
                  <ol>
                    <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                    <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah / geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                    <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                    <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                  </ol>
                  <p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der EU oder eines Mitgliedstaats verarbeitet werden.</p>
                </li>
                <li>
                  <strong>Recht auf Unterrichtung</strong>
                  <p>Haben Sie das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung gegenüber uns geltend gemacht, sind wir verpflichtet, allen Empfängern, denen Ihre personenbezogenen Daten offengelegt wurden, diese Berichtigung oder Löschung der Daten oder Einschränkung der Verarbeitung mitzuteilen, es sei denn, dies erweist sich als unmöglich oder ist mit einem unverhältnismäßigen Aufwand verbunden. Ihnen steht gemäß Art. 19 DSGVO das Recht zu, nach Verlangen über diese Empfänger unterrichtet zu werden.</p>
                </li>
                <li>
                  <strong>Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung – einschließlich Profiling – beruhenden Entscheidung unterworfen zu werden</strong>
                  <p>Sie haben das Recht, gemäß Art. 22 DSGVO nicht einer ausschließlich auf einer automatisierten Verarbeitung – einschließlich Profiling – beruhenden Entscheidung unterworfen zu werden, die Ihnen gegenüber rechtliche Wirkung entfaltet oder Sie in ähnlicher Weise erheblich beeinträchtigt.</p>
                  <p>Dies gilt nicht, wenn die Entscheidung</p>
                  <ol>
                    <li>für den Abschluss oder die Erfüllung eines Vertrags zwischen Ihnen und uns erforderlich ist,</li>
                    <li>aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der Verantwortliche unterliegt, zulässig ist und diese Rechtsvorschriften angemessene Maßnahmen zur Wahrung Ihrer Rechte und Freiheiten sowie Ihrer berechtigten Interessen enthalten oder</li>
                    <li>mit Ihrer ausdrücklichen Einwilligung erfolgt.</li>
                  </ol>
                  <p>Allerdings dürfen die Entscheidungen in den in (a) bis (c) genannten Fällen nicht auf besonderen Kategorien personenbezogener Daten nach Art. 9 Abs. 1 DSGVO beruhen, sofern nicht Art. 9 Abs. 2 lit. a oder lit. g gilt und angemessene Maßnahmen zum Schutz der Rechte und Freiheiten sowie Ihrer berechtigten Interessen getroffen wurden.</p>
                  <p>In den in (a) und (c) genannten Fällen treffen wir angemessene Maßnahmen, um Ihre Rechte und Freiheiten sowie Ihre berechtigten Interessen zu wahren, wozu mindestens das Recht auf Erwirkung des Eingreifens einer Person seitens des Verantwortlichen, auf Darlegung des eigenen Standpunkts und auf Anfechtung der Entscheidung gehört.</p>
                </li>

                <li>
                  <strong>Recht auf Datenübertragbarkeit</strong>
                  <p>Sofern die Verarbeitung auf Ihrer Einwilligung gem. Art. 6 Abs. 1 lit. a DSGVO oder Art. 9 Abs. 2 lit. a DSGVO oder auf einem Vertrag gemäß Art. 6 Abs. 1 lit. b DSGVO beruht und mithilfe automatisierter Verfahren erfolgt, haben Sie das Recht, gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesebaren Format zu erhalten und einem anderen Verantwortlichen zu übermitteln oder die Übermittlung an einen anderen Verantwortlichen zu verlangen, soweit dies technisch machbar ist.</p>
                </li>

                <li>
                  <strong>Widerspruchsrecht</strong>
                  <p>Soweit wir die Verarbeitung Ihrer personenbezogenen Daten auf die Interessenabwägung nach Art. 6 Abs. 1 lit. f DSGVO stützen, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmung gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf der eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).</p>
                  <p>Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).</p>
                  <p>Sie haben die Möglichkeit, im Zusammenhang mit der Nutzung von Diensten der Informationsgesellschaft – ungeachtet der Richtlinie 2002/58/EG - Ihr Widerspruchsrecht mittels automatisierter Verfahren auszuüben, bei denen technische Spezifikationen verwendet werden.</p>
                </li>

                <li>
                  <strong>Beschwerderecht bei der zuständigen Aufsichtsbehörde gemäß Art. 77 DSGVO</strong>
                  <p>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
                  <p>Die für uns zuständige Aufsichtsbehörde ist:</p>
                  <address>
                    Der Hessische Beauftragte für Datenschutz und Informationsfreiheit<br>
                    <br>
                    Postfach 31 63<br>
                    65021 Wiesbaden<br>
                    <br>
                    Gustav-Stresemann-Ring 1<br>
                    65189 Wiesbaden<br>
                    <br>
                    Telefon: 06 11/140 80<br>
                    E-Mail: <a href="mailto:poststelle@datenschutz.hessen.de">poststelle@datenschutz.hessen.de</a><br>
                    Internet: <a href="https://www.datenschutz.hessen.de" target="_blank" rel="noopener">https://www.datenschutz.hessen.de</a>
                  </address>
                </li>
              </ol>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </section>
        
        <section id="gueltigkeit" class="wrapper py-16 scrollSpysection">
          <div class="card">
            <div class="card-body p-10">
              <h2 class="mb-3">Gültigkeit und Änderung dieser Datenschutzerklärung</h2>
              <p>
                Diese Datenschutzerklärung gilt ab dem 1. November 2026. Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit unter Beachtung der geltenden Datenschutzvorschriften zu ändern. Dies kann z.B. zur Einhaltung neuer Gesetzesbestimmungen oder zur Berücksichtigung der Änderungen unserer Website bzw. neuer Dienstleistungen auf unserer Website erforderlich sein. Es gilt die zum Zeitpunkt Ihres Besuchs abrufbare Fassung.
              </p>
              <p class="mb-0">
                Sollte diese Datenschutzerklärung geändert werden, beabsichtigen wir, Änderungen an unserer Datenschutzerklärung auf dieser Seite bekannt zu geben, sodass Sie umfassend darüber informiert sind, welche personenbezogene Daten wir sammeln, wie wir sie verarbeiten und unter welchen Umständen sie weitergegeben werden können.
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
    number: 1,
    title: "Allgemeine Hinweise",
    href: "#allgemeine-hinweise",
    active: true,
  },
  {
    number: 2,
    title: "Verantwortliche Stelle",
    href: "#verantwortliche-stelle",
    active: false,
  },
  { number: 3, title: "Zugriffsdaten (Server-Logfiles)", href: "#zugriffsdaten", active: false },
  { number: 4, title: "Cookies", href: "#cookies", active: false },
  // { number: 5, title: "Webanalyse Tools und Werbung", href: "#webanalyse", active: false },
  {
    number: 6,
    title: "Newsletter",
    href: "#newsletter",
    active: false,
  },
  {
    number: 7,
    title: "Kontaktformular",
    href: "#kontakformular",
    active: false,
  },
  {
    number: 8,
    title: "Datenverwendung- und weitergabe",
    href: "#datenverwendung",
    active: false,
  },
  {
    number: 9,
    title: "SSL- bzw. TLS-Verschlüsselung",
    href: "#verschluesselung",
    active: false,
  },
  {
    number: 10,
    title: "Speicherdauer",
    href: "#speicherdauer",
    active: false,
  },
  {
    number: 11,
    title: "Betroffenenrechte",
    href: "#betroffenenrechte",
    active: false,
  },
  {
    number: 12,
    title: "Gültigkeit und Änderung dieser Datenschutzerklärung",
    href: "#gueltigkeit",
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
