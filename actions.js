var tab;
chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.captureVisibleTab(null, { format:'png' }, function(image) {
    chrome.tabs.create({'url':'edit.html'}, function(t) {
      tab = t;
      chrome.tabs.sendRequest(tab.id, image);
    });
  });
});
chrome.extension.onRequest.addListener(function(e) {
  chrome.tabs.captureVisibleTab(null, { format:'png' }, function(image) {
    chrome.tabs.sendRequest(tab.id, image);
  });
});
