import React, { useState } from 'react'
import { Transition, animated} from 'react-spring/renderprops'

const pages = [
    style => (
        <animated.div style={{ ...style, background: '#b3FFBD' }}>A</animated.div>
    ),
    style => (
        <animated.div style={{ ...style, background: '#B2DBBF' }}>B</animated.div>
    ),
    style => (
        <animated.div style={{ ...style, background: '#12DBBF' }}>C</animated.div>
    ),
]

const TransitionComponent = () => {
    const [show, setShow] = useState(true)
    const [index, setIndex] = useState(0)

    const toggle = () => {
        if (index === 2) {
            setIndex(0)
        } else {
            setIndex(index+1)
        }
    }
    return (
        <div style={{ position: "relative"}}>
            <div>
                <h2>Transition</h2>
                <button onClick={() => setShow(!show)}>Toggle</button>
                <div>
                    <Transition
                        config={{ duration: 1000 }}
                        items={show}
                        from={{ opacity: 0 }}
                        enter={[{ opacity: 1 }]}
                        leave={{ opacity: 0 }}>
                        {show =>
                            show && (props => <animated.h3 style={props}>Hello😎</animated.h3>)
                        }
                    </Transition>
                </div>
            </div>
            <div >
                <div className="main" onClick={toggle}>
                    <Transition
                        items={index}
                        config={{ duration: 500 }}
                        from={{ opacity: 0, transform: 'translate3d(50%,0,0)' }}
                        enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
                        leave={{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}>
                        {index => pages[index]}
                    </Transition>
                </div>
            </div>

        </div>
    )
}

export default TransitionComponent
