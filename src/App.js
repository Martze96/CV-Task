import React, { Component } from 'react';
import uniqid from "uniqid";

import GeneralSection from './components/GeneralSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';

import './styles/App.css';


class App extends Component {

  
  constructor() {
    super();



    this.state = {
      name: '',
      nameId: uniqid(),
      email:'',
      phone: '',
      generalEditMode: true,

      school: '',
      degree: '',
      eduDateFrom: '',
      eduDateTo: '',
      eduEditMode: true,
      eduNr: 1,
      educations: [],
      
      //educationComponents: [],

      company: '',
      workTitle: '',
      tasks: '',
      workDateFrom: '',
      workDateTo: '',
      workNr: 1,
      workEditMode: true,
      experiences: [],
          
      

      id: uniqid()


    }


  }

  handleInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit = (category) => {
    switch (category) {
      case 'general': this.setState({
        generalEditMode: false
      }); break;
      case 'education': 
        this.setState({eduEditMode: false});
        let eduData = [this.state.school, this.state.degree, this.state.eduDateFrom, this.state.eduDateTo,this.state.eduNr];
        this.setState({educations: this.state.educations.concat([eduData])}, () => {console.log(this.state.educations);} );
        this.setState({eduNr: this.state.eduNr+1}, () => {console.log(this.state.educations)});
        break;
      case 'experience':
        this.setState({workEditMode: false});
        break;
      
      
      default: break;
    }
  }

  onEdit = (category) => {
    switch (category) {
      case 'general': this.setState({generalEditMode: true}); break;
      case 'education': this.setState({eduEditMode: true}); break;
      case 'experience': this.setState({workEditMode: true}); break;
      default: break;

    }
  }


// COMING BACK LATER, WHEN LEARNED HOOKS ETC.
/*
 addEdu = () => {

  const eduTemplate = <EducationSection
                          school= ''
                          degree= ''
                          eduDateFrom= ''
                          eduDateTo= ''
                          eduEditMode= {true}
                          handleInputChange={this.handleInputChange}
                          onSubmit={this.onSubmit}
                          onEdit={this.onEdit} 
                        />
  this.setState({educationComponents: this.state.educationComponents.concat(eduTemplate)})
  
  console.log(this.state);

   return this.state.educationComponents;
 }

*/


  render() {
    const {
      name, email, phone, generalEditMode, id, nameId,
      school, degree, eduDateFrom, eduDateTo, eduEditMode, eduNr, educations,
      company, workTitle, tasks, workDateFrom, workDateTo, workEditMode, workNr, experiences
    } = this.state;
    
    return (
    <div className="App">
      <div className="header">CV-Maker with React.js</div>
      <GeneralSection
        name={name}
        email={email}
        phone={phone}
        generalEditMode={generalEditMode}
        handleInputChange={this.handleInputChange}
        onSubmit={this.onSubmit}
        onEdit={this.onEdit}
        id={id}
        nameId={nameId}
      />
      <div className="line"></div>
      <EducationSection
        school={school}
        degree={degree}
        eduDateFrom={eduDateFrom}
        eduDateTo={eduDateTo}
        eduEditMode={eduEditMode}
        handleInputChange={this.handleInputChange}
        onSubmit={this.onSubmit}
        onEdit={this.onEdit}
      /> 
      <div className="line"></div>
      {/*this.state.educationComponents */}
      {/*<button onClick={this.addEdu}>Bildung hinzufügen</button> */}
      <ExperienceSection
        company={company}
        workTitle={workTitle}
        tasks={tasks}
        workDateFrom={workDateFrom}
        workDateTo={workDateTo}
        workEditMode={workEditMode}
        handleInputChange={this.handleInputChange}
        onSubmit={this.onSubmit}
        onEdit={this.onEdit}
      />
      {/*<button onClick={this.addEdu}>Arbeitserfahrung hinzufügen</button>*/}
      

    </div>
    );

  }
}
export default App;
