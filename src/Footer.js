import React from 'react';
import './App.css';

export class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer-content'>
                    <div className='footer-cr'>
                    © Matthies Kallsen, 2023
                    </div>
                    <div className='footer-links'>
                        <a href='#imprint'>Impressum</a> - <a href='#privacy'>Datenschutzerklärung</a>
                    </div>
                    <div className='footer-gh'>
                        <a href="https://github.com/Matze15/music-portfolio">Quellcode (Github)</a>
                    </div>
                </div>
            </div>
        )
    }
}