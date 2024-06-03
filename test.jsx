import { Input, Button, Alert, AlertIcon } from "@chakra-ui/react";
import { useState } from "react";
import useLogin from "../../hooks/useLogin.js";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });
  const { loading, error, login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    login(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input 
        placeholder="Email" 
        fontSize={14} 
        type="email"
        value={inputs.email}
        size="sm"
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        mb={2} // Adding margin for better spacing
      />

      <Input 
        placeholder="Password" 
        fontSize={14} 
        type="password"
        value={inputs.password}
        size="sm"
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        mb={2} // Adding margin for better spacing
      />

      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4} mb={2}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}

      <Button 
        w="full" 
        colorScheme="blue" 
        size="sm" 
        fontSize={14}
        isLoading={loading}
        type="submit" // Change to submit type
      >
        Log in
      </Button>
    </form>
  );
};

export default Login;
