import React from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';

const Login = () => {
    return (
        <div>
            <h1>Login page</h1>
            <form>
                <MyInput name="login" type="text" placeholder="enter login"/>
                <MyInput name="password" type="password" placeholder="enter password"/>
                <MyButton>login</MyButton>
            </form>
        </div>
    );
};

export default Login;