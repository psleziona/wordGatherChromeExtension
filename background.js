chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    "id": "menu",
    "contexts": ["selection"],
    "title": "RememberWords"
  });
  chrome.contextMenus.create({
    "id": "add",
    "parentId": "menu",
    "title": "Grab It!",
    "contexts": ["selection"],
  });



  chrome.contextMenus.onClicked.addListener(() => {
    chrome.tabs.executeScript({ file: './foreground.js' });
  });
});