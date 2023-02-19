import React, { useState, useEffect} from "react";

const Pozegnanie = ({ reset, back }) => {
  const [content, setContent] = useState({
    bodyPozegnanie: ''
  });

  const [display, setDisplay] = useState({
    bodyPozegnanie: 'flex',
    Pozegnanie: 'flex',
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
      bodyPozegnanie: value,
    });
  };

  const handleClick = (value) => {
    setDisplay({
      ...display,
      bodyPozegnanie: 'flex',
      Pozegnanie: 'none',
      Reset: 'flex',
    });
    bodyContent(value);
  };

  const ResetClick = () => {
    setDisplay({
      ...display,
      bodyPozegnanie: 'flex',
      Pozegnanie: 'flex',
      Reset: 'none'
    });
    bodyContent('');
    back();
  };
      
    
    return (
      <>
    <div className='bodyPozegnanie' style={{ display: display.bodyPozegnanie }}>
      <p>{content.bodyPozegnanie}</p>
    <button id="Pozegnanie1"className="Pozegnanie" onClick={() => handleClick('Best regards,,')} style={{ display: display.Pozegnanie }}><span className="material-symbols-outlined">done</span>Best regards,</button>
    <button id="Pozegnanie2"className="Pozegnanie" onClick={() => handleClick('Kind regards,')} style={{ display: display.Pozegnanie }}><span className="material-symbols-outlined">done</span>Kind regards,</button>
    <button id="Pozegnanie3"className="Pozegnanie" onClick={() => handleClick('Regards,')} style={{ display: display.Pozegnanie }}><span className="material-symbols-outlined">done</span>Regards,</button>
    <button id="Pozegnanie4"className="Pozegnanie" onClick={() => handleClick('Respectfully,')} style={{ display: display.Pozegnanie }}><span className="material-symbols-outlined">done</span>Respectfully,</button>
    <button id="Pozegnanie5"className="Pozegnanie" onClick={() => handleClick('Sincerely,')} style={{ display: display.Pozegnanie }}><span className="material-symbols-outlined">done</span>Sincerely,</button>
    <button id="Pozegnanie6"className="Pozegnanie" onClick={() => handleClick('With regards,')} style={{ display: display.Pozegnanie }}><span className="material-symbols-outlined">done</span>With regards,</button>
    <button id="Pozegnanie7"className="Pozegnanie" onClick={() => handleClick('Yours faithfully,')} style={{ display: display.Pozegnanie }}><span className="material-symbols-outlined">done</span>Yours faithfully,</button>
    <button id="Pozegnanie8"className="Pozegnanie" onClick={() => handleClick('Yours sincerely,')} style={{ display: display.Pozegnanie }}><span className="material-symbols-outlined">done</span>Yours sincerely,</button>
    <button id="Pozegnanie9"className="Pozegnanie" onClick={() => handleClick('Yours truly,')} style={{ display: display.Pozegnanie }}><span className="material-symbols-outlined">done</span>Yours truly,</button>
    <button className="Reset" style={{ display: display.Reset }} onClick={ResetClick}>Reset</button>
    </div>
    </>
    );
};
    
    
    export default Pozegnanie;