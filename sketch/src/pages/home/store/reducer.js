import { fromJS } from 'immutable';
import { creatorTypes } from './index.js';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  });
}

const addArticleList = (state, action) => {
  return state.merge({
    'articleList': state.get('articleList').concat(action.articleList),
    'articlePage': action.nextPage
  });
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case creatorTypes.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    case creatorTypes.ADD_ARTICLE_LIST:
      return addArticleList(state, action);
    case creatorTypes.TOGGLE_SCORLL_SHOW:
      return state.set('showScroll', action.show)
    default: 
      return state;
  }
}