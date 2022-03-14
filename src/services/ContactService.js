import axios from "axios";

export class ContactService {
    static serverURL = 'http://localhost:9000';

    static getGroups(){
        const dataURL = `${this.serverURL}/groups`;
        return axios.get(dataURL);
    }

    static getGroup(contact){
        const dataURL = `${this.serverURL}/groups/${contact.group}`;
        return axios.get(dataURL);
    }

    static getAllContacts(){
        const dataURL = `${this.serverURL}/contacts`;
        return axios.get(dataURL);
    }

    static getContact(contactId){
        const dataURL = `${this.serverURL}/contacts/${contactId}`;
        return axios.get(dataURL);
    }
}