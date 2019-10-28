import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import dayjs from 'dayjs'//时间包

import LinkButton from '../../../components/link-button'

import './index.less'

/**
 管理界面的头部组件
 */
@connect(
  state=>({
    username:state.user.user.username
})
)
@withRouter
 class Header extends Component {
   state ={
     currentTime:dayjs().format('YYYY-MM-DD HH:mm:ss')
   }


  logout = ()=>{

  }
  componentDidMount () {
    // 启动循环定时器, 每隔1s, 更新显示当前时间
    this.intervalId = setInterval(() => {
      this.setState({
        currentTime: dayjs().format('YYYY MM-DD HH:mm:ss')
      })
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId)
  }


  render() {
    const {currentTime} = this.state
    //得到当前请求的路由路径
    const path = this.props.location.pathname

    return (
      <div className='header'>
        <div className='header-top'>
          <span>欢迎，{this.props.username}</span>
          <LinkButton onClick={this.logout}>推出</LinkButton>
        </div> 
        <div className='header-bottom'>
          <div className='header-bottom-left'>{path}</div>
          <div className='header-bottom-right'>
          <span>
            <span>{currentTime}</span>
            <span>小于转多云</span>

          </span>  
          </div>

            
        </div>
      </div>
    )
  }
}
export default Header
