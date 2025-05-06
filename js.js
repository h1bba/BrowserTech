document.documentElement.classList.add("js-enabled");

// Huwelijksvragen tonen
const getrouwdRadios = document.querySelectorAll('input[name="getrouwd"]');
const extravragen = document.getElementById("extravragen");

function toggleGetrouwd() {
  const isJa = [...getrouwdRadios].some((r) => r.checked && r.value === "ja");
  extravragen.style.display = isJa ? "block" : "none";
}

getrouwdRadios.forEach((r) => r.addEventListener("change", toggleGetrouwd));
toggleGetrouwd();

// Kinderen: toon extra vragen
const kinderenRadios = document.querySelectorAll('input[name="kinderen"]');
const extravragen1c = document.getElementById("extravragen1c");

function toggleKinderen() {
  const isJa = [...kinderenRadios].some((r) => r.checked && r.value === "ja");
  extravragen1c.style.display = isJa ? "block" : "none";

  // als zichtbaar: check meteen of kleinkinderenvraag ook moet komen
  if (isJa) toggleKleinkinderen();
}

kinderenRadios.forEach((r) => r.addEventListener("change", toggleKinderen));
toggleKinderen();

// Kind overleden => toon kleinkinderenvraag
const kindOverledenRadios = document.querySelectorAll(
  'input[name="kindoverleden"]'
);
const kleinkinderenvraag = document.getElementById("kleinkinderenvraag");

function toggleKleinkinderen() {
  const isJa = [...kindOverledenRadios].some(
    (r) => r.checked && r.value === "ja"
  );
  kleinkinderenvraag.style.display = isJa ? "block" : "none";
}

kindOverledenRadios.forEach((r) =>
  r.addEventListener("change", toggleKleinkinderen)
);
toggleKleinkinderen();

// File input tonen bij 'geregistreerd = ja'
const geregistreerdRadios = document.querySelectorAll(
  'input[name="geregistreerd"]'
);
const akteUpload = document.getElementById("akte-upload");

function toggleAkteUpload() {
  const isJa = [...geregistreerdRadios].some(
    (r) => r.checked && r.value === "ja"
  );
  akteUpload.style.display = isJa ? "block" : "none";
}

geregistreerdRadios.forEach((r) =>
  r.addEventListener("change", toggleAkteUpload)
);
toggleAkteUpload();

// Date input maximaal naar vandaag
const today = new Date().toISOString().split("T")[0];
document
  .querySelectorAll('input[type="date"][name^="geboortedatum_"]')
  .forEach((dateField) => {
    dateField.max = today;
  });

const huwelijkDatumInput = document.querySelector(
  'input[name="huwelijkdatum"]'
);
if (huwelijkDatumInput) {
  huwelijkDatumInput.max = today;
}

// Aantal verkrijgers
const aantalSelect = document.getElementById("aantalverkrijgers");
const verkrijgers = document.querySelectorAll(".verkrijger");

aantalSelect.addEventListener("change", () => {
  const aantal = parseInt(aantalSelect.value, 10) || 0;

  verkrijgers.forEach((verkrijger) => {
    const index = parseInt(verkrijger.dataset.index, 10);
    verkrijger.style.display = index <= aantal ? "block" : "none";
  });
});

// Buitenlandadres per verkrijger tonen
document.querySelectorAll('input[name^="buitenland_"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    const name = radio.name; // bijvoorbeeld: buitenland_1
    const index = name.split("_")[1];
    const container = document.getElementById(`buitenlandadres_${index}`);
    const isJa = document.querySelector(
      `input[name="${name}"][value="ja"]`
    ).checked;

    if (container) {
      container.style.display = isJa ? "block" : "none";
    }
  });
});

// Initiale check uitvoeren bij laden
document.querySelectorAll('input[name^="buitenland_"]').forEach((radio) => {
  const name = radio.name;
  const index = name.split("_")[1];
  const container = document.getElementById(`buitenlandadres_${index}`);
  const isJa = document.querySelector(
    `input[name="${name}"][value="ja"]`
  )?.checked;

  if (container) {
    container.style.display = isJa ? "block" : "none";
  }
});

// Local storage opslaan en herstellen
document.querySelectorAll("input, select, textarea").forEach((field) => {
  if (!field.name) return;

  // herstel
  const saved = localStorage.getItem(field.name);
  if (saved) {
    if (field.type === "radio" || field.type === "checkbox") {
      field.checked = field.value === saved;
    } else {
      field.value = saved;
    }
  }

  // opslaan
  field.addEventListener("input", () => {
    if (field.type === "radio" || field.type === "checkbox") {
      if (field.checked) {
        localStorage.setItem(field.name, field.value);
      }
    } else {
      localStorage.setItem(field.name, field.value);
    }
  });
});
