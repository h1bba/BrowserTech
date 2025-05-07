# Opdracht

Voor het vak Browser Tech wordt er gevraagd om een belasting formulier simulatie te maken in de style van de NS

Het doel is hierbij om semantische code te schrijven en het formulier toegankelijk te houden door het gebruik van progressive enhancement. Zo moet het formulier werkend zijn als JavaScript niet geladen zou zijn. Er wordt ook gevraagd om een goede ux ervaring te bieden voor de gebruiker, dit bevat error-states en feedback met wat de user ziet en begrijpt.

## Onderzoek

Ik ben eerst begonnen met onderzoek doen naar het belasting formulier zelf. Het doel was hierbij om de verschillende soorten componenten/inputs te simuleren aan de hand van de vragen van de belastingdienst.

Het belastingdienst formulier is een langwerpig en inefficiënte formulier die veel valt te verbeteren door het te digitaliseren.

Er worden veel dure termen gebruikt en onnodige velden als je niet aan extra voorwaarden voldoet, daardoor wordt het formulier als inefficiënt gezien.

Na veel leeswerk en hoofdpijn ben ik op de volgende vragen kunnen komen:

VRAGEN EN input types

## Ontwikkeling

### NS Huisstyle

Om de huisstijl van de NS aan te houden heb ik op de site van de NS de kleuren uitgezocht en vervolgens in mijn eigen project geïmplementeerde

FOTO SITE NS
FOTO ROOT

De NS style is blokkerig en schreefloos, ze gebruiken hun eigen font genaamd NS Sans. Voor copyright redenen laten we die in de .gitignore staan.

Ik heb de titels oftewel de vragen in de de donker blauw gegeven die de NS gebruikt, dit creëert een strak contrast.

Voor de kleuren van het formulier ben ik voor wit gegaan om het contrast strak te houden met de tekst.

Voor de input fields heb ik gekozen voor een grijze tint waardoor de gebruiker kan herkennen dat het een input veld is. Omdat ik deze grijs constant gebruik voor alle input fields is er consistentie tussen de vraag en het klikbare.

Voor de radio buttons heb ik gekozen om de gele accent kleur te geven die de NS heeft. Zo valt het meer in het huisstijl.

Om de gebruiker een feedback te geven heb ik een hover state op de inputs gestyled, zo worden de borderds van de inputs de kleur van de NS, zo is het nog duidelijk voor de gebruiker.

### Datums

Voor de datums heb ik gebruik gemaakt van type=“date”, waardoor er een agenda omhoog popt van de browser zelf.

Ik heb als fallback de max datum aangegeven die ik logisch vind en een JavaScript functie geschreven zodat de de gebruiker op specifieke vragen niet verder in de tijd kunnen selecteren (tot vandaag dus) en deze vervangt de max property van de html element zodra de JavaScript wordt geladen.

Zo heb ik een progressive enhancement feature gemaakt en de UX ervaring voor de agenda’s een stukje versterkt voor de gebruiker

Ik heb gekozen om de benodigde text velden een placeholder te geven waardoor de gebruiker een voorbeeld krijgt van een realistisch antwoord.

FOTO PLACEHOLDERS

### Conditionele vragen

Conditionele vragen worden snel over het hoofd gezien in een formulier, de logica er achter moet kloppen, omdat als JavaScript niet zou werken deze wel getoond moeten worden.

Daarom heb ik gekozen om via JavaScript een class toe te voegen op de html genaamd js-enabled. In de CSS kan ik dan door deze class te gebruiken conditionele vragen verbergen als ze niet nodig zijn.

Dit is een stukje progressive enhancement die alweer de UX verbeterd.

GIF

FOTO CODE

Ik heb gekozen om de conditionele vragen ook een grijze tint als achtergrond te geven zodat de gebruiker deze kan onderscheiden

### Bestanden uploaden

Met input type="file" kunnen we gebruik maken van de browser zijn file uploader.

Om de juiste bestandstype aan te nemen kunnen gebruik maken van de accept="" property. Dan weet de explorer welk bestand uploadbaar is. Dit doen we in de html door accept="image/\*,.pdf,.docx" in de element toe te voegen, nu accepteert hij dus alle soorten images, pdf's en documenten. Ik heb gekozen voor deze file type's omdat de context van de vraag om een kopie van een akte vraagt.

### BSN Nummer

De vraag voor de BSN-nummer maakt gebruik van de property pattern="\d{9}". de \d staat voor het alleen accepteren van digits/cijfers en de {9} staat voor het aantal.

Ik heb hier ook een hulptekst gegeven door semantisch gebruik te maken van de small element

### Validatie

Wanneer en waarom

User-invalid voor de client side

JS die er achter zit

Foutmelding

Succes melding

Waarom de blur

### Herstellen van antwoorden

Local storage opslaan

Local storage herstellen

### Aantal formulieren

Een stapje verder dan een vraag conditioneel weergeven is het aantal erbij mixen. De context van de vraag gaat over het aantal verkrijgers en aan de hand van het aantal krijg je het aantal formulieren te zien.

Deze heb ik van te voren in de HTML moeten stoppen en met de js-enabled class weer verstopt. Via deze manier is er een fallback als JavaScript niet mocht werken, dan wordt er toch 5 formulieren weergegeven.

Omdat het aantal van de value eigenlijk een string is moeten we gebruik maken van parseInt, om het aantal naar een integer te veranderen, daarmee kunnen we de aantal verkrijgers formulieren weergeven.

Met een klein trukje door te kijken naar de prefix in de naam kunnen we in de html de name gebruiken als een soort filter

### Reflectie

Ik raakte te gefocused op het doornemen van de belastingformulier zelf en ik heb voor het sorteren en opschrijven van de vragen die verschillende inputs hadden veel verwarring gehad en tijd verdreven om de vragenlijst op een logische manier kloppend te maken.

#### Wat ik heb geleerd binnen dit project
