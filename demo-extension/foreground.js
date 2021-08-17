// document.querySelector('.lnXdpd').classList.add('spinspinspin')

const first = document.createElement('button');
first.innerText="FIRST BUTTON";
first.id="first";

const second = document.createElement('button');
second.innerText = "SECOND BUTTON";
second.id = "second";

document.querySelector('body').appendChild(first);
document.querySelector('body').appendChild(second);

first.addEventListener('click', () => {
    chrome.storage.local.set({"password":"123"});
    console.log("password has been set")

})

second.addEventListener('click',() => {
    chrome.runtime.sendMessage({message:'Checkout the storage'});
    console.log("Message sent")
});

chrome.runtime.onMessage.addListener((request,sender,sendResponse) => {
    console.log(request.message)
})