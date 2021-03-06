export const displayBookmarked = () => {

  const bookmarsContainer = document.querySelector('#bookmarked-questions-container');

  if (!localStorage.getItem('bookmarkedQuestions') || JSON.parse(localStorage.getItem('bookmarkedQuestions')).hashes.length == 0) {
    bookmarsContainer.innerHTML = `<p class="card-text text-muted text-center">Brak zakładek<br>Użyj gwiazdki przy pytaniu aby je zapisać</p>`;
  }
  else {
    bookmarsContainer.innerHTML = '';
    JSON.parse(localStorage.getItem('bookmarkedQuestions')).hashes.forEach((questionHash) => {
      const questionCard = document.querySelector(`.question-card[data-hash="${questionHash}"]`);
      let questionTitle = questionCard.querySelector('.card-title').textContent.trim();
      questionTitle = (questionTitle.length > 35) ? questionTitle.slice(0, 35).concat('...') : questionTitle;

      bookmarsContainer.innerHTML += `<a href="#${questionCard.getAttribute('id')}" class="list-group-item list-group-item-action" data-scroll>${questionTitle}</a>`;
    })
  }

}