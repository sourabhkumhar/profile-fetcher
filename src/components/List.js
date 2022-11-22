import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Profile from "./Profile";

export default function List() {
    const [profiles, setProfiles] = useState([]);
  const fetchProfiles = async (n) => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${n === undefined ? 1 : n}`);
      let users = await res.json();
      setProfiles([...profiles, users]);
      console.log(n);
    //   console.log(n);
  };

  useEffect(() => {
    fetchProfiles();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    const fetchmore = () => {
        fetchProfiles(profiles.length + 1);
    };
    
  return (
    <InfiniteScroll
      dataLength={profiles.length} //This is important field to render the next data
      next={fetchmore}
      hasMore={profiles.length !== 10}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {profiles.map((user, index) => {
        return (
          <Profile
            key={index}
            image={`https://avatars.dicebear.com/api/avataaars/:${user.username}.svg`}
            name={user.name}
            username={user.username}
            company={user.company}
            email={user.email}
          />
        );
      })}
    </InfiniteScroll>
  );
}
