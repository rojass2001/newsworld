"use client"
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchnews=createAsyncThunk("news/fetchnews",async(search:string)=>{
    const response=await axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=919b265f33a24bb6b651bed7d74a4444`);
    console.log(response.data.articles) 
    return response.data.articles
    
});
const INITIALSTATE={
newslist:[]
};
  const newsslice=createSlice({
  name:"news",
  initialState:INITIALSTATE,
  reducers:{
  newsinsert:(state,action)=>{
  state.newslist=action.payload;
  },
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchnews.pending,()=>{
    console.log("pending",)
    });
    builder.addCase(fetchnews.fulfilled,(state,action)=>{
      state.newslist=action.payload;
    });
    builder.addCase(fetchnews.rejected,(state,action)=>{
      console.log("rejected",action.payload)
    });

  }
  })
  export const {newsinsert}=newsslice.actions;
  export default newsslice.reducer