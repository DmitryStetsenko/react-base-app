import React, { useContext } from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContex } from '../context';

const Login = () => {
    const {setIsAuth} = useContext(AuthContex);
    const login = e => {
        e.preventDefault();
        setIsAuth(true);
    }

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={ login }>
                <MyInput name="login" type="text" placeholder="enter login"/>
                <MyInput name="password" type="password" placeholder="enter password"/>
                <MyButton>login</MyButton>
            </form>
        </div>
    );
};

export default Login;