import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem} from '../style';
import Pic_Week from '../../../statics/img/week.png';
import Pic_Month from '../../../statics/img/month.png';
import Pic_Serialize from '../../../statics/img/serialize.png';
import Pic_Copyright from '../../../statics/img/copyright.png';

class Recommend extends PureComponent {
  render() {
    const picArr = [Pic_Week, Pic_Month, Pic_Serialize, Pic_Copyright]
    return (
      <RecommendWrapper>
        {
          this.props.list.map((item, index) => {
            return <RecommendItem key={item.get('id')} imgUrl={picArr[index]} ></RecommendItem>
          })
        }
      </RecommendWrapper>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommend);