import React, { useReducer } from 'react';

export default (reducer, actions, initialValue) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialValue)

        const dispatchActions = {};

        for (key in actions) {
            dispatchActions[key] = actions[key](dispatchActions);
        }

        return <Context.Provider value={ {state, ...dispatchActions} }>
            {children}
        </Context.Provider>
    }

    return { Context, Provider };
}