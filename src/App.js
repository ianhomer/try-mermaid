import React, { Component } from 'react';
import mermaid from 'mermaid';
import './App.css';

class App extends Component {
  componentDidMount() {
    const output = document.getElementById("output");
    mermaid.initialize({ startOnLoad: true});

    var graph = `
  graph LR
  A --- B
  B-->C[fa:fa-ban forbidden]
  B-->D(fa:fa-spinner);
`;

    mermaid.render('theGraph', graph, (html) => {
      output.innerHTML = html;
    });
  }

  render() {
    return (
      <div className="App">
        Mermaid
        <div id="output"/>
      </div>
    );
  }
}

export default App;
