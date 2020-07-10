import React, { userReducer } from 'react';

export default (reducer, actions, initialValue) => {
    const [state, dispatch] = userReducer(reducer, initialValue)

    const Context = React.createContext();

    const Provider = ({ children }) => {
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