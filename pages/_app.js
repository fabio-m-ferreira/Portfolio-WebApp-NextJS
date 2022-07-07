import '../styles/index.css'
import '../styles/header.css'
import '../styles/nav.css'
import '../styles/about.css'
import '../styles/experience.css'
import '../styles/portfolio.css'
import '../styles/contact.css'
import '../styles/footer.css'
import './projects/facepalm.css'

import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init();
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
