import Styled from './Header.module.css';
import toDologo from '../assets/logo-todo.svg';

function Header() {
  return (
    <header className={Styled.header}>
      <img src={toDologo} alt="toDo" />
      <strong>
        to<span>do</span>
      </strong>
    </header>
  );
}

export default Header;
