import React from 'react';
import styles from './index.css';
import Header from '../components/header';

// export default BasicLayout;
export default (props: any)=>{
  //设置主页面的登陆页面样式
  if (props.location.pathname === '/') {
    return (<div>{props.children}</div>)
  }
  if(props.location.pathname === '/video') {
    return (<div>{props.children}</div>);
  }
  //设置其他页面的样式，设置header和footer样式
  return (
    <div className={styles.normal}>
      {/* <h1 className={styles.title}>Yay! Welcome to umi!</h1> */}
      <Header></Header>
      {props.children}
    </div>
  );
}
