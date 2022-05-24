import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import style from './MemeThumbnail.module.css';
import { IImage, IMeme } from 'orsys-tjs-meme/dist/interfaces/common';
import { MemeSVGViewer } from 'orsys-tjs-meme';

const initialState = {};

interface IMemeThumbnailProps {
  memes: Array<IMeme>,
  images:Array<IImage>
}

const MemeThumbnail:React.FC<IMemeThumbnailProps> = (props) => {
  return (
    <div className={style.MemeThumbnail} data-testid="MemeThumbnail">
      {props.memes.map((meme:IMeme, i:number) => {
        console.log(meme.imageId);
        return <div className={style.vignette} key={'toto-'+i}><MemeSVGViewer
          meme={meme}
          image={props.images.find((img:IImage) => img.id === meme.imageId)}/></div>;
      })}
    </div>
  )
}

MemeThumbnail.propTypes = {
    memes: PropTypes.array.isRequired,
}

MemeThumbnail.defaultProps = {};

export default MemeThumbnail
