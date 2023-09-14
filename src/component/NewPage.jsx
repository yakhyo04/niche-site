import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data/data";

export const NewPage = () => {
  const { id } = useParams();
  return (
    <div className="container">
    <div>
    {/*eslint-disable-next-line eqeqeq*/}
    {data.map((item) => item.id == id && <div className="card__content">
        <h1 className="card__title">Best Websites for <span className="orange_gradient">{item.title}</span></h1>
        <h3 className="card__description" key={id}>{item.description}</h3>
      </div>)}
    </div>
    <div id="customers__wrapper">
    <table id="customers">
      <tr>
        <th>No</th>
        <th>Title</th>
        <th className="customers__mobile">Website</th>
      </tr>
      {/* eslint-disable-next-line eqeqeq */}
      {data.map((item) => item.id == id && item.datas.map((a) => <tr className="card__item" key={a.id}>
          <td>{a.id}</td>
          <td><a target="_blank" rel="noreferrer" href={`${a.link}`}>{a.title}</a></td>
          <td className="customers__mobile"><a target="_blank" rel="noreferrer" href={`${a.link}`}>{a.link}</a></td>
        </tr>))}
    </table>
    </div>
    </div>
  );
};
