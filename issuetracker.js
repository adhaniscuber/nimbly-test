/*
  Issue Tracker List Script
  Objective: Process the issue list based on priority and tag matches
  Time Limit: 45 minutes

  Step 1: Write the getFilteredList() function that filters the issue list and returns all issues that are NOT YET completed (null issue.completedAt should remain in the array, filter out the rest)
  Step 2: Write the getSortedList() function that returns the issue list sorted by priority and date ascending (earlier date is first).
    1. Issue with tag 'highpriority' should be on top of issue without the tag
    2. Issues should be sorted by DUE DATE ASCENDING (earlier date is first)
  Step 3: Open index.html and refresh the browser, checking the console to see your code's output

  Note 1: You are allowed to use Google, but you are NOT allowed to import libraries
  Note 2: const and let are ES6 variable declarations (they are identical to var for the purposes of this exercise)
  Note 3: Feel free to mutate objects (add, modify, and/or remove properties) to get to the objective
  IMPORTANT: In order to make this test fair for all candidates, please DO NOT POST IT TO ANY FORUM (e.g. StackOverflow)

*/

// DO NOT CHANGE THESE
const DATETIME_NOW = new Date(2019, 4, 24);
let issues = [
  {
    title: 'Straws need to be environmentally-friendly',
    createdBy: 'Bernice',
    createdAt: new Date(2019, 1, 11),
    dueAt: new Date(2019, 11, 31),
    completedBy: null,
    completedAt: null,
    tags: ['drinks', 'lowpriority'],
  },
  {
    title: 'Print more menus',
    createdBy: 'Ahmad',
    createdAt: new Date(2019, 3, 15),
    dueAt: new Date(2019, 4, 15),
    completedBy: null,
    completedAt: null,
    tags: ['drinks', 'highpriority'],
  },
  {
    title: 'Buy more pans',
    createdBy: 'Chris',
    createdAt: new Date(2019, 4, 2),
    dueAt: new Date(2019, 4, 20),
    completedBy: 'Yriel',
    completedAt: new Date(2019, 5, 10),
    tags: ['food'],
  },
  {
    title: 'Empty the trash',
    createdBy: 'Bernice',
    createdAt: new Date(2019, 4, 1),
    dueAt: new Date(2019, 4, 14),
    completedBy: null,
    completedAt: null,
    tags: ['floor'],
  },
  {
    title: 'Cash register cannot be locked',
    createdBy: 'Chris',
    createdAt: new Date(2019, 4, 23),
    dueAt: new Date(2019, 4, 24),
    completedBy: 'Zane',
    completedAt: new Date(2019, 5, 24),
    tags: ['cashier', 'highpriority'],
  },
  {
    title: 'Hold staff meeting',
    createdBy: 'Diana',
    createdAt: new Date(2019, 4, 23),
    dueAt: new Date(2019, 4, 23),
    completedBy: null,
    completedAt: null,
    tags: ['drink', 'food'],
  },
  {
    title: 'Decide on seasonal menu',
    createdBy: 'Bernice',
    createdAt: new Date(2019, 4, 1),
    dueAt: new Date(2019, 7, 1),
    completedBy: null,
    completedAt: null,
    tags: ['floor'],
  },
  {
    title: 'Expense reports finalization',
    createdBy: 'Diana',
    createdAt: new Date(2019, 4, 21),
    dueAt: new Date(2019, 4, 31),
    completedBy: null,
    completedAt: null,
    tags: ['floor', 'highpriority'],
  },
  {
    title: 'Nudge customers to fill in survey',
    createdBy: 'Ahmad',
    createdAt: new Date(2019, 4, 20),
    dueAt: new Date(2019, 4, 27),
    completedBy: null,
    completedAt: null,
    tags: ['floor'],
  },
  {
    title: 'Acquire more salt packets',
    createdBy: 'Bernice',
    createdAt: new Date(2019, 4, 1),
    dueAt: new Date(2019, 4, 24),
    completedBy: null,
    completedAt: null,
    tags: ['floor'],
  },
  {
    title: 'Prepare interviews for assistant chef',
    createdBy: 'Bernice',
    createdAt: new Date(2019, 2, 1),
    dueAt: new Date(2019, 4, 1),
    completedBy: null,
    completedAt: null,
    tags: ['staff'],
  },
];

function getFilteredList() {
  // Write your code here
  issues = issues.filter(issue => issue.completedBy === null)


  return issues;
}

function getSortedList() {
  const filteredList = getFilteredList();
  // Write your code here

  const sortDate = filteredList.sort((dateA, dateB) => dateA.createdAt > dateB.createdAt ? -1 : 1)
  const sortByFilter = sortDate.sort((a, b) => b.tags.includes('highpriority') ? 1 : -1 )

  return sortByFilter;
}

function printList() {
  const list = getSortedList();
  list.forEach((item) => {
    item.createdAt = item.createdAt.toISOString().slice(0, 10);
    item.dueAt = item.dueAt.toISOString().slice(0, 10);
  });
  console.log(`Issue Tracker Output for ${DATETIME_NOW.toISOString().slice(0, 10)}:`);
  console.table(list);
}

printList();
