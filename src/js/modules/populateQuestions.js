import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import SmoothScroll from 'smooth-scroll';
import { delegateClickEvent } from './delegateClickEvent';
import { generateQuestionCard } from './generateQuestionCard';

hljs.registerLanguage('bash', bash);

export const populateQuestions = (questionsArray) => {
  console.log(questionsArray);
  const questionsContainer = document.querySelector('#questions-container');
  questionsContainer.innerHTML = '';

  if (questionsArray.length == 0) {
    questionsContainer.innerHTML = `<p class="card-text text-muted">Brak wyników dla tego wyszukania</p>`;
    return;
  }

  questionsArray.forEach((question, index) => questionsContainer.innerHTML += generateQuestionCard(question, index));
  document.querySelectorAll('pre code').forEach((block) => hljs.highlightBlock(block));

  const scroll = new SmoothScroll('a[href*="#"]');

  document.querySelectorAll('.question-card .icon-perf').forEach((card) => {
    card.addEventListener('click', (e) => delegateClickEvent(e));
  });

}