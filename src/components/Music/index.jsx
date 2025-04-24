import { useState, useEffect, useRef } from 'react';
import { BsPlayCircleFill, BsPauseCircleFill} from 'react-icons/bs';
import style from './index.module.css';
import song from '../../assets/bgmusic.mp3';

const Music = () => {
    const audioRef = useRef(new Audio(song));
    const [isPlaying, setIsPlaying] = useState(true);

    const toggleSong = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(prevIsPlaying => !prevIsPlaying);
    };

    useEffect(() => {
        const audio = audioRef.current;

        const handleEnded = () => {
            audio.currentTime = 0;
            audio.play();
        };

        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('ended', handleEnded);
        };
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [isPlaying]);

    return (
        <div className={ ` ${style.buttonHover} position-fixed text-center text-white end-0 me-3 mt-3 top-0` } onClick={toggleSong}>
            <button className={ ` ${style.buttonHover} d-flex align-items-center justify-items-center m-0 my-3 mx-1 position-relative bg-transparent rounded-circle border-0` } style={{ color: '#A78556 ' }}>
                {!isPlaying ? <BsPauseCircleFill className="bg-transparent rounded-circle fs-1" /> : <BsPlayCircleFill className="bg-transparent rounded-circle fs-1" />}
            </button>
        </div>
    );
};

export default Music;
