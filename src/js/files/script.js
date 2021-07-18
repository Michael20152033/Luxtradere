let jopa = document.querySelector('.user-header__icon');

jopa.addEventListener('click', function (e) {
  let jopa2 = document.querySelector('.user-header__menu');
  jopa2.classList.toggle('_active');
});



//////////////////////////////////////////////////////////

let jopa3 = document.querySelector('.icon-menu');

jopa3.addEventListener('click', function (t) {
  jopa3.classList.toggle('change');

  let jopa4 = document.querySelector('.menu__body');
  jopa4.classList.toggle('_active');
});
////////////////////////////////////////////////////

document.addEventListener('click', function (e) {
  console.log(e);
  if (!e.target.closest('.user-header')) {
    let jopa2 = document.querySelector('.user-header__menu');
    jopa2.classList.remove('_active');
  }
});


