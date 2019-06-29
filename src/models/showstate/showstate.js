
export default {
  state: {
    id:0,
    content: '门1',
    data:[0,0,0,0,0],
    zhuangtai:'关闭'
  },
  reducers: {
    setId(state,{payload}) {
      // console.log('setID');      
      let myid = payload.id;
      myid = myid + 1;
      
      let mycontent = '';
      if(myid === 1){
        mycontent = '门1';
      }else if(myid === 2){
        mycontent = '门2';
      }else if(myid === 3){
        mycontent = '窗1';
      }else if(myid === 4){
        mycontent = '窗2';
      }else if(myid === 5){
        mycontent = '窗3';
      }
      myid--;
      return {
        ...state,
        id: myid,
        content: mycontent,
      }
    },
    setData(state,{payload}) {
      return {
        ...state,
        data: payload.data
      }
    },
    setZhuangtai(state){
      console.log(state.data)
      let zt = '';
      if(state.data[state.id] === 0){
        zt = '关闭';
      }else{
        zt = '打开';
      }
      return{
        ...state,
        zhuangtai:zt
      }
    }
  },
  effects: {
    *getResult(action, { call, put }) {
      yield put({
        type: 'setResult',
      });
      // redux中进行跳转的方法
      //yield put(routerRedux.push('/video'));
    }
  },
};
