import React,{useState} from 'react';
import './App.css'
import CourseGoalList from './Components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from "./Components/CourseGoals/CourseInputs/CourseInput";
function App() {
  const [courseGoals,setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ])
  const addGoalsHandler = (enteredText) =>{
    setCourseGoals(prevGoals=>{
      const updatedGoals = [...prevGoals]
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() })
      return updatedGoals
    })
  }
  
  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );
  if(courseGoals.length > 0 ){
   content =(<CourseGoalList items = {courseGoals} />) 
  }
  return (
    <div className="App">
      <section id ="goals-form">
      <CourseInput onAddGoal = {addGoalsHandler}/>
      </section>
       <section id = "goals">
         {content}
       </section>
    </div>
  );
}

export default App;
