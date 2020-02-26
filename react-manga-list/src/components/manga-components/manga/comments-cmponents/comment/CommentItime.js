import React from 'react';
export default class CommentItime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newComment: '',
    };
  }

   onTextBoxChange = (event) => {
    this.setState({
      newComment: event.target.value
     });
   }

  render() {
    return (
      <div>
         <li>{this.props.comment}</li>
        <div class="row">
        <form>
          <input type="text" placeholder="edit Comment"
                value={this.state.newComment}
                onChange={this.onTextBoxChange} />
                
          {/*    Delete button   */}
          <button type= "button" class="btn btn-outline-light btn btn-secondary" 
            onClick={()=>this.props.removeComment(this.props.comment)}>Delete</button>
          {/*    Clear All button Comments  */}
          <button type= "button" class="btn btn-outline-light btn btn-secondary" 
            onClick={()=>this.props.removeAllComment(this.props.comment)}>Clear Comments</button>
           {/*    Edit button   */}
          <button type= "button" class="btn btn-outline-light btn btn-secondary"
            onClick={()=>this.props.editComment(this.props.comment,this.state.newComment)}>Edit</button>
        </form>
        </div>
      </div>
    );
  }
}