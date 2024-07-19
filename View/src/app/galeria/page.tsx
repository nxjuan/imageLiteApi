'use client'

import { Template, ImageCard } from '@/components/'
import { useState } from 'react'


export default function GaleriaPage(){

    const image1 = 'https://media.istockphoto.com/id/1337232523/pt/foto/high-angle-view-of-a-lake-and-forest.jpg?s=612x612&w=0&k=20&c=8kzVAVb6PQke6clqNHSHXJjRzqp5v2X7XOrib9Uw9ZI='
    const image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSusv3bSOm7KQaTWQPftLUaqjSEZpK9yBBz_Q&s'
    const nome1 = 'imagem rio amazonas'
    const nome2 = 'imagem natureza'

    const [codigoImage, setCodigoImage] = useState<Number>(2);
    const [urlImage, setUrlImage] = useState<string>(image2);
    const [nomeImage, setNomeImage] = useState<string>(nome2);

    function mudarImagem(){
        if (codigoImage == 1){
            setCodigoImage(2)
            setUrlImage(image2)
            setNomeImage(nome2)
        }else{
            setCodigoImage(1)
            setUrlImage(image1)
            setNomeImage(nome1)
        }
    }

    return (
        <Template>
            <h1>Galery</h1>
            <button onClick={mudarImagem} className='bg-gray-500'>Clique para alterar o botão</button>
            <section className='grid grid-cols-4 gap-8'>
                <ImageCard nome={nomeImage} tamanho='10MB' dataUpload='01/07/2024' src={urlImage}/>
                <ImageCard nome={nomeImage} tamanho='10MB' dataUpload='01/07/2024' src={urlImage}/>
                <ImageCard nome={nomeImage} tamanho='10MB' dataUpload='01/07/2024' src={urlImage}/>

            </section>               
        </Template>        
    )
}