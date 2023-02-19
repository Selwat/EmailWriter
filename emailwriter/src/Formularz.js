/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import Przywitanie from './Przywitanie';
import Zakonczenie from './Zakonczenie';
import Pozegnanie from './Pozegnanie';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Poczatek from "./Poczatek";


const Formularz = () => {

  const [content, setContent] = useState('');

  const handleCopy = () => {
    const adresat = document.querySelector('.adresat').value;
    const subject = document.querySelector('.subject').value;
    const userMessage = document.querySelector('.userMessage').value;
    const userName = document.querySelector('.userName').value;
    const bodyPozegnanie = document.querySelector('.bodyPozegnanie p').textContent;
    const bodyPrzywitanie = document.querySelector('.bodyPrzywitanie p').textContent;
    const bodyPoczatek = document.querySelector('.bodyPoczatek p').textContent;
    const bodyZakonczenie = document.querySelector('.bodyZakonczenie p').textContent;
    setContent(
      `To: ${adresat}\nSubject: ${subject}\n\n${bodyPrzywitanie}\n${bodyPoczatek}\n${userMessage}\n\n${bodyZakonczenie}\n\n${bodyPozegnanie}\n${userName}`
    );
  };
  
  const [reset, setReset] = useState(null);
  const returnReset = () => {
    setReset(null);
  };
  const onClickReset = () => {
    setReset("resetowac");
    const adresat = document.querySelector('.adresat').value = "";
    const subject = document.querySelector('.subject').value = "";
    const userMessage = document.querySelector('.userMessage').value = "";
    const userName = document.querySelector('.userName').value = "";

  };
 
  
 

  return (
    <>
      <h1>Polite email builder</h1>
      <section className="calyform">
        <label>To:</label>
        <div className="adresatDiv">
          <input type="text" className="adresat" placeholder="example@gmail.com" />
        </div>
        <label>Subject:</label>
        <div className="subjectDiv">
          <input type="text" className="subject" placeholder="Example message subject" />
        </div>
        <label>Body:</label>
        <div className="bodyDiv">
          <Przywitanie reset={reset} back={returnReset}/>
          <Poczatek reset={reset} back={returnReset}/>
          <textarea className="userMessage" placeholder="Your message body goes here" />
          <Zakonczenie reset={reset} back={returnReset}/>
          <Pozegnanie reset={reset} back={returnReset}/>
          <textarea className="userName" placeholder="Your signature/name" />
        </div>
      </section>
      <footer>
        <div className="stopka">
          <CopyToClipboard text={content}>
            <button className="Copy" onClick={handleCopy}>
              Copy
            </button>
          </CopyToClipboard>
          <button className="Reset1" onClick={()=>{onClickReset()}}>
            Reset
          </button>
          <button className="GitHub">Github</button>
        </div>
      </footer>
    </>
  );
}

export default Formularz;
