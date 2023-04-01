import './App.css';
import Employees from './Components/Employees';
function App() {
  return (
    <div className='App'>
     <Employees name="Sourabh Chaudhary" address="Gurgaon" category="Electrical" contact="+917268866332"/>
     <Employees name="Rohit Yadav" address="Uttar Pradesh" category="Civil" contact="+91824567897"/>
     <Employees name="Sumit Chauhan" address="Haridwar" category="Machenical" contact="+9187576498"/>
     <Employees name="Prashant Rawat" address="Noida" category="Fiter" contact="+916098986574"/>
     <Employees name="Akhilesh Kumar" address="Mumbai" category="Helper" contact="+917897786798"/>
    </div>
  );
}

export default App;
