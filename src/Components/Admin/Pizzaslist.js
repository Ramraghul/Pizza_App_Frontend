import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deletePizza, getAllPizzas } from "../../actions/pizzaAction";
import Loader from "../../Components/Loader";
import Error from "../../Components/Error";
import { FiEdit, FiDelete } from "react-icons/fi";
import { Link } from "react-router-dom";

function Pizzaslist() {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;
  console.log(pizzas);
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error>Error while fetching pizza datas{error}</Error>
      ) : (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Pizza Image</th>
                <th>Pizza Name</th>
                <th>Prices</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pizzas &&
                pizzas.map((pizza) => (
                  <tr>
                    <td>
                      <img
                        src={pizza.image}
                        alt="logo"
                        width="150px"
                        height="130px"
                      />
                    </td>
                    <td>{pizza.name}</td>
                    <td>
                      Small : {pizza.prices[0]["small"]}
                      <br />
                      Medium : {pizza.prices[0]["medium"]}
                      <br />
                      Large : {pizza.prices[0]["large"]}
                      <br />
                    </td>
                    <td>{pizza.category}</td>
                    <td>
                      <Link to={`/admin/editpizza/${pizza._id}`}>
                        <FiEdit style={{ cursor: "pointer" }} />
                      </Link>
                      &nbsp;
                      <FiDelete 
                      style = {{ color: "red", cursor: "pointer" }}
                      onClick = {()=> {dispatch(deletePizza(pizza._id))}}/>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
}

export default Pizzaslist;
