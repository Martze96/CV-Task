import React from 'react';

const EducationSection = (props) => {
    const {school} = props;
    const{degree} = props;
    const{eduDateFrom} = props;
    const{eduDateTo} = props;
    const{eduEditMode} = props;

    const{handleInputChange} = props;
    const{onSubmit} = props;
    const{onEdit} = props;

    let schoolInput, degreeInput, eduDateFromInput, eduDateToInput;

    if(eduEditMode === true){
        schoolInput = <input
                        onChange= {handleInputChange}
                        className= "schoolInput"
                        value={school}
                        name="school"
                    />

        degreeInput = <input
                        onChange= {handleInputChange}
                        className= "degreeInput"
                        value={degree}
                        name="degree"
                    />
        eduDateFromInput = <input
                        onChange= {handleInputChange}
                        className= "eduDateFromInput"
                        value={eduDateFrom}
                        name="eduDateFrom"
                        />
        eduDateToInput = <input
                            onChange= {handleInputChange}
                            className= "eduDateToInput"
                            value={eduDateTo}
                            name="eduDateTo"
                        />
    } else {
        schoolInput = <span>{school}</span>;
        degreeInput = <span>{degree}</span>;
        eduDateFromInput = <span>{eduDateFrom}</span>;
        eduDateToInput = <span>{eduDateTo}</span>;
    }
    return (
        <div className= "education component">
            <div className= "section header">
                Bildungserfahrung
            </div>
            <div className="school section">
                <label htmlFor="schoolInput" className="schoolInputLabel">Schule: </label>
                {schoolInput}
            </div>
            <div className="degree section">
                <label htmlFor="degreeInput" className="degreeInputLabel">Abschluss:</label>
                {degreeInput}
            </div>
            <div className="eduDateFrom section">
                <label htmlFor="eduDateFromInput" className="eduDateFromInputLabel">Von:</label>
                {eduDateFromInput}
            </div>
            <div className="eduDateTo section">
                <label htmlFor="eduDateToInput" className="eduDateToInputLabel">Bis:</label>
                {eduDateToInput}
            </div>
            <div className="buttons">
                <button onClick={() => onSubmit('education')}className="submitButton">Speichern</button>
                <button onClick={() => onEdit('education')} className="editButton">Ändern</button>
                
            </div>
        </div>
    )
    
}
export default EducationSection;