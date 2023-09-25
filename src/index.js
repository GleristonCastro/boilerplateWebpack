import './sass/style.scss';

document.querySelector('#btn-init').addEventListener('click', () => {
  import ('./app').then(module => {
    module.initPage();
  })
});