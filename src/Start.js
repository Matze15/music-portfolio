import React from 'react';
import './App.css';
import dummy1 from './media/dummy1.jpg'


export class Start extends React.Component{
    render(){
        return(
            <div className="start" id="start">
                <div className="start-content">
                    <img alt="Bild1" src={dummy1} className='start-bild'/>
                    <div className='start-text'>
                        <span className='big'>Moin,</span>
                        <br />
                        <span className="small">
                            ich bin Matthies und würde mich freuen, durch mein Klavierspiel zum Gelingen Ihrer Veranstaltung in Mönkeberg und Umgebung beizutragen.
                            <br/>Dabei richte ich mich bei Stil und Programm ganz nach Ihren Wünschen.
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}