import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store/index';
import Topic from './components/Topic';
import List from './components/List';
import Recomment from './components/Recomment';
import Writer from './components/Writer';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';

class Home extends PureComponent {

  handleScrollTop() { window.scrollTo(0, 0); }

  render() { 
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src={require('../../statics/img/banner.jpg')} alt="" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recomment />
          <Writer />
        </HomeRight>
        { this.props.showScroll ? <BackTop className="back-top" onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollShow);
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollShow);
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action)
  },
  changeScrollShow() {
    let scrollTop = document.documentElement.scrollTop;
    (scrollTop > 400) ? dispatch(actionCreators.toggleTopShow(true)) :  dispatch(actionCreators.toggleTopShow(false))
  }
})
 
export default connect(mapState, mapDispatch)(Home);