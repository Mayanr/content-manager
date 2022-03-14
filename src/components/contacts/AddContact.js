import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { ContactService } from '../../services/ContactService';

let AddContact = () => {

    const navigate = useNavigate();

    let [state, setState] = useState({
        loading: false,
        contact: {
            name: '',
            photo: '',
            mobile: '',
            email: '',
            company: '',
            title: '',
            groupId: ''

        },
        groups: [],
        errorMessage: ""

    });

    // binding data
    let updateInput= event => {
        setState({
            ...state,
            contact: {
                ...state.contact,
                [event.target.name]: event.target.value
            }
        });
    };

    useEffect( async () => {
        try {
            setState({...state, loading: true});
            let response = await ContactService.getGroups();
            setState({
                ...state,
                loading: false,
                groups: response.data
            });
        } catch(error) {

        }
    }, []);

    const submitForm = async event => {
        event.preventDefault();
        try {
            const response = await ContactService.createContact(state.contact);
            if(response) {
                navigate('/contacts/list', { replace: true });
            }
        } catch(error) {
            setState({
                ...state, errorMessage: error.message
            });
            navigate('/contact/add',  { replace: false })
        }
    }

    let {loading, contact, groups, errorMessage} = state;

    return (
        <React.Fragment>
            <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-success fw-bold">Create Contact</p>
                            <p className="fst-italic">placeholder text</p>
                        </div>
                        <div className="row">
                            <div className="co-md-4">
                                <form onSubmit={submitForm}>
                                    <div className="mb-2">
                                        <input
                                            required={true}
                                            name="name"
                                            value={contact.name}
                                            onChange={updateInput}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="name"
                                            />
                                        <input
                                            required={true}
                                            name="photo"
                                            value={contact.photo}
                                            onChange={updateInput}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="photo URL"
                                            />
                                        <input
                                            required={true}
                                            name="mobile"
                                            value={contact.mobile}
                                            onChange={updateInput}
                                            type="number" 
                                            className="form-control" 
                                            placeholder="mobile"
                                            />
                                        <input
                                            required={true}
                                            name="email"
                                            value={contact.email}
                                            onChange={updateInput}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="email"
                                            />
                                        <input
                                            required={true}
                                            name="company"
                                            value={contact.company}
                                            onChange={updateInput}
                                            type="text" 
                                            className="form-control" 
                                            placeholder="company"
                                            />
                                        <input
                                            required={true}
                                            name="title"
                                            value={contact.title}
                                            onChange={updateInput} 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="title"
                                            />
                                        <select
                                            required={true}
                                            name="group"
                                            value={contact.group}
                                            onChange={updateInput}
                                            className="form-control"
                                            >
                                            <option value=""> Select a Group</option>
                                            { 
                                                groups.length > 0 && groups.map(group => {
                                                    return (
                                                        <option key={group.id} value={group.id}>{group.name}</option>
                                                    );
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="mb-2">
                                        <input type="submit" className="btn btn-success" value="Create"/>
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

export default AddContact;