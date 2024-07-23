'use client'

import { Template, ImageCard } from '@/components/'
import { use, useState } from 'react'
import { useImageService } from '@/resources/image/image.service'
import { Image } from '@/resources/image/image.resource';


export default function GaleriaPage(){

    const useService = useImageService();
    const [images, setImages] = useState<Image[]>([]);

    async function searchImages(){
        const result = await useService.buscar()
        setImages(result);
        console.table(images)
    }

    function renderImageCard(image: Image){
        return (
            <ImageCard nome={image.name} src={image.url} tamanho={image.size} dataUpload={image.uploadDate} />
        )
    }

    function renderImageCards(){
        return images.map( renderImageCard )
    }

    return (
        <Template>
            <section className='flex flex-col items-center justfy-center my-5'>
                <div className='flex space-x-4'>
                    <input type="text" className='border bg-gray-200 px-3 py-2 rounded-md text-black' placeholder='search'/>

                    <select name="" id="" className='border bg-gray-200 px-4 py-2 rounded-md text-black'>
                        <option>All Formats</option>
                    </select>

                    <button className='bg-blue-500 text-white px-4 py-2 rounded-lg' onClick={searchImages}>Search</button>
                    <button className='bg-blue-700 text-white px-4 py-2 rounded-lg'>Add New</button>
                </div>
            </section>

            <button onClick={searchImages} className='bg-gray-500'>Clique para alterar o botão</button>            
            <section className='grid grid-cols-4 gap-8'>
                {
                    renderImageCards()
                }
            </section>               
        </Template>        
    )
}