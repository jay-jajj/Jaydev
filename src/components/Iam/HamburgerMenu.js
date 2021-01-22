
import Link from 'next/link';

import styles from '../../../styles/Iam/HamburgerMenu.module.css'

function HamburgerMenu() {
    return (
            <nav  role="navigation">
                <div id={styles.menuToggle}>
                        {/* 체크박스를 숨겨서 누르게함 */}
                        <input type="checkbox" />
                        {/* 햄버거만드는용도 */}
                        <span></span>
                        <span></span>
                        <span></span>
                   
                        <ul id={styles.menu}>
                            <a href="#"><li>Home</li></a>
                            <a href="#"><li>About</li></a>
                            <a href="#"><li>Info</li></a>
                            <Link href="/devlog/home"><li>개발 Blog</li></Link>
                            <Link href="/"><li>개발자 Homepage</li></Link>
                        </ul>
                </div>
            </nav>
    )
}

export default HamburgerMenu
