import { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState<string[]>(['Estudar História', 'Projeto React']);
  const [task, setTask] = useState('');

  function handleAddItem() {
    if (task.trim() !== '') {
      setItems([...items, task]);
      setTask('');
    }
  }

  function handleTaskChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddItem();
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card card-white">
            <div className="card-body">
              <form>
                <input
                  onChange={handleTaskChange}
                  onKeyDown={handleKeyDown}
                  type="text"
                  className="form-control add-task"
                  placeholder="New Task..."
                  value={task}
                />
              </form>
              <div className="todo-list">
                {items.map((x, index) => (
                  <Item key={index} text={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item({ text }: { text: string }) {
  return (
    <div className="todo-item">
      <div className="checker">
        <span>
          <input type="checkbox" />
        </span>
      </div>
      <span>{text}</span>
      <a href="javascript:void(0);" className="float-right remove-todo-item">
        <i className="icon-close"></i>
      </a>
    </div>
  );
}

export default App;