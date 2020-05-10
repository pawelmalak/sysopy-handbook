import { getData } from './modules/getData';
import { populateQuestions } from './modules/populateQuestions';
import { searchQuestion } from './modules/searchQuestion';
import { displayBookmarked } from './modules/displayBookmarked';

(async () => {

  const questions = await getData();
  populateQuestions(questions);
  displayBookmarked();
  searchQuestion(questions);

})();