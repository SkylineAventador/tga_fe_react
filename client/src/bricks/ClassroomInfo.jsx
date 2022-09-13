import React from "react";
import styles from "../styles/classroom.module.css";

function ClassroomInfo(props) {
  return (
  <h1>
    Classroom{" "}
    <span className={styles.classroomHeaderName}>
        {props.classroom.name}
    </span>
  </h1>
  );
}

export default ClassroomInfo;