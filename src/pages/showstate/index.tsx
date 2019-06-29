import * as React from 'react';
// import router from 'umi/router';
import styles from './index.css';
import Leftbar from '../../components/leftbar';
import { connect } from 'dva';

class showstate extends React.Component<any,any>{
  constructor(props:any){
    super(props);
    this.state = {
      zhuangtai:''  
    }
  }
  componentWillMount() {
    let index = this.props.myid;
    let tdata = this.props.tdata;
    
    if(tdata[index] === 0){
      this.setState({
        zhuangtai: '关闭'
      })
    }else{
      this.setState({
        zhuangtai:'开启'
      })
    }
  }
  handleTrigger = () => {
    let tdata = this.props.tdata;
    let index = this.props.myid;
    tdata[index] = Number(!tdata[index]);
    if(tdata[index] === 0){
      this.setState({
        zhuangtai: '关闭'
      })
    }else{
      this.setState({
        zhuangtai:'开启'
      })
    }
    this.props.dispatch({
      type:'showstate/setData',
      payload:{
        data: tdata
      }
    })
    this.props.dispatch({
      type:'showstate/setZhuangtai'
    })
  }
  public render() {
    return (
      <div className={styles.main}>
        <div className={styles.leftbar}>
          <Leftbar></Leftbar>
        </div>
        <div className={styles.table}>
          {/* <Input className={styles.input} placeholder="请输入你的问题" /> */}
          {/*   */}
          {this.props.content}
          <br />
          状态：{this.props.zhuangtai}
          <br />
          <a onClick={this.handleTrigger} className="show">Trigger{this.props.content}</a>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state:any) => {
  return {
    content:state.showstate.content,
    myid:state.showstate.id,
    data:state.global.data,
    tdata:state.showstate.data,
    zhuangtai:state.showstate.zhuangtai
  };
}
export default connect(mapStateToProps) (showstate);
