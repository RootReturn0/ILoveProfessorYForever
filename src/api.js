
import axios from 'axios'

const apiAddress = 'http://47.102.116.29/api/'

const baseAddress = 'http://47.102.116.29:5050/'

export default {
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
            var result = await axios.get(apiAddress + 'Cats')
            return result.data
        } catch (err) {
            console.log(err)
            return []
        }
    },
}