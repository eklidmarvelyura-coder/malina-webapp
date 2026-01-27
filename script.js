function sendFeedback() {
    const text = document.getElementById('feedbackText').value;

    if (!text.trim()) {
        alert('Напишите сообщение');
        return;
    }

    if (window.Telegram && Telegram.WebApp) {
        Telegram.WebApp.sendData(text);
        alert('Отзыв отправлен 👍');
        document.getElementById('feedbackText').value = '';
    } else {
        alert('Web App должен быть открыт через Telegram');
    }
}
