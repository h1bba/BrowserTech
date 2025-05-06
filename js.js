document.documentElement.classList.add('js-enabled');

// extra vragen displayen
const radioJa = document.querySelector('input[name="getrouwd"][value="ja"]');
const radioNee = document.querySelector('input[name="getrouwd"][value="nee"]');
const extraVragen = document.getElementById('extravragen');

function toggleExtraVragen() {
    if (radioJa.checked) {
        extraVragen.style.display = 'block';
    } else {
        extraVragen.style.display = 'none';
    }
}

radioJa.addEventListener('change', toggleExtraVragen);
radioNee.addEventListener('change', toggleExtraVragen);
toggleExtraVragen();

// Kinderen - extra vragen
const kinderenRadios = document.querySelectorAll('input[name="kinderen"]');
const extraVragen1c = document.getElementById('extravragen1c');

function toggleExtraVragen1c() {
    const isJa = [...kinderenRadios].some(radio => radio.checked && radio.value === "ja");
    extraVragen1c.style.display = isJa ? 'block' : 'none';
}

kinderenRadios.forEach(radio => {
    radio.addEventListener('change', toggleExtraVragen1c);
});
toggleExtraVragen1c();

// Kind overleden => toon kleinkindvraag
const kindOverledenRadios = document.querySelectorAll('input[name="kindoverleden"]');
const kleinkinderenVraag = document.getElementById('kleinkinderenvraag');

function toggleKleinkinderenVraag() {
    const isKindOverledenJa = [...kindOverledenRadios].some(radio => radio.checked && radio.value === "ja");
    kleinkinderenVraag.style.display = isKindOverledenJa ? 'block' : 'none';
}

kindOverledenRadios.forEach(radio => {
    radio.addEventListener('change', toggleKleinkinderenVraag);
});
toggleKleinkinderenVraag();

// file input tonen bij 'geregistreerd = ja'
const radioGeregistreerd = document.querySelectorAll('input[name="geregistreerd"]');
const fileUpload = document.getElementById('akte-upload');

function toggleFileUpload() {
    const isJa = [...radioGeregistreerd].some(radio => radio.checked && radio.value === "ja");
    fileUpload.style.display = isJa ? "block" : "none";
}

radioGeregistreerd.forEach(radio => {
    radio.addEventListener('change', toggleFileUpload);
});
toggleFileUpload();

// datum naar vandaag voor de type=file
const dateInput = document.querySelector('input[name="huwelijkdatum"]');

if (dateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // maand is 0-based
    const dd = String(today.getDate()).padStart(2, '0');

    const todayStr = `${yyyy}-${mm}-${dd}`;
    dateInput.max = todayStr;
}