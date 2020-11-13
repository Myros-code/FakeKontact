
import s from './Search.module.css';

const Search = () => {
    return (
        <div className={s.wrap}>
            <input className={s.item} placeholder="Search"/>
        </div>
    );
}
export default Search;