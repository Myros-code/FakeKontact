import s from './Logo.module.css';
import logo_img from '../../img/logo_min.png' // relative path to image 
function Logo() {
  return (
    <div className={s.Logo}>
        <a className={s.link}>
            <img src={logo_img}/>
        </a>
    </div>
  );
}
export default Logo;
