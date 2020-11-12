import s from './User.module.css';
import avatarImg from '../../img/avatar.png';

function User() {
    return(
      <div>
        <a href ="#" className={s.profile__link}>
          <span className={s.name}>Myros</span>
          <img className={s.avatar} src={avatarImg} alt="avatar"/>
        </a>
      </div>
    );
}
export default User;