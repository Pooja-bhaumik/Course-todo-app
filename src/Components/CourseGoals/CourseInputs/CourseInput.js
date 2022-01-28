import React,{useState} from "react";
import "./CourseInput.css";
import Button from "../../UI/Button/Button";
import styled from "styled-components";

const FormControl = styled.div`
 & label{
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color:${props => props.invalid ? 'red' : 'black'}
}
& input{
  display: block;
  width: 100%;
  border: 1px solid ${props => props.invalid ? 'red': '#ccc'};
  background-color:${props => props.invalid ? 'rgb(235, 202, 202)' : 'transparent'}
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
  outline: none;
  margin-bottom: 0.5rem;
}
& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

`;
const CourseInput = (props) => {
    const [enteredValue,setEnteredValue] = useState('')
    const [isValid,setIsValid] = useState(true)
    // console.log('isvalid',isValid)
    const inputChangeHandler = e =>{
        setEnteredValue(e.target.value)
    }
    const formSubmitHandler = e => {
        e.preventDefault()
        if(enteredValue.length){
            props.onAddGoal(enteredValue);
            setIsValid(true)
            setEnteredValue('');
        }else {
            setIsValid(false);
        }
    }
  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid = {!isValid} >
          <label>Course Goal</label>
          <input type = "text" value={enteredValue} onChange={inputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goals</Button>
    </form>
  );
};
export default CourseInput;
