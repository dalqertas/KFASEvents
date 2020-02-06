import { decorate, observable } from "mobx";
import instance from "./instance";

class Store {
    events = [];
    attendees = {};
    feedback = {};
    loading = true;

    getEvents = async () => {
        try {
            const res = await instance.get("event");
            this.events = res.data;
            console.log(this.events);
            this.loading=false;
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

    // TODO: requires api method
    getFeedback = async (eventID, callback) => {
        console.log("getting feedback");
        try {
            const res = await instance.get(`feedback/${eventID}`);
            const validFeedbacks = res.data.filter(feedback => {
                return feedback.rating !== null && feedback.comment !== null
            });
            this.feedback[eventID] = validFeedbacks;
            console.log(this.feedback[eventID]);

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
    createEvent= async (eventData,navigation) => {
        console.log(navigation);
        
        try{
            const res= await instance.post("event/create",eventData)
            this.events.unshift(res.data)
            navigation.navigate('EventsList');
            console.log("success");
        }catch (error){
            console.log(error)
        }
    };

    eventDone = async (event, callback) => {
        try{
            const res= await instance.put("event/done/"+event.id);
            callback()
        }catch (error){
            callback(error)
        }
    }
}

decorate(Store, {
    events: observable
});

const store = new Store();
store.getEvents();

export default store;