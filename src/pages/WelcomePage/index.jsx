import { useEffect, useState, useRef } from 'react';
import img1 from '../../assets/3.jpg';
import img2 from '../../assets/5.jpg';
import img3 from '../../assets/6.jpg';
import img4 from '../../assets/12.jpg';
import style from './style.module.css';

const WelcomePage = () => {
    const [photo, setPhoto] = useState(0);
    const images = useRef([
        { id: 1, url: img1 },
        { id: 2, url: img2 },
        { id: 3, url: img3 },
        { id: 4, url: img4 }
    ]).current;

    useEffect(() => {
        const interval = setInterval(() => {
            setPhoto((prev) => (prev >= images.length - 1 ? 0 : prev + 1));
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className='d-flex position-fixed vh-100 align-items-center flex-wrap'>
            <div className={`${style.bg}  vh-100 vw-100 top-0`}>
                {images.map((image, index) => (
                    <div
                    key={image.id}
                        className={`${style.image} ${index === photo ? style.active : ''}`}
                        style={{ backgroundImage: `url('${image.url}')` }}
                    />
                ))}
            </div>
        </section>
    );
};

export default WelcomePage;
