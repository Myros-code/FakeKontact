import s from './User.module.css';
import avatarImg from '../../img/avatar.png';

function User() {
    return(
      <div className={s.wrap}>
        <a href ="#" className={s.link}>
          <span className={s.name}>Myros</span>
          <img className={s.avatar} src={avatarImg} alt="avatar"/>
        </a>
      </div>
    );
}
export default User;