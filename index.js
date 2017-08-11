/*jshint esversion: 6*/
(global => {
  const views = document.querySelectorAll('.views');
  const navigation = document.querySelector('.navigation');
  const mainLinks = document.querySelectorAll('.main-links');
  views.forEach(view => view.style.display = 'none');
  views[0].style.display = 'block';
  const linkViewPositions = {
    home: 0,
    projects: 1,
    resume: 2,
    contact: 3
  };

  const navigationBG = {
    home: false,
    projects: true,
    resume: true,
    contact: true
  };

  mainLinks.forEach(link => {
    link.addEventListener('click', event => {
      views.forEach(view => view.style.display = 'none');
      views[linkViewPositions[event.target.attributes.linktarget.value]].style.display = 'block';

      navigationBG[event.target.attributes.linktarget.value] ?
        (navigation.style.backgroundColor = 'rgb(240,240,240)') :
        (navigation.style.backgroundColor = 'transparent');
    });
  });
})(window);