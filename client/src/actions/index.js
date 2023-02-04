export const switchToSearchbar=()=>({type:'switch-searchbar'});
export const switchToNavbar=()=>({type:'switch-navbar'});
export const appearSidebar=()=>({type:'appear-sidebar'})
export const disappearSidebar = () => ({ type: 'disappear-sidebar' })
export const disapperProductDescriptionModal = () => ({type: 'disappear-productDescription-modal'})
export const appearProductDescriptionModal = ({productImage, productDescription, productName, productPrice, productColors}) => ({ type: 'appear-productDescription-modal', payload:{productColors,productDescription,productImage,productName,productPrice} })