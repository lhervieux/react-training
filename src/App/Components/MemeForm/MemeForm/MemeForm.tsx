import React from "react";
import Button from "../../Button/Button";
import style from "./MemeForm.module.css";
import { IImage, IMeme } from 'orsys-tjs-meme/dist/interfaces/common';

const emptyMeme:IMeme = {
  color:'black',
  titre: '',
  text: '',
  x:0, y:0,
  fontSize:20,
  fontWeight:'500',
  imageId:0,
  italic:false,
  underline: false,

}

//types
interface IMemeFormProps {
  meme: IMeme,
  onMemeChange: Function,
  images:Array<IImage>
}
interface IMemeFormState {}


//etat initial
//const initialState: IMemeFormProps = {meme: IMeme};
const initialState: IMemeFormState = {};


const MemeForm: React.FC<IMemeFormProps> = (props) => {
  return (
       <div data-testid="MemeForm" className={style.MemeForm}>
        <form onSubmit={(evt:React.FormEvent<HTMLFormElement>) => {
            evt.preventDefault();
          }}
          onReset={(evt:React.FormEvent<HTMLFormElement>) => {
            props.onMemeChange(emptyMeme);
          }}
        >
          <h1>{props.meme.titre}</h1>
          <input
            type="text"
            id="f_titre"
            placeholder="saisir titre"
            value={props.meme.titre}
            onChange={(evt) => {
              props.onMemeChange({...props.meme, titre: evt.target.value})
            }}
             />
          <hr />
          <h2>Image</h2>
          <select
            onChange={(evt: React.ChangeEvent<HTMLSelectElement>) => {
              props.onMemeChange({ ...props.meme, imageId: Number(evt.target.value) });
            }}
          >
            <option value="-1">Aucune</option>
            {props.images.map((img:IImage, position:number) => {
              return <option value={img.id} key={'select-img-'+position}>{img.name}</option>;
            })}

          </select>
          <hr />
          <h2>text</h2>
          <input
            type="text"
            value={props.meme.text}
            onChange={(evt) => {
              props.onMemeChange({...props.meme, text: evt.target.value})
            }}
          />
          <div className={style.half}>
            <div>
              <label htmlFor="f_x">x:</label>
              <br />
              <input
                type="number"
                className={style.smallInput}
                value={props.meme.x}
                onChange={(evt) => {
                  props.onMemeChange({...props.meme, x: evt.target.value})
                }}
              />
            </div>
            <div>
              <label htmlFor="f_y">y:</label>
              <br />
              <input
                type="number"
                className={style.smallInput}
                value={props.meme.y}
                onChange={(evt) => {
                  props.onMemeChange({...props.meme, y: evt.target.value})
                }}

              />
            </div>
          </div>
          <hr />
          <label htmlFor="f_color">Couleur</label>
          <input
            type="color"
            id="f_color"
            value={props.meme.color}
            onChange={(evt) => {
              props.onMemeChange({...props.meme, color: evt.target.value})
            }}

          />
          <div className={style.half}>
            <div>
              <label htmlFor="f_sz">font-size:</label>
              <br />
              <input
                type="number"
                className={style.smallInput}

                min={0}
                value={props.meme.fontSize}
                onChange={(evt) => {
                  props.onMemeChange({...props.meme, fontSize: evt.target.value})
                }}

              />
            </div>
            <div>
              <label htmlFor="f_fw">font-weight:</label>
              <br />
              <input
                type="number"
                className={style.smallInput}
                min="100"
                step="100"
                max="900"
                value={props.meme.fontWeight}
                onChange={(evt) => {
                  props.onMemeChange({...props.meme, fontWeight: evt.target.value})
                }}

              />
            </div>
          </div>
          <div className={style.half}>
            <div>
              <label htmlFor="f_underline">underline:</label>
              <br />
              <input
                id="f_underline"
                type="checkbox"
                checked={props.meme.underline}
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                  props.onMemeChange({
                    ...props.meme,
                    underline: evt.target.checked,
                  });
                }}

              />
            </div>
            <div>
              <label htmlFor="f_italic">italic:</label>
              <br />
              <input
                id="f_italic"
                type="checkbox"
                checked={props.meme.italic}
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                  props.onMemeChange({
                    ...props.meme,
                    italic: evt.target.checked,
                  });
                }}
              />
            </div>
          </div>
          <div className={style.half}>

          </div>
          <Button type="submit">Soumettre</Button>
          <Button type="reset">Reset</Button>
        </form>
      </div>
  );
};
export default MemeForm;