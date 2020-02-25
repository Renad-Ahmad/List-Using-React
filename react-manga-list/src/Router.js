import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainMangaList from "./components/manga-components/MainMangaList";
import MyList from "./components/MyList";

export default class Display extends React.Component {

    render(){
        return(
            <Router>
                <Link to="/">MANGA</Link>
                <Link to="/MyList">MY LIST</Link>
                <div>
                    <Route  exact path="/" component={MainMangaList.mangaItem}/>
                    <Route  path="/MyList" component={() => (<MyList/>)} />
                </div>
            </Router>  
        );
    }
}
