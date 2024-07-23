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

    return (
        <Template>
            <h1>Galery</h1>
            <button onClick={searchImage} className='bg-gray-500'>Clique para alterar o botão</button>
            
            <section className='grid grid-cols-4 gap-8'>
                <ImageCard nome="{nomeImage}" tamanho='10MB' dataUpload='01/07/2024' src=""/>

            </section>               
        </Template>        
    )
}