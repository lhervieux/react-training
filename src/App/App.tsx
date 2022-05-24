import { IImage, IMeme } from 'orsys-tjs-meme/dist/interfaces/common';
import React from 'react';
import './App.css';
import FlexWide from './Components/Layout/FlexWide/FlexWide';
import MemeForm from './Components/MemeForm/MemeForm/MemeForm';
import { MemeSVGViewer } from 'orsys-tjs-meme';
import Footer from './Components/Ui/Footer/Footer';
import Header from './Components/Ui/Header/Header';
import Navbar from './Components/Ui/Navbar/Navbar';

interface IAppState {
  meme:IMeme,
  images:Array<IImage>
}

class App extends React.Component<{}, IAppState> {
  constructor(props : {}) {
    super(props);
    // valeur initiale
    this.state = {meme: {
      color: 'tomato',
      fontSize: 40,
      fontWeight:'900',
      imageId: 0,
      italic: false,
      text: '1er meme',
      titre: 'dummy',
      underline: false,
      x:0, y:50
    }, images: []};
  }
  render() {
    return <div className='App' style={{ textAlign:'center'}}>
      <Header />
      <Navbar />
      <FlexWide>
        <MemeSVGViewer meme={this.state.meme} image={undefined}></MemeSVGViewer>
        <MemeForm></MemeForm>    
      </FlexWide>
      <Footer></Footer>
    </div>
  }
}

export default App;
