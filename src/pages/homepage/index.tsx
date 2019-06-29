import * as React from 'react';
import router from 'umi/router';
import styles from './index.css';
import { Table, Divider, Input} from 'antd';
import Leftbar from '../../components/leftbar';
import { connect } from 'dva';
// import _ from 'lodash';


const { Column } = Table;
const Search = Input.Search;

class Homepage extends React.Component<any,any>{
  constructor(props: any) {
    super(props);
    this.state = {
      main: {
        marginLeft:250
      },
      keynum:'4',
      move:{},
      data : [{
        key: '1',
        Name: '门',
        openstate: 0
        // tags: ['nice', 'developer'],
      }, {
        key: '2',
        Name: '窗',
        openstate: 0
        // tags: ['loser'],
      }, {
        key: '3',
        Name: '投影仪',
        openstate: 0
        // tags: ['cool', 'teacher'],
      }, {
        key: '4',
        Name: '其他设备',
        openstate: 0
      }]
    }
  }
  componentDidMount(){
    this.setState({
      ...this.state,
      data:this.props.data,
      keynum:this.props.keynum
    })
    console.log(this.props.keynum);
    
    
  }
  //Babel插件 Class Properties，箭头函数将方法绑定到实例
  // handleDelete = (key: any) => {
  //   //这里已经获取了key值，后面只要下载好lodash使用remove方法就可以移除数组了。
  //   console.log(this.state.data);
  //   let tdata = this.state.data;
  //   tdata.forEach((value: any,i: any)=>{
  //     if(value.key === key){
  //       tdata.splice(i,1);
  //     }
  //   });
  //   this.setState({
  //     ...this.state,
  //     data: tdata
  //   });
  // }
  handleAdd = (value: any) => {
    let arr = this.state.data;
    let keynum = this.state.keynum;
    keynum = (Number(keynum)+1).toString();
    let item = {
      key:keynum,
      Name:value,
      openstate:0
    }
    arr.push(item);
    this.setState({
      ...this.state,
      keynum:keynum,
      data:arr,
    })
    this.props.dispatch({
      type: 'global/changedata',
      payload: {        
        data: arr,
      }
    });
    console.log(this.state);
    
    
  }
  handleClick = () =>{
    router.push('/settings/');
  }
  //这里使用事件代理，不需要多次绑定
  handleTable = (e: any) =>{
    // console.log(e.target.children[0].id);
    //e.target.parentNode.id 获取父元素的内容
    // console.log(e.target.parentNode.id);
    let key = e.target.parentNode.id;
    let tdata = this.state.data;
    // console.log(e.target.className);
    if(e.target.className === "show"){
      tdata.forEach((value: any,i: any)=>{
        // console.log(value);
        if(value.key === key){
          if(value.openstate === 0){
            alert(value.Name+"已开启设备");
            value.openstate = 1;
            this.props.dispatch({
              type: 'global/changeopenstate',
              payload: {        
                data: tdata,
              }
            });
          }else{
            alert(value.Name+"已关闭设备");
            value.openstate = 0;
            this.props.dispatch({
              type: 'global/changeopenstate',
              payload: {        
                data: tdata,
              }
            });
          }
        }
      });
    }else{
      tdata.forEach((value: any,i: any)=>{
        // console.log(value);
        if(value.key === key){
          tdata.splice(i,1);
        }
      });
      this.setState({
        ...this.state,
        data: tdata
      });
    }
  }

  public render() {
    console.log('ifhide='+this.props.ifhide);
    if(this.props.ifhide){
      this.setState({
        ...this.state,
        move: {
          // marginLeft:260
          animation: styles.tohide+' 1s',
          position: 'relative',
          // left:-250
          left:-250
        }
      });
    }
    return (
      <div style={this.state.move}>
        <div className={styles.leftbar}>
          <Leftbar></Leftbar>
        </div>
        <div style={this.state.main} onClick={this.handleTable}>
          <Table  className={styles.table}  dataSource={this.state.data} >
            <Column
              title="Name"
              dataIndex="Name"
              key="firstName"
            />
            <Column
              title="Action"
              key="action"
              render={(text: any, record: any) => (
                <span id={record.key}>
                  <a href="javascript:;" className="show">Trigger {record.Name}</a>
                  <Divider type="vertical" />
                  {/* 在不使用事件代理的时候需要在下面的a标签内加上·onClick={this.handleDelete.bind(this,record.key)}· */}
                  <a >Delete</a>
                </span>
              )}
            />
          </Table>
        </div >
        <div style={this.state.main} className={styles.add}>
        <Search
      placeholder="input search text"
      enterButton="add"
      size="large"
      onSearch={value=>this.handleAdd(value)}
      // onClick={this.handleAdd}
    />
    </div>
        </div>
    );
  }
}
const mapStateToProps = (state:any) => {
  return {
    ifhide:state.global.ifleftbarhide,
    data:state.global.data,
    keynum:state.global.data.length.toString()
  };
}

export default connect(mapStateToProps) (Homepage);
