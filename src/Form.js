import './App.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yakmln8', 'template_6d2656p', form.current, 'BOw6uEnXiKEu3Hm2g')
      .then((result) => {
          form.current.reset();
          alert("Erfolgreich gesendet!");
      }, (error) => {
          console.log(error.text);
          alert("Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut oder schreiben Sie mir direkt an matthies@kallsen.net.")
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input 
      type="text" 
      name="from_name" 
      placeholder='Ihr Name'
      />
      <input 
      type="email" 
      name="reply_to" 
      placeholder='Ihre E-Mail-Adresse'
      />
      <textarea 
      name="message" 
      placeholder='Ihre Nachricht'
      />
      <input 
      type="submit" 
      value="Senden" 
      />
    </form>
  );
};