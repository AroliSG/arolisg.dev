import Image from 'next/image';

const Carousel = (props: {images_parent: string, images: string,images_2: string, device: string }) => {
    const {
        images_parent,
        images,
        images_2,
        device
    } = props;

    return (
        <div className={`${images_parent} ${device}`}>
            <Image
                alt       = "frame"
                src       = {require('../../assets/img/commands_framed.png')}
                className = {images}
            />

            <Image
                alt       = "bots"
                src       = {require('../../assets/img/bots_framed.png')}
                className = {`${images} ${images_2}`}
            />
        </div>
    )
}

export default Carousel;