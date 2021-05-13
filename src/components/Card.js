import React, { useState, useEffect } from 'react';
import nameIcon from '../assets/man.svg';
import emailIcon from '../assets/mail.svg';
import ageIcon from '../assets/growing-up-woman.svg';
import locationIcon from '../assets/map.svg';
import phoneIcon from '../assets/phone.svg';
import passwordIcon from '../assets/padlock.svg';

export default function Card() {
  const [search, setSearch] = useState();
  const [data, setData] = useState();
  const [currentData, setCurrentData] = useState({
    picture: nameIcon,
    title: 'name',
    info: 'Betul Kaplan',
  });
  const [hover, setHover] = useState('name');

  // useEffect(() => {
  //   console.log('hello');
  // }, []);

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((res) => {
        setData({
          picture: res.results[0].picture.medium,
          name: res.results[0].name.first + ' ' + res.results[0].name.last,
          age: res.results[0].dob.age,
          email: res.results[0].email,
          location: res.results[0].location.city,
          phone: res.results[0].cell,
          password: res.results[0].login.password,
        });
      });
  }, [search]);

  useEffect(() => {
    if (data !== undefined) {
      setCurrentData({
        picture: data.picture,
        title: 'name',
        info: data.name,
      });
    }
  }, [data]);
  useEffect(() => {
    if (data !== undefined) {
      setCurrentData({
        picture: data.picture,
        title: hover,
        info: data[hover],
      });
    }
  }, [hover]);

  return (
    <div className="card">
      {/* {data !== undefined ? (
        <h3>
          name: {data.name}, age:{data.age}, email:{data.email}, location:
          {data.location}, phone:{data.phone}
        </h3>
      ) : null} */}
      <div className="pp">
        <img src={currentData.picture} alt="Loading" />
      </div>

      <div className="info">
        <p>My {currentData.title} is</p>
        <h2>{currentData.info}</h2>
      </div>
      <div className="options">
        <button className="option-icon" onMouseEnter={() => setHover('name')}>
          <img src={nameIcon} alt="" />
        </button>
        <button className="option-icon" onMouseEnter={() => setHover('email')}>
          <img src={emailIcon} alt="" />
        </button>
        <button className="option-icon" onMouseEnter={() => setHover('age')}>
          <img src={ageIcon} alt="" />
        </button>
        <button
          className="option-icon"
          onMouseEnter={() => setHover('location')}
        >
          <img src={locationIcon} alt="" />
        </button>
        <button className="option-icon" onMouseEnter={() => setHover('phone')}>
          <img src={phoneIcon} alt="" />
        </button>
        <button
          className="option-icon"
          onMouseEnter={() => setHover('password')}
        >
          <img src={passwordIcon} alt="" />
        </button>
      </div>
      <div className="actions">
        <button onClick={() => setSearch(!search)}>new user</button>
        <button>add user</button>
      </div>
    </div>
  );
}
