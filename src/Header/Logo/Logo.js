import s from './Logo.module.css';
import logo_img from '../../img/logo_min.png' // relative path to image 
const Logo = () => {
  return (
    <div className ={s.wrap}>
        <a className={s.link}>
            <img src={logo_img}/>
        </a>
    </div>
  );
}
export default Logo;
