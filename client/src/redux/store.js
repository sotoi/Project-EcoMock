// eslint-disable-next-line no-unused-vars
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { createStore, combineReducers } from 'redux';

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
  avgRating: avgRating.reducer,
});

export const store = createStore(reducer);
