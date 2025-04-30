const calendar = document.getElementById('calendar');
const reminderModal = document.getElementById('reminderModal');
const closeModal = document.getElementById('closeModal');
const saveReminder = document.getElementById('saveReminder');
const reminderText = document.getElementById('reminderText');
const selectedDateEl = document.getElementById('selectedDate');

let selectedDate = null;

// THEME SELECTOR
const themeSelector = document.getElementById('themeSelector');
window.onload = function () {
  const savedTheme = localStorage.getItem('calendarTheme');
  if (savedTheme) {
    document.body.className = savedTheme;
    themeSelector.value = savedTheme;
  }
  generateCalendar();
};

themeSelector.addEventListener('change', function () {
  const selectedTheme = this.value;
  document.body.className = selectedTheme;
  localStorage.setItem('calendarTheme', selectedTheme);
});

// GENERATE CALENDAR
function generateCalendar() {
  const date = new Date();
  date.setDate(1);
  const month = date.getMonth();
  const year = date.getFullYear();

  const lastDay = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = date.getDay();

  calendar.innerHTML = "";

  const days = [];

  for (let i = 0; i < firstDayIndex; i++) {
    days.push(`<div></div>`);
  }

  for (let i = 1; i <= lastDay; i++) {
    const key = `${year}-${month + 1}-${i}`;
    const reminder = localStorage.getItem(key);
    const icon = reminder ? "💖" : "";

    days.push(`
      <div class="day" data-date="${key}">
        ${i}
        <div class="icon">${icon}</div>
      </div>
    `);
  }

  calendar.innerHTML = days.join("");

  // Add event listeners to day cells
  document.querySelectorAll('.day').forEach(day => {
    day.addEventListener('click', function () {
      selectedDate = this.dataset.date;
      selectedDateEl.textContent = selectedDate;
      reminderText.value = localStorage.getItem(selectedDate) || "";
      reminderModal.classList.remove('hidden');
    });
  });
}

// MODAL CONTROLS
closeModal.addEventListener('click', () => {
  reminderModal.classList.add('hidden');
});

saveReminder.addEventListener('click', () => {
  if (selectedDate && reminderText.value.trim() !== "") {
    localStorage.setItem(selectedDate, reminderText.value);
  }
  reminderModal.classList.add('hidden');
  generateCalendar();
});

