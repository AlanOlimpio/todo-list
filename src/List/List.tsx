import { Trash } from 'phosphor-react';
import Styled from './List.module.css';
function List() {
  return (
    <div className={Styled.content}>
      <div className={Styled.infoList}>
        <h2>
          Tarefas criadas <span className={Styled.counter}>5</span>
        </h2>
        <h2>
          Concluídas <span className={Styled.counter}>2 de 5</span>
        </h2>
      </div>
      <ul>
        <li>
          <input id="item-1" type="checkbox" name="item-1" value="item-1" />
          <label htmlFor="item-1">
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </label>
          <button onClick={() => {}} title="Deletar tarefa">
            <Trash size={18} />
          </button>
        </li>
        <li>
          <input id="item-2" type="checkbox" name="item-2" value="item-2" />
          <label htmlFor="item-2">
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </label>
          <button onClick={() => {}} title="Deletar tarefa">
            <Trash size={18} />
          </button>
        </li>
        <li>
          <input id="item-3" type="checkbox" name="item-3" value="item-3" />
          <label htmlFor="item-3">
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </label>
          <button onClick={() => {}} title="Deletar tarefa">
            <Trash size={18} />
          </button>
        </li>
        <li>
          <input id="item-4" type="checkbox" name="item-4" value="item-4" />
          <label htmlFor="item-4">
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </label>
          <button onClick={() => {}} title="Deletar tarefa">
            <Trash size={18} />
          </button>
        </li>
        <li>
          <input id="item-5" type="checkbox" name="item-5" value="item-5" />
          <label htmlFor="item-5">
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </label>
          <button onClick={() => {}} title="Deletar tarefa">
            <Trash size={18} />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default List;
