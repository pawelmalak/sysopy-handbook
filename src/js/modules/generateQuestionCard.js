import md5 from 'md5';
import { isBookmarked } from './isBookmarked';
import { parseMarkdown } from './parseMarkdown';

export const generateQuestionCard = (question, index = 0) => {
  const questionHash = md5(question.question_id, question.question_createdAt);
  const card = document.createElement('div');
  card.className = 'card mb-4 question-card';
  card.setAttribute('data-hash', questionHash);
  card.setAttribute('id', `q${index}`)
  card.innerHTML = `
  <div class="card-body">
      <h5 class="card-title">
        ${question.question_title}
        <span class="icon-perf float-right" data-hash="${questionHash}">
          <i class="${(isBookmarked(questionHash)) ? 'fas' : 'far'} fa-star"></i>
        </span>
      </h5>
      <p class="card-text">${parseMarkdown(question.question_body)}</p>
      <h5><span class="badge badge-${determineBadge(question.group_id)}">${question.group_teacher}</span></h5>
    </div>
  `;

  return card.outerHTML;

}

const determineBadge = (groupId) => {
  switch (parseInt(groupId)) {
    case 1:
      return 'success';
      break;
    case 2:
      return 'warning';
      break;
    case 3:
      return 'danger';
      break;
    default:
      return 'secondary';
  }
}