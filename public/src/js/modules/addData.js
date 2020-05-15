import { alertSlide } from './alertSlide';

export const addData = async ({ titleIn, bodyIn, chapterIn, groupIn }) => {

  const request = await fetch(`/question/add`, {
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

  if (response) alertSlide('success');
  else alertSlide('fail');

  return response;
}