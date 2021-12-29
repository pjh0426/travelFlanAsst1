import React, { createContext, useReducer, useState } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    albumList : [],
    loaded: false
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const [dataLoaded, setDataLoaded] = useState(false);
    const updateDataLoad = () => {
        console.log(dataLoaded);
        setDataLoaded(true);
    };

    // Actions for changing state
    function addItemToList(item) {
        dispatch({
            type: 'ADD_ITEM',
            payload: item
        });
    }
    function removeItemFromList(id) {
        dispatch({
            type: 'REMOVE_ITEM',
            payload: id
        });
    }

    function updateItemFromList(item) {
        dispatch({
            type: 'UPDATE_ITEM',
            payload: item
        });
    }

    return(
        <GlobalContext.Provider value = {{albumList : state.albumList, albumLoaded: dataLoaded, 
            addItemToList, removeItemFromList, updateItemFromList, updateDataLoad}}> 
            {children} 
        </GlobalContext.Provider>
    )
}