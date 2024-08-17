import React from 'react'
import Button from './Button'
import { FaMessage } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import Form from './Form';
import  HS from "../assets/HS.svg"

function HeroSection() {
    return (
        <>
            <div className='flex mt-24 ml-40 flex-col'>
          
                <div className='flex flex-col'>
                    <h1 className='text-5xl font-bold'>Contact Us</h1>
                    <div className='flex flex-wrap mr-40 w-4/6'>
                    <p className='font-semibold text-gray-500 mt-6' >LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, 
                    OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
                    </div>
                </div>

                <div className='flex mt-8 gap-16'>

                <div className='mt-12'>
                <div className='flex gap-6'>
                    <Button className="w-full justify-center " style={{ width: '12rem' }} text="Via Support Chat" icon={<FaMessage/>}/>
                    <Button className="w-full justify-center " style={{ width: '12rem' }} text="Via Call" icon={<IoCall/>}  />

                </div>

                <Button className="w-full justify-center bg-white text-black border-black border-2" style={{width:"24rem"}} text="Via Email Form" icon={<MdOutlineEmail />}/>
                <Form/>


                </div>

                <img src={HS} alt="HS logo" />

                </div>
                

            </div>
        </>

    )
}

export default HeroSection