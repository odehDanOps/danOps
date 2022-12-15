import Head from 'next/head'
import Image from 'next/image'

import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={`${styles.container} bg-gray-100`}>
      <Head>
        <title>{`Software Enginner | ${process.env.NEXT_PUBLIC_APP_NAME}`}</title>
        <link rel="shortcut icon" type="image/png" href="/images/logo/danops-main@2x.png"/>
      </Head>

      <main>
      <section className="relative mt-16 lg:mt-0">
        {/* <img
          className="absolute inset-0 object-[50%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
          src="/images/product/product-1.png"
          alt="Optimesoft E-commerce application mockup"
        /> */}

        <div className="hidden sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>
        <div className="relative max-w-screen-xl px-4 py-5 md:py-20 mx-auto lg:h-[25rem] lg:items-center lg:flex">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl text-slate font-extrabold sm:text-5xl">
              Hi, I&apos;m <span className="font-extrabold text-slate-light"> DanOps! </span>
            </h1>

            <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-md">
              A Product Designer and Software Engineer in Abuja, Nigeria. I specialize in Cloud Solutions, Web Application, Machine Learning, Data Solutions, Digital Marketing and several other convergent technologies.
            </p>

            <div className="flex flex-wrap gap-4 mt-8 text-center">
              <a className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-slate sm:w-auto active:bg-rose-500 hover:bg-slate-light focus:outline-none focus:ring" 
                href="#services">
                Specialization
              </a>

              <a 
                href="mailto: hello@danops.dev"
                className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow-lg text-slate-light sm:w-auto text-slate-dark active:text-slate-light focus:outline-none focus:ring">
                Let&apos;s Talk
              </a>
            </div>
          </div>

          <div className="max-w-xl text-center sm:text-right mt-5 lg:mt-20">
            {/* <div className="mb-8 text-center md:mb-0">
              <Image className="mx-auto object-cover -mb-24 rounded-full"
                height={176}
                width={176}
                sizes="30vw"
                priority
                src="/images/logo/danop-2x-white-bg@3x.png" 
                alt="Avatar Jacky"/>
              <div className="px-8 pt-28 pb-10 text-gray-400 bg-white rounded-lg shadow-lg">
                  <h3 className="mb-3 text-xl text-gray-800 font-title">
                      Daniel Odeh
                  </h3>
                  <p className="font-body">
                    Software Engineer at Luday
                  </p>
                  <p className="mb-4 text-sm font-body">
                      God. Food. Code. Family & Friends
                  </p>
                  <a className="text-blue-500 font-body hover:text-gray-800" href="#">
                    hello@danops.dev
                  </a>
              </div>
            </div> */}
            <div className="w-full">
              <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
                <div className="">
                  <Image className="w-32 mx-auto shadow-xl rounded-full"
                    height={176}
                    width={176}
                    sizes="30vw"
                    priority
                    src="/images/logo/danop-2x-white-bg@3x.png" 
                    alt="Daniel Odeh"/>
                </div>
                <div className="text-center mt-3">
                  <p className="text-xl sm:text-2xl font-semibold text-primary">
                    Daniel Odeh
                  </p>
                  <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
                    Software Engineer
                  </p>
                  <div className="flex align-center justify-center mt-2">
                    <a
                      className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
                      href=""
                    >
                      <FaGithub />
                      <span className="sr-only">Github</span>
                    </a>
                    <a
                      className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
                      href=""
                    >
                      <FaTwitter />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a
                      className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-[#F13231] hover:bg-[#F13231] rounded-full hover:text-white transition-colors duration-300"
                      href={"https://mail.google.com/mail/?view=cm&fs=1&to="}
                    >
                      <FaRegEnvelope />
                      <span className="sr-only">Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
    </div>
  )
}
