import React from 'react';
import './App.css';
import Button from './Components/Button/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    // valeur initiale
    this.state = {counter: 0, message: 'Aucun message'};
  }
  componentDidMount() {
    this.setState({message: 'composant monté'});
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('ancienne, actuelle', prevState, this.state);
  }
  render() {
    return <div className='App' style={{ textAlign:'center'}}>
      <div>Valeur de Counter : {this.state.counter}</div>
      <hr />
      <Button
        text='Ajouter 1'
        bgColor='GreenYellow'
        color='ForestGreen'
        onButtonClicked={() => {
          this.setState({counter: this.state.counter + 1 })
          console.log(this.state.counter);
        }}
      />
      <Button
        text='Retirer 1'
        bgColor='tomato'
        onButtonClicked={() => {
          this.setState({counter: this.state.counter - 1 })
          console.log(this.state.counter);
        }}
      />
    </div>
  }
}

export default App;
