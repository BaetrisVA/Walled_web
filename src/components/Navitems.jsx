import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { useTheme } from "../hooks/useTheme";
import { GiSpermWhale } from "react-icons/gi";

function NavItems({ menu }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Dashboard");
  const { toggleTheme, theme } = useTheme();
  const themeColor = theme === "green" ? "#19918F" : "#007BFF";
  useEffect(() => {
    if (activeTab === "Sign Out") {
      localStorage.removeItem("login");
      navigate("/");
    }
  });

  return (
    <ul className="flex gap-x-8 text-black items-center">
      {menu.map((item) => {
        return (
          <NavLink
            key={item.title}
            to={item.link}
            style={({ isActive }) => {
              return isActive ? { color: themeColor } : { color: "black" };
            }}
            onClick={() => setActiveTab(item.title)}
          >
            {item.title}
          </NavLink>
        );
      })}
      <div
        onClick={toggleTheme}
        className="bg-[#19918F] text-white rounded-full px-4 py-4>"
      >
        <GiSpermWhale />
      </div>
    </ul>
  );
}

export default NavItems;
