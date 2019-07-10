
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
            var result = await axios.get(apiAddress + 'Cats/Image?id='+id)
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

    uploadImage: function (id, file) {
        var data=new FormData()
        
        data.append('userAccount', '150939023@qq.com')
        data.append('catID', id)
        data.append('file',file)

        axios.post(apiAddress+'Images/uploadApplyToCatImage?'+'catID='+id+'&'+'userAccount='+'150939023@qq.com',data)
        .then(res=>{
            console.log('res=>',res);            
        })
    },

    uploadAdopt: function (data) {
        var formdata= new FormData()
         formdata.append('applicationID','111111')
         formdata.append('applicationTime','2019-07-11T16:00:00')
         formdata.append('userAccount',data.userAccount)
         formdata.append('catID',data.catID)
         formdata.append('reason',data.reason)
         formdata.append('attachment',data.attachment)
         formdata.append('auditStatus',data.auditStatus)
         formdata.append('userName',data.userName)
         formdata.append('userPhone',data.userPhone)
         formdata.append('userEmail',data.userEmail)
         formdata.append('userAddress',data.userAddress)
         formdata.append('userGender',data.userGender)
         console.log(formdata)
        axios.post(apiAddress+'ApplyToAdopts',data)
        .then(res=>{
            console.log('res=>',res);            
        })
    }
}