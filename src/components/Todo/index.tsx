import { DeleteOutlined } from '@ant-design/icons';
import { Button, Checkbox, Row, Space, Tag } from 'antd';
import { useAppDispatch } from 'app/hooks';
import { useState } from 'react';
import { todoDeleteTodo, todoToggleTodo } from 'redux/Todo';

type PRIORIRY_MAP_COLOR = {
  [key: string]: string;
};

const priorityColorMapping: PRIORIRY_MAP_COLOR = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

interface ToDoProps {
  id: string;
  name: string;
  prioriry: string;
  status: boolean;
}

function Todo({ id, status, name, prioriry }: ToDoProps) {
  const dispatch = useAppDispatch();

  const [checked, setChecked] = useState<boolean>(status);

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(todoToggleTodo(id));
  };

  const handleDeleteTodo = () => {
    dispatch(todoDeleteTodo(id));
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Space>
        <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
          {prioriry}
        </Tag>
        <Button title="Xóa" icon={<DeleteOutlined />} onClick={handleDeleteTodo} />
      </Space>
    </Row>
  );
}

export default Todo;
