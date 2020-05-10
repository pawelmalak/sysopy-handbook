export const getFilters = (property) => {

  if (property == 'searchRange') {
    return document.querySelector('#exclude-body-check').checked;
  }

}