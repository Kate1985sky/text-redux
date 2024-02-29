export function saveItemsLocalStorage({ getState }) {
    return next => action => {
      const returnValue = next(action)
  
      if(action.type === "catalog/addItem") {
        localStorage.setItem("catalog", JSON.stringify(getState().catalog.items))
      }
  
      if(action.type === "catalog/fetchItems/fulfilled") {
        if(localStorage.getItem("catalog") === null) {
          localStorage.setItem("catalog", JSON.stringify(getState().catalog.items))
        }
      }
  
      return returnValue
    }
  }