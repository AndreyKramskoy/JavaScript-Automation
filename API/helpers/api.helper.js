const axios = require("axios");
const {
   Test_Url
} = require("../config/endpoints.js")

const sendRequest = async (url, data = null, method = "get") => {
    try {
        const response = await axios({
            method,
            url:`${Test_Url}/${url}`,
            headers: {},
            data
        });
        return {
            status: response.status,
            data: response.data
        };        
    } catch (error) {
        return {
            status: error.response.status
        };
    }
};
module.exports = {
    sendRequest
};