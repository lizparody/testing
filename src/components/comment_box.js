import React, { Component } from 'react';

export default class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { comment: '' };
  }
  handleChange(event) {
    // the `value` here is a controll component that comes from above
    this.setState({ comment: event.target.value })
  }

  handleSubmit(event){
    // prevent the form to submit itself to the backend
    event.preventDefault();
    this.setState({ comment: '' })
  }

  render() {
    return(
      // change the 'div' for a 'form' because form responds to the submit event
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <textarea
          value={this.state.comment}
          onChange={this.handleChange.bind(this)}
        />
        { /* when the button is clicked, it should submit the form */ }
        <button action="submit">Submit Comment</button>
      </form>
    )
  }
}
