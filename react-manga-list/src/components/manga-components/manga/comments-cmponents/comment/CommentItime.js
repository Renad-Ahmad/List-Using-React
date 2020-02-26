import React from 'react';
export default class CommentItime extends React.Component {
  render() {
    return (
      <div className="myComment">
      <li>{this.props.comment}</li>
      <form>
          { <button type= "button" onClick={()=>this.props.removeComment(this.props.comment)}>Delete</button>}
          {/* { <button type= "button" onClick={()=>this.props.removeComment(this.props.comment)}>Delete</button>} */}
          <button type= "button" onClick={()=>this.props.removeAllComment(this.props.comment)}>Clear Comments</button>
          <button type= "button">Edit</button>
      </form>
      </div>
    );
  }
}