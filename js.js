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

// Vraag 3a: toon 3b indien 'ja' geselecteerd is
const vraag3aRadios = document.querySelectorAll('input[name="3a"]');
const vraag3b = document.getElementById("vraag3b");

function toggleVraag3b() {
  const isJa = [...vraag3aRadios].some((r) => r.checked && r.value === "ja");
  if (vraag3b) {
    vraag3b.style.display = isJa ? "block" : "none";
  }
}

vraag3aRadios.forEach((radio) => {
  radio.addEventListener("change", toggleVraag3b);
});
toggleVraag3b();

// Vraag 3b: toon datumveld alleen als 'vastdatum' is gekozen
const uitkeringstopRadios = document.querySelectorAll(
  'input[name="uitkeringstop"]'
);
const vastdatumContainer = document.getElementById("vastdatum-container");

function toggleVastdatum() {
  const isVastdatum = [...uitkeringstopRadios].some(
    (r) => r.checked && r.value === "vastdatum"
  );
  if (vastdatumContainer) {
    vastdatumContainer.style.display = isVastdatum ? "block" : "none";
  }
}

uitkeringstopRadios.forEach((radio) => {
  radio.addEventListener("change", toggleVastdatum);
});
toggleVastdatum();

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

// Genereer automatische validatie met feedback voor elk tekst-, getal- en datumveld
document
  .querySelectorAll(
    'input[type="text"], input[type="number"], input[type="date"], input[type="email"]'
  )
  .forEach((field) => {
    if (!field.name) return;

    // Maak en plaats feedback-div
    const feedback = document.createElement("div");
    feedback.classList.add("feedback-message");

    // Voeg na het inputveld toe
    field.insertAdjacentElement("afterend", feedback);

    // Validatie bij verlaten veld
    field.addEventListener("blur", () => {
      if (field.checkValidity()) {
        field.classList.add("valid");
        field.classList.remove("invalid");
        feedback.textContent = "U heeft dit veld correct ingevuld.";
        feedback.className = "feedback-message success-message";
      } else {
        field.classList.remove("valid");
        field.classList.add("invalid");
        feedback.textContent = "Dit veld is niet correct ingevuld.";
        feedback.className = "feedback-message error-message";
      }
    });

    // Reset feedback bij typen
    field.addEventListener("input", () => {
      field.classList.remove("invalid");
      feedback.textContent = "";
      feedback.className = "feedback-message";
    });
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
