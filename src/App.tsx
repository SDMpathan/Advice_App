import axios from 'axios';
import React,{Component} from 'react';
import './App.css';

interface IProps{}

interface IState{
  advice : string;
}

export default class App extends Component<IProps,IState>{
  constructor(props:IProps){
    super(props);
    this.state = {
      advice : ''
    }
  }

  componentDidMount(){
    this.fetchAdvice();
  }
  
  fetchAdvice=()=>{
    axios.get("https://api.adviceslip.com/advice").then(
      (posRes)=>{
        const advice = posRes.data.slip.advice
        this.setState({advice:advice})
      },
      (errRes)=>{console.log(errRes)})    
  }

  render(){
    return(
      <React.Fragment>
        <div className="app">
          <div className="board">
            <div className="text">
              {this.state.advice}
            </div>
            <button className="button" onClick={this.fetchAdvice}>give me advice !!</button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}