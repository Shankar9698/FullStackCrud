import React from 'react';
import './App.css';
import ListOfStudentsComponent from './components/ListOfStudentsComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateStudentComponent from './components/CreateStudentComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UpdateStudentComponent from './components/UpdateStudentComponent';
import ViewStudentComponent from './components/ViewStudentComponent';

function App() {
  return (
    <Router>
      <div>
        <HeaderComponent />
        <div className='container'>
          <Switch>
            <Route path="/" exact component={ListOfStudentsComponent} />
            <Route path="/students" component={ListOfStudentsComponent} />
            <Route path="/add-student" component={CreateStudentComponent} />
            <Route path="/update-student/:id" component={UpdateStudentComponent} />
            <Route path="/view-student/:id" component={ViewStudentComponent} />

            {/* Add additional routes as needed */}
          </Switch>
        </div>
        <FooterComponent/>
        
      </div>
    </Router>
  );
}

export default App;
