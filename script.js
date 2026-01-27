function sendFeedback() {
    const text = document.getElementById('feedbackText').value;

    if (text.trim() === '') {
        alert('Пожалуйста, напишите сообщение');
        return;
    }
alert('Спасибо за обратную связь! Рады стараться для Вас!');
    if (window.Telegram && Telegram.WebApp) {
        Telegram.WebApp.sendData(text);
        Telegram.WebApp.close();
    }
}
