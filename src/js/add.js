import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import markdown from 'highlight.js/lib/languages/markdown';
import { generateQuestionCard } from './modules/generateQuestionCard';
import { addData } from './modules/addData';
import { getData } from './modules/getData';

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('markdown', markdown);

const DOM = {
  sendBtn: document.querySelector('#sendit'),
  inputTitle: document.querySelector('#input-title'),
  inputBody: document.querySelector('#input-body'),
  selectGroup: document.querySelector('#select-group'),
  outputContainer: document.querySelector('#dest')
};

DOM.inputBody.value = `> Można to wykazać poprzez ...\n\`\`\`bash\nsu\nsystemctl\n\`\`\``;

const dummyQuestion = {
  question_id: '0',
  question_body: JSON.stringify(DOM.inputBody.value),
  question_title: 'Proszę wykazać, że ...',
  question_createdAt: '0',
  question_group: '0',
  group_teacher: 'dr inż. XYZ'
};

(async () => {
  const groups = await getData('Groups');
  groups.forEach(({ group_id, group_teacher }) => {
    document.querySelector('#select-group').innerHTML += `<option value="${group_id}">${group_teacher}</option>`;
  });
})();

DOM.inputTitle.addEventListener('keyup', () => {
  dummyQuestion.question_title = DOM.inputTitle.value;
  processEvent();
});
DOM.inputBody.addEventListener('keyup', () => {
  dummyQuestion.question_body = JSON.stringify(DOM.inputBody.value);
  processEvent();
});
DOM.selectGroup.addEventListener('input', () => {
  dummyQuestion.question_group = DOM.selectGroup.value;
  processEvent();
});

DOM.sendBtn.addEventListener('click', async () => addData({
  titleIn: document.querySelector('#input-title').value,
  bodyIn: document.querySelector('#input-body').value,
  groupIn: document.querySelector('#select-group').value
}));

const processEvent = () => {
  DOM.outputContainer.innerHTML = generateQuestionCard(dummyQuestion);
  document.querySelectorAll('pre code').forEach((block) => hljs.highlightBlock(block));
};

processEvent();