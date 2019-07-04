import React,{Component} from 'react';
import './App.css';
import CityView from './components/cityView';
import axios from 'axios';
import { cities } from './utils/cities';

export default class App extends Component {
  
  constructor(props){
    super(props)
    this.state={
      loading:false
    }
  }
  
  render() {
    return (
      <div className="col-sm-4">
        {cities.map(city=>
            <CityView city={city}></CityView>
          )}
      </div>
    )
  }
}


