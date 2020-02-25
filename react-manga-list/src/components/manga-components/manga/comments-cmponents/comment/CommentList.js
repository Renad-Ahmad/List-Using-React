import React from 'react';
import CommentItime from './CommentItime';
export default class CommentList extends React.Component {
  render() {
    const allItems = this.props.commentItems.map(function(comment) {
      return <CommentItime comment={comment} />;
    });
    return (
      <ul>
        <button type="submit">Clear Comments</button>
        {allItems}
      </ul>
    );
  }
}