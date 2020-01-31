import React from "react";

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
                 <div class="col-sm-12 col-md-8 col-lg-9 ColCol">
                    <div className="row1">
                        <div class="row">
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
                        <div>
                            <input className="input1" placeholder="Search Doctor, CLinic, Speciality" />
                            <input className="input2" placeholder="Location" />
                            <button>Find</button>
                            <div>
                                <button><img src={AdvancedSearch} alt="advanced search"></img></button>
                                Advanced Search
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div>
                            Featured <span>Doctors</span>
                            <div>
                                <button><i class="fas fa-arrow-left"></i></button>
                                <button><i class="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div className="doctorCard">
                            <div>
                                <div className="imgContainerDoctorDP">
                                    <img src={femaleDoc} alt="femaleDoc"></img>
                                </div>
                                <div className="doctorNameAndType">
                                    Dr. Emma Bunton<br />Orthosurgeon
                                </div>
                                <div className="verfiedAndRating">
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
                    <div>
                        <span>Search Results...</span>
                        <span>
                            <span className="noResultsFound">40</span>
                            Results Found
                        </span>
                    </div>
                    <div class="cardDetailed">
                        <div>
                            <div>
                                <img src={femaleDoc} alt="docPic"></img>
                                <div>
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
                            <div>
                                <div>
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span>Kolkata, India</span>    
                                </div>
                                <div>
                                    <i class="far fa-calendar-alt"></i>
                                    <span>Monday,Tuesday,Thursday,Saturday</span>    
                                </div>
                                <div>
                                    <i class="fas fa-wallet"></i>
                                    <span>Starting from <span>INR 700</span></span>    
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <button>Apollo Medical Center</button>
                                <button>Hegde's Advanced Ultrasound Center</button>
                                <button>Apollo Medical Center</button>
                                <button>Hegde's Advanced Ultrasound Center</button>
                                <button>Apollo Medical Center</button>
                                <span>View All...</span>
                            </div>
                            <div>
                                <button>Schedule Appointment</button>
                                <button>Book an Appointment</button>
                            </div>
                        </div>
                        <div>
                            <span>
                                <i class="fas fa-tag"></i>
                                Tags
                            </span>
                            <span>Radiology</span>
                            <span>Oncology</span>
                            <span>Diagnostics</span>
                            <span>View All</span>
                        </div>
                    </div>
                    <div>
                        Load More...
                    </div>
                 </div>
            </div>
        )
    }
}

export default SearchDoctor;