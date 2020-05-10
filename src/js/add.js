import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import markdown from 'highlight.js/lib/languages/markdown';
import { generateQuestionCard } from './modules/generateQuestionCard';
import { addData } from './modules/addData';
import { getData } from './modules/getData';

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('markdown', markdown);

let fromInit = true;

const DOM = {
  sendBtn: document.querySelector('#sendit'),
  inputTitle: document.querySelector('#input-title'),
  inputBody: document.querySelector('#input-body'),
  selectGroup: document.querySelector('#select-group'),
  outputContainer: document.querySelector('#dest')
};

DOM.inputBody.value = `> Można to wykazać poprzez ...\n\`\`\`bash\nsu\nsystemctl\n\`\`\``;

const dummyQuestion = {
  parsedBody: undefined,
  question_title: 'Proszę wykazać, że ...',
  question_id: '999',
  question_createdAt: '999',
  question_group: '999',
  group_teacher: 'dr inż. XYZ'
};

const parseMarkdown = () => {
  const parser = new showdown.Converter({
    omitExtraWLInCodeBlocks: true,
    headerLevelStart: 3,
    smartIndentationFix: true,
    simpleLineBreaks: true
  });
  const markdownInput = DOM.inputBody.value;
  const htmlOutput = parser.makeHtml(markdownInput);

  dummyQuestion.parsedBody = htmlOutput;
  dummyQuestion.question_title = (fromInit) ? 'Proszę wykazać, że ...' : DOM.inputTitle.value;
  fromInit = false;
  DOM.outputContainer.innerHTML = generateQuestionCard(dummyQuestion, 999);
  document.querySelectorAll('pre code').forEach((block) => hljs.highlightBlock(block));
};

(async () => {
  const groups = await getData('Groups');
  groups.forEach(({ group_id, group_teacher }) => {
    document.querySelector('#select-group').innerHTML += `<option value="${group_id}">${group_teacher}</option>`;
  });
})();

DOM.inputTitle.addEventListener('keyup', () => parseMarkdown());
DOM.inputBody.addEventListener('keyup', () => parseMarkdown());
DOM.selectGroup.addEventListener('input', () => parseMarkdown());

DOM.sendBtn.addEventListener('click', async () => addData({
  titleIn: document.querySelector('#input-title').value,
  bodyIn: document.querySelector('#input-body').value,
  groupIn: document.querySelector('#select-group').value
}));
parseMarkdown();