import React from 'react';
import Comments from './Comments';

export default class Item extends React.Component{

    render(){
        return(
          <div className="item">
            <img src={"https://myanimelist.net/…40010/Ishuzoku_Reviewers"} alt="Image" />

          <div className="info">
              <h3>NAME</h3>
              <p>score</p>
              <Comments />
         </div>
         </div>

        );
      }
}
