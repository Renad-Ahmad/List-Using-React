import React from 'react';
import CommentItime from './CommentItime';
export default class CommentList extends React.Component {

  removeComment = this.props.removeComment;
  
  render() {
    //console.log(this.props.removeComment)
    // const allItems = this.props.commentItems.map(function(comment) {
    //   return <CommentItime removeComment comment={comment}/>;
    // });
     const allItems = [];
     for(let i=1; i <= this.props.commentItems.length; i++){
      allItems.push(<CommentItime removeComment={this.props.removeComment} removeAllComment={this.props.removeAllComment} comment={this.props.commentItems[i-1]}/>);
     }
    
    return (
      <ul>
        {/* <button onClick={this.removeComment("a")}>Delete</button>  */}
        {allItems}
      </ul>
    );
  }
}