var tabid;
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.windows.getCurrent(function (win) {
    chrome.tabs.captureVisibleTab(win.id, {format:'png'}, function(image) {
      chrome.tabs.create({'url':'edit.html'}, function(t) {
        tabid = t.id;
        // Slight delay to allow tab time to add listener.
        setTimeout(function() { chrome.tabs.sendMessage(tabid, image); }, 100);
      });
    });
  });
});
chrome.extension.onMessage.addListener(function(e) {
  chrome.windows.getCurrent(function (win) {
    chrome.tabs.captureVisibleTab(win.id, {format:'png'}, function(image) {
      chrome.tabs.sendMessage(tabid, image);
    });
  });
});
