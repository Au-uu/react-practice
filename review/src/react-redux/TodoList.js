import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeInputValue, addItem, deleteItem } from './store/actionCreators';

const TodoList = (props) => {
  const { inputValue, changeInputValue, handleClick, list, handleDelete } = props;
    return (
      <div>
        <div>
          <input value={inputValue} onChange={changeInputValue} />
          <button onClick={handleClick}>提交</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return <li key={index} onClick={handleDelete.bind(this, index)}>{item}</li>
            })
          }
        </ul>
      </div>
    );
}
/* class TodoList extends Component {
  render() {
    const { inputValue, changeInputValue, handleClick, list, handleDelete } = this.props;
    return (
      <div>
        <div>
          <input value={inputValue} onChange={changeInputValue} />
          <button onClick={handleClick}>提交</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return <li key={index} onClick={handleDelete.bind(this, index)}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
} */

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = changeInputValue(e.target.value);
      dispatch(action);
    },
    handleClick() {
      const action = addItem();
      dispatch(action);
    },
    handleDelete(index) {
      const action = deleteItem(index);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);