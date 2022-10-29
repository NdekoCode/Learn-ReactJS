import { useState } from "react";
import Docs from "./components/Docs";
import Tutoriels from "./components/Tutoriels";
import Community from "./components/Community";
import Navbar from "./donkeyGeek/Navbar";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./donkeyGeek/NotFoundPage";
import Profile from "./donkeyGeek/Profile";
import MyContext from "./donkeyGeek/MyContext";

const AppRouter = () => {
  const [underConst, setUnderConst] = useState({
    Docs: false,
    Tutorials: true,
    Community: true,
  });
  const [user, setUser] = useState({
    name: "Ndekocode",
    age: 8,
  });
  return (
    <div className="text-center">
      <Navbar />

      <h1 className="text-2xl font-bold text-gray-700">Goku vs Vegeta</h1>
      <MyContext.Provider value={user}>
        <div className="flex flex-col">
          <Routes>
            <Route path="/" element={<Docs />} />
            {/* <Route path="/tutoriel" element={<Tutoriels />} /> */}
            <Route path="/tutoriel" element={<Tutoriels />} />
            <Route
              path="/community"
              element={<Community render={underConst.Community} />}
            />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </MyContext.Provider>
    </div>
  );
};

export default AppRouter;
