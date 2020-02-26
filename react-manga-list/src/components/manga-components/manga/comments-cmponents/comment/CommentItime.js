import React from 'react';
export default class CommentItime extends React.Component {
  render() {
    return (
      <div class="btn-group" role="group" >
      <li>{this.props.comment}</li>
      <form>
          { <button type= "button" class="btn btn-outline-light btn btn-secondary" onClick={()=>this.props.removeComment(this.props.comment)}>Delete</button>}
          {/* { <button type= "button" onClick={()=>this.props.removeComment(this.props.comment)}>Delete</button>} */}
          <button type= "button" class="btn btn-outline-light btn btn-secondary" onClick={()=>this.props.removeAllComment(this.props.comment)}>Clear Comments</button>
          <button type= "button" class="btn btn-outline-light btn btn-secondary">Edit</button>
      </form>
      </div>
    );
  }
}