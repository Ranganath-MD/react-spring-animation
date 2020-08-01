import React, { useState } from 'react'
import { animated, useSpring, useTransition, useTrail} from "react-spring"

const Hooks = () => {
    const springprops = useSpring({
        to: [{ opacity: 1, color: '#ffaaee' }, { opacity: 1, color: 'maroon' }],
        from: { opacity: 0, color: 'red' }
    })

    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    // springs
    const items = ['Click Me', 'Toggle Me', 'Lorem', 'ipsum']

    const [toggle, setToggle] = useState(true)
    const trail = useTrail(items.length, {
        config: { mass: 3, tension: 1000, friction: 100 },
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 20,
        height: toggle ? 80 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })

    // for transition
    const [emoji, setEmoji] = useState(false)
    const transitions = useTransition(emoji, null, {
        config: { duration: 1500 },
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1, fontSize: 30, left: "50%" },
        leave: { opacity: 0 },
    })
    return (
        <div>
            <h2>Animate using spring hooks</h2>
            <div>
                <animated.h2 style={springprops}>Hover on the edges of the card</animated.h2>
                <animated.div
                    className="card"
                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{ transform: props.xys.interpolate(trans) }}
                />
            </div>
            <div className="trails-main" onClick={() => setToggle(state => !state)}>
                <div>
                    {trail.map(({ x, height, ...rest }, index) => (
                        <animated.div
                            key={items[index]}
                            className="trails-text"
                            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                            <animated.div style={{ height }}>{items[index]}</animated.div>
                        </animated.div>
                    ))}
                </div>
            </div>
            <div>
                {
                    transitions.map(({ item, key, props }) =>
                        item
                            ? <animated.span role="img" aria-label="emoji" style={props}>😄</animated.span>
                            : <animated.span role="img" aria-label="emoji" style={props}>🤪</animated.span>
                    )
                }
                <button onClick={() => setEmoji(!emoji)}>toggle emoji</button>
            </div>
        </div>
    )
}

export default Hooks
