var tab;
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.windows.getCurrent(function (win) {
    chrome.tabs.captureVisibleTab(win.id, {format:'png'}, function(image) {
      chrome.tabs.create({'url':'edit.html'}, function(t) {
        chrome.tabs.sendRequest(t.id, image);
      });
    });
  });
});
chrome.extension.onRequest.addListener(function(e) {
  chrome.windows.getCurrent(function (win) {
    chrome.tabs.captureVisibleTab(win.id, {format:'png'}, function(image) {
      chrome.tabs.sendRequest(tab.id, image);
    });
  });
});
