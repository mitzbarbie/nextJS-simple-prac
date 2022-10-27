import Layout from "../components/Layout";
import '../styles/globals.css';

export default function App({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps} />
            <style jsx global>{`
                a {
                color : purple;
                background-color : skyblue;
                }
            `}</style>
        </Layout>
    )
}