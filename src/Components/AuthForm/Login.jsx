import { Input, Button, Alert, AlertIcon } from "@chakra-ui/react"
import { useState } from "react"
import useLogin from "../../hooks/useLogin.js";
// import {useLogin} from "../../hooks/userLogin.js";

const Login = () => {

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });
  const { loading, error, login } = useLogin()

  const handleSubmit = (e) =>{
    e.preventDefault();
    login(inputs);
  }


  return (
    <>
    {/* If I add form to handle the submit button so that after filling the info if someone clicks on enter button, it
    automatically submits the details. But on doing that there is an error and that is the alignment (Height & width) of whole 
    Authpage get distorted */}
    
    {/* // <form onSubmit={handleSubmit}  style={{width: "100%"}} > */}
      <Input placeholder="Email" fontSize={14} type="email"
        value={inputs.email}
        size={'sm'}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />

      <Input placeholder="Password" fontSize={14} type="password"
        value={inputs.password}
        size={'sm'}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}

      <Button w={"full"} 
      colorScheme="blue" 
      size={"sm"} 
      fontSize={14}
      isLoading={loading}
      type="submit"
      onClick={() => login(inputs)}
      >
      Log in
      </Button>

     {/* </form> */}
    
     </> 
  )
}

export default Login;
