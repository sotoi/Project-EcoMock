# Project ECOMerce
Project ECOMerce is a single page e-commerce web application created utilizing React and Node/Express. This project was created by a team of three engineers.

## :heavy_check_mark: Features
Routing

![Screenshot](http://g.recordit.co/r3GpT6fwVm.gif)



### Product Overview - Irving

* Cycle through different photos of the same style using the carousel
* Click thumbnails to view different styles of the same product
![Screenshot](http://g.recordit.co/pFiiwNQxV3.gif)


* Click on image to pop up a modal
* Zoom within the modal
![Screenshot](http://g.recordit.co/l7jxtacOtw.gif)

### Related Items - Irving

* Create your own outfits by adding items to the list
* Cycle through your outfit within a carousel
* Add to your favorites!
![Screenshot](http://g.recordit.co/xPjmtsaOsL.gif)


### Ratings And Reviews - Samantha

* See how others have rated products and characteristics breakdown
![Screenshot](http://g.recordit.co/hj3jUVBapp.gif)
* Add your own reviews and ratings to products with photos (through AWS S3 Bucket)
![Screenshot](http://g.recordit.co/6kExNNsekv.gif)
* Filter reviews by rating
![Screenshot](http://g.recordit.co/qK68D9KuC4.gif)
* Sort by relevant, newest, and helpful
![Screenshot](http://g.recordit.co/WFocltvvfG.gif)
* Mark review as helpful, not helpful, and report and remove a review
![Screenshot](http://g.recordit.co/lIXMBueAlt.gif)

### Questions And Answers - Sivaranjani
* Search Questions already asked
![Screenshot](http://g.recordit.co/D4Gat6BBok.gif)
* See questions and answers others have posted
![Screenshot](http://g.recordit.co/DUP8GYtYPq.gif)
* Add Answers about products
* Add Questions
![Screenshot](http://g.recordit.co/gEkPHijHsh.gif)
* Report a question
![Screenshot](http://g.recordit.co/I1A5B2HUFS.gif)
* Mark a question as helpful
![Screenshot](http://g.recordit.co/d3cLeIBygO.gif)
![Screenshot](http://g.recordit.co/o3aQWOciMZ.gif)

## :heavy_check_mark: Installation

```
npm install
```

## Setup
* Create a .env file
  * Paste with your information:
    * S3_KEY = 'EXAMPLES3KEYHERE'
    * S3_SECRET= 'S3_SECRETSAUCE'
    * BUCKET_REGION= 'us-west-1'
    * BUCKET_NAME= 'YOURBUCKETNAMEHERE'
    * GITAPIKEY= "GIT_APIKEY_HERE"
    * API_URL= "API_URL_HERE"



In two different terminals run

```
npm run build
npm start
```

open

```
http://localhost:3001/

```

## :heavy_check_mark: Credit

[Irving Soto](https://github.com/sotoi)
<br>
[Samantha Pham](https://github.com/samanthavpham)
<br>
[Sivaranjani Thangavel](https://github.com/sivaranjani19)

