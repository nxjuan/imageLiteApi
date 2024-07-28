import { InputText, Template, Button } from '@/components'
import Link from 'next/link'

export default function Formulario(){
    return (
        <Template>
            <section className='flex flex-col items-center justfy-center my-5'>
                <h5 className='mt-3 mb-10 text-3xl font-extrabold tracking-tight text-translate-900 text-gray-700'>Nova Imagem</h5>
                <form action="">
                    <div className='grid grid-cols-1'>
                        <label className='block text-sm font-medium leading-6 text-gray-600'>Name: *</label>
                        <InputText placeHolder="type the image's name"/>
                    </div>

                    <div className='mt-5 grid grid-cols-1'>
                        <label className='block text-sm font-medium leading-6 text-gray-600'>Tags: *</label>
                        <InputText placeHolder="type the tags comma separated"/>
                    </div>

                    <div className='mt-5 grid grid-cols-1'>
                        <label className='block text-sm font-medium leading-6 text-gray-600'>Image: *</label>
                        <div className='mt-2 flex justify-center rounded-lg  border border-dashed border-gray-900/25 px-6 py-10'>
                            <div className='text-center'>
                            <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                                </svg>
                                <div className='mt-4 flex text-sm leading-6 text-gray-600'>
                                    <label className='relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600'>
                                        <span className=''>
                                            Click to upload
                                        </span>
                                        <input type='file' className='sr-only'/>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-6 flex items-center justify-end gap-x-6'>
                        <Button style='bg-blue-600 hover:bg-blue-900' label='save' />
                        <Link href='/galeria'>
                            <Button style='bg-white border border-red-500 hover:bg-red-500 text-gray-600 hover:text-white' label='cancel' />
                        </Link>
                    </div>
                </form>
            </section>            
        </Template>
    )
    
}