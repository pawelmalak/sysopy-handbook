export const getData = async () => {
  const request = await fetch("http://localhost/sysopy-handbook/api/getQuestions.php");
  const response = await request.json();
  return response;
}