import React, { Component } from 'react'
import './new.css'
//https://black-c2597.web.app/
class New extends Component {
    constructor(props) {
        super(props)
        const as = 1;
        const dos = 2;
        const tres = 3;
        const cuatro = 4;
        const cinco = 5;
        const seis = 6;
        const siete = 7;
        const ocho = 8;
        const nueve = 9;
        const diez = 10;
        const joto = 10;
        const reina = 10;
        const rey = 10;

        var num = new Array(as, dos, tres, cuatro, cinco, seis, siete, ocho ,nueve, diez, joto, reina, rey);
        var dnum=num[Math.floor(Math.random()*num.length)];
        var dnum2=num[Math.floor(Math.random()*num.length)];
        var vnum1 = num[Math.floor(Math.random()*num.length)];
        var vnum2 = num[Math.floor(Math.random()*num.length)];

        this.state = {
            n:'',
            num:dnum,
            num2:dnum2,
            dnum3: 0,
            totalUno:dnum+dnum2,
            qwe: 0,
            //compu
            cnum: vnum1,
            cnum2: vnum2,
            cTotal:vnum1+vnum2,
            cnum3:0,
            fn:'',
            //extras
            no:0,
            end:""
        }
        
    }

    componentDidMount(){
        const as = 1;
        const dos = 2;
        const tres = 3;
        const cuatro = 4;
        const cinco = 5;
        const seis = 6;
        const siete = 7;
        const ocho = 8;
        const nueve = 9;
        const diez = 10;
        const joto = 10;
        const reina = 10;
        const rey = 10;

        var num = new Array(as, dos, tres, cuatro, cinco, seis, siete, ocho ,nueve, diez, joto, reina, rey);
        var ale = new Array("yes", "no", "yes", "no", "yes")
        var alet = ale[Math.floor(Math.random()*num.length)]
        if(this.state.cTotal>=15&&this.state.cTotal<21&&this.state.no===0){
            if(alet==='yes'){
                this.setState({
                    cnum3: num[Math.floor(Math.random()*num.length)],
                },
                ()=>{
                    this.setState({
                
                        cTotal: this.state.cTotal+this.state.cnum3,
                    },
                    ()=>{this.setState({
                        
                    })})})}
            else{this.setState({
                
            })}}
        else if(this.state.cTotal<15&&this.state.no===0){
            this.setState({
                cnum3: num[Math.floor(Math.random()*num.length)],
            },
            ()=>{
                this.setState({
            
                    cTotal: this.state.cTotal+this.state.cnum3,
                },
                ()=>{
                    this.setState({
                    
                })})})}
        else if(this.state.no===0){this.setState({
            
        })}
        
        console.log(this.state.cTotal)
        return this.state.cTotal
        
    }
    

    Finish() {
        if(this.state.no===0){
            //comparasiones
            console.log(this.state.cTotal)
            console.log(this.state.totalUno)
            if(this.state.totalUno>21&&this.state.cTotal>21){
                this.setState({
                    end: this.state.end+"Both lose"
                })}
            else if(this.state.totalUno>21){
                this.setState({
                    end: this.state.end+"You lose"
                })}
            else if(this.state.cTotal>21){
                this.setState({
                    end: this.state.end+"You win"
                })}
            else if (this.state.cTotal===this.state.totalUno){
                this.setState({
                    end: this.state.end+"There's a tie"
                })}
            else if (this.state.totalUno>this.state.cTotal&&this.state.totalUno<=21){
                this.setState({
                    end: this.state.end+"You win"
                })}
            else if (this.state.totalUno<this.state.cTotal&&this.state.cTotal<=21){
                this.setState({
                    end: this.state.end+"Computer win"
                })}
            this.setState({
                    no:this.state.no+1,
                    fn:"Computer's number: "+ this.state.cTotal
                })   
        }}
    
    NN(){
        if(this.state.no===0){
        const as = 1;
        const dos = 2;
        const tres = 3;
        const cuatro = 4;
        const cinco = 5;
        const seis = 6;
        const siete = 7;
        const ocho = 8;
        const nueve = 9;
        const diez = 10;
        const joto = 10;
        const reina = 10;
        const rey = 10;
        var num = new Array(as, dos, tres, cuatro, cinco, seis, siete, ocho ,nueve, diez, joto, reina, rey);
        if (this.state.totalUno<=21){
            this.setState({
                dnum3: num[Math.floor(Math.random()*num.length)],
            },()=>{
                this.setState({
                    n:'your new number is '+this.state.dnum3,
                    totalUno: this.state.totalUno+this.state.dnum3,
                })})}
        else if(this.state.qwe===0&&this.state.totalUno>21){
            this.setState({
                n:this.state.n+' __You lost__',
                qwe:this.state.qwe+1
            })
        }}
    }
    reload = () => {
        window.location.reload()
    }
    render() {
        
        return (
            <div className="new">
                <div className="person">
                    <h2 className='letter'>Your numbers</h2>
                    <p>Your numbers are {this.state.num} and {this.state.num2}</p>
                    <p className="letter">Total: {this.state.totalUno}</p>
                    <button onClick={() => this.NN()} className='bnn'>New number</button>
                    <p>{this.state.n}</p>
                </div>
                <div>     
                    <div className='compu'>
                        <h2 className='letter'>Computer's numbers</h2>
                        <p>Computer's numbers are {this.state.cnum}  and * </p>
                        <p>{this.state.fn}</p>
                    </div>
                    <div>
                        <button onClick={()=>this.Finish()} className="bnn">Finish Game</button>
                        <p className="letter">{this.state.end}</p>
                    </div>
                </div>
                <div className="ng">
                    <button onClick={()=>this.reload()} className="bnn">New game</button>
                </div>
            </div>
        )
    }
}

export default New;