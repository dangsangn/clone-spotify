import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface PlayerState {
  currentSongs: any;
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: any;
  genreListId: string;
}

const initialState: PlayerState = {
  activeSong: {},
  currentIndex: 0,
  currentSongs: [],
  genreListId: "",
  isActive: false,
  isPlaying: false,
};

const playerSlice = createSlice({
  initialState,
  name: "player",
  reducers: {
    playPause: (state, action: PayloadAction<any>) => {
      state.isPlaying = action.payload;
    },

    changeSong: (state, action: PayloadAction<any>) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    selectGenreListId: (state, action: PayloadAction<any>) => {
      state.genreListId = action.payload;
    },

    setActiveSong: (state, action: PayloadAction<any>) => {
      state.activeSong = action.payload.song;

      if (action.payload?.data?.tracks?.hits) {
        state.currentSongs = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        state.currentSongs = action.payload?.data?.tracks;
      } else {
        state.currentSongs = action.payload.data;
      }

      state.currentIndex = action.payload.i;
      state.isActive = true;
      state.isPlaying = true;
    },
  },
});

export const { setActiveSong, changeSong, playPause, selectGenreListId } =
  playerSlice.actions;

export default playerSlice.reducer;
