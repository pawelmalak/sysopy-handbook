import { isBookmarked } from './isBookmarked';
import { bookmarkQuestion } from './bookmarkQuestion';
import { unbookmarkQuestion } from './unbookmarkQuestion';

export const delegateClickEvent = (e) => {

  let currentQuestionHash, masterElement;

  if (e.target.tagName == 'svg') {
    currentQuestionHash = e.target.parentElement.dataset.hash;
    masterElement = e.target;
  }
  else if (e.target.tagName == 'path') {
    currentQuestionHash = e.target.parentElement.parentElement.dataset.hash;
    masterElement = e.target.parentElement;
  }

  // neither this or other questions are bookmarked
  if (!isBookmarked(currentQuestionHash)) {
    masterElement.dataset.prefix = 'fas';
    bookmarkQuestion(currentQuestionHash);
  }
  // question is already bookmarked
  else if (isBookmarked(currentQuestionHash)) {
    masterElement.dataset.prefix = 'far';
    unbookmarkQuestion(currentQuestionHash);
  }

}