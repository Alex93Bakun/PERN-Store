import React, { useContext, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { Context } from "../../index";

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Dropdown className={"m-2"}>
              <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.types.map((type) => (
                  <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className={"m-2"}>
              <Dropdown.Toggle>Выберите брэнд</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.brands.map((brand) => (
                  <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Row>
          <Row>
            <Form.Control
              className={"m-2"}
              placeholder={"Введите название устройства"}
            />
            <Form.Control
              className={"m-2"}
              placeholder={"Введите стоимость устройства"}
              type={"number"}
            />
            <Form.Control className={"m-2"} type={"file"} />
            <Button
              variant={"outline-dark"}
              onClick={addInfo}
              className={"m-2"}
            >
              Добавить новое свойство
            </Button>
            {info.map((i) => (
              <div className={"d-flex mt-2"} key={i.number}>
                <Col md={4} className={"p-0 ml-2"}>
                  <Form.Control placeholder={"Введите название свойства"} />
                </Col>
                <Col md={4} className={"p-0 ml-2"}>
                  <Form.Control placeholder={"Введите описание свойства"} />
                </Col>
                <Col md={3} className={"p-0 d-flex justify-content-end"}>
                  <Button
                    variant={"outline-danger"}
                    onClick={() => removeInfo(i.number)}
                  >
                    Удалить
                  </Button>
                </Col>
              </div>
            ))}
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>
          Закрыть
        </Button>
        <Button variant={"outline-success"} onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
