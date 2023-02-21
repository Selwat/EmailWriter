import React, { useState, useEffect } from "react";

const Beginning = ({ reset, back }) => {
const [content, setContent] = useState({
beginningBody: ''
});

const [display, setDisplay] = useState({
beginningBody: 'flex',
beginning: 'flex',
Reset: 'none',
});

useEffect(() => {
if (reset === "reset") {
resetClick();
}
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [reset]);

const bodyContent = (value) => {
setContent({
...content,
beginningBody: value,
});
};

const handleClick = (value) => {
setDisplay({
...display,
beginningBody: 'flex',
beginning: 'none',
Reset: 'flex',
});
bodyContent(value);
};

const resetClick = () => {
setDisplay({
...display,
beginningBody: 'flex',
beginning: 'flex',
Reset: 'none'
});
bodyContent('');
back();
};

return (
<>
<div className='beginningBody' style={{ display: display.beginningBody }}>
<p>{content.beginningBody}</p>
<button id="beginning1" className="beginning" onClick={() => handleClick('I regret to inform you that,')} style={{ display: display.beginning }}><span className="material-symbols-outlined">done</span>I regret to inform you that,</button>
<button id="beginning2" className="beginning" onClick={() => handleClick('I am writing with regard to,')} style={{ display: display.beginning }}><span className="material-symbols-outlined">done</span>I am writing with regard to,</button>
<button id="beginning3" className="beginning" onClick={() => handleClick('I am writing to let you know,')} style={{ display: display.beginning }}><span className="material-symbols-outlined">done</span>I am writing to let you know,</button>
<button id="beginning4" className="beginning" onClick={() => handleClick('I am writing in response to,')} style={{ display: display.beginning }}><span className="material-symbols-outlined">done</span>I am writing in response to,</button>
<button id="beginning5" className="beginning" onClick={() => handleClick('I am writing in reply to,')} style={{ display: display.beginning }}><span className="material-symbols-outlined">done</span>I am writing in reply to,</button>
<button id="beginning6" className="beginning" onClick={() => handleClick('I am writing in reference to,')} style={{ display: display.beginning }}><span className="material-symbols-outlined">done</span>I am writing in reference to,</button>
<button id="beginning7" className="beginning" onClick={() => handleClick('I am writing in connection with,')} style={{ display: display.beginning }}><span className="material-symbols-outlined">done</span>I am writing in connection with,</button>
<button id="beginning8" className="beginning" onClick={() => handleClick('I am delighted to tell you,')} style={{ display: display.beginning }}><span className="material-symbols-outlined">done</span>I am delighted to tell you,</button>
<button className="Reset" style={{ display: display.Reset }} onClick={resetClick}>Reset</button>
</div>
</>
);
};

export default Beginning;