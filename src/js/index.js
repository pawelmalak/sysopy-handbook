import { getData } from './modules/getData';
import { populateQuestions } from './modules/populateQuestions';
import { searchQuestion } from './modules/searchQuestion';
import { displayBookmarked } from './modules/displayBookmarked';
import { displayStatistics } from './modules/displayStatistics';
import { quack } from './modules/quack';

(async () => {

  const questions = await getData();
  populateQuestions(questions);
  displayBookmarked();
  displayStatistics();
  searchQuestion(questions);
  quack();

})();