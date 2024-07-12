import { PlusCircle } from 'phosphor-react';
import Styled from './Form.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

function Form() {
  const [newTaskTex, setNewTaskTex] = useState('');
  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const eventTeste = new CustomEvent('newTask', {
      bubbles: true,
      cancelable: true,
      detail: {
        label: newTaskTex,
      },
    });
    window.dispatchEvent(eventTeste);
    setNewTaskTex('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskTex(event.target.value);
  }

  function handleNewTaskInvalid(event: FormEvent<HTMLInputElement>) {
    const eventTarget = event as InvalidEvent<HTMLInputElement>;
    eventTarget.target.setCustomValidity('Esse campo é obrigatório!');
  }

  return (
    <form onSubmit={(e) => handleCreateNewTask(e)} className={Styled.toDoForm}>
      <input
        name="create-task"
        value={newTaskTex}
        placeholder="Adicione uma nova tarefa"
        type="text"
        onChange={(e) => handleNewTaskChange(e)}
        onInvalid={(e) => handleNewTaskInvalid(e)}
        required
      />
      <button type="submit">
        Criar <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  );
}
export default Form;
