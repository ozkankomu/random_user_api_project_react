import React from "react";
import mailSvg from "./assets/mail.svg";
import manSvg from "./assets/man.svg";
import womanSvg from "./assets/woman.svg";
import manAgeSvg from "./assets/growing-up-man.svg";
import womanAgeSvg from "./assets/growing-up-woman.svg";
import mapSvg from "./assets/map.svg";
import phoneSvg from "./assets/phone.svg";
import padlockSvg from "./assets/padlock.svg";
import cwSvg from "./assets/cw.svg";
import Footer from "./components/footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from "./components/Table/Table.jsx";

function App() {
  const [person, setPerson] = useState([]);
  const [table, setTable] = useState([]);

  const [screen, setScreen] = useState();

  const response = async () => {
    const url = "https://randomuser.me/api/";
    const { data } = await axios(url);
    setPerson(data.results[0]);
    setScreen(
      `My name is ${data.results[0].name.first}   ${data.results[0].name.last}`
    );
  };

  useEffect(() => {
    response();
  }, []);

  const { name, email, picture, dob, location, phone, login } = person;

  const handleTable = () => {
    const filterEmail = table.some((item) => item.email === person.email);

    !filterEmail &&
      setTable([
        {
          firstName: person.name.first,
          lastName: person.name.last,
          email: person.email,
          phone: person.phone,
          age: person.dob.age,
          id: Math.ceil(Math.random) * 1000000,
        },
        ...table,
      ]);
  };

  return (
    <main>
      <div className="block bcg-orange">
        <img src={cwSvg} alt="cw" id="cw" />
      </div>
      <div className="block">
        <div className="container">
          <img src={picture?.large} alt="random user" className="user-img" />
          <p
            className="user-title"
            style={{ fontWeight: "bold", color: "darkred", fontSize: "1.5rem" }}
          >
            {screen}
          </p>
          <p className="user-value"></p>
          <div className="values-list">
            <button className="icon" data-label="name">
              <img
                src={womanSvg}
                alt="user"
                id="iconImg"
                onMouseOver={() =>
                  setScreen(`My name is :  ${name?.first} ${name?.last}`)
                }
              />
            </button>
            <button className="icon" data-label="email">
              <img
                src={mailSvg}
                alt="mail"
                id="iconImg"
                onMouseOver={() => setScreen(`My emal is :  ${email} `)}
              />
            </button>
            <button className="icon" data-label="age">
              <img
                src={womanAgeSvg}
                alt="age"
                id="iconImg"
                onMouseOver={() => setScreen(`My age is : ${dob?.age} `)}
              />
            </button>
            <button className="icon" data-label="street">
              <img
                src={mapSvg}
                alt="map"
                id="iconImg"
                onMouseOver={() =>
                  setScreen(
                    `My street is : ${location.street.number} ${location.street.name}  `
                  )
                }
              />
            </button>
            <button className="icon" data-label="phone">
              <img
                src={phoneSvg}
                alt="phone"
                id="iconImg"
                onMouseOver={() => setScreen(`My phone number is : ${phone} `)}
              />
            </button>
            <button className="icon" data-label="password">
              <img
                src={padlockSvg}
                alt="lock"
                id="iconImg"
                onMouseOver={() =>
                  setScreen(`My user name is : ${login.username} `)
                }
              />
            </button>
          </div>
          <div className="btn-group">
            <button className="btn" type="button" onClick={() => response()}>
              new user
            </button>
            <button className="btn" type="button" onClick={() => setTable([])}>
              Reset
            </button>
            <button className="btn" type="button" onClick={handleTable}>
              add user
            </button>
          </div>

          <Table table={table} />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </main>
  );
}

export default App;
