//import { routerRedux } from 'dva/router';

//effects和reducer的区别：
//修改state的时候用reducer
//其他时候都用effects
//如果名称一样，在dva@2后，只有effect会调用，所以两个不能重名
//设计模式之——状态模式
export default {
  state: {
    text:"nlp test",
    result:""
  },
  reducers: {
    setText(state,{payload}) {
      // console.log(payload);
      return {
        ...state,
        text: payload.text,
      }
    },
    setResult(state) {
      // console.log('hideleftbar');
      if(state.text === "中介者模式和外观模式之间的区别是什么"){
        return {
          ...state,
          result:"1、外观模式;是一种结构化模型，中介者是行为型模式；2、外观模式是对子系统提供统一的接口，中介者是用一个中介对象封装一系列同事对象的交互行为；3、外观模式所有的请求处理都委托给子系统完成，而中介者模式则由中心协调同事类和中心本身共同完成业务。"
        }
      }else if(state.text === "什么场景下适合使用装饰器模式"){
        return {
          ...state,
          result:"1、在不影响其他对象的情况下，以动态、透明的方式给单个对象添加职责；2、需要动态地给一个对象增加功能，这些功能也可以动态地被撤销；3、 当不能采用继承的方式对系统进行扩充或者采用继承不利于系统扩展和维护时。"
        }
      }else if(state.text === "备忘录模式有哪些实际应用"){
        return {
          ...state,
          result:"git版本管理、浏览器回退、棋牌游戏的悔棋、编辑器撤销。"
        }        
      }else if(state.text === "访问者模式的缺点是什么"){
        return {
          ...state,
          result:"1、具体元素对访问者公布细节，违反了迪米特原则； 2、具体元素变更比较困难；3、违反了依赖倒置原则，依赖了具体类，没有依赖抽象。"
        }
      }else{
        return {
          ...state,
          result:"该语句无法识别"         
        }
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
