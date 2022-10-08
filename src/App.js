import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <div className="container--editor">
        <div className="editor-header">
          <h2>(icon)Editor</h2>
        </div>
        <textarea name="editor" id="editor" cols="30" rows="10"></textarea>
      </div>
      <div className="container--previewer">
        <div className="previewer-header">
          <h2>(icon)Previwer</h2>
        </div>
        <div id="preview" className="previewer-body">
          This should show the results of the textarea
        </div>
      </div>
      <p>by Karen Robertson</p>
    </div>
  );
}

export default App;
