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
        schoolInput = <span className="dataSpan">{school}</span>;
        degreeInput = <span className="dataSpan">{degree}</span>;
        eduDateFromInput = <span className="dataSpan">{eduDateFrom}</span>;
        eduDateToInput = <span className="dataSpan">{eduDateTo}</span>;
    }
    return (
        <div className= "education component">
            <div className= "sectionHeader">
                Bildungserfahrung
            </div>
            <div className="school section">
                <label htmlFor="schoolInput" className="InputLabel">Schule: </label>
                {schoolInput}
            </div>
            <div className="degree section">
                <label htmlFor="degreeInput" className="InputLabel">Abschluss:</label>
                {degreeInput}
            </div>
            <div className="eduDateFrom section">
                <label htmlFor="eduDateFromInput" className="InputLabel">Von:</label>
                {eduDateFromInput}
            </div>
            <div className="eduDateTo section">
                <label htmlFor="eduDateToInput" className="InputLabel">Bis:</label>
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