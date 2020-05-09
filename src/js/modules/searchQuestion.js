import { populateQuestions } from './populateQuestions';

export const searchQuestion = (questionsArray) => {

  const searchBar = document.querySelector('#search-input');
  searchBar.addEventListener('keyup', (e) => {
 
    const regexPattern = new RegExp(e.target.value, 'i');
    const searchResults = questionsArray.filter(({ question_title }) => regexPattern.test(question_title));
    populateQuestions(searchResults);

  });

}