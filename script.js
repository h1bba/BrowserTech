document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", function () {
  console.log("Dom geladen");

  // Extra vragen moeten altijd zichtbaar zijn als JS niet werkt
  // Ik zorg dat ze standaard aanstaan en verberg ze pas als JS actief is
  document
    .querySelectorAll("#extravragen, #buitenlandadres, #extravragen1c")
    .forEach((el) => (el.style.display = "block"));
  console.log("Extra vragen gehide");

  // Ik verstop een element en haal de required attributen weg

  function verbergElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.style.display = "none";
      element
        .querySelectorAll("input, select, textarea")
        .forEach((input) => input.removeAttribute("required"));
      console.log(`Element verborgen: ${selector}`);
    }
  }

  // Ik maak een eerder verborgen element weer zichtbaar en voeg required toe

  function toonElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.style.display = "block";
      element
        .querySelectorAll("input, select, textarea")
        .forEach((input) => input.setAttribute("required", "true"));
      console.log(`Element getoond: ${selector}`);
    }
  }

  // Als iemand "ja" kiest bij getrouwd, toon extra vragen
  document.querySelectorAll("input[name='getrouwd']").forEach((input) => {
    input.addEventListener("change", function () {
      console.log(`Gekozen bij getrouwd: ${this.value}`);
      this.value === "ja"
        ? toonElement("#extravragen")
        : verbergElement("#extravragen");
    });
  });

  // Zelfde idee, maar dan voor buitenlandadres
  document.querySelectorAll("input[name='buitenland']").forEach((input) => {
    input.addEventListener("change", function () {
      console.log(`Gekozen bij buitenlandadres: ${this.value}`);
      this.value === "ja"
        ? toonElement("#buitenlandadres")
        : verbergElement("#buitenlandadres");
    });
  });

  // Extra vragen van 1c
  document.querySelectorAll("input[name='kinderen']").forEach((input) => {
    input.addEventListener("change", function () {
      console.log(`Gekozen bij getrouwd: ${this.value}`);
      this.value === "ja"
        ? toonElement("#extravragen1c")
        : verbergElement("#extravragen1c");
    });
  });

  // Ik stel de maximale datum in voor huwelijksdatum op vandaag en update dit elk uur

  function updateMaxDatum() {
    const vandaag = new Date().toISOString().split("T")[0]; // Zorgt dat de datum klopt
    const huwelijkDatumInput = document.querySelector(
      "input[name='huwelijkdatum']"
    );
    if (huwelijkDatumInput) {
      huwelijkDatumInput.setAttribute("max", vandaag);
      console.log(`Max huwelijksdatum ingesteld: ${vandaag}`);
    }
  }

  // Ik stel de max datum in bij het laden van de pagina
  updateMaxDatum();

  // Ik update de max datum elk uur
  setInterval(updateMaxDatum, 3600000); // 3600000 ms = 1 uur
});
