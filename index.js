/*jshint esversion: 6*/
(global => {
  const views = document.querySelectorAll('.views');
  const mainLinks = document.querySelectorAll('.main-links');
  views[0].style.zIndex = '1';
  const linkViewPositions = {
    home: 0,
    projects: 1,
    resume: 2,
    contact: 3
  };

  mainLinks.forEach(link => {
    link.addEventListener('click', event => {
      views.forEach(view => view.style.zIndex = '0');
      views[linkViewPositions[event.target.attributes.linktarget.value]].style.zIndex = '1';
    });
  });
})(window);