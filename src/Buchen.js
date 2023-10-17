import React from 'react';
import './App.css';
import {Form} from './Form';


export class Buchen extends React.Component{
    render(){
        return(
            <div className='book' id='book'>
                <div className='book-content'>
                    <div className='book-text'>
                        Ich würde mich freuen, Ihre Veranstaltung musikalisch begleiten zu dürfen. 
                        <a href="./">Hier</a> finden Sie eine Liste mit einigen Liedern aus meinem aktuellen Repertoire, ich gehe aber auch gerne auf Ihre persönlichen Wünsche ein, schicken Sie mir einfach ihre eigene Playlist!
                        Ein eigenes E-Piano kann ich bei Bereitstellung einer Transportmöglichkeit mitbringen.
                    </div>
                    <div className='book-form'>
                        <span>Ich freue mich über Ihre Nachricht!</span>
                        <Form /> 
                    </div>
                </div>
                
            </div>
        )
    }
}