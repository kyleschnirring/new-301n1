(function(module) {
  var articlesController = {};

  // : Create the `articles` table when the controller first loads, with the code that used to be in index.html:

  // : Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:

    Article.createTable();
    Article.fetchAll(articleView.initIndexPage);

    articlesController.index = function() {
      $('#about').hide();
      $('#articles').show();
      console.log('NO TREBLE');
    };

  module.articlesController = articlesController;
})(window);
