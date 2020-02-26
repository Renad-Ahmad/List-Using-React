import React from 'react';
import CommentItime from './CommentItime';
export default class CommentList extends React.Component {

  render() {
     const allItems = [];
     for(let i=0; i < this.props.commentItems.length; i++){
      allItems.push(<CommentItime removeComment={this.props.removeComment} 
        removeAllComment={this.props.removeAllComment} 
        editComment={this.props.editComment}
        comment={this.props.commentItems[i]}/>);
     }
    
    return (
      <div class="row align-items-center">
      <ul>
        {allItems}
      </ul>
      </div>
    );
  }
}