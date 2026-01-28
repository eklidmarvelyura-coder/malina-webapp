function sendFeedback() {
    const text = document.getElementById('text').value;

    if (!text.trim()) {
        alert('Введите текст');
        return;
    }

    fetch('http://localhost:3000/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
    })
    .then(() => {
        alert('Отзыв отправлен 👍');
    })
    .catch(() => {
        alert('Ошибка отправки');
    });
}
