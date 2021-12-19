import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import loading from '../../../../image/loading.gif'
const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading} = useAuth();
    
    if(isLoading){
        return (
          <div style={{textAlign:'center', marginTop: '20%'}}>
            <img src={loading} alt="" />
          </div>
        );
    }
    return (
        <Route
          {...rest}
          render={({ location }) =>
            user.email ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
};

export default PrivateRoute;