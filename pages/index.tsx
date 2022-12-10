import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`Software Enginner | ${process.env.NEXT_PUBLIC_APP_NAME}`}</title>
        <link rel="shortcut icon" type="image/png" href="/images/logo/danops-main@2x.png"/>
      </Head>

      <main>
        <div className="relative flex items-center overflow-hidden bg-white dark:bg-gray-800">
            <div className="container relative flex px-6 py-16 mx-auto">
                <div className="relative flex flex-col sm:w-2/3 lg:w-2/5">
                    <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white">
                    </span>
                    <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
                        Be on
                        <span className="text-5xl sm:text-7xl">
                            Time
                        </span>
                    </h1>
                    <p className="text-sm text-gray-700 sm:text-base dark:text-white">
                        Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                    </p>
                    <div className="flex mt-8">
                        <a href="#" className="px-4 py-2 mr-4 text-white uppercase bg-pink-500 border-2 border-transparent rounded-lg text-md hover:bg-pink-400">
                            Get started
                        </a>
                        <a href="#" className="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-md">
                            Read more
                        </a>
                    </div>
                </div>
                <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
                    <div className="mb-8 text-center md:mb-0">
                      <img className="w-48 h-48 mx-auto -mb-24 rounded-full" src="/images/logo/danops.png" alt="Avatar Jacky"/>
                      <div className="px-8 pt-32 pb-10 text-gray-400 bg-white rounded-lg shadow-lg">
                          <h3 className="mb-3 text-xl text-gray-800 font-title">
                              Jacky Pout
                          </h3>
                          <p className="font-body">
                              FullStack Engineer
                          </p>
                          <p className="mb-4 text-sm font-body">
                              He love caramel and he hate PHP
                          </p>
                          <a className="text-blue-500 font-body hover:text-gray-800" href="#">
                              Jacky@poute.com
                          </a>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
