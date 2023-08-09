import React from "react";
import Image from "next/image";

type ImageProps = {
    imageURL: string;
    imageAlt: string;
};

const ImageComponent = ({ imageURL, imageAlt }: ImageProps) => {
    return (
        <div className="w-full">
            <Image
                src={imageURL}
                alt={imageAlt}
                width={500}
                height={500}
                loading="lazy"
                className="rounded-md shadow-lg hover:shadow-2xl"
            />
        </div>
    );
};

export default ImageComponent;
