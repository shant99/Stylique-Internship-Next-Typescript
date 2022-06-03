import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";

const initialState = {
  section2: ''
};

export let asyncFunction = createAsyncThunk(
  "asyncFunction",
  async function (a, b) {
    // 1 parametr ayn inch karoxes tal dispatchov , 2 {}
    const response = await fetch('https://stylique.am/images/videos/apply_1.mp4');
    const data = await response.json();
    console.log(data)
    return data;
  }
);

const vendorsPageSlice = createSlice({
  name: "vendorsPageSlice",
  initialState,
  reducers: {
    setSection2: (state, action) => {
        state.section2 = action.payload
    },
  },
});

export let { setSection2 } = vendorsPageSlice.actions;
export default vendorsPageSlice.reducer;