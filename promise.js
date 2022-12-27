const hasmeeting = false;
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

meeting
    .then(addToCalendar)
    .then((res) => {
        console.log(JSON.stringify(res));
    })
    .catch((err) => {
        console.log(err.message);
    });
console.log("promise is asynchronus");






const promise1 = Promise.resolve(`promise 1 resolved`);
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`promise 2 resolved`);
    }, 3000);
});
// promise1.then((res) => console.log(res));
// promise2.then((res) => console.log(res));
// Promise.all([promise1,promise2]).then((res)=> {
//     console.log(res);
// });
Promise.race([promise1,promise2]).then((res)=> {
    console.log(res);
});