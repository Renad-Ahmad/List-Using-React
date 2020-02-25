import React from 'react';
import CommentList from './comment/CommentList';
export default class Comments extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      commentItems: [],
      newCommentItem: '',
    };
  }
  
  addComment = (event) => {
   event.preventDefault();
     this.setState({
       commentItems: [...this.state.commentItems, this.state.newCommentItem],
       newCommentItem: '',
     });
   }

   onTextBoxChange = (event) => {
    this.setState({
       newCommentItem: event.target.value
     });
   }

  render(){
    
    return(
      <div className="Comment">
        <h4>Comments</h4>
         <CommentList commentItems={this.state.commentItems} />
        <hr /> 
        <form>
          <input type="text" placeholder="Add Comment"
                 value={this.state.newCommentItem}
                 onChange={this.onTextBoxChange}
           />
          <button onClick={this.addComment}>Add New Comment</button>
        </form>
      </div>
    );
  }
}
