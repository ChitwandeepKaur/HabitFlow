

export function renderToday(state, todayISO) {
    const dueListEl = document.getElementById('due-list');
    const emptyEl = document.getElementById('due-empty');

    //clear all previous list items
    dueListEl.innerHTML = '';

    //getting all the habits that are not archived and of type daily
    const dueHabits = state.habits.filter(h => h.archivedAt === null && h.type === 'daily');

    //if there are no habits due today, show the empty state
    if (dueHabits.length === 0) {
        emptyEl.hidden = false;
        return;
    }

    //by default, hide the empty state as we have some habits to show
    emptyEl.hidden = true;

    //render each habit as a list item
    dueHabits.forEach(habit => {
        const li = document.createElement('li');
        li.textContent = habit.name;
        dueListEl.appendChild(li);
    });

}