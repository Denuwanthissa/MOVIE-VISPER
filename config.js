const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'bwhFFKZJ#Rr8MD5yQHRW8bC6l1ONcj_R-GzfhQKCCcz5xY-hFTuM' : process.env.SESSION_ID, 
PORT: process.env.PORT === undefined ? '8000' : process.env.PORT, 
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'denuwanthissa' : process.env.SESSION_NAME,  

};
