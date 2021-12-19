import { Col, Input, Radio, RadioChangeEvent, Row, Select, Tag, Typography } from 'antd';
import { useAppDispatch } from 'app/hooks';
import { useState } from 'react';
import { filterChangeName, filterChangePriority, filterChangeStatus } from 'redux/Filters';

const { Search } = Input;

function Filters() {
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState<string>('');
  const [status, setStatus] = useState<string>('All');
  const [priority, setPrioriry] = useState<string[]>([]);

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
    dispatch(filterChangeName(event.currentTarget.value));
  };

  const handleChangeStatus = (e: RadioChangeEvent) => {
    setStatus(e.target.value);
    dispatch(filterChangeStatus(e.target.value));
  };

  const handleChangePrioriry = (value: string[]) => {
    setPrioriry(value);
    dispatch(filterChangePriority(value));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Search
        </Typography.Paragraph>
        <Search placeholder="input search text" value={search} onChange={handleChangeSearch} />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={handleChangeStatus}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: '100%' }}
          value={priority}
          onChange={handleChangePrioriry}
        >
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
      </Col>
    </Row>
  );
}

export default Filters;
