import s from './BtnHeader.module.css';

const BtnHeader = (props) => {
    return (
      <div className ={s.wrap}>
          <a className ={s.item} href ={props.url}>
              <img className ={s.img} src = {props.img}/>
          </a>
      </div>
    );
}

export default BtnHeader;