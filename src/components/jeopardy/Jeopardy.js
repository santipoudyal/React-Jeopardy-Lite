
import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";


class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      
      score: 0,
      formData:{
        answer:"",
      }
    }
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }

    handleChange=(event)=>{
      const formData = {...this.state.formData}
      formData[event.target.name] =event.target.value
      this.setState({
        formData
      })
    }

    handleSubmit = (event) =>{
      event.preventDefault();
      if (this.state.data.answer === this.state.formData.answer){
        console.log('Match')
        this.setState((state, props)=> ({
          score:state.score + state.data.value
        })
        )
      }else{
        console.log('No Match')
        this.setState( (state, props)=>({
          score: state.score - state.data.value
          
        }))
      }

      this.setState({
        submitted: true
      })
    }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  render() {
    console.log(this.state.data);

    if(!this.state.data.category){
      return <div>Loading</div>;
    }
     
    //let category = this.state.data.category && this.state.data.category.title;

    return (
      <div>
       <div>
         <label>Question:</label>
         <p>{this.state.data.question}</p>
       </div>
       <div>
         <label>Value:</label>
         {this.state.data.value}
       </div>
       <div>
         <label>Category:</label>
         {this.state.data.category.title}
       </div>
       <div>
         <label>Score:</label>
         {this.state.score}
       </div>
       
       <form onSubmit={this.handleSubmit}>
         <div>
           <label htmlFor="answer">Answer</label>
           <input 
           type="text"
           name="answer"
           value={this.state.formData.answer}
           onChange={this.handleChange}
           />
         </div>
         <button>Submit</button>
       </form>
       
      </div>
    );
  }
} 
export default Jeopardy;