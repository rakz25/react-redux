import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <h1>I Am app component</h1>
      <h1>my name is {props.myname}</h1>
      <button onClick={()=>props.changeName("Lahkar")}>click it</button>
     
    </div>
  );
}
const mapStateToProps  = (state) =>{
     return{
          myname: state.name
         

     }


}
const mapDispatchToProps = (dispatch) =>{
  
   return{
        changeName:(name) => {dispatch({type:'CHANGE_NAME',payload:name})}
         
        }
       


   

}

export default connect(mapStateToProps,mapDispatchToProps) (App);