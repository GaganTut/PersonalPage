/*jshint esversion: 6*/
(global => {
  const views = document.querySelectorAll('.views');
  const mainLinks = document.querySelectorAll('.main-links');
  views.forEach(view => view.style.display = 'none');
  views[0].style.display = 'block';
  const linkViewPositions = {
    home: 0,
    projects: 1,
    resume: 2,
    contact: 3
  };

  mainLinks.forEach(link => {
    link.addEventListener('click', event => {
      views.forEach(view => view.style.display = 'none');
      views[linkViewPositions[event.target.attributes.linktarget.value]].style.display = 'block';
    });
  });
})(window);