import React, { Component } from 'react'
import {connect} from 'react-redux'

import LinkButton from '../../../components/link-button'

import './index.less'

/**
 管理界面的头部组件
 */
@connect(
  state=>({
    username:state.user.user.username,
})
)
 class Header extends Component {


  logout = ()=>{

  }


  render() {
    //得到当前请求的路由路径
    // const path = this.props.location.pathname

    return (
      <div className='header'>
        <div className='header-top'>
          <span>欢迎，{this.props.username}</span>
          <LinkButton onClick={this.logout}>推出</LinkButton>
        </div> 
        <div className='header-bottom'>
          <div className='header-bottom-left'>折线图</div>
          <div className='header-bottom-right'>
          <span>
            <span>2019-10-24 16:06:00</span>
            <span>小于转多云</span>

          </span>  
          </div>

            
        </div>
      </div>
    )
  }
}
export default Header
