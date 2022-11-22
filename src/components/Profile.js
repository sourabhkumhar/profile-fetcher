import React from "react";

function Profile(props) {
  const { image, name, username, company, email } = props;

  return (
    <div className="card">
      <img src={image} alt={username} style={{ width: "100%" }} />
      <h1>{name}</h1>
      <p className="title">CEO & Founder, {company.name}</p>
      <p className="email">{email}</p>

      <p>
        <button>Contact</button>
      </p>
    </div>
  );
}

export default Profile;
