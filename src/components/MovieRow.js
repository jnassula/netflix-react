import React, { useState} from 'react';
import './MovieRow.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({ title, items }) => {
    const [scroolX, setScrollX] = useState(0)

    const handleLeftArrow = () => {
        let toLeft = scroolX + Math.round(window.innerWidth / 2);
        if(toLeft > 0) {
            toLeft = 0
        }
        setScrollX(toLeft)
    }

    const handleRighttArrow = () => {
        let toRight = scroolX - Math.round(window.innerWidth / 2);
        let listWidth = items.results.length * 250; //250 é o valor do width da imagem
        if((window.innerWidth - listWidth) > toRight) {
            toRight = (window.innerWidth - listWidth) - 60 //60 é o valor da soma dos paddings de cada lado
        }
        setScrollX(toRight)
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>
            <div className="movieRow--right" onClick={handleRighttArrow}>
                <NavigateNextIcon style={{fontSize: 50}} />
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scroolX,
                    width: items.results.length * 250
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>   
                    ))}
                </div>

            </div>
        </div>
    );
}