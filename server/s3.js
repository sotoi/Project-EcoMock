// Loading dotenv to have access to env variables
const dotenv = require('dotenv').config();
// Requiring AWS SDK.
const aws = require('aws-sdk');

const accessKeyId = process.env.S3_KEY;
const secretAccessKey = process.env.S3_SECRET;
const region = process.env.BUCKET_REGION;
const bucketName = process.env.BUCKET_NAME;

// Creating a S3 instance
const s3 = new aws.S3({
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
  region: region,
  signatureVersion: 'v4'
});

// In order to create pre-signed PUT URL we use the AWS SDK s3.getSignedUrlPromise method.
// getSignedUrlPromise(operation, params)
// For more information check the AWS documentation: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getSignedUrlPromise-property

const generateUploadURL = async () => {
  const photoId = 'photo_number_' + Math.random() * 1000;
  const params = ({
    Bucket: bucketName,
    Key: photoId,
    Expires: 60
  });
  const uploadURL = await s3.getSignedUrlPromise('putObject', params);
  return uploadURL;
}

module.exports = generateUploadURL;