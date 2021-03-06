import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { ContactService } from '../../services/ContactService';
import Spinner from '../spinner/Spinner';

let ContactList = () => {

    let [state, setState] = useState({
            loading: false,
            contacts: [],
            errorMessage: ''
        }
    )

    useEffect(async ()=> {
        setState({...state, loading: true})
        try{
            let response = await ContactService.getAllContacts();
            setState({
                ...state,
                loading: false,
                contacts: response.data
            });
        }
        catch (error) {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            });
        }
    }, []);
    let {loading, contacts, errorMessage} = state;

    const renderedContacts = contacts.map(contact => {
        return (
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={contact.photo} alt="phot goes here" className="img-fluid contact-img" />
                            </div>
                            <div className="col-md-7">
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
                                </ul>
                            </div>
                            <div className="col-md-1">
                                <Link to={`/contacts/view/${contact.id}`} className="btn btn-warning">
                                    <i className="fa fa-eye"/>
                                </Link>
                                <Link to={`/contacts/edit/${contact.id}`} className="btn btn-primary">
                                    <i className="fa fa-pen"/>
                                </Link>
                                <button className="btn btn-danger">
                                    <i className="fa fa-trash"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <React.Fragment>
            <section className="contact-search p-3">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3">Contact Manager
                                    <Link to={'/contacts/add'} className="btn btn-primary ms-2">
                                        <i className="fa fa-plus-circle me-2" />New</Link>
                                </p>
                                <p className='fst-italic'>
                                    placeholder text
                                </p>
                            </div>
                        </div>
                    <div className="row">
                        <div className="col-md-6">
                            <form className="row">
                                <div className="col">
                                    <div className="mb-2">
                                        <input type="text" className="form-control" placeholder="Search Names" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-2">
                                        <input type="submit" className="btn btn-outline-dark" value="Search" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        {
            loading ? <Spinner /> : 
            <React.Fragment>
                <section className="contact-list">
                    <div className="container">
                        <div className="row">
                            {renderedContacts}       
                        </div>
                    </div>
                </section>
            </React.Fragment>
        }
        </React.Fragment>
    );
};

export default ContactList;