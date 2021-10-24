import React from 'react';


const GeneralSection = (props) => {
    const {name} = props;
    const {email} = props;
    const {phone} = props;
    const {generalEditMode} = props;
    const {id} = props;
    const nameId = props;
    
    
    const {handleInputChange} = props;
    const {onSubmit} = props;
    const {onEdit} = props;

    let nameInput, emailInput, phoneInput;
    
    if(generalEditMode === true) {
        nameInput = <input
                        onChange= {handleInputChange}
                        className= "nameInput"
                        value={name}
                        name="name"
                    />

        emailInput = <input
                        onChange= {handleInputChange}
                        className= "emailInput"
                        value={email}
                        name="email"
                    />
        phoneInput = <input
                        onChange= {handleInputChange}
                        className= "phoneInput"
                        value={phone}
                        name="phone"
                    />
    } else {
        nameInput = <span>{name}</span>;
        emailInput = <span>{email}</span>;
        phoneInput = <span>{phone}</span>;
    }

    return (
        <div className= "general component">
            <div className= "section header">
                Allgemeine Information
            </div>
            <div className="name section">
                <label htmlFor="nameInput" className="nameInputLabel">Name: </label>
                {nameInput}
            </div>
            <div className="email section">
                <label htmlFor="emailInput" className="emailInputLabel">E-Mail:</label>
                {emailInput}
            </div>
            <div className="phone section">
                <label htmlFor="phoneInput" className="phoneInputLabel">Tel.-Nr.:</label>
                {phoneInput}
            </div>
            <div className="buttons">
                <button onClick={() => onSubmit('general')}className="submitButton">Speichern</button>
                <button onClick={() => onEdit('general')} className="editButton">Ändern</button>
            </div>
        </div>
    )

}

export default GeneralSection;