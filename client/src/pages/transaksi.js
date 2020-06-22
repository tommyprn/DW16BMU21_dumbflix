import React, { Component } from "react";
import "./transaksi.css";
import { connect } from "react-redux";
import { getTransaction } from "../redux/actions/transaksi";
import { DropdownButton, Dropdown } from "react-bootstrap";

class Transaksi extends Component {
  componentDidMount() {
    this.props.getTransaction();
  }

  render() {
    const { data: dataTransaction } = this.props.transaction;
    let a = Object.values(dataTransaction);

    return (
      <div>
        <p className="incoming">Incoming Transaction</p>
        <table className="tabel-utama">
          <thead className="kepala-tabel">
            <tr>
              <th>No</th>
              <th>User</th>
              <th>Bukti Transfer</th>
              <th>Remaining Active</th>
              <th>Status User</th>
              <th>Status Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="badan-tabel">
            {a.map((transactionDetail) => {
              return (
                <tr>
                  <th>{transactionDetail.id}</th>
                  <th>{transactionDetail.userId}</th>
                  <th>{transactionDetail.transfer}</th>
                  <th>{transactionDetail.attach}</th>
                  <th>{transactionDetail.status}</th>
                  <th>{transactionDetail.payment}</th>
                  <th>
                    {" "}
                    <DropdownButton
                      alignRight
                      title={
                        <i
                          class="fas fa-angle-down"
                          style={{ margin: "10px", color: "blue" }}
                        />
                      }
                      id="dropdown-menu"
                      variant="black"
                      className="action-button"
                    >
                      <Dropdown.Item eventKey="1" className="text-success">
                        Approved
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="2" className="text-danger">
                        Cancel
                      </Dropdown.Item>
                    </DropdownButton>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    transaction: state.transaction,
  };
};

export default connect(mapStateToProps, { getTransaction })(Transaksi);
