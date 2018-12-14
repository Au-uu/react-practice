import React, { Component, Fragment } from 'react';
import './style.css';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

class TodoListUI extends Component {
  render () {
    return (
      <Fragment>
        <Input
          placeholder=""
          style={{width: '300px', marginRight: '10px'}}
          value={this.props.inputValue}
          onChange={this.props.handleInputChange}
        />
        <Button
          type="primary"
          onClick={this.props.handleClick}
        >提交</Button>
        <List
          style={{marginTop: '10px',width: '300px'}}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (<List.Item onClick={() => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
        />
      </Fragment>
    )
  }
}

export default TodoListUI;