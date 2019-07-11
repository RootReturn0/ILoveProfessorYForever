import axios from 'axios';
let base = 'http://47.102.116.29/api';

export const sendLoginMessage =data=>{
    return axios({
        url:`${base}/Users/Login`,
        method:'post',
        data:data,
        headers:{'Content-Type':"application/json"}
    }).then(res=>res.data);
}

export const sendPersonalMessage = data =>{
    return axios({
        url:`${base}/Users/`+ sessionStorage.getItem("account"),
        method:'put',
        data:data,
        headers:{'Content-Type':"application/json"}
    });
};