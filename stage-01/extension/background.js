chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type === "amazonOrNot") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentTab = tabs[0];
      function isAmazonOrNot(url) {
        return url.includes("amazon.com");
      }

      const isAmazon = isAmazonOrNot(currentTab.url);
      sendResponse({ result: isAmazon }); // Send the result back to the content script
    });

    return true;
  }
});
