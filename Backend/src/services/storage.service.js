const ImageKit = require('@imagekit/nodejs');

const imagekit = new ImageKit({
    publicKey : "public_XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    privateKey :    process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : "https://ik.imagekit.io/your_imagekit_id/"
});


async function uploadFile(buffer){
    const result = await imagekit.client.upload({
        file:buffer.toString("base64"), // the file buffer
        fileName:"image.jpg", // the original name of the file
    })
    return result;
} 

module.exports = uploadFile; 