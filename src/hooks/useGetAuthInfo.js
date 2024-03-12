import { useEffect, useState } from "react";
import storage from "../storage";
import { getAuthToken } from "../auth";

export default function useGetAuthInfo() {
  const [token, setToken] = useState();

  async function getToken() {
    const token = await getAuthToken();
    setToken(token);
  }

  useEffect(() => {
    getToken();
  }, []);

  return {
    token,
  };
}
