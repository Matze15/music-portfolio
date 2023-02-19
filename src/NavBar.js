import React from 'react';
import './App.css';
import clef from './media/clef.png'

export class NavBar extends React.Component {

    render(){
        return(
            <div className='navBar'>
                <div className='nav-content'>
                <div className='nav-name' href="#root">
                    <img alt="clef" src={clef} class='nav-clef'/>
                    Matthies Kallsen
                    </div>
                <ul>
                    <li href="#about">Über mich</li>
                    <li href="#buchen">Buchen</li>
                    <li href="#proben">Hörproben</li>
                    <li href="projekte">Projekte</li>
                </ul>
                </div>
            </div>
        )
    }
}