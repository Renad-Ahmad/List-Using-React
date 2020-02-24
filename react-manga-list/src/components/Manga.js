import React from 'react';
import Item from "./Item";

export default class Manga extends React.Component{
   
      render(){
        return(
          <div className="all-manga">
              <h1>MANGA</h1>
              <Item/>
              <Item/>
              <Item/>
          </div>
        );
      }
    
}
