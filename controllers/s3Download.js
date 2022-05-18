const S3 = require('aws-sdk/clients/s3');


module.exports = async function (id){
    
    const bucketName = process.env.AWS_BUCKET_NAME;
    const region = process.env.AWS_BUCKET_REGION;
    const accessKey = process.env.AWS_ACCESS_KEY;
    const secretKey = process.env.AWS_SECRET_KEY;
    const imageName = id + ".png";

    const s3 = new S3({
        region: region,
        accessKeyId:accessKey,
        secretAccessKey:secretKey
    })
    try{

        const signedUrl = await s3.getSignedUrlPromise('getObject',{
            Bucket : bucketName,
            Key : imageName,
            Expires : 86600,
        });
        console.log("its working");
        return signedUrl;
    }catch(err){
        console.log("its not working :(")
        return err;
    }
}

