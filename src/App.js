import './App.css';
import React, { useState } from 'react';

import ReactMarkdown from 'react-markdown';

function App() {
  const [text, setText] = useState('');
  const handleMessageChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Markdown Previewer</h1>
        <div className="container--editor">
          <div className="editor-header">
            <h2>(icon)Editor</h2>
          </div>
          <textarea
            id="editor"
            cols="30"
            rows="10"
            value={text}
            onChange={handleMessageChange}
          ></textarea>
        </div>
        <div className="container--previewer">
          <div className="previewer-header">
            <h2>(icon)Previewer</h2>
          </div>
          <div id="preview" className="previewer-body">
            <ReactMarkdown>{placeholder}</ReactMarkdown>
          </div>
        </div>
        <p>by Karen Robertson</p>
      </div>
    </div>
  );
}
const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
export default App;
