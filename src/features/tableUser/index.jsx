import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormUser from './components/formUser';
import ListUser from './components/tableUser';

TableUserFeatures.propTypes = {
    
};

function TableUserFeatures(props) {
    const [user, setUser] = useState(() => {
        var my_object = JSON.parse(localStorage.getItem('listUser'));
        return my_object || [];
    });

    function handleSubmitForm(formValue) {
        const newValue = {
            id : user.length + 1,
            ...formValue
        }

        const newUser = [...user];
        newUser.push(newValue);

        setUser(newUser);
        const saveLocal = localStorage.setItem('listUser', JSON.stringify(newUser));
    }

    return (
        <>
            <FormUser onSubmitForm={handleSubmitForm}/>
            <ListUser dataUser={user}/>
        </>
    );
}

export default TableUserFeatures;