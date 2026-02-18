// Sample Habit data
// {
//   id: "h1",
//   name: "Drink water",
//   type: "daily",
//   schedule: "everyday",
//   archivedAt: null
// }

// Sample Check in Data 
//{
//   id: "c1",
//   habitId: "h1",
//   date: "2026-02-18",
//   value: 1,
//   deletedAt: null
// }
export const initialState = {
    version: 1,
    habits: [
        {id: "h1", name: "Drink water", type: "daily", schedule: "everyday", archivedAt: null},
        {id: "h2", name: "Exercise", type: "weekly", weeklyTarget: 3, archivedAt: null},
        {id: "h3", name: "Read a book", type: "daily", schedule: "everyday", archivedAt: null},
    ],
    checkIns: []
};
