import React, { useState, useEffect} from "react";

const Farewell = ({ reset, back }) => {
  const [content, setContent] = useState({
    bodyFarewell: ''
  });

  const [display, setDisplay] = useState({
    bodyFarewell: 'flex',
    Farewell: 'flex',
    Reset: 'none',
  });


  useEffect(() => {
    if (reset === "reset") {
      ResetClick();
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset]);

  const bodyContent = (value) => {
    setContent({
      ...content,
      bodyFarewell: value,
    });
  };

  const handleClick = (value) => {
    setDisplay({
      ...display,
      bodyFarewell: 'flex',
      Farewell: 'none',
      Reset: 'flex',
    });
    bodyContent(value);
  };

  const ResetClick = () => {
    setDisplay({
      ...display,
      bodyFarewell: 'flex',
      Farewell: 'flex',
      Reset: 'none'
    });
    bodyContent('');
    back();
  };
      
    
    return (
      <>
    <div className='bodyFarewell' style={{ display: display.bodyFarewell }}>
      <p>{content.bodyFarewell}</p>
    <button id="Farewell1"className="Farewell" onClick={() => handleClick('Best regards,,')} style={{ display: display.Farewell }}><span className="material-symbols-outlined">done</span>Best regards,</button>
    <button id="Farewell2"className="Farewell" onClick={() => handleClick('Kind regards,')} style={{ display: display.Farewell }}><span className="material-symbols-outlined">done</span>Kind regards,</button>
    <button id="Farewell3"className="Farewell" onClick={() => handleClick('Regards,')} style={{ display: display.Farewell }}><span className="material-symbols-outlined">done</span>Regards,</button>
    <button id="Farewell4"className="Farewell" onClick={() => handleClick('Respectfully,')} style={{ display: display.Farewell }}><span className="material-symbols-outlined">done</span>Respectfully,</button>
    <button id="Farewell5"className="Farewell" onClick={() => handleClick('Sincerely,')} style={{ display: display.Farewell }}><span className="material-symbols-outlined">done</span>Sincerely,</button>
    <button id="Farewell6"className="Farewell" onClick={() => handleClick('With regards,')} style={{ display: display.Farewell }}><span className="material-symbols-outlined">done</span>With regards,</button>
    <button id="Farewell7"className="Farewell" onClick={() => handleClick('Yours faithfully,')} style={{ display: display.Farewell }}><span className="material-symbols-outlined">done</span>Yours faithfully,</button>
    <button id="Farewell8"className="Farewell" onClick={() => handleClick('Yours sincerely,')} style={{ display: display.Farewell }}><span className="material-symbols-outlined">done</span>Yours sincerely,</button>
    <button id="Farewell9"className="Farewell" onClick={() => handleClick('Yours truly,')} style={{ display: display.Farewell }}><span className="material-symbols-outlined">done</span>Yours truly,</button>
    <button className="Reset" style={{ display: display.Reset }} onClick={ResetClick}>Reset</button>
    </div>
    </>
    );
};
    
    
    export default Farewell;