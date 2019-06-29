import React from 'react';
import styles from './index.css';
// import router from 'umi/router';
import {Input, Button} from 'antd';
import { connect } from 'dva';
// import { Dispatch } from 'react';

//初始化调用的dva的名空间
// const namespace = 'global';

//进行dispatch类型设置
// interface DisType{
//   dispatch: Dispatch<{}>;
// }
const mapStateToProps = (state:any) => {
  return {
    //这里要注意，如果需要获取全局的state，需要加上名空间。
    //使用state.global进行访问,这里的值，使用props.username进行访问！！！！
    username: state.global.username,
    password: state.global.password,
  };
}
export default connect (mapStateToProps)(( props: any ) => {
  // console.log(props);
  // 在登陆这边，需要加上1秒的调用摄像头
  const handleClick = () =>{
    // router.push('/homepage/');
    let storage = window.localStorage;
    storage['username'] = props.username;
    storage['password'] = props.password;
    storage['login'] = true;
    props.dispatch({
      type: 'global/setUserInfo',
      payload: {        
        username: props.username,
        password: props.password,
      }
    });
    props.dispatch({
      type:'global/login',
    });
  }
  const handleUsername = (e: any)=>{
    props.dispatch({
      type: 'global/setUsername',
      payload: {        
        username: e.target.value,
      }
    });
  }
  const handlePassword = (e: any) =>{
    props.dispatch({
      type: 'global/setPassword',
      payload: {
        password:e.target.value,
      }
    });
  }
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <h1>智能教室系统</h1>
      <h1 className={styles.title}>login</h1>
      <ul className={styles.list}>
      {/* 这里如果不使用事件代理的话，就得使用onChange方法，不过个人觉得这么写挺麻烦没有vue里那么好用 */}
        <li><label>username:</label><Input className={styles.input} onChange={handleUsername} placeholder="username"/></li>
        <li><label>password:</label><Input.Password className={styles.input} onChange={handlePassword} placeholder="password"/></li>
        <li>
          <Button type="primary" shape="round" onClick={handleClick}>login</Button>
        </li>
      </ul>
    </div>
  );
});



// import React from 'react';
// import styles from './index.css';
// // import router from 'umi/router';
// import {Input, Button} from 'antd';
// import { connect } from 'dva';

// class Index extends React.Component {
//   handleClick = () =>{
//     this.props.dispatch({
//       type: 'global/setUserInfo',
//       payload: {        
//         username: '1111',
//         password: '222',
//       }
//     });
//     this.props.dispatch({
//       type:'global/login',
//     });
//   }
//   handleUsername = (event: any) => {
//     this.setState({
//       username: event.target.value,
//     })
//   }
//   public render() {
//     return (
//       <div className={styles.normal}>
//         <div className={styles.welcome} />
//         <h1>智能教室系统</h1>
//         <h1 className={styles.title}>login</h1>
//         <ul className={styles.list}>
//           <li><label>username:</label><Input className={styles.input} onChange={this.handleUsername} placeholder="username"/></li>
//           <li><label>password:</label><Input className={styles.input} placeholder="password"/></li>
//           <li>
//             <Button type="primary" shape="round" onClick={this.handleClick}>login</Button>
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }
// function mapStateToProps(state:any) {
//   return {
//     username: state.global.username,
//     password: state.global.password,
//   };
// }
// export default connect (mapStateToProps)(Index);
