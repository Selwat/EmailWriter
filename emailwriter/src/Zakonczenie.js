import React, { useState, useEffect} from "react";

const Zakonczenie = ({ reset, back }) => {
  const [content, setContent] = useState({
    bodyZakonczenie: ''
  });

  const [display, setDisplay] = useState({
    bodyZakonczenie: 'flex',
    Zakonczenie: 'flex',
    Reset: 'none',
  });


  useEffect(() => {
    if (reset === "resetowac") {
      ResetClick();
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset]);

  const bodyContent = (value) => {
    setContent({
      ...content,
      bodyZakonczenie: value,
    });
  };

  const handleClick = (value) => {
    setDisplay({
      ...display,
      bodyZakonczenie: 'flex',
      Zakonczenie: 'none',
      Reset: 'flex',
    });
    bodyContent(value);
  };

  const ResetClick = () => {
    setDisplay({
      ...display,
      bodyZakonczenie: 'flex',
      Zakonczenie: 'flex',
      Reset: 'none'
    });
    bodyContent('');
    back();
  };
    return (
    <div className='bodyZakonczenie' style={{ display: display.bodyZakonczenie }}>
      <p>{content.bodyZakonczenie}</p>
    <button id="Zakonczenie1" className="Zakonczenie" onClick={() => handleClick('Please do not hesitate to contact me if I can provide any additional information.,')} style={{ display: display.Zakonczenie }}><span className="material-symbols-outlined">done</span>Please do not hesitate to contact me if I can provide any additional information.</button>
    <button id="Zakonczenie2"className="Zakonczenie" onClick={() => handleClick('Please let me know if there is anything I can help you with.')} style={{ display: display.Zakonczenie }}><span className="material-symbols-outlined">done</span>Please let me know if there is anything I can help you with.</button>
    <button id="Zakonczenie3"className="Zakonczenie" onClick={() => handleClick('Please let me know if you have any questions')} style={{ display: display.Zakonczenie }}><span className="material-symbols-outlined">done</span>Please let me know if you have any questions</button>
    <button id="Zakonczenie4"className="Zakonczenie" onClick={() => handleClick('Thank you for help and feedback. Let us keep in touch!')} style={{ display: display.Zakonczenie }}><span className="material-symbols-outlined">done</span>Thank you for help and feedback. Let us keep in touch!</button>
    <button id="Zakonczenie5"className="Zakonczenie" onClick={() => handleClick('Thank you in advance')} style={{ display: display.Zakonczenie }}><span className="material-symbols-outlined">done</span>Thank you in advance</button>
    <button id="Zakonczenie6"className="Zakonczenie" onClick={() => handleClick('Thanks for your attention')} style={{ display: display.Zakonczenie }}><span className="material-symbols-outlined">done</span>Thanks for your attention</button>
    <button id="Zakonczenie7"className="Zakonczenie" onClick={() => handleClick('Please accept our apologies for the inconvenience you had.')} style={{ display: display.Zakonczenie }}><span className="material-symbols-outlined">done</span>Please accept our apologies for the inconvenience you had.</button>
    <button id="Zakonczenie8"className="Zakonczenie" onClick={() => handleClick('Please do not hesitate to share any thoughts or concerns with me and I would be glad to discuss this further.')} style={{ display: display.Zakonczenie }}><span className="material-symbols-outlined">done</span>Please do not hesitate to share any thoughts or concerns with me and I would be glad to discuss this further.</button>
    <button id="Zakonczenie9"className="Zakonczenie" onClick={() => handleClick('Please do not hesitate to contact me if I can provide any additional information.,')} style={{ display: display.Zakonczenie }}><span className="material-symbols-outlined">done</span>Please do not hesitate to contact me if I can provide any additional information.</button>
    <button id="Zakonczenie10"className="Zakonczenie" onClick={() => handleClick('Please let me know if there is anything I can help you with.')} style={{ display: display.Zakonczenie }}><span className="material-symbols-outlined">done</span>Please let me know if there is anything I can help you with.</button>
    <button id="Zakonczenie11"className="Zakonczenie" onClick={() => handleClick('Please let me know if you have any questions')} style={{ display: display.Zakonczenie }}><span className="material-symbols-outlined">done</span>Please let me know if you have any questions</button>
    <button id="Zakonczenie12"className="Zakonczenie" onClick={() => handleClick('Thank you for help and feedback. Let us keep in touch!')} style={{ display: display.Zakonczenie }}><span className="material-symbols-outlined">done</span>Thank you for help and feedback. Let us keep in touch!</button>
    <button id="Zakonczenie13"className="Zakonczenie" onClick={() => handleClick('Thank you in advance')} style={{ display: display.Zakonczenie }}><span className="material-symbols-outlined">done</span>Thank you in advance</button>
    <button id="Zakonczenie14"className="Zakonczenie" onClick={() => handleClick('Thanks for your attention')} style={{ display: display.Zakonczenie }}><span className="material-symbols-outlined">done</span>Thanks for your attention</button>
    <button id="Zakonczenie15"className="Zakonczenie" onClick={() => handleClick('Please accept our apologies for the inconvenience you had.')} style={{ display: display.Zakonczenie }}><span className="material-symbols-outlined">done</span>We want to thank you in advance for your time and hope that you enjoyed your experience.</button>
    <button className="Reset" style={{ display: display.Reset }} onClick={ResetClick}>Reset</button>
    </div>
    );
    };
    
    export default Zakonczenie;