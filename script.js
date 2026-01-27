function sendFeedback() {
    const text = document.getElementById('feedbackText').value;

    if (text.trim() === '') {
        alert('Пожалуйста, не оставляйте поле пустым :)');
        return;
    }

    alert('Спасибо за обратную связь! Рады стараться для Вас!');
    document.getElementById('feedbackText').value = '';
}

