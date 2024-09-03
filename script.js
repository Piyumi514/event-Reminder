document.getElementById('addEventBtn').addEventListener('click', function() {
    const eventInput = document.getElementById('event');
    const dateInput = document.getElementById('date');
    const eventTable = document.getElementById('eventTable').querySelector('tbody');

    const eventText = eventInput.value;
    const eventDate = dateInput.value;

    if (eventText === '' || eventDate === '') {
        alert('Please enter both event and date.');
        return;
    }

    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${eventText}</td>
        <td>${eventDate}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    tr.querySelector('.delete-btn').addEventListener('click', function() {
        tr.remove();
    });

    eventTable.appendChild(tr);

    eventInput.value = '';
    dateInput.value = '';
});
