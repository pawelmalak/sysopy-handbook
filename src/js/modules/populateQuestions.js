import { getData } from './getData';
import { bookmarkQuestion } from './bookmarkQuestion';
import md5 from 'md5';

export const populateQuestions = async () => {

  const questionsArray = await getData();

  const questionsContainer = document.querySelector('#questions-container');
  questionsContainer.innerHTML = '';

  questionsArray.forEach((question, index) => {
    questionsContainer.innerHTML += `
      <div class="card mb-4 question-card" data-hash="${md5(question.question_id, question.question_createdAt)}" id="c${index}">
        <div class="card-body">
          <h5 class="card-title">
            ${question.question_title}
            <span class="icon-perf float-right" data-hash="${md5(question.question_id, question.question_createdAt)}">
              <i class="far fa-star"></i>
            </span>
          </h5>
          <p class="card-text">${question.question_body}</p>
          <h5><span class="badge badge-success">${question.question_group}</span></h5>
        </div>
      </div>
    `;
  });

  document.querySelectorAll('.question-card .icon-perf').forEach((card) => {
    card.addEventListener('click', (e) => {
      bookmarkQuestion(e.target.parentElement.dataset.hash);
    });
  });

}