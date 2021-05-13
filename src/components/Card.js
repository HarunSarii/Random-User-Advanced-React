import React, { useState, useEffect } from 'react';
import nameIcon from '../assets/man.svg';
import emailIcon from '../assets/mail.svg';
import ageIcon from '../assets/growing-up-woman.svg';
import locationIcon from '../assets/map.svg';
import phoneIcon from '../assets/phone.svg';
import passwordIcon from '../assets/padlock.svg';
import Contacts from './Contacts';

export default function Card() {
  const [search, setSearch] = useState();
  const [data, setData] = useState();
  const [currentData, setCurrentData] = useState({
    picture: nameIcon,
    title: 'name',
    info: 'Betul Kaplan',
  });
  const [hover, setHover] = useState('name');

  const [contacts, setContacts] = useState([]);

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
        <button
          className="option-icon"
          onMouseEnter={() => setHover('email')}
          onMouseLeave={() => setHover('name')}
        >
          <img src={emailIcon} alt="" />
        </button>
        <button
          className="option-icon"
          onMouseEnter={() => setHover('age')}
          onMouseLeave={() => setHover('name')}
        >
          <img src={ageIcon} alt="" />
        </button>
        <button
          className="option-icon"
          onMouseEnter={() => setHover('location')}
          onMouseLeave={() => setHover('name')}
        >
          <img src={locationIcon} alt="" />
        </button>
        <button
          className="option-icon"
          onMouseEnter={() => setHover('phone')}
          onMouseLeave={() => setHover('name')}
        >
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
        <button
          onClick={() => {
            let isRepeated = false;
            contacts.forEach((item) => {
              if (item.name === data.name) isRepeated = true;
            });
            console.log('Repeated:', isRepeated);
            if (!isRepeated) setContacts([data, ...contacts]);
            else alert('You cannot add existing contacts');
          }}
        >
          add user
        </button>
      </div>
      {contacts.length !== 0 ? <Contacts info={contacts} /> : null}
    </div>
  );
}
