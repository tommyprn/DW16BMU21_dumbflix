import React, { Component } from "react";
import "./premium.css";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { addTransaction } from "../redux/actions/transaksi";

class Premium extends Component {
  constructor(props) {
    super(props);

    this.state = { data: {} };
  }

  handleChange = (event) => {
    this.setState({ data: event.target.files[0] });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.props.addTransaction(this.state.data, this.props.user.data.id);
    this.setState({ data: {} });
  };
  render() {
    const { data } = this.state;
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
          <form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail" className="nomor-id">
              <Form.Control type="number" placeholder="Your account number" />
            </Form.Group>
            <label className="bukti-trf">
              <input
                type="file"
                name="attachment"
                value={data.attachment ? data.attachment : ""}
                onChange={this.handleChange}
              />
              Attach Transfer Proof
            </label>
            <p></p>
            <button onClick="submit" className="kirim">
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    transaction: state.transaction,
    user: state.user,
  };
};

export default connect(mapStateToProps, { addTransaction })(Premium);
