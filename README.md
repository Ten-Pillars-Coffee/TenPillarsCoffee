# Teknisk dokumentation for Tema 10 eksamensprojekt

Når man er flere der bidrager til en kodebase, lærer man hurtigt, at ens sædvanlige måder at gøre tingene på ikke nødvendigvis er logisk for alle.
Skriv derfor jeres fælles retningslinjer for punkterne herunder(tilføj gerne flere selv), sådan som det giver bedst mening for jer som gruppe. Dokumentationen sikre, at jeres fælles kodebase forbliver overskuelig, er let at arbejde med og til at forstå for alle, og at I undgå konflikter, og har nemmere ved at hjælpe hinanden undervejs.

Vi har aftalt, at vi følger kode-måden, som vi blev undervist i, med hensyn til at bruge nye brances for hvert component, og vi laver nye astro-sider for hvert component. Samtidig har vi opdelt og bestemt os for, hvilke sider vi laver hver især, så vi ikke kommer til at få errors/komplikationer i github/visuel studio code.

## Projektstruktur:

Beslut, hvordan I vil organisere jeres projekt – struktur for mapper og filer.

- Hvordan organiserer I billeder, fonte og andre ressourcer?
  Vi importerer google font links til fonte i head-elementet, som skal være ens på alle sider. Samme med favicon. Dog forholder vi alle billeder (webp) direkte inde i public mappen. Og vi har alle SVG nede i en assets mappe, som ligger inde i public mappen.

- Hvor placerer I boilerplate?(fx CSS- og JavaScript-filer, der bruges på tværs af projektet)
  Vi har en CSS generel mappe, som er vores boilerplate for css styles variabler fx farver og fonte. Så har vi javaScript fil for elementer, der er det samme for alle sider, netop header, nav og footer. Så de elementer vil forholdes i egne javaScript filer, som linkes til alle pages. Vi linker til <script src="js/page-name.js"></script> nede i bunden af body lige under main og over footer.

- Hvor placerer I HTML, CSS- og JavaScript-filer til fx detaljevisning og listevisning?
  Vi følger den generelle struktur Astro har tilberedt i forvejen. Så HTML/astro pages ligger under pages og hvert enkelt component.astro har sine egne filer under components mappen. Og så har vi en styles mappe til css og en js mappe til javascript.

## Navngivning:

Beslutte hvordan i vil navngive filer og mapper for at sikre en ensartet struktur og undgå forvirring.>

- Hvordan navngiver I filnavne? (fx små bogstaver, ingen mellemrum, brug af - eller _)
  pages/sider skal forholdes små bogstaver, ingen mellemrum og brug af - og _

Men med components, så SKAL de åbenbart have Stort første bogstav.

- Hvordan sikre I at det er til at forstå hvilke HTML-, CSS- og JavaScript-filer der høre sammen?
  Hvis de direkte hænger sammen, så hedder det nøjagtig det samme bortset fra .astro, .css og .js.

## Link til scripts:

- Hvor placerer I script referencer i HTML'en? (fx i <head> med defer attribute, eller sidst i <body>)
  sidst i body.
  <script src="js/page-name.js"></script>

## Git branches:

- Hvordan navngiver I branches, så alle kan forstår hvem der arbejder i branchen og på hvad?(fx lotte-formular)
  Vi sørger for, at alle brances hedder følgende: feature-element/component-navn. Så hvis Sebastian laver footer, så vil brancen for denne component være feature-footer-seb

## Arbejdsflow:

- Hvordan fordeler I arbejdet, så I undgår at flere arbejder i de samme filer samtidigt?
  Vi har lavet en orden inde i figma-to do page, hvor vi kan se, hvem der skal arbejde på hvilke sider og komponenter. Derudover kommunikere vi lige med hinanden, hvis der er én, der har brug for at ændre noget i main branch og sørger for, at der ikke er flere, der laver ændringer i main branch uden at sige noget, fordi det kan skabe komplikationer med github osv.

- Hvordan sikrer I, at commit-beskeder er beskrivende?
  Aktionen skal være det første ord og det skal være i bydeform, og så forholdes det kort i stikord form, så fx hvis Sebastian har lavet noget css på footeren, så vil commit beskeden være: add css ændringer på footer component

- Hvordan kommunikerer i om ændringer i main branchen når element-branch merges?
  Hvis dette sker, så sørger vi for, at der er kun er én person, som ændrer på dette element-branch i main, og andre venter med at merge deres ting til main før personen, som arbejder på main er færdig. Men dette burde undgås ved at vente med at merge ting til main branch til man er helt færdig.

## Kode:

