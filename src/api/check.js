export default {

    checkLogin: function () {
        if(sessionStorage.getItem('token'))
            return true
        else
            return false
    },
}