import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'

const MyComponent = (props) => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(BIRDS({
          el: myRef.current,
          mouseControls: true,
            touchControls: true,
            gyroControls: true,
            minHeight: 740.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00

        }))
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }, [vantaEffect])
    return <div ref={myRef}>
      Foreground content goes here
    </div>
  }
export default MyComponent
