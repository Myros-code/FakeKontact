import Logo from './Logo/Logo';
import User from './User/User';
import s from './Header.module.css';

function Header() {
    return (
      <header>
        <div className = {s.wrap}>
          <Logo/>
          <Search/>
          <User/>
        </div>
      </header>
    );
}

function Search() {
    return (
        <div className={s.Search}>
            <input placeholder="Search"/>
        </div>
    );
}





export default Header;