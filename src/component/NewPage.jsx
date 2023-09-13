import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data/data";

export const NewPage = () => {
  const { id } = useParams();
  return (
    <div className="container">
    <div>
    {data.map((item) => item.id == id && <div className="card__content">
        <h1 className="card__title">Resources & Links for <span className="orange_gradient">{item.title}</span></h1>
        <h3 className="card__description" key={id}>{item.description}</h3>
      </div>)}
    </div>
    <div id="customers__wrapper">
    <table id="customers">
      <tr>
        <th>No</th>
        <th>Title</th>
        <th>Website</th>
      </tr>
      {data.map((item) => item.id == id && item.datas.map((a) => <tr className="card__item" key={a.id}>
          <td>{a.id}</td>
          <td><a target="_blank" rel="noreferrer" href={`${a.link}`}>{a.title}</a></td>
          <td><a target="_blank" rel="noreferrer" href={`${a.link}`}>Link to website</a></td>
        </tr>))}
    </table>
    </div>
    </div>
  );
};
