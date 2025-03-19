document.addEventListener("DOMContentLoaded", function () {
    const radioJa = document.querySelector('input[name="getrouwd"][value="ja"]');
    const radioNee = document.querySelector('input[name="getrouwd"][value="nee"]');
    const extraVragen = document.getElementById("extravragen");

    function toggleExtraVragen() {
        if (radioJa.checked) {
            extraVragen.style.display = "block";
            extraVragen.style.opacity = "1";

        } else {
            extraVragen.style.display = "none";
            extraVragen.style.opacity = "0";
        }
    }

    radioJa.addEventListener("change", toggleExtraVragen);
    radioNee.addEventListener("change", toggleExtraVragen);
});