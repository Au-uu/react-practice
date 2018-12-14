import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  z-index: 1;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 58px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  position: relative;
  width: 960px;
  height: 100%;
  box-sizing:border-box;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  cursor: pointer;
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  z-index: 1;
  position: relative;
  float: left;
  .zoom{
    position: absolute;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    right: 0;
    bottom: 5px;
    text-align: center;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 240px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 35px 0 20px ;
  box-sizing: border-box;
  // transition: width .3s ease .1s;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &.slide-enter, &.slide-exit{
    transition: width .3s ease .1s;
  }
  &.slide-enter-active{
    width: 320px;
  }
  &.slide-exit-active{
    width: 240px;
  }
  &::placeholder{
    color: #999;
  }
  &.focused{
    width: 320px;
  }
  &.focused + .iconfont{
    color: #fff;
    background-color: #969696;
  }
`;

export const SearchInfo = styled.div`
  z-index: 9;
  position: absolute;
  left: 23px;
  top: 58px;
  width: 280px;
  padding:20px 20px 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  background-color: #ffffff;
`;

export const SearchInfoTitle = styled.div`
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.div`
  float: right;
  font-size: 13px;
  cursor: pointer;
  -webkit-user-select: none;
  .spin{
    display: block;
    float: left;
    font-size: 12px;
    transition: all .5s ease-in;
    transform-origin: center center;
  }
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const SearchInfoItem = styled.a`
  display: block;
  float: left;  
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`;

export const Addition = styled.div`
  position: absolute;
  right: -225px;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: left;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid rgba(236,97,73,.7);
  cursor: pointer;
  font-size: 15px;
  &.reg{
    color: #ea6f5a;
  }
  &.writting{
    color: #fff;
    background: #ea6f5a;
  }
  &.writting:hover{
    background: #ec6149;
  }
`;