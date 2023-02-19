import React, { useState, useEffect} from "react";

const Przywitanie = ({ reset, back }) => {
  const [content, setContent] = useState({
    bodyPrzywitanie: ''
  });

  const [display, setDisplay] = useState({
    bodyPrzywitanie: 'flex',
    Przywitanie: 'flex',
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
      bodyPrzywitanie: value,
    });
  };

  const handleClick = (value) => {
    setDisplay({
      ...display,
      bodyPrzywitanie: 'flex',
      Przywitanie: 'none',
      Reset: 'flex',
    });
    bodyContent(value);
  };

  const ResetClick = () => {
    setDisplay({
      ...display,
      bodyPrzywitanie: 'flex',
      Przywitanie: 'flex',
      Reset: 'none'
    });
    bodyContent('');
    back();
  };
    
    return (
    <div className='bodyPrzywitanie' style={{ display: display.bodyPrzywitanie }}>
      <p>{content.bodyPrzywitanie}</p>
    <button id="Przywitanie1"className="Przywitanie" onClick={() => handleClick('Dear Madam,')} style={{ display: display.Przywitanie }}><span className="material-symbols-outlined">done</span>Dear Madam,</button>
    <button id="Przywitanie2"className="Przywitanie" onClick={() => handleClick('Dear Mr,')} style={{ display: display.Przywitanie }}><span className="material-symbols-outlined">done</span>Dear Mr,</button>
    <button id="Przywitanie3"className="Przywitanie" onClick={() => handleClick('Dear Mrs,')} style={{ display: display.Przywitanie}}><span className="material-symbols-outlined">done</span>Dear Mrs,</button>
    <button id="Przywitanie4"className="Przywitanie" onClick={() => handleClick('Dear Ms,')} style={{ display: display.Przywitanie }}><span className="material-symbols-outlined">done</span>Dear Ms,</button>
    <button id="Przywitanie5"className="Przywitanie" onClick={() => handleClick('Dear Sir,')} style={{ display: display.Przywitanie }}><span className="material-symbols-outlined">done</span>Dear Sir,</button>
    <button id="Przywitanie6"className="Przywitanie" onClick={() => handleClick('Good Morning,')} style={{ display: display.Przywitanie }}><span className="material-symbols-outlined">done</span>Good Morning,</button>
    <button id="Przywitanie7"className="Przywitanie" onClick={() => handleClick('Greetings,')} style={{ display: display.Przywitanie }}><span className="material-symbols-outlined">done</span>Greetings,</button>
    <button id="Przywitanie8"className="Przywitanie" onClick={() => handleClick('To whom it may concern,')} style={{ display: display.Przywitanie }}><span className="material-symbols-outlined">done</span>To whom it may concern,</button>
    <button className="Reset" style={{ display: display.Reset }} onClick={ResetClick}>Reset</button>
    </div>
    );
    };
    
    export default Przywitanie;