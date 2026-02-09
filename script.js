document.getElementById('save').addEventListener('click', () => {
    const note = document.getElementById('note').value;
    fetch('/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ note })
    });
});

document.addEventListener('DOMContentLoaded', () => {
    fetch('/load')
        .then(response => response.json())
       .then(data => {
            document.getElementById('note').value = data.note;
        });
});