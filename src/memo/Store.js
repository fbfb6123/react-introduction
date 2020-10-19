import { createStore } from 'redux';

const initData = {
    data:[{message:'sample data', created:new Date()}],
    message:'please type message:',
    mode:'default',
    fdata:[]
};

//レデューサー
export  function memoReducer(state = initData, action) {
    switch(action.type) {
        case'ADD':
            return addReduce(state, action);

        case 'DELETE':
            return deleteReduce(state, action);

        case 'FIND':
            return findReduce(state, action);

        default:
            return state;
    }
}

//レデュースアクション

//メモ追加のレデュース処理
function addReduce(state, action) {
    let data = {
        message:action.message,
        created:new Date()
    };
    let newdata = state.data.slice();
    newdata.unshift(data);
    return {
        data:newdata,
        message:'Added!',
        mode:'default',
        fdata:[]
    };
}
