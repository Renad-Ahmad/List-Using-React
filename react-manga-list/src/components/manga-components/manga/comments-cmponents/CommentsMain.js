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

   editComment=(comment,newComment)=>{
      const newArray=[...this.state.commentItems]
      let index=newArray.indexOf(comment)
      newArray[index]=newComment;

      this.setState({
        commentItems:newArray
      })
  }

   removeComment = (commentString) => {
      // index represnt the index we need to delete
      // take a copy of the array we need to delete from
      const newArray=[...this.state.commentItems]
      let index=newArray.indexOf(commentString)
      // use splice (inmdex start delete from , how many I need to delete)
      newArray.splice(index, 1)
      //put the new array in commititems setstate
      this.setState({commentItems:newArray})
  }

   removeAllComment = (event) => {
    let index = this.state.commentItems.indexOf(event);
    if(index > -1){
      this.setState({
        commentItems: this.state.commentItems.splice(index,0),
        newCommentItem: ''
      });
    }
  }

  render(){
    
    return(
      <div className="Comment">
        <h4>Comments</h4>
         <CommentList removeComment={this.removeComment}
                      removeAllComment={this.removeAllComment.bind(this)} 
                      commentItems={this.state.commentItems}
                      editComment={this.editComment}/>
        <form>
          <input type="text" placeholder="Add Comment"
              value={this.state.newCommentItem}
              onChange={this.onTextBoxChange}
           />
          <button type= "button" class="btn btn-outline-light btn btn-secondary" 
                  onClick={this.addComment}>Add New Comment
          </button>
        </form>
      </div>
    );
  }
}
