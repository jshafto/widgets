import React from 'react';
// import {TransitionGroup} from 'react-transition-group';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      inputVal: ''
    })
  }

  handleInput = (e) => {
    this.setState({
      inputVal: e.target.value
    })
  }

  updateInput = (e) => {
     this.setState({
          inputVal: e.target.value
     })
  }

  matches = () => {
    if (this.state.inputVal === '') {
      return this.props.names;
    }
    let res = this.props.names.filter(name => name.toLowerCase().includes(this.state.inputVal.toLowerCase()))
    return res;
  }

  render() {
    return (
      <div className="auto-box-roll-out">
           <h1>Autocomplete</h1>
           <input onChange={this.handleInput} value={this.state.inputVal} className="auto-input" type="text" />
           <ul className="item-list" onClick={this.updateInput}>
              {/* <CSSTransition> */}
                {this.matches().map((name, idx) => <li key={idx}>{name}</li>)}
              {/* </CSSTransition> */}
           </ul>
      </div>
    )
  }

}

export default Autocomplete;
