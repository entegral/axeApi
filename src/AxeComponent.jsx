import React from 'react';
import {mockData} from './mockApiData';

const DisplayAxeResult = (props) =>{
    console.log('props',props);
    return(
    <div>
      {props.axeResult.map((testedPage, index)=>
      <div key={index}>
        <h4>Results for {testedPage.url}</h4>
        <ul>
          <li>Number of Inapplicable Tests = {testedPage.inapplicable.length}</li>
          <li>Number of Incomplete Tests = {testedPage.incomplete.length}</li>
          <li>Number of Passing Tests = {testedPage.passes.length}</li>
        </ul>
      </div>

      )}
    </div>)
  }


class AxeComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
    this.axeApi = this.axeApi.bind(this);
  }

  axeApi(){
    return this.setState({ axeResult: mockData }) };

  render(){
    return (
      <React.Fragment>
        <button onClick={this.axeApi}>Call API </button>
        {this.state.axeResult ? <DisplayAxeResult axeResult = {this.state.axeResult} /> : <div>No data in state</div>  }

    </React.Fragment>
    )
  };

}

export default AxeComponent;
