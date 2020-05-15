export const getFilters = (property) => {

  if (property == 'searchRange') {
    return document.querySelector('#exclude-body-check').checked;
  }
  else if (property == 'chapters') {
    return {
      411: document.querySelector('#exclude-check-411').checked,
      412: document.querySelector('#exclude-check-412').checked,
      414: document.querySelector('#exclude-check-414').checked
    }
  }
  else if (property == 'groups') {
    return {
      1: document.querySelector('#exclude-group-check-1').checked,
      2: document.querySelector('#exclude-group-check-2').checked,
      3: document.querySelector('#exclude-group-check-3').checked
    }
  }

}