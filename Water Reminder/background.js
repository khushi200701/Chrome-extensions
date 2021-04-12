console.log("in background script")

let defaultDuration=1.0;


chrome.alarms.onAlarm.addListener(function (alarm){
    console.log(alarm)
    chrome.notifications.create("my notif", {
        type: "basic",
        iconUrl: "icon128.png",
        title: "Drink Water Now!!",
        "message": "NoTiFicAtIoN"
    }, function (notificationID){
        console.log("Display Notification")
    })
});

function createAlarm(){
    chrome.alarms.create("Drink Water Now!",{delayInMinutes : defaultDuration});
}

createAlarm()

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        console.log("Event recieved in background")
        defaultDuration=request.minutes*1.0;
        createAlarm()
        sendResponse({success: true})
        
    });