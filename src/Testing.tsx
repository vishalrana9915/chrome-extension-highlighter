/*global chrome*/



chrome.runtime.onStartup.addListener(()=>{
    console.log("listener")
})

export function Testing(){


    const background:any = chrome.extension.getBackgroundPage()
    alert(chrome)
    background?.console.log("Printing chrome==>")
    console.log("Simply chrome")
}