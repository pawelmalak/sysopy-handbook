import { populateQuestions } from './populateQuestions';
import { getFilters } from './getFilters';

export const searchQuestion = (questionsArray) => {

  const searchBar = document.querySelector('#search-input');

  searchBar.addEventListener('keyup', (e) => {
    
    const regexPattern = new RegExp(e.target.value, 'i');
    let searchResults;

    if (getFilters('searchRange')) {
      searchResults = questionsArray.filter(({ question_title }) => regexPattern.test(question_title));
    }
    else {
      const combinedFieldsArray = questionsArray.map((question) => {
        question.combined = ''.concat(question.question_title).concat(question.question_body);
        return question;
      });
      searchResults = combinedFieldsArray.filter(({ combined }) => regexPattern.test(combined));
    }
    
    populateQuestions(searchResults);

  });

}