import { routerRedux } from 'dva/router';

//effects和reducer的区别：
//修改state的时候用reducer
//其他时候都用effects
//如果名称一样，在dva@2后，只有effect会调用，所以两个不能重名
export default {
  state: {
    text: 'hello umi+dva',
    login: false,
    id:0,
    username: 'tourist',
    password: '123',
    ifleftbarhide: false,
    data : [{
      key: '1',
      Name: '门',
      openstate: 0
    }, {
      key: '2',
      Name: '窗',
      openstate: 0
    }, {
      key: '3',
      Name: '投影仪',
      openstate: 0
    }, {
      key: '4',
      Name: '其他设备',
      openstate: 0
    }],
    tdata : [{
      key: '1',
      Name: '门',
      openstate: 0
    }, {
      key: '2',
      Name: '窗',
      openstate: 0
    }, {
      key: '3',
      Name: '投影仪',
      openstate: 0
    }, {
      key: '4',
      Name: '其他',
      openstate: 0
    }]
  },
  reducers: {
    //这里要使用大括号括起来，不然会读到一个包含其他信息大对象，需要payload.payload才能进行读取
    changedata(state,{payload}){
      return {
        ...state,
        tdata:payload.data
      }
    },
    changeopenstate(state,{payload}){
      // console.log('change state');
      return {
        ...state,
        data: payload.data
      }
    },
    haveHide(state){
      console.log('have hide.');
      return {
        ...state,
        ifleftbarhide: false
      }
    },
    setUsername(state,{payload}) {
      // console.log(payload);
      return {
        ...state,
        username: payload.username,
      }
    },
    setLeftbarHide(state) {
      // console.log('hideleftbar');
      return {
        ...state,
        ifleftbarhide:true
      }
    },
    setPassword(state,{payload}) {
      // console.log(payload);
      return {
        ...state,
        password: payload.password
      }
    },
    test(state,{payload}) {
      console.log(payload);
    },
    signin(state) {
      return {
        ...state,
        login: true,
      };
    },
  },
  effects: {
    *login(action, { call, put }) {
      yield put({
        type: 'signin',
      });
      // redux中进行跳转的方法
      yield put(routerRedux.push('/video'));
    },
    *backtologin(action, { call, put}) {
      yield put({
        type:'signout',
      });      
      yield put(routerRedux.push('/'));
    },
  },
};
