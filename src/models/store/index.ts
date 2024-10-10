import { configureStore } from "@reduxjs/toolkit";
import editRecipeSlice from "./reducers/editRecipeSlice";
import drinksRecipeSlice from "./reducers/drinksRecipeSlice";
import loadFetchSlice from "./reducers/loadFetchSlice";
import errorSlice from "./reducers/errorSlice";

const store = configureStore({
  reducer: {
    editRecipe: editRecipeSlice,
    drinksRecipe: drinksRecipeSlice,
    loadFetch: loadFetchSlice,
    error: errorSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
