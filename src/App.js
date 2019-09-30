import React, { Component } from 'react';
import mermaid from 'mermaid';
import './App.css';

class App extends Component {
  componentDidMount() {
    const output = document.getElementById("output");
    mermaid.initialize({
      startOnLoad: true
    });

    const graph1 = `
graph LR
  A[square] --- B(Round)
  B-->C{Decision}
  B-->|Label| D(Result one)
`

    const graph2 = `  
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!  
`

    mermaid.render('graph', graph1, (html) => {
      document.getElementById(`output`).innerHTML = html;
    })
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
