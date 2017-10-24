
// TODO
// show label count
// design
// loader

var colors = ['Blue', 'BlueViolet', 'Cyan', 'DarkSalmon', 'Gold', 'HotPink', 'LightGreen', 'LightSkyBlue', 'Lime', 'Orange', 'Red', 'Yellow'];

$.fn.replaceText = function(target, replacement) {
 // Get all text nodes:
  var $textNodes = this.find("*").addBack().contents().filter(function() { return this.nodeType === 3; });
 
 // Iterate through the text nodes, replacing the content
	$textNodes.each(function(index, element) {
    var contents = $(element).text();
    contents = contents.replace(target, replacement);
    $(element).replaceWith(contents);
  });
};


function removeHighlighterSpanClass(){
  $('span.highlighter-extension').css("background-color", "");
	$('span.highlighter-extension').removeClass();
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	removeHighlighterSpanClass();
    var keywords = request.keywords.split(',');
    var multicolored = request.multicolor;
    var color = 'yellow';
    

    $.each(keywords, function( index, value ) {
    	if (multicolored === true) {
	    	var number = Math.floor(Math.random() * colors.length);
	    	color = colors[number]
	    }
			var regex = new RegExp('(' + value.trim() + ')', 'ig');
			$("body").replaceText(regex, '<span class="highlighter-extension highlighter-text-' + color + '">$1</span>');
      $('.highlighter-text-' + color).css({"background-color":color})

		});

  }
);
