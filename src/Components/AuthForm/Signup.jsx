import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";


const Signup = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        fullName: '',
        username: ' ',
    });
    const [showPassword, SetshowPassword] = useState(false);
    const {loading, error, Signup, } = useSignInWithEmailAndPassword()

    return (
        <>
            <Input
                placeholder="Email"
                fontSize={14} type="email"
                value={inputs.email}
                size={'sm'}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
            <Input
                placeholder="Username"
                fontSize={14} type="text"
                value={inputs.username}
                size={'sm'}
                onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />

            <Input
                placeholder="Full Name"
                fontSize={14} type="text"
                value={inputs.fullName}
                size={'sm'}
                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
            <InputGroup>
                <Input
                    placeholder="Password"
                    fontSize={14}
                    type={showPassword ? "text" : "password"}
                    value={inputs.password}
                    size={'sm'}
                    onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                />
                <InputRightElement h={'full'}>
                    <Button variant={"ghost"} size={'sm'} onClick={() => SetshowPassword(!showPassword)}>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>

                </InputRightElement>
            </InputGroup>

            <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14} onClick={() => Signup(inputs)}>
                Sign Up
            </Button>
        </>
    )
}

export default Signup
