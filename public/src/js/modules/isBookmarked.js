export const isBookmarked = (questionHash) => {
  if (localStorage.getItem('bookmarkedQuestions')) return JSON.parse(localStorage.getItem('bookmarkedQuestions')).hashes.includes(questionHash);
  else return false;
}