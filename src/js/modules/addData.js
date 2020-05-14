import { alertSlide } from './alertSlide';
import { apiPath } from '../config';

export const addData = async ({ titleIn, bodyIn, chapterIn, groupIn }) => {

  const request = await fetch(`${apiPath}/addQuestion.php`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      titleIn,
      bodyIn: JSON.stringify(bodyIn),
      chapterIn,
      groupIn
    })
  });
  const response = await request.json();
  console.log(response);

  if (response) alertSlide('success');
  else alertSlide('fail');

  return response;
}