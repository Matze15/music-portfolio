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
                        <a>Impressum</a> - <a>Datenschutzerklärung</a>
                    </div>
                    <div>
                        <a>Quellcode (Github)</a>
                    </div>
                </div>
            </div>
        )
    }
}