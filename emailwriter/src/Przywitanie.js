import React, { useState, useEffect } from "react";

const Greeting = ({ reset, back }) => {
const [content, setContent] = useState({
GreetingBody: ''
});

const [display, setDisplay] = useState({
GreetingBody: 'flex',
Greetings: 'flex',
Reset: 'none',
});

useEffect(() => {
if (reset === "reset") {
handleReset();
}
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [reset]);

const updateContent = (value) => {
setContent({
...content,
GreetingBody: value,
});
};

const handleGreetingClick = (value) => {
setDisplay({
...display,
GreetingBody: 'flex',
Greetings: 'none',
Reset: 'flex',
});
updateContent(value);
};

const handleReset = () => {
setDisplay({
...display,
GreetingBody: 'flex',
Greetings: 'flex',
Reset: 'none'
});
updateContent('');
back();
};
return (
  <div className='GreetingBody' style={{ display: display.GreetingBody }}>
    <p>{content.GreetingBody}</p>
  <button id="Greeting1"className="Greeting" onClick={() => handleGreetingClick('Dear Madam,')} style={{ display: display.Greetings }}><span className="material-symbols-outlined">done</span>Dear Madam,</button>
  <button id="Greeting2"className="Greeting" onClick={() => handleGreetingClick('Dear Mr,')} style={{ display: display.Greetings }}><span className="material-symbols-outlined">done</span>Dear Mr,</button>
  <button id="Greeting3"className="Greeting" onClick={() => handleGreetingClick('Dear Mrs,')} style={{ display: display.Greetings}}><span className="material-symbols-outlined">done</span>Dear Mrs,</button>
  <button id="Greeting4"className="Greeting" onClick={() => handleGreetingClick('Dear Ms,')} style={{ display: display.Greetings }}><span className="material-symbols-outlined">done</span>Dear Ms,</button>
  <button id="Greeting5"className="Greeting" onClick={() => handleGreetingClick('Dear Sir,')} style={{ display: display.Greetings }}><span className="material-symbols-outlined">done</span>Dear Sir,</button>
  <button id="Greeting6"className="Greeting" onClick={() => handleGreetingClick('Good Morning,')} style={{ display: display.Greetings }}><span className="material-symbols-outlined">done</span>Good Morning,</button>
  <button id="Greeting7"className="Greeting" onClick={() => handleGreetingClick('Greetings,')} style={{ display: display.Greetings }}><span className="material-symbols-outlined">done</span>Greetings,</button>
  <button id="Greeting8"className="Greeting" onClick={() => handleGreetingClick('To whom it may concern,')} style={{ display: display.Greetings }}><span className="material-symbols-outlined">done</span>To whom it may concern,</button>
  <button className="Reset" style={{ display: display.Reset }} onClick={handleReset}>Reset</button>
  </div>
  );
  };
  
  export default Greeting;
  