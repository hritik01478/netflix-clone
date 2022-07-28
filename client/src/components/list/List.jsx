import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import { useRef, useState } from 'react'
import ListItem from '../listItem/ListItem'
import './list.scss'

const List = () => {

    const listref = useRef();
    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listref.current.getBoundingClientRect().x - 50;

        if (direction === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);

            listref.current.style.transform = `translateX(${230 + distance}px)`
        }
        if (direction === 'right' && slideNumber < 4) {
            setSlideNumber(slideNumber + 1);

            listref.current.style.transform = `translateX(${-230 + distance}px)`
        }

        // console.log(distance);
    }

    return (
        <div className='list'>
            <span className="listTitle">continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosNewOutlined className='sliderArrow left' onClick={() => { handleClick("left") }} style={{ display: !isMoved && "none" }} />
                <div className="container" ref={listref}>
                    <ListItem index={0} />
                    <ListItem index={1} />
                    <ListItem index={2} />
                    <ListItem index={3} />
                    <ListItem index={4} />
                    <ListItem index={5} />
                    <ListItem index={6} />
                    <ListItem index={7} />
                    <ListItem index={8} />
                    <ListItem index={9} />
                </div>
                <ArrowForwardIosOutlined className='sliderArrow right' onClick={() => { handleClick("right") }} />
            </div>

        </div>
    )
}

export default List