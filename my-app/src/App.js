import React, { Component } from "react";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";

import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      subject: {
        title: "WEB",
        sub: "하이?",
      },
      welcome: { title: "Welcome", desc: " React!!!!" },
      contents: [
        { id: 1, title: "HTML 되고있냐?", desc: "HTML..." },
        { id: 2, title: "CSS", desc: "CSS..." },
        { id: 3, title: "JaveScript", desc: "JaveScript..." },
      ],
    };
  }
  render() {
    console.log("App render");
    var _title,
      _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        ></Subject> */}
        <header>
          <h1>
            <a
              href="/"
              onClick={function (e) {
                e.preventDefault(); // HTML태그가 가진 고유의 이벤트를 동작하지 못하게 해야할때 사용.
                this.setState({ mode: "welcome" });
              }.bind(this)}
            >
              {this.state.subject.title}
            </a>
          </h1>
          {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
