import "../styles/globals.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState({ value: null });
  const [progress, setProgress] = useState(0);
  const [key, setKey] = useState(0);
  const router = useRouter();

  //Loaderbar function
  useEffect(() => {
    const handleRouteChange = () => {
      setProgress(40);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    const handleRouteChangeComplete = () => {
      setProgress(100);
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events]);

  useEffect(() => {
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    if (myuser) {
      setUser({ value: myuser.token, email: myuser.email });
    }
    setKey(Math.random());
  }, [router.query]);

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        waitingTime={300}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
