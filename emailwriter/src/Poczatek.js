import React, { useState, useEffect} from "react";

const Poczatek = ({ reset, back }) => {
  const [content, setContent] = useState({
    bodyPoczatek: ''
  });

  const [display, setDisplay] = useState({
    bodyPoczatek: 'flex',
    Poczatek: 'flex',
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
      bodyPoczatek: value,
    });
  };

  const handleClick = (value) => {
    setDisplay({
      ...display,
      bodyPoczatek: 'flex',
      Poczatek: 'none',
      Reset: 'flex',
    });
    bodyContent(value);
  };

  const ResetClick = () => {
    setDisplay({
      ...display,
      bodyPoczatek: 'flex',
      Poczatek: 'flex',
      Reset: 'none'
    });
    bodyContent('');
    back();
  };

    return (
      <>
      
    <div className='bodyPoczatek' style={{ display: display.bodyPoczatek }}>
    <p>{content.bodyPoczatek}</p>
    <button id="Poczatek1" className="Poczatek" onClick={() => handleClick('I regret to you that,')} style={{ display: display.Poczatek }}><span className="material-symbols-outlined">done</span>I regret to you that,</button>
    <button id="Poczatek2"className="Poczatek" onClick={() => handleClick('I am writing with regard to,')} style={{ display: display.Poczatek }}><span className="material-symbols-outlined">done</span>I am writing with regard to,</button>
    <button id="Poczatek3"className="Poczatek" onClick={() => handleClick('I am writing to let you know,')} style={{ display: display.Poczatek}}><span className="material-symbols-outlined">done</span>I am writing to let you know,</button>
    <button id="Poczatek4"className="Poczatek" onClick={() => handleClick('I am writing in response to,')} style={{ display: display.Poczatek }}><span className="material-symbols-outlined">done</span>I am writing in response to,</button>
    <button id="Poczatek5"className="Poczatek" onClick={() => handleClick('I am writing in reply to,')} style={{ display: display.Poczatek }}><span className="material-symbols-outlined">done</span>I am writing in reply to,</button>
    <button id="Poczatek6"className="Poczatek" onClick={() => handleClick('I am writing in reference to,')} style={{ display: display.Poczatek }}><span className="material-symbols-outlined">done</span>I am writing in reference to,</button>
    <button id="Poczatek7"className="Poczatek" onClick={() => handleClick('I am writing in connection with,')} style={{ display: display.Poczatek }}><span className="material-symbols-outlined">done</span>I am writing in connection with,</button>
    <button id="Poczatek8"className="Poczatek" onClick={() => handleClick('I am delighted to tell you,')} style={{ display: display.Poczatek }}><span className="material-symbols-outlined">done</span>I am delighted to tell you,</button>
    <button className="Reset" style={{ display: display.Reset }} onClick={ResetClick}>Reset</button>
    </div>
    
    </>
    );
    
  }

  export default Poczatek;
