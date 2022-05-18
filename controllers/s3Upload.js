const S3 = require('aws-sdk/clients/s3');
const axios = require('axios');
const FormData = require('form-data');

module.exports = async function (id){
    
    const bucketName = process.env.AWS_BUCKET_NAME;
    const region = process.env.AWS_BUCKET_REGION;
    const accessKey = process.env.AWS_ACCESS_KEY;
    const secretKey = process.env.AWS_SECRET_KEY;

    const s3 = new S3({
        region: region,
        accessKeyId:accessKey,
        secretAccessKey:secretKey
    })
    try{
        const imageName = id + ".png";
        const { url, fields } = s3.createPresignedPost( {
            Bucket : bucketName,
            Fields:{
                Key: imageName,
                "Content-type" : "image/png"
            },
            Expires: 86600, 
          });
        console.log("its working");
        console.log(fields);
        return fields;
    }catch(err){
        console.log("cant afford presigned url");
        return err;
    }
}

