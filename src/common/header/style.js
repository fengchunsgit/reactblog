import styled from 'styled-components';

import logoPic from '../../static/logo.png';
export const HeaderWrapper=styled.div`
position:relative;
height:56px;
border-bottom:1px solid #f0f0f0;
`;

export const Logo=styled.a.attrs({href:'/'})`
position:absolute;
top:0;
left:0;
height:56px;
width:100px;
display:block;
background:url(${logoPic}) no-repeat center ;
background-size:contain;

`;

export const Nav=styled.div`
width:960px;
height:100%;
margin:0 auto;
padding-right:70px;
box-sizing:border-box;
`

export const NavItem=styled.div`
line-height:56px;
padding:0 15px;
font-size:17px;
color:#333;
&.left{
  float:left;
}
&.right{
  float:right;
  color:#969696;
}
&.active{
  color:#ea6f5a;
}
`
export const SearchWrapper=styled.div`
float:left;
position:relative;
.slide-enter{
  width:160px;
  transition:all .2s ease-out;
}

.slide-enter-active{
  width:240px;
}

.slide-exit{
width:240px;
transition:all .2s ease-out
}

.slide-exit-active{
  width:160px;
}
.iconfont {
  position:absolute;
  right:5px;
  bottom:2px;
  width:30px;
  line-height:30px;
  border-radius:15px;
  text-align:center;
  &.focused{
    background:#777;
    color:#fff;
  }
}

`
export const NavSearch=styled.input.attrs({
placeholder:'搜索'
})`
width:160px;
height:33px;
outline:none;
border:none;
border-radius:19px;
background:#eee;
margin-left:20px;
margin-top:12px;
padding:0 20px;
box-sizing:border-box;
font-size:14px;
&::placeholder{
  color:#999;
}
&.focused{
  width:240px;
}

`

export const Addition=styled.div`
position:absolute;
right:0;
top:0;
height:56px;
`

export const Button=styled.div`
float:right;
line-height:38px;
border-radius:19px;
margin-top:9px;
margin-right:20px;
padding:0 20px;
border-radius:19px;
border:1px solid #ec6149;
font-size:14px;
&.reg{
  color:#ec6149
}
&.writing{
  color: #fff;
  background:#ec6149;
}
`



