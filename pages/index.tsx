import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className={`${styles.container} bg-gray-100`}>
        <Head>
          <title>{`Software Enginner | ${process.env.NEXT_PUBLIC_APP_NAME}`}</title>
          <link rel="shortcut icon" type="image/png" href="/images/logo/danops-main@2x.png"/>
        </Head>

        <main>
          <div className="relative mt-12 lg:mt-0">
          <div className="hidden sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>
            <div className="mx-auto max-w-7xl py-5 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-2 lg:px-8">
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
              <div className="mt-8 lg:mt-24 flex lg:mt-0 lg:flex-shrink-0">
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
                        Software Engineer at <Link className='font-medium text-primary hover:text-secondary' href="https://luday.se"> Luday AB </Link>
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
          </div>
        </main>
      </div>
    </>
  )
}
