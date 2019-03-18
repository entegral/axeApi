import React from 'react';
import {mockData} from './mockApiData';


class AxeComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  axeApi(url){
    return fetch(url)
      .then((response)=>{
        return response.json() })
      .then((jsonResponse)=>{
        this.setState({ axeResult: jsonResponse })
      })
  }

  render(){
    return (
      <React.Fragment>
        <button></button>
        {this.state.axeResult ? <div>state data detected</div> : <DisplayAxeResult axeResult = {mockData} />}

    </React.Fragment>
    )
  };

}

export default AxeComponent;
