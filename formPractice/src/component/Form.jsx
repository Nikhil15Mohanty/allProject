import React from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup  from 'yup'
const Form = () => {

    const schema = yup.object().shape({
        fullName: yup.string().required(),
        email: yup.string().email().required("Emter correct email address"),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(10).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"),null],"Password doesn't match").required() 
    })

    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data)=>{
        console.log(data)
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='Your Name...' {...register('fullName')}/>
            <input type="email" placeholder='Your email...' {...register('email')}/>
            <input type="number" placeholder='Age...' {...register('age')}/>
            <input type="Password" placeholder='Password...' {...register('password')}/>
            <input type="Password" placeholder='Confirm Password...' {...register('confirmPassword')}/>
            <input type='submit'/>
        </form>
    </div>
  )
}

export default Form