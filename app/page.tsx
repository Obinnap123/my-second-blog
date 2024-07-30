import Image from "@/public/logo.png";
import styles from "./page.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import style from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.reset}>
      <nav className={styles.navbar}>
      <div className={styles.navdiv}>
      <img src="/logo.png" alt="logo" className={styles.logo}/>
                <ul>
                 <li className={styles.listItem}><a href="#" className={styles.navLink}>Home</a></li>
                    <li className={styles.listItem}><a href="#" className={styles.navLink}>Packages</a></li>
                    <li className={styles.listItem}><a href="#" className={styles.navLink}>Testimonoial</a></li>
                    <li className={styles.listItem}><a href="#" className={styles.navLink}>Offers</a></li>
                    <button className={styles.signup}><a href="#" className={styles.items}>sign up</a></button>
                <button className={styles.login}><a href="#" className={styles.items2}>Login</a></button>
                </ul>
                  </div> 
                  </nav>
                  </div>
                    {/* <div className={styles.container}>
                  <div className={styles.container2}>
                  <h1>Earn over <span>$500</span> Monthly</h1>
                  <h2>Learn and Earn</h2>
                  <div className="my-span">Become Our Language Ambassador</div><br/>
                  <p>Our online education platform is fully fuctionaly learning place consiting of vital class,e-library, testing/assessment modus and others. it is an interactive medium where student can engage the teachers just from the comfort of their home.</p>
                  <button className="my-button">
                      <a href="#">Join Now </a>
                      <img src="images/arrow.png" alt="Arrow" />
                  </button>
                  </div>
                  <img src="images/girl.png" alt="girl"></img>
              </div> */}
              <footer className={styles.footer}>
                <div className={styles.row}>
                <img src="/logo.png" alt="logo" className={styles.logo2}/>
                </div>
                <div className={styles.col}>
                  <ul >
                    <li className={styles.listItem2}>
                      <a href="#" className={styles.links}>About Us</a>
                    </li>
                    <li className={styles.listItem2}>
                      <a href="#" className={styles.links}>Responsibilities</a>
                    </li>
                    <li className={styles.listItem2}>
                      <a href="#" className={styles.links}>Our Service</a>
                    </li>
                    <li className={styles.listItem2}>
                      <a href="#" className={styles.links}>Contact</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.col}>
                  <ul className={styles.listItem2}>
                    <li className={styles.listItem2}>
                      <a href="#" className={styles.links}>Disclaimer</a>
                    </li>
                    <li className={styles.listItem2}>
                      <a href="#" className={styles.links}>Testimonials</a>
                    </li>
                    <li className={styles.listItem2}>
                      <a href="#" className={styles.links}>Privacy policy</a>
                    </li>
                    <li className={styles.listItem2}>
                      <a href="#" className={styles.links}>Terms of Service</a>
                    </li>
                  </ul>
                  </div>
                    <div className={styles.socialIcons}>
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
      </div>
              </footer>
              </main>
                  );
                  }
                  
                  
                  
              
              
          
