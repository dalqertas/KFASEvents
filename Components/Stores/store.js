import { decorate, observable } from "mobx";
import instance from "./instance";

class Store {
    events = [];

    getEvents = async () => {
        try {
            const res = await instance.get("event");
            let events = res.data;

            console.log(events);
            this.events = res.data;
        } catch (error) {
            console.log(error);
        }
    };
};

decorate(Store, {
    events: observable
})

const store = new Store();
store.getEvents();

export default store;