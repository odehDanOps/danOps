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
                  Hey, I&apos;m <span className="font-extrabold text-slate-light"> DanOps. </span>
                </h1>

                <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-md">
                 I&apos;m a Software Engineer, I love to design & build resilient software. Nice to meet you
                </p>

                <div className="flex flex-wrap gap-4 mt-8 text-center">
                  <a className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-slate sm:w-auto active:bg-rose-500 hover:bg-slate-light focus:outline-none focus:ring" 
                    href="#services">
                    Got a project?
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
                        Software Engineer at <Link target="_blank" className="font-medium text-primary hover:text-secondary" href="https://luday.se"> Luday AB </Link>
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
          <div className="text-center mt-5 md:mt-7 mb-2 md:mb-7" id="services">
            <p className="text-slate text-2xl lg:text-4xl">
              Let&apos;s bring your <span className='font-bold'>idea</span> to fruition
            </p>
          </div>
          <div className="max-w-screen-xl px-5 md:px-10 lg:px-12 py-2 mx-auto mb-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-8">
            <div className="block shadow-lg shadow-gray-400 hover:shadow-gray-500 rounded-md">
              <Image className="object-cover w-full h-52"
                height={176}
                width={176}
                sizes="30vw"
                priority
                src="/images/logo/danop-2x-white-bg@3x.png" 
                alt="Daniel Odeh"
              />
              <div className="flex items-center justify-between mt-4 px-6 font-bold">
                <p className="text-lg text-slate">
                  Software Development
                </p>
              </div>
              <h5 className="mt-4 px-6 text-md text-black/90">
                We build powerful software applications with cutting edge solutions
                to meet your business challenges.
              </h5>

              {/* <div className="flex items-center justify-between mt-4 px-6 font-bold">
                <p className="text-md text-slate tracking-wide">
                  Learn more
                </p>
              </div> */}
              <div className="flex items-center px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">SaaS</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">consultancy</span>
              </div>
            </div>

            <div className="block shadow-lg shadow-gray-400 hover:shadow-gray-500 rounded-md">
              <Image className="object-cover w-full h-52"
                height={176}
                width={176}
                sizes="30vw"
                priority
                src="/images/logo/danop-2x-white-bg@3x.png" 
                alt="Daniel Odeh"
              />
              <div className="flex items-center justify-between mt-4 px-6 font-bold">
                <p className="text-lg text-slate">
                  Cloud Computing
                </p>
              </div>
              <h5 className="mt-4 px-6 text-md text-black/90">
                We help streamline your financial challenges by providing
                optimum, secure, scalable and higly-available application to 
                end-users.
              </h5>

              {/* <div className="flex items-center justify-between mt-4 px-6 font-bold">
                <p className="text-md text-slate tracking-wide">
                  Learn more
                </p>
              </div> */}
              <div className="flex items-center px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">DevOps</span>
              </div>
            </div>

            <div className="block shadow-lg shadow-gray-400 hover:shadow-gray-500 rounded-md">
              <Image className="object-cover w-full h-52"
                height={176}
                width={176}
                sizes="30vw"
                priority
                src="/images/logo/danop-2x-white-bg@3x.png" 
                alt="Daniel Odeh"
              />
              <div className="flex items-center justify-between mt-4 px-6 font-bold">
                <p className="text-lg dark:text-white text-slate">
                  Software Engineering
                </p>
              </div>
              <h5 className="mt-4 px-6 text-md text-black/90">
                We offer and build online educational resources for Educational
                Institution, bringing on board advanced solutions for education base.
              </h5>

              {/* <div className="flex items-center justify-between mt-4 px-6 font-bold">
                <p className="text-md text-slate tracking-wide">
                  Learn more
                </p>
              </div> */}
              <div className="flex items-center px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">systems design</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ML</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />  
        <section className="mt-2 md:mt-4 text-gray-800 text-center md:text-left">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="mb-2 md:mb-0">
              <h2 className="text-3xl text-slate font-bold mb-3">
                Trusted by innovative companies & Investors<br />
              </h2>
              <p className="text-gray-500">
              Since beginning my journey as a freelance designer over 11 years ago, 
              Ive done remote work for agencies, consulted for startups, and collaborated with 
              talented people to create digital products for both business and consumer use.
              </p>
            </div>
            <div className="mb-2 md:mb-0">
              <div className="grid grid-cols-2 gap-6">
                <div className="mb-6">
                  <Image
                    src="/images/companies/earlybean.png"
                    className="grayscale px-6"
                    height={200}
                    width={180}
                    alt="Earlybean Co"
                  />
                </div>

                <div className="mb-6">
                  <Image
                    src="/images/companies/olivepeak.png"
                    className="grayscale px-6"
                    height={140}
                    width={140}
                    alt="OlivePeak Ltd"
                  />
                </div>

                <div className="mb-6">
                  <Image
                    src="/images/companies/optimesoft.png"
                    className="grayscale px-6"
                    height={200}
                    width={180}
                    alt="Optimesoft"
                  />
                </div>

                <div className="mb-6">
                  <Image
                    src="/images/companies/enertel.png"
                    className="grayscale px-6"
                    height={200}
                    width={180}
                    alt="Enertel Ltd"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="mt-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        <div className="text-center mt-5 md:mt-7 mb-2 md:mb-7" id="services">
          <p className="text-slate text-2xl lg:text-4xl">
            Portfolio
          </p>
        </div>
        <div className="max-w-screen-xl px-5 md:px-10 lg:px-12 py-2 mx-auto mb-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-8">
            <div className="block shadow-lg shadow-gray-400 rounded-md">
              <Image className="object-cover w-full h-52"
                height={176}
                width={176}
                sizes="30vw"
                priority
                src="/images/logo/danop-2x-white-bg@3x.png" 
                alt="Daniel Odeh"
              />
              <div className="max-w-sm px-4 py-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-xs text-blue-800 bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">finance</span>
                </div>
                <div>
                  <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">Earlybean</h1>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi similique exercitationem optio libero vitae accusamus cupiditate laborum eos.</p>
                </div>
                <div>
                  <div className="flex items-center justify-center mt-4">
                    <a className="mr-2 text-gray-800 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"  role="link" aria-label="share link">
                      <svg aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z" />
                        <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z" />
                        <path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z" />
                      </svg>
                    </a>
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
