import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { ContactService } from '../../services/ContactService';

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
    return (
        <React.Fragment>
            <pre>{JSON.stringify(contacts)}</pre>
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

            <section className="contact-list">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src="https://www.vhv.rs/dpng/d/544-5445462_people-icons-png-flat-person-icon-png-transparent.png" alt="phot goes here" className="img-fluid contact-img" />
                                        </div>
                                        <div className="col-md-7">
                                            <ul className="list-group">
                                                <li className="list-group-item list-group-item-action">
                                                    Name: Kelly
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                    Mobile: 879-878-1209
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                    Email: kellyT@gmail.com
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-1">
                                            <Link to={`/contacts/view/:contactId`} className="btn btn-warning">
                                                <i className="fa fa-eye"/>
                                            </Link>
                                            <Link to={`/contacts/edit/:contactId`} className="btn btn-primary">
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
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default ContactList;