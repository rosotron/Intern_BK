import React, { useState } from "react";
import "./profiles.css";
import profile from "../../data/profile.json";

interface Props {
  profInUse: Function;
}
export default function Profiles({ profInUse }: Props) {
  const [edit, setEdit] = useState(false);

  return (
    <div className="profiles-box">
      <span className="whowatch">Who's watching?</span>
      <div className={"profiles-main"}>
        {profile.profiles.map((profiles, index) => (
          <div
            key={index}
            onClick={() => profInUse(profiles)}
            className={"profiles-content"}
          >
            <img src={profiles.avatar} className="avatars" />
            {edit && <span className="edit-icon">✏</span>}
            <br />

            <span className="name">{profiles.name}</span>
          </div>
        ))}
      </div>
      <button className="manage-profile" onClick={() => setEdit(!edit)}>
        MANAGE PROFILES
      </button>
    </div>
  );
}
