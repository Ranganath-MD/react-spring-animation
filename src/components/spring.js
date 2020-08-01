import React from 'react'
import { Spring } from 'react-spring/renderprops'

const SpringComponent = () => {
    return (
        <div className="spring">
            <div>
                <Spring
                    config={{ delay: 1000, duration: 1000 }}
                    from={{
                        opacity: 0,
                        color: "black",
                        transform: "translate(0px, -50px)"
                    }}
                    to={{
                        opacity: 1,
                        color: "skyblue",
                        transform: "translate(0px, 0px)"
                    }}>
                    {props => <div>
                        <h1 style={props}>hello</h1>
                        <p style={props}>Animate using React spring</p>
                        <p style={props}>Animate using React spring</p>
                    </div>
                        }
                </Spring>
            </div>
            <div>
                <Spring
                    config={{ duration: 10000 }}
                    from={{ number: 0 }}
                    to={{ number: 10, duration: 1000 }}>
                    {props => <h1>{props.number.toFixed()}</h1>}
                </Spring>
            </div>
        </div>
    )
}

export default SpringComponent
