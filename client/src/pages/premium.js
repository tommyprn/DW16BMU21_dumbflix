import React, { Component } from "react";
import "./premium.css";
import { Form, FormControl } from "react-bootstrap";

class Premium extends Component {
  render() {
    return (
      <div className="premi">
        <div className="up-plan">
          <h2>Upgrade Plan Premium</h2>
          <p></p>
          <p>
            Bayar sekarang dan nikmati streamin film kekinian dari{" "}
            <span className="pemanis">DUMFLIX</span>
          </p>
          <p className="call-friend">
            DUMBFLIX: <span className="nomornya">0981312323</span>
          </p>
          <Form.Group controlId="formBasicEmail" className="nomor-id">
            <Form.Control type="number" placeholder="Your account number" />
          </Form.Group>
          <label className="bukti-trf">
            <input type="file" />
            Attach Transfer Proof
          </label>
          <p></p>
          <button onClick="submit" className="kirim">
            Send
          </button>
        </div>
      </div>
    );
  }
}

export default Premium;
