import { Container } from "@mui/material";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Albums from "../Albums/Albums";
import Comments from "../Comments";
import Photos from "../Photos/Photos";
import Posts from "../Posts/Posts";
import Todos from "../Todos/Todos";
import Users from "../Users/Users";

const ListTabs = () => {
  const listTab = ["posts", "comments", "albums", "photos", "todos", "users"];
  const [tab, setTab] = useState(listTab[0]);
  // const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const handleChange = (e, tab) => {
    setTab(tab)
  }

  return (
    <>
      <Container>
        <Tabs
          value={tab}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          {
            listTab.map((tab) => (
              <Tab key={tab} value={tab} label={tab} />
            ))
          }
        </Tabs>
        <br />

        {tab === "posts" ? <Posts params={tab} /> : ""}
        {tab === "users" ? <Users params={tab} /> : ""}
        {tab === "comments" ? <Comments params={tab} /> : ""}
        {tab === "photos" ? <Photos params={tab} /> : ""}
        {tab === "albums" ? <Albums params={tab} /> : ""}
        {tab === "todos" ? <Todos params={tab} /> : ""}
      </Container>
    </>
  );
};

export default ListTabs;
