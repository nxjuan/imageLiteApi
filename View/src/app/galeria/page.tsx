'use client'

import { Template, ImageCard } from '@/components/'
import { use, useState } from 'react'
import { useImageService } from '@/resources/image/image.service'
import { Image } from '@/resources/image/image.resource';


export default function GaleriaPage(){

    const useService = useImageService();
    const [images, setImages] = useState<Image[]>([]);

    async function searchImage(){
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
            
            <button onClick={searchImage} className='bg-gray-500'>Clique para alterar o botão</button>            
            <section className='grid grid-cols-4 gap-8'>
                {
                    renderImageCards()
                }
            </section>               
        </Template>        
    )
}