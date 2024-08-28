'use client'


interface ImageCardProps {
    nome?: string;
    tamanho?: number;
    dataUpload?: string;
    src?: string;
    extension?: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({nome, dataUpload, tamanho, src, extension}: ImageCardProps) => {

    function download(){
        window.open(src, '_blank')
    }

    return (
        <div className="card relative bg-white rounded-md shadow-md transition-transform ease-in duration-300 transform hover:shadow-lg hover:-translate-y-2">
            <img className="h-56 w-full object-cover rounded-t-md" src={src} alt=""  />
            <div className="card-body p-4 text-black">
                <h5 className="text-x1 font-semibold mb-2 text-black"> {nome} </h5>
                <p className="text-grey-600">{dataUpload}</p>
                <p className="text-grey-600">{formatbytes(tamanho)}</p>
                <p className="text-grey-600">{extension}</p>
            </div>
            <button onClick={download} className="bg-blue-200 jbg-gray-200 text-gray-600 rounded-md px-3 py-1 hover:bg-blue-500 hover:text-white">
                Download
            </button>
        </div>
    )
}

function formatbytes(bytes: number = 0, decimais = 2){
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimais < 0 ? 0 : decimais
    const sizes = ['Bytes', 'KB', 'MB', 'GB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}