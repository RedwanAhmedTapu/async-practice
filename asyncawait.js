const hasmeeting = true;
const meeting = new Promise((resolve, reject) => {
    if (!hasmeeting) {
        const meetingDetails = {
            name: "Technical meeting",
            location: "Google Meet",
            time: "10:00 PM",
        };
        resolve(meetingDetails);
    } else {
        reject(new Error("meeting already scheduled"));
    }
});

const addToCalendar = (meetingDetails) => {
    return new Promise((resolve, reject) => {
        const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
        resolve(calendar);
    });
}

async function myMeeting(){
    try{
    const meetingDetails=await meeting;
    const calendar=await addToCalendar(meetingDetails);
    console.log(calendar);
    }
    catch{
        console.log(`something wrong happened`);
    }
}
myMeeting();
console.log(" make asynchronus by using async await");