import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { AppData } from '../../../types/store';
import { addNewCommentAction, changeFilmStatusAction, fetchCommentsAction, fetchCurrentFilmAction, fetchFavoriteFilmsAction, fetchFilmsDataAction, fetchPromoFilmAction, fetchSimilarFilmsAction } from '../../api-actions';

const initialState: AppData = {
  hasError: false,
  isFilmsDataLoading: false,
  isAppDataProcessing: false,
  films: [],
  currentFilm: null,
  similarFilms: [],
  favoriteFilms: [],
  comments: []
};

const appData = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsDataAction.pending, (state) => {
        state.isFilmsDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchFilmsDataAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchFilmsDataAction.rejected, (state) => {
        state.isFilmsDataLoading = false;
        state.hasError = true;
      })
      // ------------------------------------------------------------------------
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isAppDataProcessing = true;
        state.hasError = false;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.currentFilm = action.payload;
        state.isAppDataProcessing = false;
      })
      .addCase(fetchPromoFilmAction.rejected, (state) => {
        state.isAppDataProcessing = false;
        state.hasError = true;
      })
      // ------------------------------------------------------------------------
      .addCase(fetchCurrentFilmAction.pending, (state) => {
        state.isAppDataProcessing = true;
        state.hasError = false;
      })
      .addCase(fetchCurrentFilmAction.fulfilled, (state, action) => {
        state.currentFilm = action.payload;
        state.isAppDataProcessing = false;
      })
      .addCase(fetchCurrentFilmAction.rejected, (state) => {
        state.isAppDataProcessing = false;
        state.hasError = true;
      })
      // ------------------------------------------------------------------------
      .addCase(fetchSimilarFilmsAction.pending, (state) => {
        state.isAppDataProcessing = true;
        state.hasError = false;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
        state.isAppDataProcessing = false;
      })
      .addCase(fetchSimilarFilmsAction.rejected, (state) => {
        state.isAppDataProcessing = false;
        state.hasError = true;
      })
      // ------------------------------------------------------------------------
      .addCase(fetchFavoriteFilmsAction.pending, (state) => {
        state.isAppDataProcessing = true;
        state.hasError = false;
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.isAppDataProcessing = false;
      })
      .addCase(fetchFavoriteFilmsAction.rejected, (state) => {
        state.isAppDataProcessing = false;
        state.hasError = true;
      })
      // ------------------------------------------------------------------------
      .addCase(changeFilmStatusAction.pending, (state) => {
        state.isAppDataProcessing = true;
      })
      .addCase(changeFilmStatusAction.fulfilled, (state, action) => {
        state.currentFilm = action.payload;
        state.isAppDataProcessing = false;
      })
      .addCase(changeFilmStatusAction.rejected, (state) => {
        state.isAppDataProcessing = false;
        state.hasError = true;
      })
      // ------------------------------------------------------------------------
      .addCase(fetchCommentsAction.pending, (state) => {
        state.isAppDataProcessing = true;
        state.hasError = false;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isAppDataProcessing = false;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.isAppDataProcessing = false;
        state.hasError = true;
      })
      // ------------------------------------------------------------------------
      .addCase(addNewCommentAction.pending, (state) => {
        state.isAppDataProcessing = true;
        state.hasError = false;
      })
      .addCase(addNewCommentAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isAppDataProcessing = false;
      })
      .addCase(addNewCommentAction.rejected, (state) => {
        state.isAppDataProcessing = false;
        state.hasError = true;
      });
  }
});

export { appData };
