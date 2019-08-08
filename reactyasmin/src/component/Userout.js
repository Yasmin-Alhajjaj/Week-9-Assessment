import React, { Component } from 'react';


export default class Userout extends Component {
    state = {
        name: '',
      }


      add = (e) => {
        this.setState({
          name: e.target.value
        });
      }
      reset = () => {
        this.setState({
          title: ''
        })
      }




    render() {
      return (
       
        <>

hla

<input type="text" value={this.state.name} onChange={this.add} />
        <button onClick={this.props.adduser.bind(this, this.state, this.reset)}>adduser</button>



        </>
      );
    }
  }
  