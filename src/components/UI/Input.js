import classes from "./Input.module.css";

const Input = props => {
  return <div className={classes.input}>
    <label htmlFor={props.input.id}>{props.label}</label>
    {/*spread operator is a trick one can use to pass all other config data*/}
    {/*to input element as props; all key value pairs in the input object*/}
    {/*are added as props to input*/}
    {/*ie {type: "text"}*/}
    {/*would make*/}
    {/*<input type="text" />*/}
    {/*makes element highly configurable from outside the component through a prop object*/}
    <input {...props.input} />
  </div>
};

export default Input;