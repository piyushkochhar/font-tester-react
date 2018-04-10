import React, { Component } from 'react';
import "../Components/FontTester.css"

class FontTester extends Component{
    constructor(){
        super()

        this.state = {
            inputText : ''
        }
    }

    updateText(val){
        this.setState({inputText : val})
    }
    render(){
        return(
            <div>
                <div className= "header">Font Tester</div>
                <input className="box input" onChange = {(e) => {this.updateText(e.target.value)}}placeholder = "Type Here"/>
                
                <div className = "font-info">Gloria Hallelujah</div>
                <input className = "box gloria" value = {this.state.inputText} readOnly/>

                <div className = "font-info">Hi Melody</div>
                <input className = "box melody"
                value = {this.state.inputText} readOnly/>

                <div className = "font-info">Playfair Display</div>
                <input className = "box playfair"
                value = {this.state.inputText} readOnly/>

                <div className = "font-info">Indie Flower</div>
                <input className = "box indie-flower"
                value = {this.state.inputText} readOnly/>

                <div className = "font-info">Jua</div>
                <input className = "box jua"
                value = {this.state.inputText} readOnly/>

                <div className = "font-info">Dancing Script</div>
                <input className = "box dancing-script"
                value = {this.state.inputText} readOnly/>

                <div className = "font-info">Amatic SC</div>
                <input className = "box amatic"
                value = {this.state.inputText} readOnly/>
                
            </div>
        );
    }
}

export default FontTester;