function sendFeedback() {
    const text = document.getElementById('feedbackText').value;

    if (!text.trim()) {
        alert('Напишите сообщение');
        return;
    }

    Telegram.WebApp.sendData(text);
    Telegram.WebApp.close(); // ВАЖНО
}
