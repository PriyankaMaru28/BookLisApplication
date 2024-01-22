import { Button } from "react-bootstrap";
import "./App.css";
import Book from "./components/Book";
import NewBook from "./components/NewBook";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "./state/reducers";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";

function App() {
  const isModalStateUpdated = useSelector(
    (state: State) => state.books.isModalVisible
  );
  const [isaddBook, newbook] = useState(isModalStateUpdated);
  const dispatch = useDispatch();
  const { isModalVisible, updateType } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    console.log("state...", isModalStateUpdated);
    newbook(isModalStateUpdated);
  }, [isModalStateUpdated]);

  const addNewBook = () => {
    console.log("Add new book");
    isModalVisible(true);
    updateType("ADD");
  };

  const getUpdateId = (id: number) => {
    console.log("get updated id called...,", id);
  };

  return (
    <>
      {isaddBook ? (
        <NewBook />
      ) : (
        <>
          <div>
            <h1>Book Details !!!!</h1>
            <Button
              className="primary"
              onClick={() => {
                addNewBook();
              }}
            >
              Add Book
            </Button>
          </div>
          <Book updateId={(id) => getUpdateId(id)} />
        </>
      )}
    </>
  );
}

export default App;
