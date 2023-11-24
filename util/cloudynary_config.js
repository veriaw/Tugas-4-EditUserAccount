require('dotenv').config();
const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: 'dic1ytrox',
    api_key:'359259317967815',
    api_secret:'YBf5m78eJ3F__e-zP_py2DcJG6Q'
})

module.exports = cloudinary;