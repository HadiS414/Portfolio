import React, {useState} from 'react';
// PORTFOLIO IMAGES
import nhlTeams from "../portfolio_images/nhl-teams.png";
import contactList from "../portfolio_images/contact_list.png";
import packetAnalyzer from "../portfolio_images/Packet_Analyzer.png";
import foodPyramid from "../portfolio_images/Food_Pyramid.png";
// FONT AWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
// REACT BOOTSTRAP
import { Modal, Button } from "react-bootstrap";

const Portfolio = () => {

    // CONTACT LIST VARIABLES
    const [displayContactList, setDisplayContactList] = useState(false);
    const handleCloseContactList = () => setDisplayContactList(false);
    const handleShowContactList = () => setDisplayContactList(true);

    // DNS RESOLVER VARIABLES
    const [displayNHLTeams, setDisplayNHLTeams] = useState(false);
    const handleCloseNHLTeams = () => setDisplayNHLTeams(false);
    const handleShowNHLTeams= () => setDisplayNHLTeams(true);
    
    // PACKET ANALYZER VARIABLES
    const [displayPacketAnalyzer, setDisplayPacketAnalyzer] = useState(false);
    const handleClosePacketAnalyzer = () => setDisplayPacketAnalyzer(false);
    const handleShowPacketAnalyzer = () => setDisplayPacketAnalyzer(true);

    // FOOD PYRAMID VARIABLES
    const [displayFoodPyramid, setDisplayFoodPyramid] = useState(false);
    const handleCloseFoodPyramid = () => setDisplayFoodPyramid(false);
    const handleShowFoodPyramid = () => setDisplayFoodPyramid(true);


  return (   
    <div id="portfolio" className="portfolio-wrapper">
        <div className="container">
            <h1 className="text-uppercase text-center py-5" style={{color: "orange"}}> Portfolio </h1>
            <div className="portfolio-wrapper row">

                <div className="col portfolio-holder">
                    <img className="portfolio-image" src={nhlTeams} alt="NHL Teams..."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className= "portfolio-icon" icon ={faSearchPlus} onClick={handleShowNHLTeams}/>
                </div>

                <div className="col portfolio-holder">
                    <img className="portfolio-image" src={contactList} alt="Contact List..."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className= "portfolio-icon" icon ={faSearchPlus} onClick={handleShowContactList}/>
                </div>

                <div className="col portfolio-holder">
                    <img className="portfolio-image" src={packetAnalyzer} alt="Packet Analyzer..."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className= "portfolio-icon" icon ={faSearchPlus} onClick={handleShowPacketAnalyzer}/>
                </div>

                <div className="col portfolio-holder">
                    <img className="portfolio-image" src={foodPyramid} alt="Food Pyramid..."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className= "portfolio-icon" icon ={faSearchPlus} onClick={handleShowFoodPyramid}/>
                </div>

            </div>
        </div>

        {/* MODAL FOR NHL Teams */}
        {displayNHLTeams ?
        <Modal size="lg" show={true} onHide={handleCloseNHLTeams} aria-labelledby="contained-model-title-vcenter">
            <Modal.Header>
                <h2> NHL-Teams Data Project </h2>
            </Modal.Header>
            <Modal.Body>
            <div>
                 <img className="pb-3 pop-up" src={nhlTeams} alt="NHL Teams..."/>
                 <p className="pb-2 pop-up text-center"> This UI displays the statistics of all the teams in the 2021-2022 
                 regular season of the NHL. It uses two public API endpoints to obtain the information. </p>
                 <div className="text-center">
                 <span> Github: </span> <a className="github" onClick={() => window.open("https://github.com/HadiS414/NHL-Team-Stats")}>https://github.com/HadiS414/NHL-Team-Stats</a>
                 </div>
             </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseNHLTeams}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        : null}

        {/* MODAL FOR CONTACT LIST */}
        {displayContactList ?
        <Modal size="lg" show={true} onHide={handleCloseContactList} aria-labelledby="contained-model-title-vcenter">
            <Modal.Header>
                <h2> Contact-List Project </h2>
            </Modal.Header>
            <Modal.Body>
            <div>
                 <img className="pb-3 pop-up" src={contactList} alt="Contact List..."/>
                 <p className="pb-2 pop-up text-center"> This program is a python script that allows a user to add 
                 contacts to a list, search for these contacts, and remove any contacts. You can switch through the 
                 different functions by selecting the bullets at the top of the GUI. </p>
                 <div className="text-center">
                 <span> Github: </span> <a className="github" onClick={() => window.open("https://github.com/HadiS414/Contact-List")}>https://github.com/HadiS414/Contact-List</a>
                 </div>
             </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseContactList}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        : null}

        {/* MODAL FOR PACKET ANALYZER */}
        {displayPacketAnalyzer ?
        <Modal size="lg" show={true} onHide={handleClosePacketAnalyzer} aria-labelledby="contained-model-title-vcenter">
            <Modal.Header>
                <h2> Packet Analyzer Project </h2>
            </Modal.Header>
            <Modal.Body>
            <div>
                 <img className="pb-3 pop-up" src={packetAnalyzer} alt="Packet Analyzer..."/>
                 <p className="pb-2 pop-up text-center"> This is a python script that dissects TCP packets. It 
                 takes in a .pcap file as input and parses this file. </p>
                 <div className="text-center">
                 <span> Github: </span> <a className="github" onClick={() => window.open("https://github.com/HadiS414/Analyzing-Packet-Traces")}>https://github.com/HadiS414/Analyzing-Packet-Traces</a>
                 </div>
             </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClosePacketAnalyzer}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        : null}

        {/* MODAL FOR FOOD PYRAMID */}
        {displayFoodPyramid ?
        <Modal size="lg" show={true} onHide={handleCloseFoodPyramid} aria-labelledby="contained-model-title-vcenter">
            <Modal.Header>
                <h2> Food Pyramid Project </h2>
            </Modal.Header>
            <Modal.Body>
            <div>
                 <img className="pb-3 pop-up" src={foodPyramid} alt="Food Pyramid..."/>
                 <p className="pb-2 pop-up text-center"> This program simulates a food pyramid in which a user may 
                 customize and navigate through. The organisms in the food pyramid can consist of carnivores, 
                 herbivores, and omnivores. </p>
                 <div className="text-center">
                 <span> Github: </span> <a className="github" onClick={() => window.open("https://github.com/HadiS414/Food-Pyramid")}>https://github.com/HadiS414/Food-Pyramid</a>
                 </div>
             </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseFoodPyramid}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        : null}

    </div>
  )
}

export default Portfolio