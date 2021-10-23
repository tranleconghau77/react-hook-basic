import React, { useState } from 'react';
import getRandomColor from '../RandomColor/randomColor';
import './ColorBox.scss';

ColorBox.propTypes = {

};


function ColorBox() {

    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'deeppink';
        return initColor
    })

    function handleBoxClick() {
        //get random color -> set color

        const newColor = getRandomColor()
        setColor(newColor);

        localStorage.setItem('box_color', newColor)
    }

    return (<div className="color-box"
        style={{ backgroundColor: color }}
        onClick={handleBoxClick}>

    </div>
    );
}

export default ColorBox;