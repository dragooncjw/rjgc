import React from 'react';
import {Avatar} from 'antd';
import router from 'umi/router';
import styles from './index.css';
import { connect } from 'dva';

const mapStateToProps = (state: any) => {
  return {
    username: state.global.username,
    login: state.global.login
  }
}

class Header extends React.Component<any,any> {  
  constructor(props: any){
    super(props);
    //如果要设置state的值，就需要在这里进行定义
    console.log(props);
  }
  //在登录前进行登陆状态的判断   暂时关闭该功能便于调试
  componentWillMount(){
    let storage = window.localStorage;
    // 这里不使用this.props.login，刷新后失效
    if(!storage.login){
      router.push('/');
    }
  }

  //这里先实现了退出登陆的功能
  handleClick = () => {
    let storage = window.localStorage;
    storage.clear();
    router.push('/');
  }
  backHomepage = () => {
    router.push('/homepage');
  }
  public render () {
    return (
      <div className={styles.navbar}>
        {/* <img src="logo.png"/> */}
        <div onClick={this.backHomepage} className={styles.title}>智能教室系统</div>
        <div className={styles.userinfo} onClick={this.handleClick}><Avatar size={"large"} icon="user" />{this.props.username}</div>
        
      </div>
    );
  }
}

export default connect(mapStateToProps)(Header);
