import { useEffect, useState } from "react";
import { getAllUsers } from "../api/userApi";

export const Home = () => {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    const allData = await getAllUsers();
    setUser(allData);
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <h1 className="text-3xl font-bold underline">List</h1>
      <ul>
        {user && user.map((data, index) => <li key={index}>{data.name}</li>)}
      </ul>
    </>
  );
};
