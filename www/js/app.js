$(function () {

  $('.fab').hover(function () {
    $(this).toggleClass('active');
  });
  $('[data-toggle="tooltip"]').tooltip();

  loadNews("/espn/top", false);

  $.getJSON( "/sources/en/us/business", function( data ) {
      var theTemplateScript = $("#menu-template").html();
      if (theTemplateScript){
      var theTemplate = Handlebars.compile(theTemplateScript);
      var theCompiledHtml = theTemplate(data);
      $('#menu').append(theCompiledHtml);

      $('li.link').click(function (e) {
  		    e.preventDefault();
          var link = $(this).data('link');
          loadNews(link, true);
	    });

      }
  });
});

function loadNews(link, closeMenu){
  $.getJSON( "/news" + link, function( data ) {
      $('#cards').empty();
      var theTemplateScript = $("#inf-card-template").html();
      var theTemplate = Handlebars.compile(theTemplateScript);
      var theCompiledHtml = theTemplate(data);
      $('#cards').append(theCompiledHtml);
      if (closeMenu) $('.hamburger').click();    
  });
}