import { useReducer, useEffect, useCallback } from 'react';
import { actionTypes, reducer } from './useFetch.reducer';

const initialState = {
    loading: false,
    error: null,
    data: null
};

export const useFetch = (url) => {
    const [{ data, error, loading }, dispatch] = useReducer(reducer, initialState);

    // const [data, setData] = useState([]);
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);

    const fetchDataUsingReducer = useCallback(async () => {
        // set loading state to true
        dispatch({
            type: actionTypes.loading,
            payload: true
        });
        let response;

        try {
            response = await fetch(url);
        } catch (error) {
            dispatch({
                type: actionTypes.loading,
                payload: false
            });
            return dispatch({
                type: actionTypes.error,
                payload: error,
            });
        }

        // set loading state to false
        dispatch({
            type: actionTypes.loading,
            payload: false,
        });

        // if any error
        if (!response.ok) {
            const errorText = await response.text();
            return dispatch({
                type: actionTypes.error,
                payload: new Error(errorText),
            });
        }

        // if no error,
        const data = await response.json();
        // set error to null
        dispatch({
            type: actionTypes.error,
            payload: null,
        });
        // set data
        return dispatch({
            type: actionTypes.data,
            payload: data,
        })
    }, [url]);

    /*
    const fetchData = useCallback(async () => {
        // set loading state to true
        setLoading(true);

        let response;
        // MAKE NETWORK CALL
        try {
            response = await fetch(url);
        } catch (error) {
            console.log(error);
        }
        // const response = await fetch(url);

        // set loading state to false
        setLoading(false);

        // if any error
        if (!response.ok) {
            const errorText = await response.text();
            setError(new Error(errorText));
            return;
        }

        // if no error,
        const data = await response.json();

        // set error to null
        setError(null);

        // set data
        setData(data);
    }, [url]); 
    */

    useEffect(() => {
        fetchDataUsingReducer()
    }, [fetchDataUsingReducer]);

    // useEffect(() => {
    //     fetchData()
    // }, [fetchData]);

    return { data, error, loading };
}