import './App.css';
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: placeholder,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }
  render() {
    return (
      // This layout is the parent, the textarea is the first child and previewer is the second and nest in the parent app.
      <div className="App">
        <header>
          <h1>Markdown Previewer</h1>
        </header>
        <div className="container">
          <div className="container--editor">
            <div className="editor-header">
              <h2>
                <FontAwesomeIcon icon={faArrowRight} />
              </h2>
              <h2>Editor</h2>
            </div>
            <TextInput
              input={this.state.inputValue}
              handleChange={this.handleChange}
            />
          </div>
          <div className="container--previewer">
            <div className="previewer-header">
              <h2>
                <FontAwesomeIcon icon={faArrowRight} />
              </h2>
              <h2>Previewer</h2>
            </div>
            <div id="preview" className="previewer-body">
              <MarkDownText
                classname="body-text"
                input={this.state.inputValue}
              />
            </div>
          </div>
          <div className="footer">
            <p>by Karen Robertson</p>
          </div>
        </div>
      </div>
    );
  }
}

class TextInput extends Component {
  render() {
    const textInput = this.props.input;
    const textChange = this.props.handleChange;
    return (
      <textarea
        id="editor"
        cols="90"
        rows="30"
        value={textInput}
        onChange={textChange}
      />
    );
  }
}

class MarkDownText extends Component {
  render() {
    const textMark = this.props.input;
    return <ReactMarkdown>{textMark}</ReactMarkdown>;
  }
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
