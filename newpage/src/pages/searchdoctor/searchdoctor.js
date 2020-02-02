import React from "react";
// satyaki
import {Dropdown} from "react-bootstrap";

import AdvancedSearch from "../../assets/images/advance_search_icon.png";
import femaleDoc from "../../assets/images/exp_panel11.jpg";
import tickmark from "../../assets/images/verify_tick_icon.png";

import "./searchdoctor.css";

class SearchDoctor extends React.Component{

    render(){
        return(
            <div className="mainContainer">
                 <div>
                     {/* Left Part */}
                 </div>
                 <div class="col-sm-12 col-md-8 col-lg-9 customCol1SearchPage">
                    <div className="row1">
                        <div class="row" 
                            style={{
                                marginBottom: "5%",
                                paddingTop: "5%",
                                paddingLeft: "2%",
                                paddingRight: "2%"
                                
                            }}>
                            <div style={{
                                            marginLeft: "2%",
                                            color:"#3938a0",
                                            fontSize: "x-large"
                                        }}>
                                Find your physician
                            </div>
                            <div className="sortbyPart" style={{marginRight: "2%"}}>
                                <span className="sortbyPart1">Sort by :</span>
                                <span className="sortbyPart2">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            Relevance
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </span>
                            </div>
                        </div>
                        <div className="inputSearch">
                            <input className="input1" placeholder="Search Doctor, CLinic, Speciality" />
                            <input className="input2" placeholder="Location" />
                            <button className="findBtn">Find</button>
                            <div className="advancedSearch">
                                <button style={{background: "transparent",border: "none !important"}}>
                                    <img src={AdvancedSearch} alt="advanced search"></img>
                                </button>
                                <span style={{color: "red"}}>Advanced Search</span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div className="row2">
                            <span className="row2C1">Featured</span>
                            <span className="row2C2">Doctors</span>
                            <div style={{display: "flex", marginLeft: "auto",marginRight: "5%"}}>
                                <button class="arrowBtn"><i class="fas fa-arrow-left"></i></button>
                                <button class="arrowBtn"><i class="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="row row3">
                        <div className="doctorCard">
                            <div className="doctorCardInner">
                                <div className="imgContainerDoctorDP">
                                    <img className="femaledoc" src={femaleDoc} alt="femaleDoc"></img>
                                </div>
                                <div className="doctorNameAndType">
                                    Dr. Emma Bunton<br />Orthosurgeon
                                </div>
                                <div className="verifiedAndRating">
                                    <img src={tickmark} alt="verified"></img>
                                    <span>4.8/5.0</span>
                                </div>
                            </div>
                            <div>
                                <button className="bookingButton">
                                    Book an appointment <i class="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                        
                    </div>
                    <div className="searchResults">
                        <div class="container container1">
                            <span className="sr1">Search Results...</span>
                            <div className="sr2">
                                <span className="noResultsFound" style={{color: "red",marginRight:"4px"}}>40</span>
                                Matches Found
                            </div>
                        </div>
                    </div>
                    <div class="cardDetailed">
                        <div className="cardDetailedTop">
                            <div className="imgTextContainer">
                                <img src={femaleDoc} alt="docPic" className="detailedImg"></img>
                                <div className="detailedImgText">
                                    <div>Diagnostic Radiology</div>
                                    <div>Sarah Chapman</div>
                                    <div>MBBS,MRCS(Ortho UK)</div>
                                    <div>
                                        <span>Rating</span>
                                        <span>4.8/5.0</span>
                                        <span>
                                            <span className="noFeedbacks">23</span> Feedbacks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="rightDetailsContainer">
                                <div>
                                    <i class="fas fa-map-marker-alt" style={{margin: "5px"}}></i>
                                    <span>Kolkata, India</span>    
                                </div>
                                <div style={{display: "flex"}}>
                                    <i class="far fa-calendar-alt" style={{margin: "5px"}}></i>
                                    <div className="daysDisplay">Monday,Tuesday,Thursday,Saturday</div>    
                                </div>
                                <div>
                                    <i class="fas fa-wallet" style={{margin: "5px"}}></i>
                                    <span>Starting from <span>INR 700</span></span>    
                                </div>
                            </div>
                        </div>
                        <div className="mainButtonHeading">
                            Clinic & Hospital Affiliations
                        </div>
                        <div className="downMainButtonContainer">
                            <div className="leftBtnPart">
                                <button className="leftPartBtnCollection">Apollo Medical Center</button>
                                <button className="leftPartBtnCollection">Hegde's Advanced Ultrasound Center</button>
                                <button className="leftPartBtnCollection">Apollo Medical Center</button>
                                <button className="leftPartBtnCollection">Hegde's Advanced Ultrasound Center</button>
                                <button className="leftPartBtnCollection">Apollo Medical Center</button>
                                <span className="leftPartViewAll">View All...</span>
                            </div>
                            <div className="rightBtnPart">
                                <button className="rightPartBtnCollection collection1">Schedule Appointment</button>
                                <button className="rightPartBtnCollection collection2">Book an Appointment</button>
                            </div>
                        </div>
                        <div className="tagPart">
                            <span className="tagPartItem">
                                <i class="fas fa-tag"></i>
                                Tags
                            </span>
                            <span className="tagPartItem">Radiology</span>
                            <span className="tagPartItem">Oncology</span>
                            <span className="tagPartItem">Diagnostics</span>
                            <span className="tagPartItem">View All</span>
                        </div>
                    </div>
                    <div style={{textAlign: "right"}}>
                        Load More...
                    </div>
                 </div>
            </div>
        )
    }
}

export default SearchDoctor;