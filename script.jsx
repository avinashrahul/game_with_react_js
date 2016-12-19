var FirstComponent = React.createClass({
  localClick: function() {
    this.props.incValue(this.props.counter);
  },
  render: function() {
    return(
      <div>
        <h1> Loving React :) </h1>
        <button onClick={this.localClick}>+{this.props.counter}</button>
      </div>
      )
  }
  
});

var DisplayComponent = React.createClass({
  render: function() {
    return(
      <div> {this.props.mainDisplay} </div>
      )
  }
});

var MainComponent = React.createClass({
  getInitialState: function() {
    return {value: 0}
  },
  increment: function(counter) {
    this.setState({value: this.state.value+counter})
  },
  render: function() {
    return(
      <div>
        <FirstComponent incValue={this.increment} counter={1}/>
        <br />
        <FirstComponent incValue={this.increment} counter={2}/>
        <FirstComponent incValue={this.increment} counter={3}/>
        <FirstComponent incValue={this.increment} counter={4}/>
        <br />
        <DisplayComponent mainDisplay={this.state.value}/>
      </div>
      )
  }
});

ReactDOM.render(<MainComponent />, document.getElementById('root'));
