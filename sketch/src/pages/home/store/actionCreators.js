import axios from 'axios';
import { creatorTypes } from './index';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
  type: creatorTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
})

const addHomeList = (list, nextPage) => ({
  type: creatorTypes.ADD_ARTICLE_LIST,
  articleList: fromJS(list),
  nextPage
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      const action = changeHomeData(result);
      dispatch(action);
    }).catch(err => {
       console.warn(err);
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data;
      const action = addHomeList(result, page + 1);
      dispatch(action);
    }).catch(err => {
       console.warn(err);
    })
  }
}

export const toggleTopShow = (show) => ({
  type: creatorTypes.TOGGLE_SCORLL_SHOW,
  show
})