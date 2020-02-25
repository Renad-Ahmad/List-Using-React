import React from 'react';
import   './App.css';
import axios from "axios";
import Router from './Router';
import MainMangaList from "./components/manga-components/MainMangaList";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mangaItems: [],
      myListItems:[],
     }
  } 

  componentDidMount() {
    axios({
      method: "get",
      url: "https://api.jikan.moe/v3/top/manga/1/bypopularity"
    })

    .then(response =>{
      this.setState({ mangaItems: response.data.top });
    })

    .catch(error=> {
      console.log(error);
    });
}

// addFave=(elment)=>{
//   const myListItems=[...this.state.myListItems];

//   myListItems.push(elment)
//   this.setState({myListItems})
// }

  render(){
    return(
      <div>
        <Router/> 
        <MainMangaList mangaItem={this.state.mangaItems} 
        //myMangaItems={this.state.addFave}
        // addFave={this.addFave}
        /> 
      </div>
    );
  }
}