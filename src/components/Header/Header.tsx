// import Logo from "@assets/svg/logo.svg"

import styles from './Header.module.scss'


const Header = () => {


  return (


    <div className={styles.main} id='nav_con'>
      <div className={styles.container}>
        <div className={styles.logo + ' logo'}>
          hey bro
        </div>
        <div className={styles.links} id='links'>
          hey baby
        </div>
      </div>

    </div>

  );
}


export default Header


// function scrollAnimation() {
//   const showAnim = gsap.from('#nav_con', {
//     yPercent: -100,
//     paused: true,
//     duration: 0.2
//   }).progress(1);

//   ScrollTrigger.create({
//     start: "top -=10",
//     end: 99999,
//     onUpdate: (self) => {
//       self.direction === -1 ? showAnim.play() : showAnim.reverse()
//     }
//   });

// }