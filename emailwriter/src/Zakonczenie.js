import React, { useState, useEffect} from "react";

const Ending = ({ reset, back }) => {
  const [content, setContent] = useState({
    bodyEnding: ''
  });

  const [display, setDisplay] = useState({
    bodyEnding: 'flex',
    Ending: 'flex',
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
      bodyEnding: value,
    });
  };

  const handleClick = (value) => {
    setDisplay({
      ...display,
      bodyEnding: 'flex',
      Ending: 'none',
      Reset: 'flex',
    });
    bodyContent(value);
  };

  const ResetClick = () => {
    setDisplay({
      ...display,
      bodyEnding: 'flex',
      Ending: 'flex',
      Reset: 'none'
    });
    bodyContent('');
    back();
  };
    return (
    <div className='bodyEnding' style={{ display: display.bodyEnding }}>
      <p>{content.bodyEnding}</p>
    <button id="Ending1" className="Ending" onClick={() => handleClick('Please do not hesitate to contact me if I can provide any additional information.,')} style={{ display: display.Ending }}><span className="material-symbols-outlined">done</span>Please do not hesitate to contact me if I can provide any additional information.</button>
    <button id="Ending2"className="Ending" onClick={() => handleClick('Please let me know if there is anything I can help you with.')} style={{ display: display.Ending }}><span className="material-symbols-outlined">done</span>Please let me know if there is anything I can help you with.</button>
    <button id="Ending3"className="Ending" onClick={() => handleClick('Please let me know if you have any questions')} style={{ display: display.Ending }}><span className="material-symbols-outlined">done</span>Please let me know if you have any questions</button>
    <button id="Ending4"className="Ending" onClick={() => handleClick('Thank you for help and feedback. Let us keep in touch!')} style={{ display: display.Ending }}><span className="material-symbols-outlined">done</span>Thank you for help and feedback. Let us keep in touch!</button>
    <button id="Ending5"className="Ending" onClick={() => handleClick('Thank you in advance')} style={{ display: display.Ending }}><span className="material-symbols-outlined">done</span>Thank you in advance</button>
    <button id="Ending6"className="Ending" onClick={() => handleClick('Thanks for your attention')} style={{ display: display.Ending }}><span className="material-symbols-outlined">done</span>Thanks for your attention</button>
    <button id="Ending7"className="Ending" onClick={() => handleClick('Please accept our apologies for the inconvenience you had.')} style={{ display: display.Ending }}><span className="material-symbols-outlined">done</span>Please accept our apologies for the inconvenience you had.</button>
    <button id="Ending8"className="Ending" onClick={() => handleClick('Please do not hesitate to share any thoughts or concerns with me and I would be glad to discuss this further.')} style={{ display: display.Ending }}><span className="material-symbols-outlined">done</span>Please do not hesitate to share any thoughts or concerns with me and I would be glad to discuss this further.</button>
    <button id="Ending9"className="Ending" onClick={() => handleClick('Please do not hesitate to contact me if I can provide any additional information.,')} style={{ display: display.Ending }}><span className="material-symbols-outlined">done</span>Please do not hesitate to contact me if I can provide any additional information.</button>
    <button id="Ending10"className="Ending" onClick={() => handleClick('Please let me know if there is anything I can help you with.')} style={{ display: display.Ending }}><span className="material-symbols-outlined">done</span>Please let me know if there is anything I can help you with.</button>
    <button id="Ending11"className="Ending" onClick={() => handleClick('Please let me know if you have any questions')} style={{ display: display.Ending }}><span className="material-symbols-outlined">done</span>Please let me know if you have any questions</button>
    <button id="Ending12"className="Ending" onClick={() => handleClick('Thank you for help and feedback. Let us keep in touch!')} style={{ display: display.Ending }}><span className="material-symbols-outlined">done</span>Thank you for help and feedback. Let us keep in touch!</button>
    <button id="Ending13"className="Ending" onClick={() => handleClick('Thank you in advance')} style={{ display: display.Ending }}><span className="material-symbols-outlined">done</span>Thank you in advance</button>
    <button id="Ending14"className="Ending" onClick={() => handleClick('Thanks for your attention')} style={{ display: display.Ending }}><span className="material-symbols-outlined">done</span>Thanks for your attention</button>
    <button id="Ending15"className="Ending" onClick={() => handleClick('Please accept our apologies for the inconvenience you had.')} style={{ display: display.Ending }}><span className="material-symbols-outlined">done</span>We want to thank you in advance for your time and hope that you enjoyed your experience.</button>
    <button className="Reset" style={{ display: display.Reset }} onClick={ResetClick}>Reset</button>
    </div>
    );
    };
    
    export default Ending;