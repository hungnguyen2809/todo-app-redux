import { Button, Col, Input, Row, Select, Tag } from 'antd';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import TodoComponent from 'components/Todo';
import { Todo } from 'models';
import { useState } from 'react';
import { selectTodoListByFilter, todoAddTodo } from 'redux/Todo';
import { v4 as uuid } from 'uuid';

function TodoList() {
  const dispatch = useAppDispatch();

  const todos = useAppSelector(selectTodoListByFilter);

  const [todoName, setTodoName] = useState<string>('');
  const [todoPrioriry, setTodoPrioriry] = useState<string>('Medium');

  const handleChangeTodoName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoName(event.currentTarget.value);
  };

  const handleChangePriority = (value: string) => {
    setTodoPrioriry(value);
  };

  const handleAddTodo = () => {
    const todo: Todo = {
      id: uuid(),
      name: todoName.trim(),
      completed: false,
      prioriry: todoPrioriry,
    };

    dispatch(todoAddTodo(todo));
    setTodoName('');
    setTodoPrioriry('Medium');
  };

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todos.map((todo) => (
          <TodoComponent
            key={todo.id}
            id={todo.id}
            status={todo.completed}
            name={todo.name}
            prioriry={todo.prioriry}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleChangeTodoName} />
          <Select value={todoPrioriry} onChange={handleChangePriority}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}

export default TodoList;
