
import axios from 'axios'

const apiAddress='http://47.102.116.29/api/'

const baseAddress='http://47.102.116.29:5050/'

export default {
    getActivities: async function(){
        var result = await axios.get(apiAddress+'Activities')
        return result
    },
    getImage: async function(id){
        try {
            var result = await axios.get(apiAddress+'Images/' + id)
            return baseAddress + result.data.imageUrl
        } catch (err) {
            return ''
        }
    },
}