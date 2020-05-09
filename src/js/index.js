import marked from 'marked';

import { getData } from './modules/getData';
import { populateQuestions } from './modules/populateQuestions';

// document.getElementById('content').innerHTML += marked("# Browser JavaScript");
// document.getElementById('content').innerHTML += marked("```javascript");
// document.getElementById('content').innerHTML += marked("setInterval(() => { document.querySelector('.start-study-form.form .el-button.button.full.el-button--primary.el-button--xl').click() }, 1000)");
// document.getElementById('content').innerHTML += marked("```");

(async () => {

  const questions = await getData();
  populateQuestions(questions);
  
})();
