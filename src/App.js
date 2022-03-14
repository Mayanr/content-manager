import React from 'react';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar"
import ContactList from './components/contacts/ContactList';
import ViewContact from './components/contacts/ViewContact';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';

let App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
        <Route path={'/contacts/list'} element={<ContactList/>} />
        <Route path={'/contacts/add'} element={<AddContact/>} />
        <Route path={'/contacts/view/:contactId'} element={<ViewContact/>} />
        <Route path={'/contacts/edit/:contactId'} element={<EditContact/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
