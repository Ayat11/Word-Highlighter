

function injectTheScript() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"keywords": $('#keywords').val(), "multicolor": $('#multicolored').is(':checked')});
  });
}

$("document").ready(function(){
	$('#clickactivity').on('click', injectTheScript);
});
