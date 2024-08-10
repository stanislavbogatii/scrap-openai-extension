chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getCurrentUrl') {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentTab = tabs[0];
        if (currentTab) {
          sendResponse({ url: currentTab.url });
        } else {
          sendResponse({ url: null });
        }
      });
      // Return true to indicate that the response is asynchronous.
      return true;
    }
  });