console.log('WebApp script loaded');

if (window.Telegram && Telegram.WebApp) {
    console.log('Telegram WebApp detected');
    Telegram.WebApp.ready();
} else {
    console.log('NOT Telegram WebApp');
}
function sendFeedback() {
    const text = document.getElementById('feedbackText').value;

    console.log('Button clicked');
    console.log('Text:', text);

    if (!window.Telegram || !Telegram.WebApp) {
        alert('НЕ TELEGRAM WEB APP');
        return;
    }

    Telegram.WebApp.sendData(text);
    Telegram.WebApp.close();
}


