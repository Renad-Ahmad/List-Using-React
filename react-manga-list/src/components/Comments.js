import React from 'react';
export default class Comments extends React.Component{
    render(){
        return(
          <div className="Comment">
             <form>
              <input type="text" placeholder="Add Comment"
                    value={""}
                    onChange={""} />
                <button type="submit">Add New Comment</button>
                <button type="submit">Remove My Comment</button>
                <button type= "submit">Edit My Comment</button>
            </form>

          </div>
        
        );
      }
}
