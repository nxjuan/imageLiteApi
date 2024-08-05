'use client'

import { Template, ImageCard, Button, InputText, useNotification } from '@/components/'
import { use, useState } from 'react'
import { useImageService } from '@/resources/image/image.service'
import { Image } from '@/resources/image/image.resource';
import Link from 'next/link';


export default function GaleriaPage(){

    const useService = useImageService();
    const notification = useNotification();
    const [images, setImages] = useState<Image[]>([]);
    const [query, setQuery] = useState<string>('')
    const [extension, setExtension] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    async function searchImages(){
        setLoading(true)
        const result = await useService.buscar(query, extension)
        setImages(result);
        setLoading(false)

        if(!result.length){
            notification.notify("No result found", 'warning')
        }
    }

    function renderImageCard(image: Image){
        return (
            <ImageCard 
                key={image.url} 
                nome={image.name} 
                src={image.url} 
                tamanho={image.size} 
                extension={image.extension}
                dataUpload={image.uploadDate} 
            />
        )
    }

    function renderImageCards(){
        return images.map( renderImageCard )
    }

    return (
        <Template loading={loading}>
            <section className='flex flex-col items-center justfy-center my-5'>
                <div className='flex space-x-4'>
                    <InputText onChange={event => setQuery(event.target.value)} placeholder='Digitar'/>

                    <select onChange={event => setExtension(event.target.value)} name="" id="" className='border bg-gray-200 px-4 py-2 rounded-md text-black'>
                        <option value="">All Formats</option>
                        <option value="JPEG">JPEG</option>
                        <option value="PNG">PNG</option>
                        <option value="GIF">Gif</option>
                    </select>

                    <Button style="bg-blue-500 hover:bg-blue-900" label='Search' onclick={searchImages}/>
                    
                    <Link href="/formulario">
                        <Button style='bg-blue-700 hover:bg-blue-900' label='Add New'/>
                    </Link>
                    
                </div>
            </section>
    
            <section className='grid grid-cols-4 gap-8'>
                {
                    renderImageCards()
                }
            </section>               
        </Template>        
    )
}