# Project ECOMerce
Project ECOMerce is a single page e-commerce web application created utilizing React and Node/Express. This project was created by a team of three engineers.

## :heavy_check_mark: Features
Routing

![687474703a2f2f672e7265636f726469742e636f2f7233477054366677566d2e676966](https://github.com/user-attachments/assets/6a04ec6e-cd9d-432e-aa7f-7259289f41e7)




### Product Overview - Irving

* Cycle through different photos of the same style using the carousel
* Click thumbnails to view different styles of the same product
![687474703a2f2f672e7265636f726469742e636f2f70466969774e517856332e676966](https://github.com/user-attachments/assets/423a847a-f70d-409a-aa26-9356af208272)


* Click on image to pop up a modal
* Zoom within the modal
![687474703a2f2f672e7265636f726469742e636f2f6c376a787461634f74772e676966](https://github.com/user-attachments/assets/5c1e4a73-886e-4f9f-a75d-4b2281661256)


### Related Items - Irving

* Create your own outfits by adding items to the list
* Cycle through your outfit within a carousel
* Add to your favorites!
![687474703a2f2f672e7265636f726469742e636f2f78506a6d7473614f734c2e676966](https://github.com/user-attachments/assets/ecc0cce6-6c0e-4b24-bdd6-e9237a417c1e)


### Ratings And Reviews - Samantha

* See how others have rated products and characteristics breakdown
![687474703a2f2f672e7265636f726469742e636f2f686a336a5556426170702e676966](https://github.com/user-attachments/assets/f2356594-e9bb-4c26-b529-16de60944e2a)
* Add your own reviews and ratings to products with photos (through AWS S3 Bucket)
![687474703a2f2f672e7265636f726469742e636f2f366b45784e4e73656b762e676966](https://github.com/user-attachments/assets/2810f243-7605-48aa-9e46-9b7248b92967)
* Filter reviews by rating
![687474703a2f2f672e7265636f726469742e636f2f6a4975463345725141742e676966](https://github.com/user-attachments/assets/ce57850d-bbff-4015-9d95-a0c0c36b49cc)
* Sort by relevant, newest, and helpful
![687474703a2f2f672e7265636f726469742e636f2f57466f636c74767666472e676966](https://github.com/user-attachments/assets/d5a68137-89ec-410b-9c54-b05f59b93a3f)
* Mark review as helpful, not helpful, and report and remove a review
![687474703a2f2f672e7265636f726469742e636f2f6c49584d427565416c742e676966](https://github.com/user-attachments/assets/3f5e830e-d4b5-432b-a4a1-fdebea79be5b)

### Questions And Answers - Sivaranjani
* Search Questions already asked
![Screenshot](http://g.recordit.co/D4Gat6BBok.gif)
* See questions and answers others have posted
![Screenshot](http://g.recordit.co/DUP8GYtYPq.gif)
* Add Answers about products
* Add Questions
* ![687474703a2f2f672e7265636f726469742e636f2f6f336151574f63694d5a2e676966](https://github.com/user-attachments/assets/69f9d60a-af8c-4532-b3d9-23a251d019d4)
* Report a question
![687474703a2f2f672e7265636f726469742e636f2f493141354232485546532e676966](https://github.com/user-attachments/assets/24d7cb51-84bc-4ade-8d5a-2644558c1ed6)
* Mark a question as helpful
![687474703a2f2f672e7265636f726469742e636f2f6433634c65494279674f2e676966](https://github.com/user-attachments/assets/88af62d8-a7a8-440f-a9f6-529c159359ab)

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

