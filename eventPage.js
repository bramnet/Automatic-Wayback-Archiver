var tabURL = ""; 
chrome.runtime.onMessage.addListener(
function(message, sender, sendResponse) {

   chrome.tabs.query({active: true, currentWindow: true}, 
     function(arrayOfTabs) {
       var activeTab = arrayOfTabs[0];
       var tabURL = activeTab.url;

     });
    }
  );
var iframe;
iframe = document.createElement('iframe');
iframe.src = "https://web.archive.org/save/" + window.location.href;
iframe.style.display = 'none';
document.body.appendChild(iframe);