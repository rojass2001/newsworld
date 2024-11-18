import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

//https://newsapi.org/v2/everything?q=${search}&apiKey=919b265f33a24bb6b651bed7d74a4444

export const fetchproduct=createAsyncThunk("cart/fetchproduct",async()=>{
    const response=await axios.get('https://fakestoreapi.com/products')
    console.log(response.data);
    return response.data;
})


const INITIAL_STATE={
     artic:[],
     search:'dds',
     values:1,
     names:''
}
const articleslice=createSlice({
    name:'cart',
    initialState:INITIAL_STATE,  
    reducers:{
     addss:(state)=>{
     state.values+=1;
     },
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchproduct.pending,(state,action)=>{
         console.log("pending")
        });
            builder.addCase(fetchproduct.fulfilled,(state,action)=>{
             console.log("success")
             state.artic=action.payload;
             console.log(state.artic)
            });
                builder.addCase(fetchproduct.rejected,(state,action)=>{
                 console.log("rejected")
                 
                });
    }, 
   
});


export const {addss}=articleslice.actions;
export default articleslice.reducer;
