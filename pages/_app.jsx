import Layout from '../components/DocumentLayout/DocumentLayout'
import '../public/static/fontello-icons/css/fontello.css'
import '../styles/styles.main.css'
import '../styles/styles.modifiers.css'
import '../styles/styles.components.css'
import '../styles/styles.events.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}