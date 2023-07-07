import { headerType } from '../../types/head.type';
import './Header.scss'
const Header = (props: headerType) => {
  return (
    <div className="app__header-container">
      <span>{props.text}</span>
    </div>
  );
};

export default Header;
