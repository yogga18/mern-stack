import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginBg } from '../../assets/images';
// Component
import { Button, Gap, Input, Link } from '../../componentes';

export default function Login() {
    const navigate = useNavigate();

    const goRegisterPage = () => {
        navigate('/Register');
    }

    return (
<div className='main-page'>
            <div className='left'>
                <img src={LoginBg} className='bg-image' alt='bg-register' />
            </div>
            <div className='right'>
                <p className='title'>Login</p>
{/* Email */}
                <Input label="Email" placeholder="Email"/>
                <Gap height={18}/>

{/* Password */}
                <Input label="Password" placeholder="Password"/>
                <Gap height={80}/>

{/* Button Submit */}
                <Button title="Login"/>

{/* Link */}
                <Gap height={80}/>
                <Link onClick={goRegisterPage}  title="don't have an account yet? Sign in here"/>
            </div>
        </div>
    )
}
