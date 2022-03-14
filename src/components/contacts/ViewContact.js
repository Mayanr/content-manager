import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import { ContactService } from '../../services/ContactService';
import Spinner from '../spinner/Spinner';

let ViewContact = () => {

    let {contactId} = useParams();

    let [state, setState] = useState({
        loading: false,
        contact: {},
        errorMessage: '',
        group: {}
    });

    useEffect( async () => {
        try {
            setState({...state, loading: true});
            let response = await ContactService.getContact(contactId);
            let groupResponse = await ContactService.getGroup(response.data);
            setState({
                ...state,
                loading: false,
                contact: response.data,
                group: groupResponse.data
            });
        } catch (error) {
            setState({
                ...state,
                loading: false,
                contact: error.message
            });
        }
    }, [contactId]);

    let {loading, contact, errorMessage, group} = state;

    return (
        <React.Fragment>
            <section className="view-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning">View Contact</p>
                            <p className="fst italic">Placeholder</p>
                        </div>
                    </div>
                </div>
            </section>
            {
                loading ? <Spinner /> : <React.Fragment>
                    {
                        Object.keys(contact).length > 0 && Object.keys(group).length > 0 &&
                        <section className="view-contact mt-3">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src={contact.photo} alt="phot goes here" className="img-fluid contact-img" />                            
                                    </div>
                                    <div className="col-md-8">
                                    <ul className="list-group">
                                        <li className="list-group-item list-group-item-action">
                                            Name: {contact.name}
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Mobile: {contact.mobile}
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Email: {contact.email}
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Company: {contact.company}
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Title: {contact.title}
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Group: {group.name}
                                        </li>
                                    </ul>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <Link to={'/contacts/list'} className="btn btn-warning">Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    }
                </React.Fragment>
            }
        </React.Fragment>
    );
};

export default ViewContact;