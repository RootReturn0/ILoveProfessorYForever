
import axios from 'axios'

const apiAddress = 'http://47.102.116.29/api/'

const baseAddress = 'http://47.102.116.29:5050/'

export default {
    baseAddress,

    getAllActivity: async function () {
        try {
            var result = await axios.get(apiAddress + 'Activities')
            return result.data
        } catch (err) {
            console.log(err)
            return []
        }
    },

    getAllImage: async function () {
        try {
            var result = await axios.get(apiAddress + 'Images')
            return result.data
        } catch (err) {
            console.log(err)
            return []
        }
    },

    getImage: async function (id) {
        try {
            var result = await axios.get(apiAddress + 'Images/' + id)
            return baseAddress + result.data.imageUrl
        } catch (err) {
            console.log(err)
        }
    },

    getColor: async function () {
        try {
            var result = await axios.get(apiAddress + 'CatColors')
            return result.data
        } catch (err) {
            console.log(err)
            return []
        }
    },

    getCat: async function () {
        try {
            var result = await axios.get(apiAddress + 'Cats/GetCatList')
            return result.data
        } catch (err) {
            console.log(err)
            return []
        }
    },

    getCatImage: async function (id) {
        try {
            var result = await axios.get(apiAddress + 'Cats/Image?id=' + id)
            return result.data
        } catch (err) {
            console.log(err)
            return []
        }
    },

    getPostcard: async function () {
        try {
            var result = await axios.get(apiAddress + 'Postcards')
            console.log('><><><><><>')
            return result.data
        } catch (err) {
            console.log(err)
            return []
        }
    },

    uploadImage: async function (id, file) {
        var account =await sessionStorage.getItem('account')
        var data = new FormData()
        console.log(account)
        data.append('userAccount', account)
        data.append('catID', id)
        data.append('file', file)

        axios.post(apiAddress + 'Images/uploadApplyToCatImage?' + 'catID=' + id + '&' + 'userAccount=' + account, data)
            .then(res => {
                console.log('res=>', res);
            })
    },

    uploadAdopt: function (data) {
        //  var formdata=JSON.stringify(data)
        console.log(data)
        // axios({
        //     url: apiAddress+'ApplyToAdopts',
        //     method: 'post',
        //     data: data,
        //     headers: {'Content-Type':'application/json'}
        // }).then(res=>{
        //     console.log('res=>',res);   
        // })
        axios.post(apiAddress + 'ApplyToAdopts', data)
            .then(res => {
                console.log('res=>', res);
            })
    },

    getUserInfo: async function (account) {
        var info = await axios.get('http://47.102.116.29/api/Users/' + account)
        sessionStorage.setItem("UserUrl", info.data.headImageUrl);
        sessionStorage.setItem("nickname", info.data.nickname);
        sessionStorage.setItem("introduction", info.data.introduction);
       
        return info.data
    },
    getUserName: async function (account) {
        var info = await axios.get('http://47.102.116.29/api/Users/' + account)
       console.log(info.data.nickname)
        return info.data.nickname
    },
    getUserIntro: async function (account) {
        var info = await axios.get('http://47.102.116.29/api/Users/' + account)
        return info.data.introduction
    }
}