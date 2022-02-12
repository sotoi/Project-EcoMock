// eslint-disable-next-line no-unused-vars
import { createAsyncThunk, createSlice, configureStore } from '@reduxjs/toolkit';
import {  combineReducers } from 'redux';
import { getProduct } from '../components/helpers/main_helpers.jsx';
export const fetchProductId = createAsyncThunk(
  'products/fetchProductIdStatus',
  async (productId, thunkAPI) => {
    const response = await getProduct(productId)
    return response.data
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

export const avgRating = createSlice(
  {
    name: 'avgRating',
    initialState: {
      value: 0,
    },
    reducers: {
      setAvgRating: (state, action) => {
        const { ratings } = action.payload;
        let avgRating = 0;
        let totalCount = 0;
        for (const rating in ratings) {
          const count = ratings[rating];
          avgRating += rating * count;
          totalCount += count;
        }
        avgRating /= totalCount;
        state.value = avgRating;
      },
    },
  },
);

const reducer = combineReducers({
  product: product.reducer,
  avgRating: avgRating.reducer
});

export const store = configureStore({
  reducer
});
