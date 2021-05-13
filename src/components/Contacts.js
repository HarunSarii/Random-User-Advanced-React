import React from 'react';

export default function Contacts(props) {
  return (
    <div className="contacts">
      <table>
        <colgroup>
          <col span="1" style={{ width: '25%' }}></col>
          <col span="1" style={{ width: '25%' }}></col>
          <col span="1" style={{ width: '25%' }}></col>
          <col span="1" style={{ width: '25%' }}></col>
        </colgroup>
        <tbody>
          <tr className="tableHeader">
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Age</th>
          </tr>
          {props.info.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
