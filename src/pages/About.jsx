// import React, { useState } from 'react'
// import { useSprings, animated, to as interpolate } from '@react-spring/web'
// import { useDrag } from '@use-gesture/react'

// import styles from './styles.module.css'

function About() {
    return (
        <div>
           <div className="section_title">
               <h1>About Us</h1>
           </div>

           <div className="text_box">
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
               <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
           </div>
            
        </div>
    )
}

export default About



// const cards = [
//     'https://i.picsum.photos/id/908/500/700.jpg?hmac=A_0QvXSC8EIPKETD3qam_T--KpJvZ6lGvjNPGCX_MZs',
//     'https://picsum.photos/500/700https://i.picsum.photos/id/615/500/700.jpg?hmac=E2AdCDhJe1kSWFA_ulegBbxjZSiov-pIiw2ulnefnck',
//     'https://picsum.photos/500/700https://i.picsum.photos/id/65/500/700.jpg?hmac=AJLmxgC_B4obKKsWw8BREcaBzm2xqBvIJZTsshxs9Jo',
//     'https://i.picsum.photos/id/517/500/700.jpg?hmac=2I7l7zfnTBvEF0TGoqWhCuJ6WFMxiE8LZE-eOnRSVr0',
//     'https://i.picsum.photos/id/316/500/700.jpg?hmac=J_NR4L9tVgjzVj-h2gpNgzHA9Pzgb7a7F7Nv1o549C8',
//     'https://i.picsum.photos/id/175/500/700.jpg?hmac=gTpqD0-og5SFEb6TcBwebxxu4j1GfF2WfoP_33ctXw8',
//   ]
  
//   // These two are just helpers, they curate spring data, values that are later being interpolated into css
// const to = (i: number) => ({
//     x: 0,
//     y: i * -4,
//     scale: 1,
//     rot: -10 + Math.random() * 20,
//     delay: i * 100,
//   })
//   const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
//   // This is being used down there in the view, it interpolates rotation and scale into a css transform
//   const trans = (r: number, s: number) =>
//     `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`
  
//   function Deck() {
//     const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
//     const [props, api] = useSprings(cards.length, i => ({
//       ...to(i),
//       from: from(i),
//     })) // Create a bunch of springs using the helpers above
//     // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
//     const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
//       const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
//       const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
//       if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
//       api.start(i => {
//         if (index !== i) return // We're only interested in changing spring-data for the current spring
//         const isGone = gone.has(index)
//         console.log(isGone, dir, mx)
//         const x = isGone ? (500 * dir ): down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
//         const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
//         const scale = down ? 1.1 : 1 // Active cards lift up a bit
//         return {
//           x,
//           rot,
//           scale,
//           delay: undefined,
//           config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
//         }
//       })
//       if (!down && gone.size === cards.length)
//         setTimeout(() => {
//           gone.clear()
//           api.start(i => to(i))
//         }, 600)
//     })
//     // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
//     return (
//       <>
//         {props.map(({ x, y, rot, scale }, i) => (
//           <animated.div className={styles.deck} key={i} style={{ x, y }}>
//             {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
//             <animated.div
//               {...bind(i)}
//               style={{
//                 transform: interpolate([rot, scale], trans),
//                 backgroundImage: `url(${cards[i]})`,
//               }}
//             />
//           </animated.div>
//         ))}
//       </>
//     )
//   }

//   export default function About() {
//     return (
//       <div className={styles.container}>
//         <Deck />
//       </div>
//     )
//   }
  