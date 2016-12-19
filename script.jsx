var FirstComponent = React.createClass({
  
  getInitialState: function() {
    return {counter: 0};
  },
  changeValue: function() {
    this.setState({counter: this.state.counter + 1});
  },
  render: function() {
    return(
      <button onClick={this.changeValue}>{this.state.counter}</button>
      )
  }
  
});

ReactDOM.render(<FirstComponent />, document.getElementById('root'));
