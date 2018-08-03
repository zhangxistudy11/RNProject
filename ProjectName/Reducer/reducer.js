const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red',
    modalVisible:false,
    textStr:'00000'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    case 'CHANGE_STATE':
      return { ...state,  modalVisible: action.modalVisible,textStr:action.textStr}  
    default:
      return state
  }
}
export default themeReducer