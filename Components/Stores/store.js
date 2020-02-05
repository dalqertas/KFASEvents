import { decorate, observable } from "mobx";
import instance from "./instance";

class Store {
    events = [];
    attendees = {};

    getEvents = async () => {
        try {
            const res = await instance.get("event");
            this.events = res.data;
            console.log(this.events);
        } catch (error) {
            console.log(error);
        }
    };

    getAttendees = async (eventID, callback) => {
        console.log("getting attendees");
        try {
            const res = await instance.get(`event/attendees/${eventID}`);
            this.attendees[eventID] = res.data;
            console.log(this.attendees[eventID]);

            callback();

        } catch (error) {
            console.log(error);
        }
    };

    registerAttendee = async (attendee, eventID) => {
        console.log("Test");

        try {
            const res = await instance.post(`event/register/${eventID}`, attendee);
            console.log(res.data);
            alert("Registered Successfully!");
        } catch (error) {
            console.log(error);
            alert(`Error: ${error}`);
        }
    };
    createEvent= async (eventData) => {
        try{
            const res= await instance.post("event/create",eventData)
            this.events.push(res.data)
        }catch (error){
            console.log(error)
        }
    }
};

decorate(Store, {
    events: observable
})

const store = new Store();
store.getEvents();

export default store;