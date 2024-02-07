import "../accounts/Assesment2.css";
// import { Assesment1 } from '../accounts/Assesment1';
import flower1 from "../accounts/assets1/flower1.png";
import flower2 from "../accounts/assets1/flower2.png";
import flower3 from "../accounts/assets1/flower3.png";
import brain from "../accounts/assets1/brain.png";
import pink from "../accounts/assets1/rectanglepink.png";
import smile from "../accounts/assets1/Smileplant.png";
import ProgressBar from 'react-bootstrap/ProgressBar';// import ProgressBar from "react-bootstrap/ProgressBar";

// import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal 
      {...props}
      // size="lg"
      aria-labelledby="contained-modal-title-vcenter" 
      centered
    >
      <closeButton />
      <Modal.Title id="contained-modal-title-vcenter" className="modalhead">
        Be Happy,Keep Laughing
      </Modal.Title>
      <Modal.Body>
        <img src={smile} alt="" className="smile" />
        <p className="modalbody"><b>Do you want to consult a doctor ?</b></p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal1">
          <Link to="/" className="modbutt1">Close</Link>
        </Button>
        <Button onClick={props.onHide} className="modal2">
          <Link to="/doctor" className="modbutt1">OK</Link>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export const Assesment2 = () => {

  const [modalShow, setModalShow] = React.useState(false);

  // const mainDiv = {
  //   width: "400px",
  //   textAlign: "center",
  // };

  return (
    <>
      <div class="banner9">
        <img class="img09" src={pink} alt="banner image 1" />

        <div class="hero-text09">
          <h2>Anxiety Assessment</h2>
          <img class="brain09" src={brain} alt="banner image 1" />
          {/* <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"> */}
          <div class="container-fluid09">
          <div className="progress09">
                            <ProgressBar striped variant="success" now={100} />
                            </div>

              </div>
        </div>
        {/* <div class="wave09">
          <img class="img009" src={flower1} alt="girl icon" />
          <img class="img0009" src={flower2} alt="girl icon" />
        </div> */}
        <div class="text09">
          <div class="question10 question">
            <p>
              Q10 - how often do you experience numbness or tingling due to
              anxiety? (0-3)
            </p>
            <input type="radio" name="q10" value="0" /> 0
            <span class="checkmark"></span>
            <input type="radio" name="Q10" value="1" /> 1
            <span class="checkmark"></span>
            <input type="radio" name="Q10" value="2" /> 2
            <span class="checkmark"></span>
            <input type="radio" name="Q10" value="3" /> 3
            <span class="checkmark"></span>
          </div>
          <br />
          <div class="question11 question">
            <p>
              Q11 - how often do you experience numbness or tingling due to
              anxiety? (0-3)
            </p>
            <input type="radio" name="Q11" value="0" /> 0
            <span class="checkmark"></span>
            <input type="radio" name="q11" value="1" /> 1
            <span class="checkmark"></span>
            <input type="radio" name="q11" value="2" /> 2
            <span class="checkmark"></span>
            <input type="radio" name="q11" value="3" /> 3
            <span class="checkmark"></span>
          </div>
          <br />
          <div class="question12 question">
            <p>
              Q12 - how often do you experience numbness or tingling due to
              anxiety? (0-3)
            </p>
            <input type="radio" name="Q12" value="0" /> 0
            <span class="checkmark"></span>
            <input type="radio" name="q12" value="1" /> 1
            <span class="checkmark"></span>
            <input type="radio" name="q12" value="2" /> 2
            <span class="checkmark"></span>
            <input type="radio" name="q12" value="3" /> 3
            <span class="checkmark"></span>
          </div>
          <br />
          <div class="question13 question">
            <p>
              Q13 - how often do you experience numbness or tingling due to
              anxiety? (0-3)
            </p>
            <input type="radio" name="q13" value="0" /> 0
            <span class="checkmark"></span>
            <input type="radio" name="q13" value="1" /> 1
            <span class="checkmark"></span>
            <input type="radio" name="q13" value="2" /> 2
            <span class="checkmark"></span>
            <input type="radio" name="q13" value="3" /> 3
            <span class="checkmark"></span>
          </div>
          <br />
          <div class="question14 question">
            <p>
              Q14 - how often do you experience numbness or tingling due to
              anxiety? (0-3)
            </p>
            <input type="radio" name="q14" value="0" /> 0
            <span class="checkmark"></span>
            <input type="radio" name="q14" value="1" /> 1
            <span class="checkmark"></span>
            <input type="radio" name="q14" value="2" /> 2
            <span class="checkmark"></span>
            <input type="radio" name="q14" value="3" /> 3
            <span class="checkmark"></span>
          </div>
          <br />
          <div class="question15 question">
            <p>
              Q15 - how often do you experience numbness or tingling due to
              anxiety? (0-3)
            </p>
            <input type="radio" name="q15" value="0" /> 0
            <span class="checkmark"></span>
            <input type="radio" name="q15" value="1" /> 1
            <span class="checkmark"></span>
            <input type="radio" name="q15" value="2" /> 2
            <span class="checkmark"></span>
            <input type="radio" name="q15" value="3" /> 3
            <span class="checkmark"></span>
          </div>
          <br />
          <div class="question16 question">
            <p>
              Q16 - how often do you experience numbness or tingling due to
              anxiety? (0-3)
            </p>
            <input type="radio" name="q16" value="0" /> 0
            <span class="checkmark"></span>
            <input type="radio" name="q16" value="1" /> 1
            <span class="checkmark"></span>
            <input type="radio" name="q16" value="2" /> 2
            <span class="checkmark"></span>
            <input type="radio" name="q16" value="3" /> 3
            <span class="checkmark"></span>
          </div>
          <br />
          <div class="question17 question">
            <p>
              Q17 - how often do you experience numbness or tingling due to
              anxiety? (0-3)
            </p>
            <input type="radio" name="q17" value="0" /> 0
            <span class="checkmark"></span>
            <input type="radio" name="q17" value="1" /> 1
            <span class="checkmark"></span>
            <input type="radio" name="q17" value="2" /> 2
            <span class="checkmark"></span>
            <input type="radio" name="q17" value="3" /> 3
            <span class="checkmark"></span>
          </div>
          <br />
          <div class="question18 question">
            <p>
              Q18 - how often do you experience numbness or tingling due to
              anxiety? (0-3)
            </p>
            <input type="radio" name="q18" value="0" /> 0
            <span class="checkmark"></span>
            <input type="radio" name="q18" value="1" /> 1
            <span class="checkmark"></span>
            <input type="radio" name="q18" value="2" /> 2
            <span class="checkmark"></span>
            <input type="radio" name="q18" value="3" /> 3
            <span class="checkmark"></span>
          </div>
          <div>
            <button button className="button_space19">
              <Link to="/assesment1" className="assbutt3">Back</Link>
            </button>
            <button
              variant="primary"
              onClick={() => setModalShow(true)}
              className="button_space29"
            >
              Submit
            </button>

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
          <div>
            <img className="img139" src={flower3} alt="flower icon" />
            <img className="img119" src={flower3} alt="flower icon" />
            <img className="img129" src={flower3} alt="flower icon" />
            <img className="img159" src={flower3} alt="flower icon" />

            <img className="img149" src={flower1} alt="flower icon" />
          </div>
        </div>
      </div>
    </>
  );
};
