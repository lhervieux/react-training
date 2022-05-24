import { IImage, IMeme } from 'orsys-tjs-meme/dist/interfaces/common';
import React from 'react';
import './App.css';
import FlexWide from './Components/Layout/FlexWide/FlexWide';
import MemeForm from './Components/MemeForm/MemeForm/MemeForm';
import { MemeSVGViewer } from 'orsys-tjs-meme';
import Footer from './Components/Ui/Footer/Footer';
import Header from './Components/Ui/Header/Header';
import Navbar from './Components/Ui/Navbar/Navbar';
import { ADR_REST, REST_RESOURCES } from './config/config';

interface IAppState {
  meme:IMeme,
  images:Array<IImage>
}

class App extends React.Component<{}, IAppState> {
  constructor(props : {}) {
    super(props);
    // valeur initiale
    this.state = {
        meme: {
          color: '#FF6347',
          fontSize: 40,
          fontWeight:'900',
          imageId: 0,
          italic: false,
          text: '1er meme',
          titre: 'dummy',
          underline: false,
          x:0, y:50
        },
      images: []
    };
  }
  componentDidMount() {
    fetch (`${ADR_REST}${REST_RESOURCES.images}`, {
      method: 'GET',
      headers: { Accept: 'application/json'},
    })
    .then(f=>f.json())
    .then(arr => {this.setState({images:arr}); return arr;});
  }
  render() {
    return <div className='App' style={{ textAlign:'center'}}>
      <Header />
      <Navbar />
      <FlexWide>
        <MemeSVGViewer
          meme={this.state.meme}
          image={this.state.images.find((img:IImage) => img.id === this.state.meme.imageId)}/>
        <MemeForm meme={this.state.meme} onMemeChange={(meme: IMeme) => { this.setState({meme:meme}); }} images={this.state.images}></MemeForm>
      </FlexWide>
      <Footer>{JSON.stringify(this.state.meme)}</Footer>
    </div>
  }
}

export default App;
