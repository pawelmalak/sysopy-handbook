import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import markdown from 'highlight.js/lib/languages/markdown';
import { generateQuestionCard } from './modules/generateQuestionCard';
import { addData } from './modules/addData';

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('markdown', markdown);

const btn = document.querySelector('#sendit');
const text = document.querySelector('#source');
const dest = document.querySelector('#dest');

text.value = `> Można to wykazać poprzez ...\n\`\`\`bash\nsu\nsystemctl\n\`\`\``;

const dummyQuestion = {
  parsedBody: undefined,
  question_title: 'Proszę wykazać, że ...',
  question_id: '999',
  question_createdAt: '999',
  question_group: '999',
  group_teacher: 'dr inż. XYZ'

};

const parseMarkdown = () => {
  const parser = new showdown.Converter();
  const markdownInput = document.querySelector('#source').value;
  const htmlOutput = parser.makeHtml(markdownInput);

  dummyQuestion.parsedBody = htmlOutput;
  dest.innerHTML = generateQuestionCard(dummyQuestion, 999);
  document.querySelectorAll('pre code').forEach((block) => hljs.highlightBlock(block));
};

text.addEventListener('keyup', () => parseMarkdown());
btn.addEventListener('click', async () => addData());
parseMarkdown();