import * as React from 'react';
import styles from './index.css';
import Leftbar from '../../components/leftbar';
import {Input, Button, Modal} from 'antd';
import { connect } from 'dva';

const {TextArea} = Input;
const mapStateToProps = (state:any) => {
  return {
    text:state.nlp.text,
    result:state.nlp.result
  };
}
//这里是装饰器模式
@connect(mapStateToProps)
class nlp extends React.Component<any,any>{
  constructor(props: any){
    super(props);
    this.state = {
      visible: false
    }
  }
  // componentDidMount() {
  //   document.querySelector('#text').addEventListener('keyup', (e)=>{
  //     console.log(e.key);
  //   })
  // }
  // componentDidUnMount() {
  //   document.querySelector('#text').removeEventListener('keyup');
  // }
  handleText = (e: any) => {
    this.props.dispatch({
      type: 'nlp/setText',
      payload: {        
        text: e.target.value,
      }
    });

  }
  showModal = () => {
    this.props.dispatch({
      type:'nlp/getResult',
    });

    this.setState({
      visible: true,
    });
  }

  handleOk = (e:any) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e:any) => {
    console.log(e);
    this.setState({
      visible: false,
    });
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
          <TextArea className={styles.input} onChange={this.handleText} placeholder="请输入你的问题" rows={4} />
          <Button className={styles.button} onClick={this.showModal} type="primary" icon="search">Search</Button>
        </div>

        <Modal
          title="Answer"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Here is your answer:</p>
          <p>{this.props.result}</p>
        </Modal>
      </div>
    );
  }
}

// export default connect(mapStateToProps) (nlp);
export default nlp;