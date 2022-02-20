// const Buffer = require('buffer/').Buffer;
// const axios = require('axios');

// export const handleSubmitWithPhotos = async (newReview) => {
//   let newReviewToSubmit = newReview;

//   // function to get blobs
//   const getBase64 = (file) => {
//     const reader = new FileReader();
//     return new Promise(resolve => {
//       reader.readAsDataURL(file);
//       reader.onloadend = () => {
//         resolve(reader.result);
//       }
//     })
//   }

//   // photo files array from newReview
//   let filesArray = newReviewToSubmit.photos;

//   // convert file data into blobs
//   let blobPromises = [];
//   filesArray.forEach((file) => {
//     blobPromises.push(getBase64(file));
//   });
//   let blobArray = await Promise.all(blobPromises);

//   // get url from server
//   let s3UrlGetPromises = [];
//   blobArray.forEach((photo) => {
//     let getUrl = axios.get('/s3Url').then((data) => data.data)
//     s3UrlGetPromises.push(getUrl);
//   });
//   let s3UrlsGet = await Promise.all(s3UrlGetPromises);

//   // add photos to s3 bucket
//   let s3UrlPutPromises = [];
//   s3UrlsGet.forEach((s3Url, index) => {
//     let base64 = blobArray[index];
//     let base64Data = new Buffer.from(base64.replace(/^data:image\/\w+;base64,/, ""), 'base64');
//     let putUrl = axios({
//       method: 'PUT',
//       url: s3Url,
//       headers: {
//         'Content-Type': 'image/jpeg',
//         'Content-Encoding': 'base64'
//       },
//       data: base64Data
//     });
//     s3UrlPutPromises.push(putUrl);
//   });
//   let s3UrlsPut = await Promise.all(s3UrlPutPromises);

//   // get s3 urls
//   let s3PhotoUrls = s3UrlsPut.map((s3Url) => {
//     return s3Url.config.url.split('?')[0];
//   });

//   // create copy of new review and replace the photo property value with the s3 urls
//   newReviewToSubmit.photos = s3PhotoUrls;
//   // return newReviewToSubmit
//   return newReviewToSubmit;
// }

// export const handleOnChangePhotos = async (event) => {
//   // photo file from event
//   const {name, value} = event.target;
//   if (name.indexOf('photo') > -1) {
//     let file = event.target.files[0]
//   }
//   // function to get blobs
//   const getBase64 = (file) => {
//     const reader = new FileReader();
//     return new Promise(resolve => {
//       reader.readAsDataURL(file);
//       reader.onloadend = () => {
//         resolve(reader.result);
//       }
//     })
//   }
//   // convert file data into blob
//   let blob = await getBase64(file);
//   // get url from server
//   let getUrl = await axios.get('/s3Url').then((data) => data.data)
//   // add photos to s3 bucket
//   let base64Data = new Buffer.from(blob.replace(/^data:image\/\w+;base64,/, ""), 'base64');
//   let putUrl = await axios({
//     method: 'PUT',
//     url: getUrl,
//     headers: {
//       'Content-Type': 'image/jpeg',
//       'Content-Encoding': 'base64'
//     },
//     data: base64Data
//   });
//   // get s3 url
//   let s3Url = s3Url.config.url.split('?')[0];
//   // return s3 url
//   return s3Url;
// }