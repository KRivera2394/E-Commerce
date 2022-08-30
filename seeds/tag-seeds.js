const {Tag} = require('../models')
const tagInfo = [
    {
        tag_name:'red'
    },
    {
        tag_name:'white'
    },
    {
        tag_name:'blue'
    },
    {
        tag_name:'orange'
    },
    {
        tag_name:'green'
    },
    {
        tag_name:'rock'
    },
    {
        tag_name:'hip-hop'
    },
    {
        tag_name:'jazz'
    }

];
const seedTag = () => Tag.bulkCreate(tagInfo);
module.exports = seedTag;