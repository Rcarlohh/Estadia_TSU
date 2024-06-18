import React,{ useContext }  from "react";
import SearchComponent from "./SearchComponent";
import { UserContext } from "../../../../backend/config/UserContext.jsx";
import './AllPostCss/AllPostComponent.css'
const AllPostComponent = () => {
  const { user } = useContext(UserContext);
    return (
      <div>
        {user && <p className="user-welcome">Bienvenido, {user.displayName}!</p>}
            <SearchComponent/>        
      </div>
    );
  };
  
  export default AllPostComponent; 
  