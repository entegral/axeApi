import React from 'react';
import {mockData} from './mockApiData';

const DisplayAxeResult = (props) =>{
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
    const divStyle = {
      marginTop: '15px',
      marginBottom: '15px',
      padding: '15px',
      width: '400px',
      marginRight: 'auto',
      marginLeft: 'auto',
      border: '1px solid grey',
      borderRadius: '4px',
      backgroundColor: 'lightgrey',
      boxShadow: '5px 5px 15px grey'
    }

    const buttonStyle = {
      width: '33%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '15px',
      backgroundColor: '#96d7f7',
      border: '1px solid #52707f',
      borderRadius: '2px',
    }

    return (
      <div style = {divStyle}>
        <button style={buttonStyle} onClick={this.axeApi}>Call API </button>
        {this.state.axeResult ? <DisplayAxeResult axeResult = {this.state.axeResult} /> : <div>No data in state</div>  }
      </div>
    )
  };

}

export default AxeComponent;
