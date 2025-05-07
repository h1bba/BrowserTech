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

Ik heb de titels oftewel de vragen in de de donker blauw gegeven die de NS gebruikt

Voor de kleuren van het formulier ben ik voor wit gegaan om het contrast strak te houden met de tekst.

Voor de input fields heb ik gekozen voor een grijze tint waardoor de gebruiker kan herkennen dat het een input veld is. Omdat ik deze grijs constant gebruik voor alle input fields is er consistentie tussen de vraag en het klikbare.

Om de gebruiker een feedback te geven heb ik een hover state op de inputs gestyled, zo worden de borderds van de inputs de kleur van de NS, zo is het nog duidelijk voor de gebruiker.

### type="date"

Voor de datums heb ik gebruik gemaakt van type=“date”, waardoor er een agenda omhoog popt van de browser zelf.

Ik heb als fallback de max datum aangegeven die ik logisch vind en een JavaScript functie geschreven zodat de de gebruiker op specifieke vragen niet verder in de tijd kunnen selecteren (tot vandaag dus) en deze vervangt de max property van de html element zodra de JavaScript wordt geladen.

Zo heb ik een progressive enhancement feature gemaakt en de UX ervaring voor de agenda’s een stukje versterkt voor de gebruiker

Ik heb gekozen om de benodigde text velden een placeholder te geven waardoor de gebruiker een voorbeeld krijgt van een realistisch antwoord.

FOTO PLACEHOLDERS