- Hvordan skriver i funktioner i JavaScript?(fx med function keyword eller som arrow functions)
  Vi er blevet bekendt nok med arrow functions, så vi bruger bare den originale måde, som vi har lært. Med nogle ting, så bruger vi bare de skabeloner, som vores underviser har brugt i video ressourcer på fronter, og dér bliver der brugt arrow functions, så vi ender med enten kun at bruge arrow functions eller begge måder.

- Beslut hvilken CSS selector I benytter til referencer i henholdsvis CSS og JavaScript(fx. id'er til JavaScript og Classes til CSS)
  Vi bruger mest classes, fordi det kan bruges flere gange/mere frit.

- Skal filer have korte forklaringer som kommentarer?
  Egentlig ikke. Det håber vi på, ikke behøves. Og hvis vi til sidst ikke forstår hinandens kode, så kan vi bruge chatGPT til at give kommentare til koden. Ellers forklare vi det til hinanden.

# Dokumentation af props, slots og layouts

Dette afsnit skal beskrive, hvordan vi selv har tænkt os at bruge Astro værktøjerne.

- Slots: Hvornår kan man bruge slots, og hvad er det?
  Man kan bruge <slot /> inde i et component, som skal holde andre komponenter. For eksempel, hvis man har et <Card/> komponent, som skal ligge inde i en <Cardsamling/> komponent, så kan man indsætte <Cardsamling/> komponentet på en .astro side, og ligge så mange <Card/> komponenter ind under <Cardsamling/> komponentet på samme page, hvis man altså har lagt et <slot /> tag ind under et grid i <Cardsamling/> komponentet, så kan man style det, som man vil inde i <Cardsamling/>, og det ville så ændre layoutet af <Card/> komponenterne, fordi man satte en <slot /> ind i <Cardsamling/> komponentets grid. Det er en måde, hvor man kan sætte komponenterne ind direkte i en page og bare nøjes med at sætte <slot /> ind på <Cardsamling/>.

  Man kan oså bruge det med Layout komponetet. Inde i Layout.astro, så kan man lave et <body> tag og skrive <slot /> inde i den, så når man bruger Layout komponentet inde på en page, så vil alt, der er inde i body på den page få det css layout man har på Layout komponentet.

- Komponenter: Beskriv, hvordan i laver komponenter og bruger dem på jeres pages.
  Vi laver et komponent i components mappen, som kan kan hedde Button.astro, og herinde bruger vi astro.props oppe i toppen, hvor vi har et indelukket javascript kode, og der skriver vi konstanterne op, som vi skal bruge til vores element. Vores element er et <a> tag, som vi bruger som en knap til at link til at anden side ligesom en CTA, og den får så en klasse, hvor vi putter en tilhørende konstant på, så den kan ændres afhængig, hvilken variant af knappen det skal være (størrelse), så får den en konstant på sit href, så det kan skiftes afhængig, hvilken knap skal linke til hvilken side. Sidst får den også en konstant, som skal repræsentere det tekst, der skal stå som indhold på <a> tagget.
  Neden under dette element, så bruger vi <style> tags til at lave al css'en for knappen og alle de forskellige variant klasser, som kan puttes på valgfrit afhængig af, hvor på hjemmesiden knappen skal være.
  Til sidst importeres <Button /> komponentet ind på den page, den skal være på, og der kan sættes så mange knapper ind, som man vil, og det er så her man kan ændre indholdet på konstanternes plads, så knapperne er forskellige. Derudover kan man sætte de forskellige <style> klasser på, så det netop har forskellige farver og :hover transitions.

- Eksempel på brug: Vis et eksempel på, hvor der bruges

```javascript
//konstanter til knap inde i Button.astro komponentet:
---
const {style, text, linkTo}=Astro.props;
---
```

```javascript
//elementet a med constanterne tilføjet, style-konstanten er der hvor vi tilføjer farve-klasserne i vores <style>
```

```astro
<a class={style} href={linkTo}>{text}</a>
```

---css

<style>
      .cta {
        background-image: url(tilmeld_knap.svg)
        color: var(--white);
      }

      .cta:hover {
        background-image: url(tilmeld_knap_hover.svg)
        color: var(--brown);
        border: var(--brown);
      }
</style>

---

````javascript
//her importeres Button componentet inde i Program1.astro.astro komponentet:
import Button from "../components/Button.astro"




//herunder indsættes componentet i program1.astro og de rette konstanter og klasser er lagt på
---
```astro
<Button text="Vil du vide mere?" linkTo="/bliv-frivillig" style="bliv-frivillig"></Button>
````
