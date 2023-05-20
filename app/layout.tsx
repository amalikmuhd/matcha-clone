import './globals.css';
import localFont from '@next/font/local';

const myFont = localFont({
  src: [
    {
      path: './assets/fonts/Gilroy-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './assets/fonts/Gilroy-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './assets/fonts/Gilroy-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './assets/fonts/Gilroy-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './assets/fonts/Gilroy-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './assets/fonts/Gilroy-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './assets/fonts/Gilroy-UltraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './assets/fonts/Gilroy-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
  ],
});

export const metadata = {
  title: 'Matcha - Simple crypto trading for everyone',
  description: 'crypto trading for everyone',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
