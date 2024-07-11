import { Template, ImageCard } from '@/components/'


export default function Galery(){
    return (
        <Template>
            <h1>Galery</h1>
            <section className='grid grid-cols-4 gap-8'>
                <ImageCard nome='Arvore' tamanho='10MB' dataUpload='01/07/2024' src='https://onetreeplanted.org/cdn/shop/articles/nature_facts_1600x.jpg?v=1705008496'/>
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
            </section>               
        </Template>        
    )
}