import Logo from './Logo/Logo';
import User from './User/User';
import Search from './Search/Search';
import BtnGroup from './BtnGroup/BtnGroup';
import s from './Header.module.css';

const Header = () => {
    return (
      <header>
        <div className = {s.wrap}>
          <Logo/>
          <Search/>
          <BtnGroup/>
          <User/>
        </div>
      </header>
    );
}






export default Header;