'use client'


interface ImageCardProps {
    nome?: string;
    tamanho?: string;
    dataUpload?: string;
    src?: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({nome, dataUpload, tamanho, src}: ImageCardProps) => {

    function download(){
        window.open(src, '_blank')
    }

    return (
        <div className="card relative bg-white rounded-md shadow-md transition-transform ease-in duration-300 transform hover:shadow-lg hover:-translate-y-2">
            <img className="h-56 w-full object-cover rounded-t-md" src={src} alt=""  />
            <div className="card-body p-4 text-black">
                <h5 className="text-x1 font-semibold mb-2 text-black"> {nome} </h5>
                <p className="text-grey-600">{tamanho}</p>
                <p className="text-grey-600">{dataUpload}</p>
            </div>
            <button onClick={download} className="jbg-gray-200 text-gray-600 rounded-md px-3 py-1">
                Download
            </button>
        </div>
    )
}