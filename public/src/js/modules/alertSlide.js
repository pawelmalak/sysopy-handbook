export const alertSlide = (result) => {

  const alertWrapper = document.createElement('div');
  alertWrapper.className = 'slideAlert-container slideInAndOut';
  alertWrapper.innerHTML = `
    <div class="alert alert-${result == 'success' ? 'success' : 'danger'}" role="alert">
      ${result == 'success' ? 'Pytanie zostało dodane!' : 'Coś poszło nie tak'}
    </div>
  `;

  document.body.appendChild(alertWrapper);
  setTimeout(() => alertWrapper.remove(), 6000);

}