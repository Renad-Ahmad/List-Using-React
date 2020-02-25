import React from 'react';
export default class CommentItime extends React.Component {
  render() {
    return (
      <div className="myComment">
      <li>{this.props.comment}</li>
      <form>
         <button type="submit">Delete</button>
          <button type= "submit">Edit My Comment</button>
      </form>
      </div>
    );
  }
}