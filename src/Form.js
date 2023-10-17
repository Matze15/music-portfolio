import './App.css';
import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name) {
      alert('Bitte geben Sie Ihren Namen an!');
      return;
    }

    if (!email) {
      alert('Bitte geben Sie Ihre E-Mail-Adresse an!');
      return;
    }

    if (!subject) {
        alert('Bitte geben Sie einen Betreff an!');
        return;
    }

    if (!message) {
      alert('Bitte geben Sie Ihre Nachricht ein!');
      return;
    }

    // Send the form data to the PHP script

    const response = await fetch('./send-mail.php', {
      method: 'POST',
      url: './send-mail.php',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });

    // Handle the response from the PHP script

    if (response.ok) {
      alert('Ihre Nachricht wurde erfolgreich gesendet!');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      console.log(response)
      //alert('Ein Fehler ist beim Senden der Nachricht aufgetreten. Bitte versuchen Sie es später erneut!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Ihr Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="Ihre E-Mail-Adresse"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="text"
        name="subject"
        placeholder="Betreff"
        value={subject}
        onChange={(event) => setSubject(event.target.value)}
      />
      <textarea
        name="message"
        placeholder="Nachricht"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export {Form};