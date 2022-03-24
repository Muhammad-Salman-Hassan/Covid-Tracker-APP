
// import { Class } from '@mui/icons-material';
import React from 'react'
// import React, { useEffect, useState } from 'react';
import { fetchData } from './api';
import './App.css';
import Header from './components/Header';
import MainGrid from './components/MainGrid';


class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data })
  }

  

  render() {
    // const {data}=this.state
    
    return (
      <div className="App">
      <Header/>
      <MainGrid data={this.state.data}/>
    </div>
    );
  }
}
export default App

