import React from 'react'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Togthr template</title>
          <meta property="og:title" content="Togthr template" />
        </Head>
        <div>
          <DangerousHTML
            html={`<script src="https://static.heyflow.app/widget/latest/webview.js"></script>`}
          ></DangerousHTML>
        </div>
        <div className="home-container01">
          <div className="home-container02">
            <img
              alt="image"
              src="/playground_assets/integrityor.svg"
              className="home-image"
            />
            <button type="button" className="home-button button">
              <span>
                <span>Meldung einreichen</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
        <div className="home-container03">
          <div className="home-container04">
            <div className="home-container05">
              <span className="home-text03">
                Wir ermutigen Sie, Ihren Hinweis abzugeben
              </span>
            </div>
          </div>
        </div>
        <div className="home-container06">
          <div className="home-container07">
            <img
              alt="image"
              src="/playground_assets/integrityicon.svg"
              className="home-image1"
            />
            <h2 className="home-text04">Hinweis Portal</h2>
            <span className="home-text05">Hinweis Portal</span>
            <span className="home-text06">
              Geben Sie Ihren Hinweis ganz einfach online über unser Portal ab.
              (auch anonym möglich)
            </span>
            <span className="home-text07">
              Whistleblowing, das Enthüllen von Informationen, die eine
              Verletzung des Gesetzes, unethisches Verhalten oder Gefahr für die
              Öffentlichkeit darstellen, ist ein wichtiges Instrument zum Schutz
              von Menschen und Organisationen vor Missbrauch und Gefahren. Um
              diesen Menschen und Unternehmen zu helfen, haben wir ein
              Meldeportal für Hinweisgeber (Whistleblower) eingerichtet.
            </span>
            <button type="button" className="home-button1 button">
              <span>
                <span>Hinweis Online einreichen</span>
                <br></br>
              </span>
            </button>
          </div>
          <div className="home-container08">
            <img
              alt="image"
              src="/playground_assets/integrityicon.svg"
              className="home-image2"
            />
            <h2 className="home-text11">Hinweis Portal</h2>
            <span className="home-text12">Hinweis Portal</span>
            <span className="home-text13">Telefonische Hinweise unter</span>
            <h2 className="home-text14">+49 (0) 800 123 456 78</h2>
            <span className="home-text15">
              Wenn Sie anonym bleiben möchten, können Sie sich auch an unseren
              unseren Anrufservice wenden, der sicherstellt, dass Ihre Eingabe
              vertraulich und anonym bleibt. So können Sie ganz einfach helfen,
              ungesetzliche und unethische Aktivitäten zu verhindern und die
              Welt ein Stückchen besser zu machen.
            </span>
          </div>
        </div>
        <div className="home-container09">
          <h2 className="home-text16">Integrityportal Meldestelle</h2>
          <span className="home-text17">
            Mit unserem Meldeportal können alle Personen, die glauben, dass
            missbräuchliche Aktivitäten in einer Firma, Organisation oder
            Gemeinde vorliegen, sicher und optional auch anonym ihren Hinweis
            einreichen und uns beim Schutz von Menschen und Unternehmen
            unterstützen. Es ist sehr wichtig, dass Whistleblower anonym bleiben
            können, da sie sonst Angst haben könnten, dass sie Kosten oder
            Nachteile erleiden, wenn sie melden. Mit unserem Meldeportal können
            sie sicher und diskret helfen.
          </span>
        </div>
        <div className="home-container10">
          <h2 className="home-text18">Online Meldung einreichen</h2>
          <div className="home-code-embed">
            <DangerousHTML
              html={`<heyflow-wrapper flow-id="hello-e340e3" dynamic-height style-config='{"width": "100%", "height": "100%"}'></heyflow-wrapper>`}
            ></DangerousHTML>
          </div>
        </div>
        <div className="home-container11">
          <h2 className="home-text19">FAQ (Häufige Fragen)</h2>
          <div className="home-container12">
            <h2 className="home-text20">
              Muss ich anlässlich meiner Meldung Nachteile befürchten?
            </h2>
            <span className="home-text21">
              Mit unserem Meldeportal können alle Personen, die glauben, dass
              missbräuchliche Aktivitäten in einer Firma, Organisation oder
              Gemeinde vorliegen, sicher und optional auch anonym ihren Hinweis
              einreichen und uns beim Schutz von Menschen und Unternehmen
              unterstützen. Es ist sehr wichtig, dass Whistleblower anonym
              bleiben können, da sie sonst Angst haben könnten, dass sie Kosten
              oder Nachteile erleiden, wenn sie melden. Mit unserem Meldeportal
              können sie sicher und diskret helfen.
            </span>
            <h2 className="home-text22">
              Wie kann ich meine Meldung einreichen?
            </h2>
            <span className="home-text23">
              Sie haben die Möglichkeit, Ihre Meldung schriftlich, mündlich oder
              persönlich einzureichen. Welchen Weg Sie bevorzugen, bleibt Ihnen
              unbenommen.
            </span>
            <h2 className="home-text24">
              Werden meine Daten vertraulich behandelt?
            </h2>
            <span className="home-text25">
              Ja. Dies ist im Gesetz so vorgeschrieben (§ 8 HinSchG). Wird Ihre
              Identität oder der Sachverhalt Dritten mitgeteilt, müssen Sie
              hiervon im Vorfeld unterrichtet werden.
            </span>
            <h2 className="home-text26">
              Muss ich meine Identität preisgeben?
            </h2>
            <span className="home-text27">
              Nein. Auch anonyme Meldungen werden bearbeitet. Es ist gleichwohl
              ratsam, Ihre Identität mitzuteilen, da dies die Aufklärung des
              Sachverhaltes erleichtert.
            </span>
            <h2 className="home-text28">
              Gibt es auch andere Stellen, wo ich Missstände melden kann?
            </h2>
            <span className="home-text29">
              Sie haben die Möglichkeit, sich auch an eine externe Meldestelle
              zu wenden. Sie können ferner die Öffentlichkeit anrufen, wenn die
              Meldung bei der Meldestelle fruchtlos bleibt.
            </span>
            <h2 className="home-text30">
              Welche Ansprüche habe ich im Falle von Repressalien?
            </h2>
            <span className="home-text31">
              Erleiden Sie aufgrund Ihrer Meldung wie auch immer geartete
              Nachteile, stehen Ihnen Schadensersatzansprüche zu.
            </span>
            <h2 className="home-text32">
              Was passiert, wenn sich meine Meldung als falsch herausstellt?
            </h2>
            <span className="home-text33">
              Es ist freilich wichtig, dass Sie Meldungen nur im Falle konkreter
              Verdachtsmomente einreichen. Jedoch müssen Hinweisgeber nur im
              Falle grober Fahrlässigkeit sowie Vorsatzes Schadensersatz
              leisten.
            </span>
            <h2 className="home-text34">
              Bis wann wird muss meine Meldung bearbeitet werden?
            </h2>
            <span className="home-text35">
              Der Eingang Ihrer Meldung wird spätestens nach 7 Tagen bestätigt.
              Deren Prüfung muss binnen 3 Monaten abgeschlossen sein.
            </span>
          </div>
        </div>
        <div className="home-container13">
          <div className="home-container14">
            <div className="home-container15">
              <img
                alt="image"
                src="/playground_assets/integrityor.svg"
                className="home-image3"
              />
              <span className="home-text36">
                <span>
                  Intergrityportal bietet Unternehmen und staatlichen Stellen
                  ein einfaches System für 
                </span>
                <span>Rechtskonformität &amp; Compliance</span>
              </span>
            </div>
            <div className="home-container16"></div>
            <div className="home-container17"></div>
            <div className="home-container18"></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: auto;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #fff;
          }
          .home-container01 {
            flex: 0 0 auto;
            width: 100%;
            height: 65px;
            display: flex;
            z-index: 999;
            position: fixed;
            box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.06);
            align-items: center;
            padding-left: 24px;
            padding-right: 24px;
            flex-direction: column;
            justify-content: center;
            background-color: #fff;
          }
          .home-container02 {
            flex: 0 0 auto;
            width: 100%;
            height: 65px;
            display: flex;
            max-width: 1280px;
            align-items: center;
            justify-content: space-between;
          }
          .home-image {
            width: 180px;
            object-fit: cover;
          }
          .home-button {
            font-size: 15px;
            font-style: normal;
            margin-top: 0px;
            font-weight: 600;
            line-height: 1.25em;
            padding-top: 12px;
            padding-left: 24px;
            border-radius: 5px;
            padding-right: 24px;
            padding-bottom: 12px;
            background-color: transparent;
            background-image: linear-gradient(
              180deg,
              #ff5500,
              #ff5500 41%,
              #ff2000 58.2%,
              #ff2000 100%
            );
          }
          .home-container03 {
            height: 433px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-self: stretch;
            margin-top: 65px;
            align-items: center;
            padding-left: 0px;
            padding-right: 0px;
            background-size: cover;
            justify-content: flex-start;
            background-image: url('/playground_assets/alte1.webp');
            background-repeat: no-repeat;
            background-position: top;
          }
          .home-container04 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            margin: auto;
            display: flex;
            position: absolute;
            max-width: 1280px;
            align-self: center;
            align-items: center;
            padding-left: 24px;
            padding-right: 24px;
            justify-content: flex-start;
          }
          .home-container05 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            padding: 24px;
            align-self: center;
            align-items: center;
            justify-content: flex-start;
            background-color: #00000029;
          }
          .home-text03 {
            color: #ffffff;
            font-size: 3.5rem;
            text-align: left;
            line-height: 1.25em;
            margin-bottom: 20px;
            letter-spacing: -0.05em;
          }
          .home-container06 {
            gap: 4rem;
            flex: 1;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            max-width: 1280px;
            align-self: center;
            align-items: center;
            padding-top: 100px;
            border-color: #fff;
            border-style: hidden;
            border-width: 0px;
            padding-left: 24px;
            padding-right: 24px;
            padding-bottom: 100px;
            justify-content: center;
          }
          .home-container07 {
            gap: 20px;
            flex: 1;
            width: 50%;
            display: flex;
            padding: 24px;
            align-self: stretch;
            box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.07),
              0 2px 4px rgba(0, 0, 0, 0.05), 0 12px 24px rgba(0, 0, 0, 0.05);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image1 {
            width: 20px;
            object-fit: cover;
          }
          .home-text04 {
            font-size: 1.375rem;
            font-style: normal;
            font-weight: 600;
            line-height: 28px;
          }
          .home-text05 {
            display: none;
            font-size: 1.375rem;
            font-style: normal;
            font-weight: 600;
            line-height: 28px;
          }
          .home-text06 {
            font-size: 1.2rem;
            font-style: normal;
            text-align: center;
            font-weight: 300;
            line-height: 1.6em;
            margin-bottom: 20px;
            letter-spacing: -0.02em;
          }
          .home-text07 {
            color: rgb(105, 105, 105);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-weight: 300;
            line-height: 1.6em;
            padding-left: 24px;
            margin-bottom: 20px;
            padding-right: 24px;
            letter-spacing: -0.02em;
          }
          .home-button1 {
            font-size: 15px;
            font-style: normal;
            margin-top: 0px;
            font-weight: 600;
            line-height: 1.25em;
            padding-top: 12px;
            padding-left: 24px;
            border-radius: 5px;
            padding-right: 24px;
            padding-bottom: 12px;
            background-color: transparent;
            background-image: linear-gradient(
              180deg,
              #ff5500,
              #ff5500 41%,
              #ff2000 58.2%,
              #ff2000 100%
            );
          }
          .home-container08 {
            gap: 20px;
            flex: 1;
            width: 50%;
            display: flex;
            padding: 24px;
            align-self: stretch;
            box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.07),
              0 2px 4px rgba(0, 0, 0, 0.05), 0 12px 24px rgba(0, 0, 0, 0.05);
            align-items: center;
            flex-direction: column;
          }
          .home-image2 {
            width: 20px;
            object-fit: cover;
          }
          .home-text11 {
            font-size: 1.375rem;
            font-style: normal;
            font-weight: 600;
            line-height: 28px;
          }
          .home-text12 {
            display: none;
            font-size: 1.375rem;
            font-style: normal;
            font-weight: 600;
            line-height: 28px;
          }
          .home-text13 {
            font-size: 1.2rem;
            font-style: normal;
            text-align: center;
            font-weight: 300;
            line-height: 1.6em;
            margin-bottom: 20px;
            letter-spacing: -0.02em;
          }
          .home-text14 {
            color: #ff2000;
            font-size: 1.37rem;
            font-style: normal;
            font-weight: 700;
            line-height: 1.6em;
            margin-bottom: 20px;
            letter-spacing: -0.02em;
          }
          .home-text15 {
            color: rgb(105, 105, 105);
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-weight: 300;
            line-height: 1.6em;
            padding-left: 24px;
            margin-bottom: 20px;
            padding-right: 24px;
            letter-spacing: -0.02em;
          }
          .home-container09 {
            gap: 20px;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            max-width: 1280px;
            align-self: center;
            align-items: center;
            padding-top: 100px;
            border-color: #fff;
            border-style: hidden;
            border-width: 0px;
            padding-left: 24px;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: 100px;
            justify-content: center;
          }
          .home-text16 {
            width: 100%;
            font-size: 3.5rem;
            font-style: normal;
            text-align: center;
            font-weight: 400;
            line-height: 1.25em;
            margin-bottom: 20px;
            letter-spacing: -0.05em;
          }
          .home-text17 {
            color: rgb(105, 105, 105);
            font-size: 1rem;
            max-width: 900px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 300;
            line-height: 1.6em;
            margin-bottom: 20px;
            letter-spacing: -0.02em;
          }
          .home-container10 {
            gap: 20px;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            max-width: 1280px;
            align-self: center;
            align-items: center;
            padding-top: 100px;
            border-color: #fff;
            border-style: hidden;
            border-width: 0px;
            padding-left: 24px;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: 100px;
            justify-content: center;
          }
          .home-text18 {
            width: 100%;
            font-size: 3.5rem;
            font-style: normal;
            text-align: center;
            font-weight: 400;
            line-height: 1.25em;
            margin-bottom: 20px;
            letter-spacing: -0.05em;
          }
          .home-code-embed {
            width: 100%;
            height: 100%;
            padding: 80px;
            overflow: hidden;
            max-width: 900px;
            align-self: stretch;
            background: #f2f3f7;
            margin-top: auto;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: auto;
          }
          .home-container11 {
            gap: 20px;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            max-width: 1280px;
            align-self: center;
            align-items: center;
            padding-top: 200px;
            padding-left: 24px;
            padding-right: 24px;
            flex-direction: column;
            padding-bottom: 200px;
            justify-content: center;
          }
          .home-text19 {
            width: 100%;
            font-size: 3.5rem;
            font-style: normal;
            text-align: center;
            font-weight: 400;
            line-height: 1.25em;
            margin-bottom: 20px;
            letter-spacing: -0.05em;
          }
          .home-container12 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 900px;
            align-self: center;
            align-items: flex-start;
            padding-top: 80px;
            padding-left: 100px;
            padding-right: 100px;
            flex-direction: column;
            padding-bottom: 74px;
            background-color: #f2f3f7;
          }
          .home-text20 {
            width: 100%;
            font-size: 1.375rem;
            font-style: normal;
            margin-top: 35px;
            font-weight: 600;
            line-height: 1.2em;
            margin-bottom: 35px;
            letter-spacing: -0.45px;
          }
          .home-text21 {
            color: #696969;
            width: 100%;
            font-size: 1rem;
            max-width: 900px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-weight: 300;
            line-height: 1.6em;
            margin-bottom: 35px;
            letter-spacing: -0.02em;
          }
          .home-text22 {
            width: 100%;
            font-size: 1.375rem;
            font-style: normal;
            margin-top: 35px;
            font-weight: 600;
            line-height: 1.2em;
            margin-bottom: 35px;
            letter-spacing: -0.45px;
          }
          .home-text23 {
            color: rgb(105, 105, 105);
            width: 100%;
            font-size: 1rem;
            max-width: 900px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-weight: 300;
            line-height: 1.6em;
            margin-bottom: 35px;
            letter-spacing: -0.02em;
          }
          .home-text24 {
            width: 100%;
            font-size: 1.375rem;
            font-style: normal;
            margin-top: 35px;
            font-weight: 600;
            line-height: 1.2em;
            margin-bottom: 35px;
            letter-spacing: -0.45px;
          }
          .home-text25 {
            color: rgb(105, 105, 105);
            width: 100%;
            font-size: 1rem;
            max-width: 900px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-weight: 300;
            line-height: 1.6em;
            margin-bottom: 35px;
            letter-spacing: -0.02em;
          }
          .home-text26 {
            width: 100%;
            font-size: 1.375rem;
            font-style: normal;
            margin-top: 35px;
            font-weight: 600;
            line-height: 1.2em;
            margin-bottom: 35px;
            letter-spacing: -0.45px;
          }
          .home-text27 {
            color: rgb(105, 105, 105);
            width: 100%;
            font-size: 1rem;
            max-width: 900px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-weight: 300;
            line-height: 1.6em;
            margin-bottom: 35px;
            letter-spacing: -0.02em;
          }
          .home-text28 {
            width: 100%;
            font-size: 1.375rem;
            font-style: normal;
            margin-top: 35px;
            font-weight: 600;
            line-height: 1.2em;
            margin-bottom: 35px;
            letter-spacing: -0.45px;
          }
          .home-text29 {
            color: rgb(105, 105, 105);
            width: 100%;
            font-size: 1rem;
            max-width: 900px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-weight: 300;
            line-height: 1.6em;
            margin-bottom: 35px;
            letter-spacing: -0.02em;
          }
          .home-text30 {
            width: 100%;
            font-size: 1.375rem;
            font-style: normal;
            margin-top: 35px;
            font-weight: 600;
            line-height: 1.2em;
            margin-bottom: 35px;
            letter-spacing: -0.45px;
          }
          .home-text31 {
            color: rgb(105, 105, 105);
            width: 100%;
            font-size: 1rem;
            max-width: 900px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-weight: 300;
            line-height: 1.6em;
            margin-bottom: 35px;
            letter-spacing: -0.02em;
          }
          .home-text32 {
            width: 100%;
            font-size: 1.375rem;
            font-style: normal;
            margin-top: 35px;
            font-weight: 600;
            line-height: 1.2em;
            margin-bottom: 35px;
            letter-spacing: -0.45px;
          }
          .home-text33 {
            color: rgb(105, 105, 105);
            width: 100%;
            font-size: 1rem;
            max-width: 900px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-weight: 300;
            line-height: 1.6em;
            margin-bottom: 35px;
            letter-spacing: -0.02em;
          }
          .home-text34 {
            width: 100%;
            font-size: 1.375rem;
            font-style: normal;
            margin-top: 35px;
            font-weight: 600;
            line-height: 1.2em;
            margin-bottom: 35px;
            letter-spacing: -0.45px;
          }
          .home-text35 {
            color: rgb(105, 105, 105);
            width: 100%;
            font-size: 1rem;
            max-width: 900px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-weight: 300;
            line-height: 1.6em;
            margin-bottom: 35px;
            letter-spacing: -0.02em;
          }
          .home-container13 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: 0px;
            padding-right: 0px;
            justify-content: center;
            background-color: #f2f3f7;
          }
          .home-container14 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 1280px;
            align-self: stretch;
            min-height: 400px;
            align-items: flex-start;
            padding-top: 100px;
            padding-left: 24px;
            padding-right: 24px;
            flex-direction: row;
            padding-bottom: 100px;
            justify-content: flex-start;
          }
          .home-container15 {
            gap: 30px;
            width: 40%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-right: 30px;
            flex-direction: column;
          }
          .home-image3 {
            width: 165px;
            object-fit: cover;
          }
          .home-text36 {
            color: rgb(105, 105, 105);
            width: 100%;
            font-size: 14px;
            max-width: 900px;
            align-self: center;
            font-style: normal;
            text-align: left;
            font-weight: 300;
            line-height: 1.6em;
            letter-spacing: -0.02em;
          }
          .home-container16 {
            flex: 0 0 auto;
            width: 20%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container17 {
            flex: 0 0 auto;
            width: 20%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container18 {
            flex: 0 0 auto;
            width: 20%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Home
