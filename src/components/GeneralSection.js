import React from 'react';


const GeneralSection = (props) => {
    const {name} = props;
    const {email} = props;
    const {phone} = props;
    const {generalEditMode} = props;

    
    
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
        nameInput = <span className="dataSpan">{name}</span>;
        emailInput = <span className="dataSpan">{email}</span>;
        phoneInput = <span className="dataSpan">{phone}</span>;
    }

    return (
        <div className= "general component">
            <div className= "sectionHeader">
                Allgemeine Informationen
            </div>
            <div className="name section">
                <label htmlFor="nameInput" className="InputLabel">Name: </label>
                {nameInput}
            </div>
            <div className="email section">
                <label htmlFor="emailInput" className="InputLabel">E-Mail:</label>
                {emailInput}
            </div>
            <div className="phone section">
                <label htmlFor="phoneInput" className="InputLabel">Tel.-Nr.:</label>
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