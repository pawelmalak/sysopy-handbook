export const getData = async (dataType = 'question/get') => {
  const request = await fetch(`/${dataType}`);
  const response = await request.json();
  return response;
}