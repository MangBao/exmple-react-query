import { useState } from "react";
import Albums from "../Albums/Albums";
import Comments from "../Comments";
import Photos from "../Photos/Photos";
import Posts from "../Posts/Posts";
import Todos from "../Todos/Todos";
import Users from "../Users/Users";

const Tabs = () => {
  const listTab = ["posts", "comments", "albums", "photos", "todos", "users"];
  const [tab, setTab] = useState(listTab[0]);

  return (
    <>
      <ul>
        {listTab.map((tab) => (
          <button key={tab} onClick={() => setTab(tab)}>
            {tab}
          </button>
        ))}
      </ul>
      <br />

      {tab === "posts" ? <Posts params={tab} /> : ""}
      {tab === "users" ? <Users params={tab} /> : ""}
      {tab === "comments" ? <Comments params={tab} /> : ""}
      {tab === "photos" ? <Photos params={tab} /> : ""}
      {tab === "albums" ? <Albums params={tab} /> : ""}
      {tab === "todos" ? <Todos params={tab} /> : ""}
    </>
  );
};

export default Tabs;
