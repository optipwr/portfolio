import axios from 'axios';

export const POST_CONTACT = 'POST_CONTACT';

export const contactSubmit = ( contactData ) => {
    // const request = axios.post(`${ROOT_URL}/slides?model=${db}`)
    const request = 'REDUX IS WORKING'
    return {
        type: POST_CONTACT,
        payload: request
    }
}



// export const purchaseBurger = ( orderData ) => {
//     return dispatch => {
//         dispatch( purchaseBurgerStart() );
//         axios.post( '/orders.json', orderData )
//             .then( response => {
//                 console.log( response.data );
//                 dispatch( purchaseBurgerSuccess( response.data.name, orderData ) );
//             } )
//             .catch( error => {
//                 dispatch( purchaseBurgerFail( error ) );
//             } );
//     };
// };