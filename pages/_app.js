import GlobalStyle from "../styles";
import Layout from "@/components/Layout/Layout";
import { useEffect } from "react";
import { useArtPiecesStore } from "@/stores/artPiecesStore";

export default function App({ Component, pageProps }) {
  const fetchArtPieces = useArtPiecesStore((state) => state.fetchArtPieces);
  useEffect(() => {
      void fetchArtPieces();
  }, []);
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
