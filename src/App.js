import './App.css';
import { Component } from 'react';

// import ReactMarkdown from 'react-markdown';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   markdown: placeholder,
  //   // };
  //   // this.handleChange = this.handleChange.bind(this);
  // }
  // handlechange(e) {
  //   this.setState({
  //     markdown: e.target.value,
  //   });
  // }
  render() {
    // const [text, setText] = useState(placeholder);
    // const handleMessageChange = (e) => {
    //   setText(e.target.value);
    //   console.log(e.target.value);
    // };
    return (
      // This layout is the parent, the textarea is the first child and previewer is the second and nest in the parent app.
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
              value={placeholder}
              // onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="container--previewer">
            <div className="previewer-header">
              <h2>(icon)Previewer</h2>
            </div>
            <div id="preview" className="previewer-body">
              {/* {this.state.markdown} */}
            </div>
          </div>
          <p>by Karen Robertson</p>
        </div>
      </div>
    );
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
// ReactDOM.render(<App />, document.getElementbyId('app')) look at this type of rendering or call it in the index js file.

// Testing code for later
// class MyApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputValue: ''
//     }
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(event) {
//     this.setState({
//       inputValue: event.target.value
//     });
//   }
//   render() {
//     return (
//        <div>
//         { /* Change code below this line */ }
// <GetInput
// input={this.state.inputValue}
// handleChange={this.handleChange}/>
// <RenderInput
// input={this.state.inputValue}/>
//         { /* Change code above this line */ }
//        </div>
//     );
//   }
// };

// class GetInput extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h3>Get Input:</h3>
//         <input
//           value={this.props.input}
//           onChange={this.props.handleChange}/>
//       </div>
//     );
//   }
// };

// class RenderInput extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h3>Input Render:</h3>
//         <p>{this.props.input}</p>
//       </div>
//     );
//   }
// };
