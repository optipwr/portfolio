import { POST_CONTACT } from '../actions/contact';

// const purchaseBurgerSuccess = ( state, action ) => {
//     const newOrder = updateObject( action.orderData, { id: action.orderId } );
//     return updateObject( state, {
//         contact: state.contacts.concat( newOrder )
//     } );
// };

const INITIAL_STATE = {contacts: []};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case POST_CONTACT:
            return {...state, contacts: action.payload}
        default:
            return state;
    }
}