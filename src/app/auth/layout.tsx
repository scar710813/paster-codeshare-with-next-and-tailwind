'use client'
import store from '../../store/store'
import { Provider } from "react-redux";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
