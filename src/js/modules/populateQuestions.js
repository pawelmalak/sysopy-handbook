import { getData } from './getData';

export const populateQuestions = async () => {

  const questionsArray = await getData();

  console.log(questionsArray);

  const questionsContainer = document.querySelector('#questions-container');
  questionsContainer.innerHTML = '';

  questionsArray.forEach((question) => {
    questionsContainer.innerHTML += `
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title border">
            ${question.question_title}
            <span style="font-size: 1em; color: gold;">
              <i class="far fa-star"></i>
            </span>
          </h5>
          <p class="card-text">${question.question_body}</p>
          <h5><span class="badge badge-success">${question.question_group}</span></h5>
        </div>
      </div>
    `;
  });

}