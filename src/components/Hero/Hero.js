import styles from './Hero.module.scss'

const Hero = () => {
  return(
    <div className={styles.hero}>
      <h1 className={styles.title}>My First React Project</h1>
      <p className={styles.subtitle}>A simple to-do app, with lists, columns and card</p>
    </div>
  );
};

export default Hero;