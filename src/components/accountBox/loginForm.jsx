import React, { useContext, useState } from "react";
import { Marginer } from "../marginer";
import Axios from "axios";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { AccountContext } from "./context";
import { useHistory, Redirect } from "react-router-dom";

export const DataContext = React.createContext({})

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const history = useHistory();
  const [apiResponse, setApiResponse] = useState({});

  const fetchUsers = async () => {
    setLoading(true);
    const response = await Axios.get("https://my-json-server.typicode.com/proactivehealth/work-test-sample/users").catch(
      (err) => {
        console.log("Error: ", err);
      }
    );

    if (response) {
      setUsers(response.data);
      setApiResponse(response.data);
    }

    setLoading(false);
  };

  function checkUser() {
    fetchUsers();
    console.log(user);
    const exists = users.some(v => (v.login === user ));
    console.log(exists);
    console.log(users);
    if (!exists) {
      alert("Felaktigt användarnamn!");
      history.push({ pathname:'/customer/access/signup', user:{ user } });
    }
    else
    {
      console.log(user);
      history.push({ pathname:'/customer/mypages', user:{ user } });
      }
  }
  
  return (
    <DataContext.Provider value={apiResponse}>
    <BoxContainer>
      <FormContainer>
        <Input placeholder="Användarnamn" value={user} onChange={(e) => setUser(e.target.value)}/>
      </FormContainer>
      <MutedLink href="#">Forgot Password?</MutedLink>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton type="submit" onClick={checkUser}>Login</SubmitButton>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Saknar du konto?
        <BoldLink href="#" onClick={switchToSignup}>
          Registrera dig
        </BoldLink>
      </MutedLink>
      </BoxContainer>
      </DataContext.Provider>
  );
}
