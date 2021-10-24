import React from 'react';

const ExperienceSection = (props) => {
    const {company} = props;
    const {workTitle} = props;
    const {tasks} = props;
    const {workDateFrom} = props;
    const {workDateTo} = props;
    const {workEditMode} = props;

    const {handleInputChange} = props;
    const {onSubmit} = props;
    const {onEdit} = props;

    let companyInput, workTitleInput, tasksInput, workDateFromInput, workDateToInput;


    if(workEditMode === true) {
        companyInput = <input 
                            onChange = {handleInputChange}
                            className= "companyInput"
                            value = {company}
                            name="company"
                        />
        workTitleInput = <input 
                            onChange = {handleInputChange}
                            className= "workTitle"
                            value = {workTitle}
                            name="workTitle"
                        />
        tasksInput = <input 
                            onChange = {handleInputChange}
                            className= "tasks"
                            value = {tasks}
                            name="tasks"
                        />
        workDateFromInput = <input 
                            onChange = {handleInputChange}
                            className= "workDateFromInput"
                            value = {workDateFrom}
                            name="workDateFrom"
                        />
        workDateToInput = <input 
                            onChange = {handleInputChange}
                            className= "workDateToInput"
                            value = {workDateTo}
                            name="workDateTo"
                        />
    } else {
        companyInput = <span>{company}</span>;
        workTitleInput = <span>{workTitle}</span>;
        tasksInput = <span>{tasks}</span>;
        workDateFromInput = <span>{workDateFrom}</span>;
        workDateToInput = <span>{workDateTo}</span>;
    }
    return (
        <div className= "experience component">
            <div className= "section header">
                Arbeitserfahrung
            </div>
            <div className="company section">
                <label htmlFor="companyInput" className="companyInputLabel">Unternehmen: </label>
                {companyInput}
            </div>
            <div className="workTitle section">
                <label htmlFor="workTitleInput" className="workTitleInputLabel">Titel:</label>
                {workTitleInput}
            </div>
            <div className="tasks section">
                <label htmlFor="tasksInput" className="tasksInputLabel">Aufgabenbereiche:</label>
                {tasksInput}
            </div>
            <div className="workDateFrom section">
                <label htmlFor="workDateFromInput" className="workDateFromInputLabel">Von:</label>
                {workDateFromInput}
            </div>
            <div className="workDateTo section">
                <label htmlFor="workDateToInput" className="workDateToInputLabel">Bis:</label>
                {workDateToInput}
            </div>
            <div className="buttons">
                <button onClick={() => onSubmit('experience')}className="submitButton">Speichern</button>
                <button onClick={() => onEdit('experience')} className="editButton">Ändern</button>
                
            </div>
        </div>
    )

}
export default ExperienceSection;