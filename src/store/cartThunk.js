import { cartAction } from ".";

export const sendCartDate = (data) => {
    return async (dispatch) => {
        const sendRequest = async (cartItems) => {
            const response = await fetch('https://my-react-app-38413-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cartItems)
            });

            if (! response.ok) {
                console.log('Some error updating the cart...');
                return;
            }
        };

        try {
            await sendRequest(data);
            console.log('request send successfull!!');
        } catch (err) {
            throw new Error('Some internal server error while sending request ', err);
        }
    };
};

export const fetchCart = () => {
    return async (dispatch) => {
        const fetchData = async() => {
            const response = await fetch('https://my-react-app-38413-default-rtdb.firebaseio.com/cart.json');
        
            if (!response.ok) {
                console.log('cannot fetch cart');
                return;
            }

            return await response.json();
        };
        
        try {
            const cartData = await fetchData();
            if (cartData) {
                dispatch(cartAction.replaceCart(cartData));
            }
        } catch (err) {
            console.log('some error occured while fetching data... ', err);
        }

    };
};