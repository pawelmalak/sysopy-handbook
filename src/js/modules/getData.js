import { apiPath } from '../config';

export const getData = async (dataType = 'Questions') => {
  const request = await fetch(`${apiPath}/get${dataType}.php`);
  const response = await request.json();
  return response;
}