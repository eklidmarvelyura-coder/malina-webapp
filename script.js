function sendFeedback() {
    const text = document.getElementById('feedbackText').value;

    if (text.trim() === '') {
        alert('Пожалуйста, напишите сообщение');
        return;
    }

    alert('Спасибо за обратную связь!');
    document.getElementById('feedbackText').value = '';
}
