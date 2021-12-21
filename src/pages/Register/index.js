import React from 'react';
import { RegisterBg } from '../../assets/images';
import './register.scss';
// Component
import { Button, Gap, Input, Link } from '../../componentes';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

    const goLoginPage = () => {
        navigate('/Login')
    }

    return (
        <div className='main-page'>
            <div className='left'>
                <img src={RegisterBg} className='bg-image' alt='bg-register' />
            </div>
            <div className='right'>
                <p className='title'>Register</p>
{/* Full Name */}
                <Input label="Full Name" placeholder="Full Name"/>
                <Gap height={18}/>

{/* Email */}
                <Input label="Email" placeholder="Email"/>
                <Gap height={18}/>

{/* Password */}
                <Input label="Password" placeholder="Password"/>
                <Gap height={80}/>

{/* Button Submit */}
                <Button title="Register"/>

{/* Link */}
                <Gap height={80}/>
                <Link title="Login" onClick={goLoginPage}/>
            </div>
        </div>
    )
}
