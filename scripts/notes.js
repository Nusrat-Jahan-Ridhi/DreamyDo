const themeSelector = document.getElementById('themeSelector');
const saveNoteButton = document.getElementById('saveNote');
const noteInput = document.getElementById('noteInput');
const noteList = document.getElementById('noteList');

// Load theme and notes
window.onload = function() {
  const savedTheme = localStorage.getItem('notesTheme');
  if (savedTheme) {
    document.body.className = savedTheme;
    themeSelector.value = savedTheme;
  }
  loadNotes();
};

// Theme change handler
themeSelector.addEventListener('change', function() {
  const selectedTheme = this.value;
  document.body.className = selectedTheme;
  localStorage.setItem('notesTheme', selectedTheme);
});

// Save new note
saveNoteButton.addEventListener('click', function() {
  const noteText = noteInput.value.trim();
  if (noteText !== "") {
    const notes = getNotesFromStorage();
    notes.push(noteText);
    localStorage.setItem('notes', JSON.stringify(notes));
    noteInput.value = "";
    loadNotes();
  }
});

// Load notes from localStorage
function loadNotes() {
  const notes = getNotesFromStorage();
  noteList.innerHTML = "";
  notes.forEach((note, index) => {
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');
    noteDiv.innerHTML = `
      <p>${note}</p>
      <button class="deleteNote" data-index="${index}">Delete ❌</button>
    `;
    noteList.appendChild(noteDiv);
  });

  // Delete note event listener
  document.querySelectorAll('.deleteNote').forEach(button => {
    button.addEventListener('click', function() {
      const index = this.dataset.index;
      const notes = getNotesFromStorage();
      notes.splice(index, 1);
      localStorage.setItem('notes', JSON.stringify(notes));
      loadNotes();
    });
  });
}

// Get notes from localStorage
function getNotesFromStorage() {
  const notes = localStorage.getItem('notes');
  return notes ? JSON.parse(notes) : [];
}
