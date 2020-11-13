import s from './BtnGroup.module.css';
import BtnHeader from './BtnHeader/BtnHeader';
import emailImg from '../../img/Header-img/email.svg';
import groupImg from '../../img/Header-img/group.svg';
import homeImg from '../../img/Header-img/home.svg';
import notificationImg from '../../img/Header-img/notification.svg';

const BtnGroup = () => {
    return (
      <div className ={s.wrap}>
        <ul className ={s.list}>
            <li className ={s.list__item}>
                <BtnHeader name ="home" url = "#" img = {homeImg}/>
            </li>
            <li className ={s.list__item}>
                <BtnHeader  name ="email" url = "#" img = {emailImg}/>
            </li>
            <li className ={s.list__item}>
                <BtnHeader  name ="group" url = "#" img = {groupImg}/>
            </li>
            <li className ={s.list__item}>
                <BtnHeader  name ="notifications" url = "#" img = {notificationImg}/>
            </li>
        </ul>
      </div>
    );
}

export default BtnGroup;