'use client'

import { Template, RenderIf, InputText, Button } from '@/components'
import { useState } from 'react';

export default function Login(){

    const [loading, setLoading] = useState<boolean>(false);
    const [newUserState, setNewUserState] = useState<boolean>(false);

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
                <form className='space-y-6'>

                    <RenderIf condition={newUserState}>
                        <div>
                            <label className='block text-sm font-medium leading-6 text-gray-600'>Name: </label>
                        </div>
                        <div className='mt-2'>
                            <InputText style='w-full' id='name' />
                        </div>
                    </RenderIf>

                    <div>
                        <label className='block text-sm font-medium leading-6 text-gray-600'>Email: </label>
                    </div>
                    <div className='mt-2'>
                        <InputText style='w-full' id='email' />
                    </div>

                    <div>
                        <label className='block text-sm font-medium leading-6 text-gray-600'>Password: </label>
                    </div>
                    <div className='mt-2'>
                        <InputText style='w-full' id='password' type='password' />
                    </div>

                    <RenderIf condition={newUserState}>
                        <div>
                            <label className='block text-sm font-medium leading-6 text-gray-600'>Repeat Password: </label>
                        </div>
                        <div className='mt-2'>
                            <InputText style='w-full' id='password' type='passwordMatch' />
                        </div>   
                    </RenderIf>

                    <div>
                        <RenderIf condition={newUserState}>
                            <Button type='submit' style='bg-indigo-600 hover:bg-indigo-900' label='Save' />
                            <Button type='button' style='mx-5 bg-white border border-cyan-600 hover:text-white hover:bg-cyan-600 text-gray-900 ' label='Back to login' onclick={event => setNewUserState(false)} />
                        </RenderIf>

                        <RenderIf condition={!newUserState}>
                            <Button type='submit' style='bg-indigo-600 hover:bg-indigo-900' label='Login' />
                            <Button type='button' style='mx-5 bg-white border border-cyan-600 hover:text-white hover:bg-cyan-600 text-gray-900 ' label='Sign up' onclick={event => setNewUserState(true)}/>
                        </RenderIf>
                    </div>

                </form>
            </div>

        </Template>
    )
}