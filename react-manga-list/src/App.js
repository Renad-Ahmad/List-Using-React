//https://api.jikan.moe/v3/top/manga/1/bypopularity
//"title": "Naruto",
// "image_url": "https://cdn.myanimelist.net/images/manga/3/117681.jpg?s=6dc21454a32172a2e1783bd664668a22"
//"score": 8.07,
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Manga from "./components/Manga";
import MyList from "./components/MyList";
import Item from "./components/Item";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
     }
  }  
   

  render(){
    return(
        <Router>
          <Link to="/">MANGA</Link>{' '}
          <Link to="/MyList">MY LIST</Link>{' '}
              <div>
                <Route exact path="/" component={Manga} />
                <Route path="/MyList" component={MyList} />
              </div>
        </Router>
    );
    /*
    return(
        <div>
            <h1>MANGA LIST</h1>
            <button type="submit">Edit</button>
        </div>
    );
    */
  }
}