/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import Greeting from './Przywitanie';
import Beginning from "./Poczatek";
import Ending from './Zakonczenie';
import Farewell from './Pozegnanie';
import { CopyToClipboard } from 'react-copy-to-clipboard';



const Formularz = () => {

  const [content, setContent] = useState('');

  const handleCopy = () => {
    const adresat = document.querySelector('.adresat').value;
    const subject = document.querySelector('.subject').value;
    const bodyGreeting = document.querySelector('.GreetingBody p').textContent;
    const beginningBody = document.querySelector('.beginningBody p').textContent;
    const userMessage = document.querySelector('.userMessage').value;
    const bodyEnding = document.querySelector('.bodyEnding p').textContent;
    const bodyFarewell = document.querySelector('.bodyFarewell p').textContent;
    const userName = document.querySelector('.userName').value;
  
  
   
    
    setContent(
      `To: ${adresat}\nSubject: ${subject}\n\n${bodyGreeting}\n${beginningBody}\n${userMessage}\n\n${bodyEnding}\n\n${bodyFarewell}\n${userName}`
    );
  };
  
  const [reset, setReset] = useState(null);
  const returnReset = () => {
    setReset(null);
  };
  const onClickReset = () => {
    setReset("reset");
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
          <Greeting reset={reset} back={returnReset}/>
          <Beginning reset={reset} back={returnReset}/>
          <textarea className="userMessage" placeholder="Your message body goes here" />
          <Ending reset={reset} back={returnReset}/>
          <Farewell reset={reset} back={returnReset}/>
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
          <button className="GitHub" onClick={() => window.open("https://github.com/Selwat/Email", "_blank")}>Github</button>
        </div>
      </footer>
    </>
  );
}

export default Formularz;
