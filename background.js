let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.get("todos", function(local){
        if(!Array.isArray(local.todos))
        {
            chrome.storage.local.set({ todos: [] });
        }
        console.log(local.todos)
    });
});

console.log("Hi");

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
    const url = changeInfo.pendingUrl || changeInfo.url;
    if (!url || !url.startsWith("http")) {
      return;
    }
  
    const hostname = new URL(url).hostname;
    console.log(hostname)
})