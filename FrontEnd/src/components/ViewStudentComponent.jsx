import React, { Component } from 'react';
import StudentService from '../services/StudentService';
import '../App.css';
import { Link } from 'react-router-dom';

export default class ViewStudentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      student: {},
    };
  }

  componentDidMount() {
    StudentService.getStudentById(this.state.id).then((res) => {
      this.setState({ student: res.data });
    });
  }
  listStudents(){
    const viewUrl = '/';
    window.location.href = viewUrl;
  }

  render() {
    const { firstName, lastName, emailId } = this.state.student;

    return (
      <div className="view-student-container">
        <h1>Student Details</h1>
        <div className="student-details">
          <div className="detail">
            <label>First Name:</label>
            <span>{firstName}</span>
          </div>
          <div className="detail">
            <label>Last Name:</label>
            <span>{lastName}</span>
          </div>
          <div className="detail">
            <label>Email ID:</label>
            <span>{emailId}</span>
          </div>
        </div>
          <button className='btn btn-info' onClick={this.listStudents}>Go Back</button>
          </div>
    );
  }
}
