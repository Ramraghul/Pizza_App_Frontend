import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, deleteUser} from "../../actions/userAction";
import Loader from '../Loader'
import Error from '../Error'
import { FiDelete } from "react-icons/fi";


function Userlist() {

  let disabled = true
  
  const userState = useSelector((state) => state.getAllUsersReducer);
  const {loading,error,users} = userState
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <>
      <div>
        <h1 className="text-center">User List</h1>
        {loading && (<Loader/>)}
        {error && (<Error error = "Error while fetching users"/>)}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {
            users && users.map(user =>(
              <tr key={user._id}>
                <td>
                  {user._id}
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                <FiDelete 
                      style = {{ color: "red", cursor: "pointer" || user._id === "63c0f256d0b31a70669f2183" || user._id === "63c0f2d2d0b31a70669f218c" ? disabled : null }}
                      onClick = {()=> {
                        dispatch(deleteUser(user._id))
                      }}/>
                      {/* {
                        user._id === "63c0f256d0b31a70669f2183" || user._id === "63c0f2d2d0b31a70669f218c" ? disabled="true" : null
                      } */}
                </td>
              </tr>
            ))
          }

          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Userlist;
