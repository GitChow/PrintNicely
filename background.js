chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!');
  
  // execute one line of JS in this way
  // chrome.tabs.executeScript({
  //   code: 'document.body.style.backgroundColor="gray"'
  // });

  // insert js in this way
  //chrome.tabs.executeScript(null, {file: "content_script.js"});
  chrome.tabs.insertCSS(null, {file: "new.css"});
});