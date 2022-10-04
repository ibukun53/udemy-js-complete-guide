const backdropElement = document.getElementById('backdrop');
const modalLinkElements = document.querySelectorAll('.info-modal');
let infoModal;

function toggleBackdrop() {
  backdropElement.classList.toggle('visible');
}

function hideInfoModal() {
  toggleBackdrop();
  document.body.removeChild(infoModal);
}

function presentInfoModal(event) {
  const { text } = event.target.dataset;
  toggleBackdrop();
  infoModal = document.createElement('div');
  infoModal.classList.add('modal');
  infoModal.innerHTML = `
    <h2>More Details</h2>
    <p>${text}</p>
  `;
  const closeButton = document.createElement('button');
  closeButton.addEventListener('click', hideInfoModal);
  closeButton.textContent = 'Okay';
  infoModal.appendChild(closeButton);
  document.body.appendChild(infoModal);
}

modalLinkElements.forEach(linkElement => {
  linkElement.addEventListener('click', presentInfoModal);
});

backdropElement.addEventListener('click', hideInfoModal);
