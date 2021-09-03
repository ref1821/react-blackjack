import React, { Component } from 'react'
import './how.css'

class How extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             text: '',
             number: 0
        }


        
    }
    
    Howe() {
        if (this.state.number===0) {
            this.setState({
                number: this.state.number+1,
                text: this.state.text='Take cards until you get 21 or close, if you go ahead you lose. When you finish taking numbers click on "Finish Game" to compare your numbers with the computer, the one with the higher number that is not higher than 21',
        },
        () => {console.log(this.state.text)})
        }
        else if (this.state.number===1){
            this.setState({
                number: this.state.number-1,
                text: this.state.text='',
            },
            () => {console.log(this.state.text)})
            }
        }
    
    render() {
        return (
            <div className='how'>
                <button onClick={() => this.Howe()} id = 'btn'>How to play</button>
                <p id='how'>{this.state.text}</p>
            </div>
        )
    }
}

export default How;

