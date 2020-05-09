export const getData = async () => {
  const request = await fetch();
  const response = await request.json();
  return response;
}