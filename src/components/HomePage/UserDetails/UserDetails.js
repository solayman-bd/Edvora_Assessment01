import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../../redux";

const UserDetails = ({ details, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);
  //   console.log(details);
  return (
    <div>
      {details.loading ? (
        <h2>Loading</h2>
      ) : details.error ? (
        <h2>{details.error}</h2>
      ) : (
        details.users && (
          <div>
            <h2>Users Details</h2>
            <div className="company-details">
              <h1>Company Details</h1>
              <p>Director Name :{details.users.data.company.director}</p>
              <p>Email :{details.users.data.company.email}</p>
              <p>
                Contact Address :{details.users.data.company.contact_address}
              </p>
            </div>
            <div className="shops-name">
              <h1>Shops Name</h1>
              <p>Store1:{details.users.data.shop[0].shop_name}</p>
              <p>Store2:{details.users.data.shop[1].shop_name}</p>
            </div>
            <div className="user-details">
              <h1>User Info</h1>
              <p>Name:{details.users.data.user.name}</p>
              <p>Email:{details.users.data.user.email}</p>
              <p>Mobile:{details.users.data.user.mobile_number}</p>
              <p>Age:{details.users.data.user.age}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    details: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
