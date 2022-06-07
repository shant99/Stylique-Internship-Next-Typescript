import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  section2: "",
  section3: "",
  section4: "",
  section5: "",
};

export let asyncFunction = createAsyncThunk(
  "asyncFunction",
  async function (a, b) {
    // 1 parametr ayn inch karoxes tal dispatchov , 2 {}
    const response = await fetch(
      "https://stylique.am/images/videos/apply_1.mp4"
    );
    const data = await response.json();
    return data;
  }
);

const vendorsPageSlice = createSlice({
  name: "vendorsPageSlice",
  initialState,
  reducers: {
    setSection2: (state, action) => {
      state.section2 = action.payload;
    },
    setSection3: (state, action) => {
      state.section3 = action.payload;
    },
    setSection4: (state, action) => {
      state.section4 = action.payload;
    },
    setSection5: (state, action) => {
      state.section5 = action.payload;
    },
  },
});

export let { setSection2 , setSection3 ,setSection4 , setSection5 } = vendorsPageSlice.actions;
export default vendorsPageSlice.reducer;
