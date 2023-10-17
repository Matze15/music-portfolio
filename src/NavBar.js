import React from 'react';
import './App.css';
import clef from './media/clef.png'
import {scroll} from './scroll'


export class NavBar extends React.Component {

    render(){
        return(
            <div className='navBar'>
                <div className='nav-content'>
                <div className='nav-name' onClick={() => scroll('root')}>
                    <img alt="clef" src={clef} className='nav-clef'/>
                    Matthies Kallsen
                    </div>

                <ul>
                    <li onClick={() => scroll('about')}>Über mich</li>
                    <li onClick={() => scroll('proben')}>Hörproben</li>
                    <li onClick={() => scroll('buchen')}>Buchen</li>

                </ul>
                </div>
            </div>
        )
    }
}