import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";


const apikey='43d706cbfde3478eb66d56dde39a1e7a'
export const fetchproduct=createAsyncThunk("cart/fetchproduct",async(search)=>{
    const response=await axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${apikey}`)
    //console.log(response.data);
    return response.data.articles;
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