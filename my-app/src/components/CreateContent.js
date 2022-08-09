import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    return (
      <article>
        <h2>Create</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.onSubmit(e.target.title.value, e.target.desc.value);
          }.bind(this)}
        >
          <div>
            <input type="text" name="title" placeholder="title"></input>
          </div>
          <div>
            <textarea name="desc" placeholder="title"></textarea>
          </div>
          <div>
            <input type="submit"></input>
          </div>
        </form>
      </article>
    );
  }
}
export default CreateContent;
