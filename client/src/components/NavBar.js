import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Context } from "../index";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink
          style={{
            color: "#ffffff80",
            textDecoration: "none",
            fontWeight: "bold",
          }}
          to={SHOP_ROUTE}
        >
          КупиДевайс
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Button
              variant={"outline-light"}
              onClick={() => history.push(ADMIN_ROUTE)}
            >
              Админ панель
            </Button>
            <Button
              variant={"outline-light"}
              className={"ml-2"}
              onClick={() => history.push(LOGIN_ROUTE)}
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button
              variant={"outline-light"}
              onClick={() => user.setIsAuth(true)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
