import React from "react";
import "react-toastify/dist/ReactToastify.css";

export type AppProps = {
  children: React.ReactNode;
};

export default function App({ children }: AppProps) {
  return <>{children}</>;
}
