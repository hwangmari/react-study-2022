import React, { Component } from "react";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";

import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: {
        title: "WEB",
        sub: "하이?",
      },
      contents: [
        { id: 1, title: "HTML 되고있냐?", desc: "HTML..." },
        { id: 2, title: "CSS", desc: "CSS..." },
        { id: 3, title: "JaveScript", desc: "JaveScript..." },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        ></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is ..."></Content>
      </div>
    );
  }
}

export default App;
