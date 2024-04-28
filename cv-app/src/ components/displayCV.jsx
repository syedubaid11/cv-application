import Personalinfo from "./personalinfo";

const DisplayCV = (props)=>{

    return(
        <div className="displaycv"> 
            <h1>Personal Details:</h1>
            <p>{props.inputValue}</p>
        </div>
    )





}
export default DisplayCV;