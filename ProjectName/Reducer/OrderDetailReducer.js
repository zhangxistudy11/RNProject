const OrderDetailReducer = (state, action) => {
  if(!state){
    modalVisible:false;
    textStr:'00000'
  }
    switch (action.type) {
      case 'CHANGE_STATE':
        return { ...state,  modalVisible: action.modalVisible,textStr:action.textStr}
      default:
        return state
    }
  }
  export default OrderDetailReducer