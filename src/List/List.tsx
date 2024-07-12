import { Trash } from 'phosphor-react';
import Styled from './List.module.css';
import { MouseEvent, useEffect, useState } from 'react';
interface TasksProps {
  id: string;
  label: string;
  isChecked: boolean;
}

function List() {
  const [tasks, setTask] = useState<TasksProps[]>([]);
  const [checked, setChecked] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleAddTask(event: CustomEventInit) {
    const taskTemp = tasks[tasks.length - 1];
    const newtTaskId = taskTemp?.id ? parseInt(taskTemp.id) + 1 : 1;

    setTask([
      ...tasks,
      {
        id: `${newtTaskId}`,
        label: event.detail.label,
        isChecked: false,
      },
    ]);
  }

  function handleConuntTask(tasksChecked: TasksProps[]) {
    let checkeds = 0;
    tasksChecked.filter((task) => {
      if (task.isChecked) {
        checkeds += 1;
      }
      return checkeds;
    });
    setChecked(checkeds);
  }

  function handleDeleteTask(event: MouseEvent<HTMLButtonElement>, id: string) {
    event.stopPropagation();
    const taskUpdate = tasks.filter((task) => task.id !== id);
    setTask(taskUpdate);
    handleConuntTask(taskUpdate);
  }

  function handleCheckedTask(id: string) {
    const taskUpdate = tasks.map((task) => {
      if (task.id === id) {
        task.isChecked = !task.isChecked;
      }
      return { ...task };
    });
    setTask(taskUpdate);
    handleConuntTask(taskUpdate);
  }

  useEffect(() => {
    window.addEventListener('newTask', handleAddTask);
    return () => window.removeEventListener('newTask', handleAddTask);
  }, [handleAddTask]);

  return (
    <div className={Styled.content}>
      <div className={Styled.infoList}>
        <h2>
          Tarefas criadas <span className={Styled.counter}>{tasks.length}</span>
        </h2>
        <h2>
          Concluídas{' '}
          <span className={Styled.counter}>
            {checked} de {tasks.length}
          </span>
        </h2>
      </div>
      {tasks.length > 0 && (
        <ul>
          {tasks.map((item) => {
            return (
              <li
                key={`task-${item.id}`}
                onClick={() => {
                  handleCheckedTask(item.id);
                }}
              >
                <label
                  className={`${item.isChecked ? Styled.checkboxChecked : ''}`}
                >
                  {item.label}
                </label>
                <input
                  id={`task-${item.id}`}
                  type="checkbox"
                  name={`task-${item.id}`}
                  value={`${item.label}`}
                  defaultChecked={item.isChecked}
                />
                <button
                  onClick={(e) => handleDeleteTask(e, item.id)}
                  title="Deletar tarefa"
                >
                  <Trash size={18} />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default List;
