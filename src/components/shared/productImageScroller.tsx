
import { IMAGE_URL } from '@/helpers/services/urls';
import React from 'react'

export default function ProductImageScroller({ images, height, rounded }: { images: Array<string>, height?: any, rounded?: string }) {


    const [activeImageIndex, setActiveImageIndex] = React.useState(0);

    React.useEffect(() => {
        if (images?.length > 1) {
            const interval = setInterval(() => {
                setActiveImageIndex((prev) => {
                    if (prev === images.length - 1) {
                        return 0;
                    }
                    return prev + 1;
                });
            }, 8000);
            return () => clearInterval(interval);
        }
    }, [])

    console.log(images[activeImageIndex]);



    return (
        <div style={{ height: height, borderRadius: rounded ?? "12px" }} className=' w-full flex justify-center py-2 bg-gray-300 ' >
            {images?.length > 1 && (
                <div className=' absolute z-10 h-[15px] w-full flex justify-center gap-2 ' >
                    {images.map((image, index) => (
                        <div key={image} style={{ width: activeImageIndex === index ? "10px" : "5px", height: activeImageIndex === index ? "10px" : "5px", borderRadius: activeImageIndex === index ? "10px" : "5px" }} className=' bg-white ' />
                    ))}
                </div>
            )} 
            {images?.length > 0 && (
                <img className=' h-full rounded-lg object-contain z-50 relative ' src={IMAGE_URL + images[activeImageIndex]} alt="bannerimage" />
            )}
            <div className='  absolute inset-0 opacity-10 bg-black rounded-[10px] ' />
        </div >
    )
}
