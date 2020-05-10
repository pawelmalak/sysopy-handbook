export const getData = async (dataType = 'Questions') => {
  const request = await fetch(`http://localhost/sysopy-handbook/api/get${dataType}.php`);
  const response = await request.json();
  return response;
}