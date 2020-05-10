export const addData = async ({ titleIn, bodyIn, groupIn }) => {
  console.log(JSON.stringify({ titleIn, bodyIn, groupIn }));
  const request = await fetch(`http://localhost/sysopy-handbook/api/addQuestion.php`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      titleIn,
      bodyIn: JSON.stringify(bodyIn),
      groupIn
    })
  });
  const response = await request.json();
  console.log(response);

  return response;
}