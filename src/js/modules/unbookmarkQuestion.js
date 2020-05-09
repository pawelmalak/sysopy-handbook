import { displayBookmarked } from './displayBookmarks';

export const unbookmarkQuestion = (questionHash) => {

  const bookmarkedQuestions = JSON.parse(localStorage.getItem('bookmarkedQuestions')).hashes;
  localStorage.setItem('bookmarkedQuestions', JSON.stringify({
    hashes: bookmarkedQuestions.filter((hash) => hash != questionHash)
  }));
  displayBookmarked();

} 