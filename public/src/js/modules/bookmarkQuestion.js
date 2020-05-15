import { isBookmarked } from './isBookmarked';
import { displayBookmarked } from './displayBookmarked';

export const bookmarkQuestion = (questionHash) => {

  if (!localStorage.getItem('bookmarkedQuestions')) {
    localStorage.setItem('bookmarkedQuestions', JSON.stringify({
      hashes: [questionHash]
    }));
  }
  else {
    const bookmarkedQuestions = JSON.parse(localStorage.getItem('bookmarkedQuestions'));
    bookmarkedQuestions.hashes.push(questionHash);
    localStorage.setItem('bookmarkedQuestions', JSON.stringify(bookmarkedQuestions));
  }

  displayBookmarked(questionHash);

}