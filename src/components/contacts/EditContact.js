import React from 'react';
import {Link} from 'react-router-dom';

let EditContact = () => {
    return (
        <React.Fragment>
            <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-primary fw-bold">Edit Contact</p>
                            <p className="fst-italic">placeholder text</p>
                        </div>
                        <div className="row">
                            <div className="co-md-4">
                                <form>
                                    <div className="mb-2">
                                        <input type="text" className="form-control" placeholder="name"/>
                                        <input type="text" className="form-control" placeholder="photo URL"/>
                                        <input type="number" className="form-control" placeholder="mobile"/>
                                        <input type="text" className="form-control" placeholder="email"/>
                                        <input type="text" className="form-control" placeholder="company"/>
                                        <input type="text" className="form-control" placeholder="title"/>
                                        <select className="form-control">
                                            <option value=""> Select a Group</option>
                                        </select>
                                    </div>
                                    <div className="mb-2">
                                        <input type="submit" className="btn btn-primary" value="Update"/>
                                        <Link to={'/contacts/list'} className="btn btn-dark ms-2">Cancel</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default EditContact;