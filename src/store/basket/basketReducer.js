import { fetchAPI } from "../../lib/fetchApi"

export const basketActonTypes = {
 GET_ITEM: "GET_ITEM",
 ADD_ITEM: "ADD_ITEM"

}
const initialState = {
 items: []
}
export const basketReducer =(state = initialState, action)=>{
switch(action.type){
 case basketActonTypes.ADD_ITEM:
  return{
   ...state,
   items: action.payload
  }
  default:
 return state
}

}

export const getBasket = async (dispatch,getState) => {
 try {
   const { data } = await fetchAPI("basket");
   dispatch({type: basketActonTypes.GET_ITEM, payload: data.items});
 } catch (error) {
   console.log(error);
 }
};


export const addToBasket = (newItem)=> async(dispatch)=>{
 try {
   await fetchAPI(`foods/${newItem.id}/addToBasket`, {
   method: "POST",
   body: {amount: newItem.amount}
  })

  
  dispatch(getBasket());
} catch (error) {
  console.log(error);
}
};
