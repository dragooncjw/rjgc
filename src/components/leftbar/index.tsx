import * as React from 'React';
import { Menu, Icon } from 'antd';
// import './test.less';
import styles from './index.css';
import { connect } from 'dva';
import router from 'umi/router';

const SubMenu = Menu.SubMenu;
class LeftBar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      style: {
        // background: 'blue',
        width: 250
      }
    }
  }
  showState = (e:any) => {
    let myid = e.target.title;
    // console.log('key:',e.target.title);
    
    // let data = this.props.data;
    
    if(myid >=1 && myid <=5){
      // if(data[myid-1] === 0)
      //   data.splice(myid-1,1,1);
      // else
      //   data.splice(myid-1,1,0);
      // this.props.dispatch({
      //   type:'showstate/setData',
      //   payload:{
      //     data:data
      //   }
      // })
      this.props.dispatch({
        type:'showstate/setId',
        payload:{
          id: myid-1
        }
      })
      this.props.dispatch({
        type:'showstate/setZhuangtai'
      })
      router.push('/showstate');
    }
  }
  hideLeftBar = () => {
    // console.log(styles);
    this.setState({

    },()=>{
      this.props.dispatch({
        type:'global/haveHide'
      })
    });
    this.props.dispatch({
      type:'global/setLeftbarHide'
    });
  }
  handleClick = () => {
    router.push('/nlp/');
  }
  public render() {
    return (
      <div className={styles.leftbar} onClick={this.showState}>
        <Menu
        style={this.state.style}
          className={styles.menu}
          mode="inline"
          // openKeys={this.state.openKeys}
          // onOpenChange={this.onOpenChange}
          // style={{ width: 250 }}
        >
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>灯控制</span></span>}>
            <Menu.Item key="2"><span />灯1</Menu.Item>
            <Menu.Item key="3">灯2</Menu.Item>
            <Menu.Item key="4">灯3</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>投影仪控制</span></span>}>
            <Menu.Item key="5">投影仪1</Menu.Item>
            <Menu.Item key="6">投影仪2</Menu.Item>
            {/* <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu> */}
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="setting" /><span>门窗控制</span></span>}>
            <Menu.Item key="9" title="1">门1</Menu.Item>
            <Menu.Item key="10" title="2">门2</Menu.Item>
            <Menu.Item key="11" title="3">窗1</Menu.Item>
            <Menu.Item key="12" title="4">窗2</Menu.Item>
            <Menu.Item key="13" title="5">窗3</Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" title={<span><Icon type="play-circle"/>智能问答</span>}>
            <Menu.Item onClick={this.handleClick.bind(this)} key="14">NLP</Menu.Item>
          </SubMenu>
          {/* <div onClick={this.hideLeftBar} className={styles.hide} /> */}
        </Menu>
      </div>
    );
  }
}
const mapStateToProps = (state:any) => {
  return {
    id:state.showstate.id,
    data:state.showstate.data
  };
}
export default connect(mapStateToProps) (LeftBar);
