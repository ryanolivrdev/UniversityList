import { useEffect, useState } from "react";
import { api } from "../services/api";
import { HomeContainer } from "./styles";

interface ApiResponse {

}

export function Home() {
  const [apiData, setApiData] = useState([]);
  const [userInput, setUserInputa] = useState();

  useEffect(() => {
    api.get("/").then(({ data }) => setApiData(data.getPersons))
  }, [userInput])

  console.log(apiData)

  return (
    <HomeContainer>
      <h1 style={{ marginBottom: "20px"}}>Usuarios</h1>
      {!apiData && (
        <>
          <h1>Loading</h1>
        </>
      )}
      {apiData && apiData.map((data) => {
        return (
          <div style={{ marginBottom: "20px"}}>
            <h2>{data.name}</h2>
            <p>{data.universityName}</p>
          </div>
           
        )
      })}
    </HomeContainer>
  );
}
