const initialState = {
  items: [],
};

const addItemToBasket = (array, action) => {
  return array.map((item, index) => {
    if (index !== action.payload) {
      console.log(array[item].value);
      return array[item].value;
    }

    return {
      ...item,
      inBasket: true,
    };
  });
};

const removeItemFromList = (array, action) => {
  //   console.log(array.filter((item, index) => item.id !== action.payload));
  return array.filter((item, index) => item.value.id !== action.payload);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      return {
        ...state,
        items: [
          ...state.items,
          {
            value: action.payload,
            inBasket: false,
          },
        ],
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        items: addItemToBasket(state.items, action),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: removeItemFromList(state.items, action),
      };
    case "CLEAR_ITEMS": {
      return {
        items: [],
      };
    }
    default:
      return state;
  }
};
