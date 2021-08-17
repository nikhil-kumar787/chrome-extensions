let active_tab_id = 0;
chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
       active_tab_id = tab.tabId;
        if(/^https:\/\/www\.google/.test(current_tab_info.url)) {
            chrome.tabs.insertCSS(null,{file: './mystyles.css'})
            chrome.tabs.executeScript(null,{file: './foreground.js'}, () => console.log('demo'))
        }
    })
})

// chrome.runtime.onMessage.addListener((request,sender,sendResponse) => {
//     if(request.message === 'Checkout the storage') {
//     //   sendResponse({message: 'Got the message'})
//     chrome.tabs.sendMessage(active_tab_id,{message:'Got the message'})
//         chrome.storage.local.get("password", value => {
//             console.log(value)
//         })
//     }
// })