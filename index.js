// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


const findMatching = (array, names) => array.filter(array => array.toLowerCase() === names.toLowerCase());

const fuzzyMatch = (array, names) => array.filter(array => array[0] === names[0]);

const matchName = (array,names) => array.filter(array => array.name === names);
