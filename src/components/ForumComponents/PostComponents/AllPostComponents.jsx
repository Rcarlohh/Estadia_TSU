import React,{ useContext }  from "react";
import SearchComponent from "./SearchComponent";
import { UserContext } from "../../../../backend/config/UserContext.jsx";
import './PostCss/AllPostComponent.css'
const AllPostComponent = () => {
  const { user } = useContext(UserContext);
    return (
      <div>
            <SearchComponent/>        
      </div>
    );
  };
  
  export default AllPostComponent; 
  