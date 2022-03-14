import React from 'react';
import {Link} from 'react-router-dom';

let ViewContact = () => {
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
            <section className="view-contact mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="https://www.vhv.rs/dpng/d/544-5445462_people-icons-png-flat-person-icon-png-transparent.png" alt="phot goes here" className="img-fluid contact-img" />                            
                        </div>
                        <div className="col-md-8">
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
                            <li className="list-group-item list-group-item-action">
                                Company: UMG
                            </li>
                            <li className="list-group-item list-group-item-action">
                                Title: Manager
                            </li>
                            <li className="list-group-item list-group-item-action">
                                Group: Marketing
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
        </React.Fragment>
    );
};

export default ViewContact;