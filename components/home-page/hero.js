import Image from 'next/image'
import classes from './hero.module.css'

function Hero() {
    return (
        <>
            <section className={classes.hero}>
                <div className={classes.image}>
                    <Image src="/images/site/bike1.jpg" alt='An image of myself' width={300} height={300} />
                </div>
                <h1>Hi, I'm Nina</h1>
                <p>
                    I blog about web development - especially frondend frameworks like 
                    Angular or React.
                </p>
            </section>
        </>
    )
}

export default Hero