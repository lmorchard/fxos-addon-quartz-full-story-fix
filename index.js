(function () {

  if (document.documentElement) {
    initialize();
  } else {
    window.addEventListener('DOMContentLoaded', initialize);
  }

  function initialize () {
    // Surprisingly, it's just this easy!
    var article = document.querySelector('article.read-full');
    if (article) {
      article.classList.remove('read-full');
    }
  }

}());
