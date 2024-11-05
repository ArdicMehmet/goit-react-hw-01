import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";

function App() {
  const [user, setUser] = useState({
    name: "Mehmet Ardıç",
    tag: "ardicmehmet96",
    location: {
      city: "Eskişehir",
      country: "Turkey",
    },
    image: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
    stats: [
      { name: "Followers", content: "5603" },
      { name: "Views", content: "4827" },
      { name: "Likes", content: "1308" },
    ],
  });
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        image={user.image}
        stats={user.stats}
      />
    </>
  );
}

export default App;
