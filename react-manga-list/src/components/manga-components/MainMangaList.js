import React from 'react';
import MangaItem from "./manga/MangaItem";

export default class MainMangaList extends React.Component{

  render(){
     const allManga = this.props.mangaItem.map(function(item){

        return (
          <MangaItem
            mangaImage={item.image_url}
            mangaTitle={item.title}
            mangaScore={item.score}/>
        )
      });

      return(
        <div>
          <h1 class="display-1">MANGA</h1>
        <div class="row">
          {allManga}
        </div>  
        </div>        
      );
    }
}
