import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
// import axios from 'axios';
import './style.css';

class TodoList extends Component{
  constructor (props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  
  render () {
    return (
      <Fragment>
        <p>
          <label htmlFor="insertArea">输入内容</label>
          <input 
            type="text"
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </p>
        <ul>
          { this.getTodoItem() }
        </ul>
      </Fragment>
    )
  }

  componentDidMount() {
    /* axios
      .get('/api/todolist')
      .then((res) => {
        this.setState(() => {
          list: [...res.data]
        });
      })
      .catch(() => { alert('error') }) */
  }

  getTodoItem () {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          deleteItem={this.handleItemDelete}
        />
      )
    })
  }

  handleInputChange (e) {
    let inputValue = e.target.value;
    /* this.setState({
      inputValue: word
    }) */
    this.setState(() => ({ inputValue }) )
  }

  handleBtnClick (e) {
    /* this.setState({
      inputValue: '',
      list: [...this.state.list, this.state.inputValue]
    }) */
    this.setState((prevState) => ({
        inputValue: '',
        list: [...prevState.list, prevState.inputValue]
      })
    )
  }

  handleItemDelete (index) {;
    /* const list = [...this.state.list];
    list.splice(index, 1); */
    /* this.setState({
      list
    }) */
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list };
    })
  }
}

export default TodoList;