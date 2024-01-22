import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

import { State } from "../state/reducers";

interface INewBookProps {
  Name?: String;
  Price?: number;
  Category?: String;
}

const NewBook = (props: INewBookProps) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const updatedstate: boolean = useSelector(
    (state: State) => state.books.isModalVisible
  );
  const type = useSelector((state: State) => state.books.type);

  const { addBook, isModalVisible } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const length = useSelector((state: State) => state.books.length);

  const bookHandler = () => {
    if (type === "ADD") {
      name &&
        price &&
        category &&
        addBook({
          id: length + 1,
          Name: name,
          Price: price,
          Category: category,
        });
    }

    setCategory("");
    setName("");
    setPrice(0);
    isModalVisible(false);
  };

  return (
    <div
      className={updatedstate ? "modal show" : "modal hide"}
      style={{
        display: "block",
        position: "initial",
      }}
    >
      <Modal.Dialog
        style={{
          boxShadow: "0 4px 8px 0 rgba(0,0,0,1)",
          zIndex: 1,
          alignItems: "center",
        }}
      >
        <Modal.Header>
          <Modal.Title>{type} BOOK</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="Add Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            style={{
              marginBottom: "10px",
            }}
          />
          <br />
          <input
            type="number"
            value={price}
            placeholder="Add price"
            onChange={(e) => {
              setPrice(Number(e.target.value));
            }}
            style={{
              marginBottom: "10px",
            }}
          />
          <br />
          <input
            type="text"
            value={category}
            placeholder="Add Category"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            style={{
              marginBottom: "10px",
            }}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => bookHandler()}>{type} BOOK</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default NewBook;
