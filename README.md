# 🛒 Project ECOMerce

Project ECOMerce is a single-page e-commerce web application built with **React** and **Node/Express**. Developed by a team of three engineers, it provides a full-featured shopping experience with modern UI and robust backend integration.

---

## 🚀 Features

### ⚡ Routing

![Routing](https://github.com/user-attachments/assets/6a04ec6e-cd9d-432e-aa7f-7259289f41e7)

---

### 🛍️ Product Overview & Carousel — *Irving*

- **Browse Styles:** Cycle through different photos of the same style using the carousel.
- **Thumbnail Navigation:** Click thumbnails to view various styles of the same product.
  
  ![Product Thumbnails](https://github.com/user-attachments/assets/423a847a-f70d-409a-aa26-9356af208272)

- **Modal View:** Click on an image to open a modal.
- **Image Zoom:** Zoom into product images within the modal.

  ![Zoom Modal](https://github.com/user-attachments/assets/5c1e4a73-886e-4f9f-a75d-4b2281661256)

---

### 👗 Related Items & Outfits — *Irving*

- **Custom Outfits:** Create outfits by adding items to your list.
- **Outfit Carousel:** Cycle through your custom outfits.
- **Favorites:** Add items to your favorites!

  ![Related Items Carousel](https://github.com/user-attachments/assets/ecc0cce6-6c0e-4b24-bdd6-e9237a417c1e)

---

### ⭐ Ratings & Reviews — *Samantha*

- **Community Feedback:** See how others have rated products and view characteristic breakdowns.

  ![Ratings Breakdown](https://github.com/user-attachments/assets/f2356594-e9bb-4c26-b529-16de60944e2a)

- **Share Your Experience:** Add your own reviews and ratings, including photos (uploaded through AWS S3).

  ![Add Review](https://github.com/user-attachments/assets/2810f243-7605-48aa-9e46-9b7248b92967)

- **Review Filters:** Filter reviews by rating.

  ![Filter Reviews](https://github.com/user-attachments/assets/ce57850d-bbff-4015-9d95-a0c0c36b49cc)

- **Sort Reviews:** Sort by relevance, newest, and most helpful.

  ![Sort Reviews](https://github.com/user-attachments/assets/d5a68137-89ec-410b-9c54-b05f59b93a3f)

- **Moderation:** Mark reviews as helpful/not helpful, report, and remove reviews.

  ![Moderate Reviews](https://github.com/user-attachments/assets/3f5e830e-d4b5-432b-a4a1-fdebea79be5b)

---

### ❓ Questions & Answers — *Sivaranjani*

- **Search:** Search previously asked questions.

  ![Search Questions](http://g.recordit.co/D4Gat6BBok.gif)

- **Browse Q&A:** See questions and answers posted by others.

  ![Browse Q&A](http://g.recordit.co/DUP8GYtYPq.gif)

- **Contribute:** Add answers and questions about products.

  ![Add Q&A](https://github.com/user-attachments/assets/69f9d60a-af8c-4532-b3d9-23a251d019d4)

- **Moderation:** Report questions, mark as helpful.

  ![Report Question](https://github.com/user-attachments/assets/24d7cb51-84bc-4ade-8d5a-2644558c1ed6)
  ![Mark Helpful](https://github.com/user-attachments/assets/88af62d8-a7a8-440f-a9f6-529c159359ab)

---

## 🛠️ Installation

```bash
npm install
```

---

## ⚙️ Setup

1. **Create a `.env` file** with the following content (replace with your info):

    ```env
    S3_KEY=EXAMPLES3KEYHERE
    S3_SECRET=S3_SECRETSAUCE
    BUCKET_REGION=us-west-1
    BUCKET_NAME=YOURBUCKETNAMEHERE
    GITAPIKEY=GIT_APIKEY_HERE
    API_URL=API_URL_HERE
    ```

2. **Build & Start the App**

   In two different terminals, run:

    ```bash
    npm run build
    ```

    ```bash
    npm start
    ```

3. **Open in your browser:**

   [http://localhost:3001/](http://localhost:3001/)

---

## 🙌 Credits

- [**Irving Soto**](https://github.com/sotoi)  
- [**Samantha Pham**](https://github.com/samanthavpham)  
- [**Sivaranjani Thangavel**](https://github.com/sivaranjani19)

---
