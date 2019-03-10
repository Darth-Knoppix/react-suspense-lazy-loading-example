import React from "react";
import moment from "moment";
import "moment/locale/ru";
import "moment/locale/de";

export default () => {
  moment.locale("ru");
  const ru = moment().format("LLLL");

  moment.locale("de");
  const de = moment().format("LLLL");

  moment.locale("en");
  const en = moment().format("LLLL");

  const datetime = moment().format();

  return (
    <div>
      <h1>Using Moment</h1>
      <ul>
        <li>
          <strong>Russian:</strong> <time dateTime={datetime}>{ru}</time>
        </li>
        <li>
          <strong>German:</strong> <time dateTime={datetime}>{de}</time>
        </li>
        <li>
          <strong>English:</strong> <time dateTime={datetime}>{en}</time>
        </li>
      </ul>
    </div>
  );
};
