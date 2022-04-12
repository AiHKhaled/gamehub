import { AuthContextProvider } from "../stores/authContext";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Navbar />
      <Component {...pageProps} key={router.route} />
    </AuthContextProvider>
  );
}

export default MyApp;
