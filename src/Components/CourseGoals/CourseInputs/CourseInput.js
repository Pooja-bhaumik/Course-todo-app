import React,{useState} from "react";
import "./CourseInput.css";
import Button from "../../UI/Button/Button";
const CourseInput = (props) => {
    const [enteredValue,setEnteredValue] = useState('')
    const inputChangeHandler = e =>{
      setEnteredValue(e.target.value)
    }
    const formSubmitHandler = e => {
        e.preventDefault()
        props.onAddGoal(enteredValue);
    }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
          <label>Course Goal</label>
          <input type = "text" onChange={inputChangeHandler} />
      </div>
      <Button type="submit">Add Goals</Button>
    </form>
  );
};
export default CourseInput;
