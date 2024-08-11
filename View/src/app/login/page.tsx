'use client'

import { Template, RenderIf, InputText } from '@/components'
import { useState } from 'react';

export default function Login(){

    const [loading, setLoading] = useState<boolean>(false);
    const [newUserState, setNewUserState] = useState<boolean>(true);

    return (
        <Template loading={loading}>

            <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    <h2 className='mt-10 text-center text-1x1 font-bold leading-9 tracking-tight text-gray-600'>Login to you account</h2>
                </div>
            </div>

            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
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

                </form>
            </div>

        </Template>
    )
}