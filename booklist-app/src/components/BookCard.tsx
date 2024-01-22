import { Col, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export interface IBookCard {
  id: number;
  Name: String;
  Price: number;
  Category: String;
  onDelete: any;
  onUpdate: any;
}

const BookCard = (props: IBookCard) => {
  const { id, Name, Price, Category, onDelete, onUpdate } = props;

  return (
    <Col sm={3} style={{ padding: "10px" }}>
      <Card
        style={{ width: "18rem", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}
        key={id}
      >
        <Card.Body>
          <Card.Header>{Name}</Card.Header>
          <Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item>{Price}</ListGroup.Item>
              <ListGroup.Item>{Category}</ListGroup.Item>
            </ListGroup>
          </Card.Text>
          <Card.Footer>
            <Button className="btn btn-primary " value={id} onClick={onDelete}>
              Delete
            </Button>{" "}
            <Button className="btn btn-primary " value={id} onClick={onUpdate}>
              Update
            </Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BookCard;
