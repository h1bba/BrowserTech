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

// Maximaal toegestane datum instellen op vandaag
const dateInput = document.querySelector('input[name="huwelijkdatum"]');

if (dateInput) {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  dateInput.max = `${yyyy}-${mm}-${dd}`;
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
