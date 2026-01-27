function sendFeedback() {
    const text = document.getElementById('feedbackText').value;

    if (text.trim() === '') {
        alert('Пожалуйста, напишите сообщение');
        return;
    }

    if (window.Telegram && Telegram.WebApp) {
        // Отправляем данные боту
        Telegram.WebApp.sendData(JSON.stringify({
            feedback: text,
            user: Telegram.WebApp.initDataUnsafe.user?.username || 'неизвестный'
        }));

        alert('Спасибо за обратную связь!'); // пока не закрываем Web App
        document.getElementById('feedbackText').value = '';
    } else {
        alert('Ошибка: откройте Web App через Telegram');
    }
}

