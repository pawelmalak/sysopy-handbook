import { isBookmarked } from './isBookmarked';
import { delegateClickEvent } from './delegateClickEvent';
import md5 from 'md5';

export const populateQuestions = (questionsArray) => {

  const questionsContainer = document.querySelector('#questions-container');
  questionsContainer.innerHTML = '';

  if (questionsArray.length == 0) {
    questionsContainer.innerHTML = `<p class="card-text text-muted">Brak wyników dla tego wyszukania</p>`;
    return;
  }

  questionsArray.forEach((question, index) => {

    const questionHash = md5(question.question_id, question.question_createdAt);

    questionsContainer.innerHTML += `
      <div class="card mb-4 question-card" data-hash="${questionHash}" id="q${index}">
        <div class="card-body">
          <h5 class="card-title">
            ${question.question_title}
            <span class="icon-perf float-right" data-hash="${questionHash}">
              <i class="${(isBookmarked(questionHash)) ? 'fas' : 'far'} fa-star"></i>
            </span>
          </h5>
          <p class="card-text">${question.question_body}</p>
          <h5><span class="badge badge-success">${question.question_group}</span></h5>
        </div>
      </div>
    `;
  });

  document.querySelectorAll('.question-card .icon-perf').forEach((card) => {
    card.addEventListener('click', (e) => delegateClickEvent(e));
  });

}