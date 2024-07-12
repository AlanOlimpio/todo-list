import Styled from './EmptyState.module.css';
import clipboard from '../assets/clip-board.svg';

function EmptyState() {
  return (
    <div className={Styled.wrapper}>
      <img src={clipboard} alt="icone clip board" />
      <div>
        <h2>Você ainda não tem tarefas cadastradas</h2>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}

export default EmptyState;
