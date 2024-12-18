import { useState } from "react";
import Avatar from "./Avatar";
import TableComponent from "../components/Table";
import viewIcon from "../assets/view.png";
import { useTheme } from "../hooks/useTheme";
import { FaBeer } from "react-icons/fa";
import { useEffect } from "react";
import Plus from "../assets/plus.png";
import Plane from "../assets/plane.png";

function Hero() {
  const [showBalance, setShowBalance] = useState(true);
  const { theme } = useTheme();
  const themeColor = theme === "green" ? "#19918F" : "#007BFF";
  const user = JSON.parse(localStorage.getItem("login"));

  const userName = user ? user.fullName : "User";
  const userBalance = user ? user.balance : 0;
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getData() {
      const url = "http://localhost:3000/users";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        setUsers(json);
        console.log(json);
      } catch (error) {
        console.error(error.message);
      }
    }
    getData();
  }, []);

  return (
    <section className="w-full px-16 mt-12">
      <div className="flex items-center justify-center">
        <div className="mr-auto">
          <h1 className="text-black text-6xl font-bold">
            {`Good Morning, ${users[0]?.name}`}
          </h1>
          <p className="text-black text-2xl mt-3">
            Check all your incoming and outgoing transactions here
          </p>
        </div>
        <Avatar name={users[0]?.name} avatar={users[0]?.avatar} />
      </div>
      <div className="flex mt-[4.5rem] gap-x-12">
        <div
          className="bg-[#19918F] p-12 rounded-2xl w-1/5 text-white"
          style={{ backgroundColor: themeColor }}
        >
          <p>Account No.</p>
          <p className="text-white mt-3 font-bold">100899</p>
        </div>
        <div className="bg-white p-12 rounded-2xl w-full text-black">
          <p>Balance</p>
          <span className="flex items-center mt-3 gap-x-2">
            <p className="font-bold">
              {showBalance ? `Rp ${users[0]?.balance}` : "Rp ********"}
            </p>
            <img
              src={viewIcon}
              alt="view"
              className="w-4 h-4 object-cover cursor-pointer"
              onClick={() => setShowBalance((prev) => !prev)}
            />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-2 mt-[-5rem]">
        <div
          className="bg-[#19918F] p-2 rounded-lg w-8 h-8 flex items-center justify-center"
          style={{ backgroundColor: themeColor }}
        >
          <img src={Plus} alt="plus" className="w-4 h-4" />
        </div>
        <div
          className="bg-[#19918F] p-2 rounded-lg w-8 h-8 flex items-center justify-cente"
          style={{ backgroundColor: themeColor }}
        >
          <img src={Plane} alt="plane" className="w-4 h-4" />
        </div>
      </div>
      <h3></h3>
      <div className="mt-20">
        <TableComponent />
      </div>
    </section>
  );
}

export default Hero;
