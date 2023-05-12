import React, { useState } from "react";
import PropTypes from "prop-types";
import './style.css';
FormUser.propTypes = {
    onSubmitForm: PropTypes.func,
};

FormUser.PropTypesDefault = {
    onSubmitForm: null,
}

function FormUser({onSubmitForm}) {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('male');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeGender(e) {
        setGender(e.target.value);
    }

    function handleChangeBirthday(e) {
        setBirthday(e.target.value);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangeSubmit(e) {
        e.preventDefault();
        if(!onSubmitForm) return;
        const formValue = {
            name : name,
            gender : gender,
            birthday : birthday,
            email : email,
        }

        onSubmitForm(formValue);
        setName('');
        setGender('');
        setBirthday('');
        setEmail('');
    }

  return (
    <div>
      <form  onSubmit={handleChangeSubmit}>
        <label htmlFor="name">Họ tên:</label>
        <input type="text" id="name" name="name" required onChange={handleChangeName} value={name}/>
        <br />

        <label htmlFor="gender">Giới tính:</label>
        <select id="gender" name="gender" onChange={handleChangeGender} value={gender}>
          <option value="male">Nam</option>
          <option value="female">Nữ</option>
          <option value="other">Khác</option>
        </select>
        <br />

        <label htmlFor="birthday">Ngày tháng năm sinh:</label>
        <input type="date" id="birthday" name="birthday" onChange={handleChangeBirthday} value={birthday}/>
        <br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required onChange={handleChangeEmail} value={email}/>
        <br />

        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default FormUser;
