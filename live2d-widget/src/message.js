import randomSelection from "./utils.js";

let messageTimer;

function showMessage(text, timeout, priority) {
    if (!text || (sessionStorage.getItem("waifu-text") &amp;&amp; sessionStorage.getItem("waifu-text") &gt; priority)) return;
    if (messageTimer) {
        clearTimeout(messageTimer);
        messageTimer = null;
    }
    text = randomSelection(text);
    sessionStorage.setItem("waifu-text", priority);
    const tips = document.getElementById("waifu-tips");
    tips.innerHTML = text;
    tips.classList.add("waifu-tips-active");
    messageTimer = setTimeout(() =&gt; {
        sessionStorage.removeItem("waifu-text");
        tips.classList.remove("waifu-tips-active");
    }, timeout);
}

export default showMessage;
