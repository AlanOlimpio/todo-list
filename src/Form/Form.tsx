import { PlusCircle } from 'phosphor-react';
import Styled from './Form.module.css';

function Form() {
  return (
    <form action="" className={Styled.toDoForm}>
      <input
        name="create-todo"
        placeholder="Adicione uma nova tarefa"
        type="text"
        onChange={() => {}}
      />
      <button type="submit">
        Criar <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  );
}
export default Form;
