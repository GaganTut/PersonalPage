/*jshint esversion: 6*/
console.log('hiiiii');

(global => {
  const views = document.querySelectorAll('.views');
  const mainLinks = document.querySelectorAll('.main-links');

  mainLinks.forEach(link => {
    console.log(link);
    link.addEventListener('click', event => {
      console.log(event.target);
    });
  });
})(window);