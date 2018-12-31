import React, { Component } from 'react';
import { Header } from './Components/Header';
import BeerList from './Components/BeerList';
import BeerDetails from './Components/BeerDetails';
import NotFound from './Components/NotFound'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';

const SEARCH_URL = 'https://api.punkapi.com/v2/beers?beer_name=';
const RANDOM = Math.floor(Math.random() * 2);
const BEERS_URL = `https://api.punkapi.com/v2/beers?page=${RANDOM + 1}&per_page=80`;
class App extends Component {

  state = {
    beers: [],
    isLoading: true,
    page: 1
  }

  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    fetch(BEERS_URL)
      .then(res => res.json())
      .then(data => this.setState({ beers: data, isLoading: false }))
  }

  handleSearch(query) {
    let url =
      query.length > 0
        ? SEARCH_URL + query
        : BEERS_URL

    this.setState({ isLoading: true })

    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ beers: data, isLoading: false }))
  }

  render() {

    return (
      <BrowserRouter>
        <React.Fragment>
          <Header handleSearch={this.handleSearch} />
          <Switch>
            <Route {...this.props} exact path='/' render={props => <BeerList {...props} beers={this.state.beers} page={this.state.page} isLoading={this.state.isLoading} />} />
            <Route path="/beer/:id" component={BeerDetails} />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
