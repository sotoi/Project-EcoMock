// eslint-disable-next-line no-unused-vars
import { createAsyncThunk, createSlice, configureStore } from '@reduxjs/toolkit';
import {  combineReducers } from 'redux';
import { getProduct, getReviews, getReviewsMetadata } from '../components/helpers/main_helpers.jsx';
export const fetchProductId = createAsyncThunk(
  'products/fetchProductIdStatus',
  async (productId, thunkAPI) => {
    const response = await getProduct(productId)
    return response.data
  }
)

export const fetchReviews = createAsyncThunk(
  'reviews/fetchReviews',
  async (params, thunkAPI) => {
    const res = await getReviews(params);
    return res.data;
  }
);

export const fetchReviewsMetadata = createAsyncThunk(
  'reviews/fetchReviewsMetadata',
  async (product_id, thunkAPI) => {
    const res = await getReviewsMetadata(product_id);
    return res.data;
  }
)

export const product = createSlice(
  {
    name: 'product',
    initialState: {
      value: {},
    },
    reducers: {
      setProduct: (state, action) => {
        state.value = action.payload;
      },
    },
    extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder.addCase(fetchProductId.fulfilled, (state, action) => {
        // Add user to the state array
        state.value= action.payload
      })
    },
  },
);

export const reviews = createSlice(
  {
    name: 'reviews',
    initialState: {
      value: {},
    },
    reducers: {
      setReviews: (state, action) => {
        state.value = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchReviews.fulfilled, (state, action) => {
        state.value = action.payload;
      })
    }
  },
);

export const reviewsMetadata = createSlice(
  {
    name: 'reviewsMetadata',
    initialState: {
      value: {},
    },
    reducers: {
      setReviewsMetadata: (state, action) => {
        state.value = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchReviewsMetadata.fulfilled, (state, action) => {
        state.value = action.payload;
      })
    }
  },
);

const reducer = combineReducers({
  product: product.reducer,
  reviews: reviews.reducer,
  reviewsMetadata: reviewsMetadata.reducer
});

export const store = configureStore({
  reducer
});
