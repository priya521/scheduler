import React from "react";

import "components/Appointment/Style.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
const classNames = require('classnames');

export default function Appointment(props) {

return (
  <article className="appointment">
  <Header
    time={props.time}
  />
  { props.interview ? <Show
    student={props.interview["student"]}
    interviewer={props.interview.interviewer.name}
    /> : <Empty /> }
  </article>
);

};