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

![image](https://github.com/user-attachments/assets/6b420955-2258-4edb-a756-ce459d54cb13)

![image](https://github.com/user-attachments/assets/b6bfd3dd-9e5a-44c3-b38a-2eb2f848b39d)


![image](https://github.com/user-attachments/assets/a4ae871c-93f1-4a61-a6a1-1c4c020ab108)


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

![image](https://github.com/user-attachments/assets/4c545063-8cbd-4eba-8203-cb9489ece499)

![image](https://github.com/user-attachments/assets/fe14c930-5423-443c-bba3-a2b62129d20b)


### Conditionele vragen

Conditionele vragen worden snel over het hoofd gezien in een formulier, de logica er achter moet kloppen, omdat als JavaScript niet zou werken deze wel getoond moeten worden.

Daarom heb ik gekozen om via JavaScript een class toe te voegen op de html genaamd js-enabled. In de CSS kan ik dan door deze class te gebruiken conditionele vragen verbergen als ze niet nodig zijn.

Dit is een stukje progressive enhancement die alweer de UX verbeterd.

![Bezigmetopnemen2025-05-07044602-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/74dc5289-0c51-4063-8348-fb20399a949c)

![image](https://github.com/user-attachments/assets/9acbe6a5-79bb-4da7-a070-65d389953e2b)

Ik heb gekozen om de conditionele vragen ook een grijze tint als achtergrond te geven zodat de gebruiker deze kan onderscheiden

### Bestanden uploaden

![image](https://github.com/user-attachments/assets/9ea4defe-706d-450a-84c8-92cb8efc5fd0)

Met input type="file" kunnen we gebruik maken van de browser zijn file uploader.

Om de juiste bestandstype aan te nemen kunnen gebruik maken van de accept="" property. Dan weet de explorer welk bestand uploadbaar is. Dit doen we in de html door accept="image/\*,.pdf,.docx" in de element toe te voegen, nu accepteert hij dus alle soorten images, pdf's en documenten. Ik heb gekozen voor deze file type's omdat de context van de vraag om een kopie van een akte vraagt.

### BSN Nummer

![image](https://github.com/user-attachments/assets/4ab2e93b-4cbb-4fec-bdc0-625d6de5bbed)

De vraag voor de BSN-nummer maakt gebruik van de property pattern="\d{9}". de \d staat voor het alleen accepteren van digits/cijfers en de {9} staat voor het aantal.

Ik heb hier ook een hulptekst gegeven door semantisch gebruik te maken van de small element

### Post-code

Voor de postcode maken we weer gebruik van een pattern, namelijk: "^\d{4}\s?[A-Z]{2}$"
Wat eigenlijk staat voor, 4 digits, een optionele spatie, en 2 hoofdletters.

![image](https://github.com/user-attachments/assets/3879cacc-648c-4e76-abd9-f11ebbdbc750)


### Validatie

![image](https://github.com/user-attachments/assets/97c480b3-8208-4bfe-aed8-51d5000bc599)

![image](https://github.com/user-attachments/assets/dcf63a47-56f3-465d-b385-032ec8b40b6a)

De validatie is op 2 momenten belangrijk, de eerste is tijden het verliezen van de focus, dit betekent dat de gebruiker waarschijnlijk klaar is met typen waarop wij inspelen.
Ik heb via JavaScript een EventListener toegevoegd die luistert naar wanneer de "blur" is (het verliezen van focus), deze handelt af of iets valid of invalid is en geeft een corresponderende feedback.
Dit doen we voor progressive enhancement, omdat de timing realtime is wanneer een gebruiker een veld verlaat. We combineren deze functie met de css class :user-invalid, dit is een client sided feature die kijkt valideert. We geven aan de hand van het antwoord de kleur rood of groen.

De 2e validatie moment is wanneer er op submit wordt gedrukt. Die kijkt vervolgens of alles in de html semantisch "required" heeft staan als property.
Om de styling niet om te gooien heb ik gekozen om een element te creëeren na de label, zodat het er netjes onder staat en niet de vraag verspringt.


![image](https://github.com/user-attachments/assets/1b72a225-f7b0-4c86-87a6-98ff739fe2c2)


### Herstellen van antwoorden

Om de gebruiker zijn progress te behouden slaan we de antwoorden op in Local Storage. Deze maakt gebruik van de browser feature caching en dit kunnen we latern dus aanroepen om de antwoorden weer terug in de velden te stoppen.

![image](https://github.com/user-attachments/assets/10d9f228-3aef-408c-b76b-994ec4a0d554)


### Aantal formulieren

![Bezigmetopnemen2025-05-07051351-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/281b8642-47de-4510-b1b9-44e04b9fd857)


Een stapje verder dan een vraag conditioneel weergeven is het aantal erbij mixen. De context van de vraag gaat over het aantal verkrijgers en aan de hand van het aantal krijg je het aantal formulieren te zien.

Deze heb ik van te voren in de HTML moeten stoppen en met de js-enabled class weer verstopt. Via deze manier is er een fallback als JavaScript niet mocht werken, dan wordt er toch 5 formulieren weergegeven.

Omdat het aantal van de value eigenlijk een string is moeten we gebruik maken van parseInt, om het aantal naar een integer te veranderen, daarmee kunnen we de aantal verkrijgers formulieren weergeven.

Met een klein trukje door te kijken naar de prefix in de naam kunnen we in de html de name gebruiken als een soort filter

### Reflectie

Ik raakte te gefocused op het doornemen van de belastingformulier zelf en ik heb voor het sorteren en opschrijven van de vragen die verschillende inputs hadden veel verwarring gehad en tijd verdreven om de vragenlijst op een logische manier kloppend te maken.

#### Wat ik heb geleerd binnen dit project

- Verschillende input types manipuleren zoals date, of number etc.
- Hoe ik patterns kan gebruiken met regex
- Fallback states voor html elementen
- Progressive enhancement conditional hiding
- Structureren van vragen en herkennen van componenten
- Validatie van velden
- Local Storage gebruik
