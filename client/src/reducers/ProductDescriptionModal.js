const initialState = {
  openModal: false,
  belowElementScrollable:true,
}
export default function ProductDescriptionModal(state = initialState, action) {
  switch (action.type) {
    case "appear-productDescription-modal": return { openModal: true, belowElementScrollable:false, productImage:action.payload.productImage,productName:action.payload.productName, productColors:action.payload.productColors,productDescription:action.payload.productDescription,productPrice:action.payload.productPrice };
    case "disappear-productDescription-modal": return { ...initialState };
    default:return state
  }
}
