'use client'

import { Template, RenderIf, InputText, Button, FieldError, useNotification } from '@/components'
import { useState } from 'react';
import { LoginForm, formScheme, validationScheme } from './FormScheme'
import { useFormik } from 'formik';
import { useAuth, Credentials, AccessToken } from '@/resources'
import { useRouter } from 'next/navigation'

export default function Login(){

    const [loading, setLoading] = useState<boolean>(false);
    const [newUserState, setNewUserState] = useState<boolean>(false);

    const auth = useAuth();
    const notification = useNotification();
    const router = useRouter();

    const { values, handleChange, handleSubmit, errors } = useFormik<LoginForm>({
        initialValues: formScheme,
        validationSchema: validationScheme,
        onSubmit: onSubmit
    });

    async function onSubmit(values: LoginForm){
        console.log(values)
        if(!newUserState){
            const credentials: Credentials = { email: values.email, password: values.password }
            try{
                const accessToken: AccessToken = await auth.authenticate(credentials);       
                console.log(accessToken)       
                router.push("/galeria")
            }
            catch (error: any) {
                const message = error?.message;
                notification.notify(message, 'error'); 
                console.log(error)
            }
        }
    }

    return (
        <Template loading={loading}>

            <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-1 lg:px-8'>
                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    <h2 className='mt-10 text-center text-1x1 font-bold leading-9 tracking-tight text-gray-600'>
                        {newUserState ? 'Create account' : 'Login to your account'}
                    </h2>
                </div>
            </div>

            <div className='mt-5 sm:mx-auto sm:w-full sm:max-w-sm'>
                <form onSubmit={handleSubmit} className='space-y-6'>
                    {/* Formularios */}
                    <RenderIf condition={newUserState}>
                        <div>
                            <label className='block text-sm font-medium leading-6 text-gray-600' >Name: </label>
                        </div>
                        <div className='mt-2'>
                            <InputText style='w-full' id='name' value={values.name} onChange={handleChange}/> {/* name */}
                            <FieldError error={errors.name}/>
                        </div>
                    </RenderIf>
                    
                    <div>
                        <label className='block text-sm font-medium leading-6 text-gray-600'>Email: </label>
                    </div>
                    <div className='mt-2'>
                        <InputText style='w-full' id='email' value={values.email} onChange={handleChange}/>{/* email */}
                        <FieldError error={errors.email}/>
                    </div>

                    <div>
                        <label className='block text-sm font-medium leading-6 text-gray-600'>Password: </label>
                    </div>
                    <div className='mt-2'>
                        <InputText style='w-full' id='password' type='password' value={values.password} onChange={handleChange}/> {/* password */}
                        <FieldError error={errors.password}/>
                    </div>

                    <RenderIf condition={newUserState}>
                        <div>
                            <label className='block text-sm font-medium leading-6 text-gray-600'>Repeat Password: </label>
                        </div>
                        <div className='mt-2'>
                            <InputText style='w-full' id='passwordMatch' type='password' value={values.passwordMatch} onChange={handleChange}/> {/* passwordmatch */}
                            <FieldError error={errors.passwordMatch}/>
                        </div>   
                    </RenderIf>
                    {/* Formularios */}

                    {/* ----------------------------------------*/}
                    <div>
                        <RenderIf condition={newUserState}>
                            <Button type='submit' style='bg-indigo-600 hover:bg-indigo-900' label='Save' />
                            <Button type='button' 
                                    style='mx-5 bg-white border border-cyan-600 hover:text-white hover:bg-cyan-600 text-gray-900 ' 
                                    label='Back to login' 
                                    onclick={event => setNewUserState(false)} />
                        </RenderIf>


                        <RenderIf condition={!newUserState}>
                            <Button type='submit' style='bg-indigo-600 hover:bg-indigo-900' label='Login' />
                            <Button type='button' 
                                    style='mx-5 bg-white border border-cyan-600 hover:text-white hover:bg-cyan-600 text-gray-900 ' 
                                    label='Sign up' 
                                    onclick={event => setNewUserState(true)}/>
                        </RenderIf>
                    </div>
                    {/* ----------------------------------------*/}
                </form>
            </div>

        </Template>
    )
}