import React from "react";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

import  "../css/searchbar.css";


const SearchPage = (props) => {
  return (
    <MDBCol className="search">
      <MDBFormInline className="md-form">
        <div class="searchContainer">
          <input className="form-control searchInput" type="text" placeholder={props.holder} aria-label="Search" />
          <span  className="searchIcons"><MDBIcon icon="search" /></span>
          <span  className="searchIcons"><MDBIcon icon="times" /></span>
        </div>
      </MDBFormInline>
    </MDBCol>
  );
}

export default SearchPage;