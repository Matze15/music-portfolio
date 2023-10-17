import React from 'react';
import './App.css';
import dummy2 from './media/dummy2.jpg';

export class About extends React.Component{
    render(){
        return(
            <div className='about' id='about'>
                <div className='about-content'>
                    <img alt="Bild1" src={dummy2} className='about-bild'/>
                    <div className="about-text">
                        Ich bin 17 Jahre alt und wohne in Mönkeberg. Derzeit besuche ich die zwölfte Klasse der Heinrich-Heine-Schule in Heikendorf. 
                        10 Jahre durfte ich eine klassische Klavierausbildung genießen, bevor ich mich vor einem Jahr beschloss, mich nun mehr mit freiem Spiel und Improvisation zu beschäftigen.
                        Neben der Musik interessiere ich mich für Naturwissenschaften und Technik, außerdem treibe ich gern Ausdauersport in Form von Triathlon.
                    </div>
                </div>
            </div>
        )
    }
}