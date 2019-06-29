import React from 'react';
// import styles from './video.less';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import router from 'umi/router';


class Video extends React.Component {
  handleClick = () => {
    //这里使用react-html5-camera-photo模块进行摄像头的调用。回去安装
    
  }
  componentDidMount() {
    setTimeout(()=>{
      router.replace('/homepage');
    },3000);
  }
  render () {
    return (
      <div>
        <Camera
          onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
        />
        {/* <div id="video" ref="video" className={styles.canvas}></div> */}
        {/* <button onClick={this.handleClick}>open media</button> */}
      </div>
    );
  }
}

export default Video;
