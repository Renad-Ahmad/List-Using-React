import React from 'react';
import Comments from './comments-cmponents/CommentsMain';

export default class MangaItem extends React.Component{


  render(){
    return(
      <div class="row"class="col-6 col-sm-3">
        <img class="rounded" src={this.props.mangaImage} alt="Image" />

        <div className="info">
          <h3>{this.props.mangaTitle}</h3>
          <p>Score: {this.props.mangaScore}</p>
          <button  type= "button" class="btn btn-outline-light btn btn-secondary" onClick={()=>this.props.addFave(this.props.elment)}>Favorite</button>
          <Comments />
        </div>
      </div>
        );
      }
}
