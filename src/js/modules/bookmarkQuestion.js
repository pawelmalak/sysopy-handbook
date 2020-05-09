export const bookmarkQuestion = (questionHash) => {

  if (!questionHash) return;

  if (!localStorage.getItem('bookmarkedQuestions')) {
    localStorage.setItem('bookmarkedQuestions', JSON.stringify({
      hashes: [questionHash]
    }));
  }
  else {
    const bookmarkedQuestions = JSON.parse(localStorage.getItem('bookmarkedQuestions'));
    bookmarkedQuestions.hashes.push(questionHash);
    localStorage.setItem('bookmarkedQuestions', JSON.stringify(bookmarkedQuestions));
    displayBookmarked(questionHash);
  }

}

const displayBookmarked = (questionHash) => {

  const bookmarsContainer = document.querySelector('#bookmarked-questions-container');
  const questionTitle = document.querySelector(`.question-card[data-hash="${questionHash}"] .card-title`).textContent;

  if (parseInt(bookmarsContainer.dataset.is_empty)) {
    bookmarsContainer.innerHTML = `<a href="#c3" class="list-group-item list-group-item-action">${questionTitle}</a>`;
    bookmarsContainer.dataset.is_empty = '0';
  }
  else {
    bookmarsContainer.innerHTML += `<a href="#c3" class="list-group-item list-group-item-action">${questionTitle}</a>`;
  }

}