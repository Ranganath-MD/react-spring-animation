import React from 'react'
import { Trail } from 'react-spring/renderprops'

const marvel = [
    {id: 1, movie: "Avengers"},
    {id: 2, movie: "Avengers - Age of Ultrons"},
    {id: 3, movie: "Avengers - Civil war"},
    {id: 4, movie: "Avengers - Infinity War"},
    {id: 5, movie: "Avengers - End Game"},
]

const TrailsComponent = () => {
    return (
        <div className="trails">
            <div>
                <Trail
                    items={marvel}
                    keys={item => item.id}
                    from={{
                        opacity: 0,
                        padding: 10,
                        width: 300,
                        backgroundColor: "white",
                        transform: 'translate3d(40px,0px,0)'
                    }}
                    to={{
                        opacity: 1,
                        backgroundColor: "yellow",
                        transform: 'translate3d(0,0px,0)'
                    }}
                >
                    {
                        item => props => <h3 style={props}>{item.movie}</h3>
                    }
                </Trail>
            </div>
        </div>
    )
}

export default TrailsComponent
