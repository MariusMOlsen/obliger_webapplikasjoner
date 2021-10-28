import '../styles/globals.css'
import Navigation from '../components/Navigation'


function MyApp({ Component, pageProps }) {

  return (
    <>
      <Navigation></Navigation>
      < main > <Component {...pageProps} /></main >
    </>)

}

export default MyApp
