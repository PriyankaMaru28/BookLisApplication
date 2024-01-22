import BookCard, { IBookCard } from "./BookCard";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { State } from "../state/reducers";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { useDispatch } from "react-redux";

interface IBookProps {
  updateId: (id: number) => void;
}

const Book = (props: IBookProps) => {
  const { updateId } = props;
  const newBookList = useSelector((state: State) => state.books.book_list);
  const BookList = newBookList;
  const [booklist, updateBookList] = useState(BookList);
  const dispatch = useDispatch();
  const { deleteBook, isModalVisible, updateType } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const deleteHandler = (e: any) => {
    const Id = e.target.value;
    deleteBook(Id);
  };

  const updateHandler = (e: any) => {
    console.log("update handler in bOOk..", e.target);
    isModalVisible(true);
    updateType("UPDATE");

    updateId(e.target.value);
  };

  useEffect(() => {
    updateBookList(newBookList);
  }, [newBookList]);

  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {booklist.map((ele: IBookCard) => {
          return (
            <BookCard
              key={ele.id}
              id={ele.id}
              Name={ele.Name}
              Price={ele.Price}
              Category={ele.Category}
              onDelete={deleteHandler}
              onUpdate={updateHandler}
            />
          );
        })}
      </div>
    </>
  );
};

export default Book;
