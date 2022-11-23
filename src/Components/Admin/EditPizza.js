import React, { useState, useEffect } from "react";
import Loader from "./../Loader";
import Error from "./../Error";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPizzaById, updatePizza } from "../../actions/pizzaAction";
import { useParams } from "react-router-dom";

const EditPizza = () => {

  const params = useParams()
  console.log(params);

  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState("");
  const [largePrice, setLargePrice] = useState("");
  const [mediumPrice, setMediumPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const getPizzaByState = useSelector((state) => state.getPizzaByIdReducer);
  const { error, pizza } = getPizzaByState;
  const updatePizzaState = useSelector((state) => state.updatePizzaByIdReducer);
  const { updateloading } = updatePizzaState;

  useEffect(() => {
    if (pizza) {
      if (pizza._id === params.pizzaId) {
        setName(pizza.name);
        setDescription(pizza.description);
        setCategory(pizza.category);
        setImage(pizza.image);
        setSmallPrice(pizza.prices[0]["small"]);
        setMediumPrice(pizza.prices[0]["medium"]);
        setLargePrice(pizza.prices[0]["large"]);
      } else {
        dispatch(getPizzaById(params.pizzaId));
        
      }
    } else {
      dispatch(getPizzaById(params.pizzaId));
    }
  }, [pizza, dispatch,params.pizzaId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPizza = {
      _id: params.pizzaId,
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice,
      },
    };
    dispatch(updatePizza(updatedPizza));
  };
  return (
    <div>
      {updateloading && <Loader />}
      {error && <Error error="add New Pizza error" />}
      <Form onSubmit={handleSubmit} className="bg-light p-4">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Pizza Name"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridSmallPrice">
            <Form.Label>Small Pizza Price</Form.Label>
            <Form.Control
              type="number"
              value={smallPrice}
              onChange={(e) => setSmallPrice(e.target.value)}
              placeholder="Small Pizza Price"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridMediumPrice">
            <Form.Label>Medium Pizza Price</Form.Label>

            <Form.Control
              type="number"
              value={mediumPrice}
              onChange={(e) => setMediumPrice(e.target.value)}
              placeholder="Medium Pizza Price"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLargePrice">
            <Form.Label>Large Pizza Price</Form.Label>

            <Form.Control
              type="number"
              value={largePrice}
              onChange={(e) => setLargePrice(e.target.value)}
              placeholder="Large Pizza Price"
            />
          </Form.Group>
        </Row>
        <Form.Group as={Col} controlId="formGridImage">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Add Image URL"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Description"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter Category"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update Pizza
        </Button>
      </Form>
    </div>
  );
};

export default EditPizza;
