import "./App.css";
import CardDetails from "./components/CardDetails";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/apiContext/UserContext";

function App() {
  const { theme } = useContext(ThemeContext);
  const { userData } = useContext(UserContext);
  return (
    <div
      className={`${
        theme === "light" ? "bg-light-bg" : "bg-d-dark"
      }  flex flex-col justify-center items-center p-[1rem] `}
    >
      <Header />
      <SearchBar />

      {userData?.id && <CardDetails />}
    </div>
  );
}

export default App;
