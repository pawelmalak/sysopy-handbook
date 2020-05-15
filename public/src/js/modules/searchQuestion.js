import { populateQuestions } from './populateQuestions';
import { getFilters } from './getFilters';

export const searchQuestion = (questionsArray) => {

  const searchBar = document.querySelector('#search-input');

  searchBar.addEventListener('keyup', (e) => {
    
    const regexPattern = new RegExp(e.target.value, 'i');
    let searchResults = [];

    // check if any chapter filter is active
    if (Object.values(getFilters('chapters')).reduce((a, x) => a += x)) {

      let chapters = getFilters('chapters');
      const toBeIncluded = [];
      
      // push all id's to be included in search
      for (let i = 0; i < Object.keys(chapters).length; i++) {
        if (Object.values(chapters)[i]) toBeIncluded.push(parseInt(Object.keys(chapters)[i]));
      }

      if (toBeIncluded.length != 0) {
        searchResults = questionsArray.filter(({ question_chapter }) => toBeIncluded.includes(question_chapter));
      }

    }

    // check if any group should be excluded from search
    if (Object.values(getFilters('groups')).reduce((a, x) => a += x)) {
      
      let groups = getFilters('groups');
      const toBeIncluded = [];
      
      // push all id's to be included in search
      for (let i = 0; i < Object.keys(groups).length; i++) {
        if (Object.values(groups)[i]) toBeIncluded.push(parseInt(Object.keys(groups)[i]));
      }

      if (searchResults.length == 0 && toBeIncluded.length != 0) {
        searchResults = questionsArray.filter(({ question_group }) => toBeIncluded.includes(question_group));
      }
      else {
        searchResults = searchResults.filter(({ question_group }) => toBeIncluded.includes(question_group));
      }

    }

    // check if search should be performed on title only
    if (searchResults.length == 0 && getFilters('searchRange')) {
      searchResults = questionsArray.filter(({ question_title }) => regexPattern.test(question_title));
    }
    else if (getFilters('searchRange')) {
      searchResults = searchResults.filter(({ question_title }) => regexPattern.test(question_title));
    }
    else {
      const combinedFieldsArray = searchResults.map((question) => {
        question.combined = ''.concat(question.question_title).concat(question.question_body);
        return question;
      });
      searchResults = combinedFieldsArray.filter(({ combined }) => regexPattern.test(combined));
    }
    
    populateQuestions(searchResults);

  });

}