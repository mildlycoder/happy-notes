import React from 'react'
import Portfolio from './Categories'
import StarFilled from './components/StarFilled'
import Tick from './components/Tick'

const Home = () => {
  return (
    <>
<section className="bg-hero-pattern bg-cover bg-no-repeat min-h-screen flex flex-col items-center justify-center bg-fixed">
  <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
    <div class="flex flex-col w-full mb-12 text-center">
      <h1 class="max-w-3xl text-2xl font-bold leading-none tracking-tighter text-white md:text-5xl lg:text-6xl lg:max-w-7xl">
      Ignite your passion for guitar and embark on <br class="hidden lg:block"/>
      a melodious journey of musical excellence
      </h1>

      <p class="max-w-xl mx-auto mt-8 text-base leading-relaxed text-center text-white">No matter your age or prior musical experience, we believe that everyone can learn to play guitar by breaking down complex techniques into easy-to-understand concepts.</p>

      <a class="mx-auto mt-8 text-sm font-semibold text-blue-600 hover:text-neutral-600" title="read more"> Read more about the offer » </a>
    </div>
  </div>
</section>


<section class="bg-white py-20 lg:py-[120px]">
  <div class="container mx-auto">
    <div class="-mx-4 flex flex-wrap">
      <div class="w-full px-4">
        <div class="flex flex-wrap items-center justify-center">
          <a
            href="javascript:void(0)"
            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
          >
            <img
              src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
              alt="image"
              class="h-10 w-full"
            />
          </a>
          <a
            href="javascript:void(0)"
            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
          >
            <img
              src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/lineicons.svg"
              alt="image"
              class="h-10 w-full"
            />
          </a>
          <a
            href="javascript:void(0)"
            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
          >
            <img
              src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
              alt="image"
              class="h-10 w-full"
            />
          </a>
          <a
            href="javascript:void(0)"
            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
          >
            <img
              src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
              alt="image"
              class="h-10 w-full"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<section
  class="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]"
>
  <div class="container mx-auto">
    <div class="-mx-4 flex flex-wrap">
      <div class="w-full px-4">
        <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
          <span class="text-primary mb-2 block text-lg font-semibold">
            Pricing Table
          </span>
          <h2
            class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
          >
            Our Pricing Plan
          </h2>
          <p class="text-body-color text-base">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>
      </div>
    </div>
    <div class="-mx-4 flex flex-wrap justify-center p-5">
      <div class="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          class="border-primary shadow-pricing relative z-10 mb-10 overflow-hidden rounded-xl border border-opacity-20 bg-white py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12"
        >
          <span class="text-primary mb-4 block text-4xl text-blue-650 font-semibold">
          Beginner
          </span>
          <p
            class="text-body-color mb-8 border-b border-[#F2F2F2] pb-8 text-base"
          >
           Perfect for someone who has absolutely <span className='text-blue-650'>0 knowledge</span> about the guitar. 
          </p>
          <div class="mb-7">
            <p class="text-body-color mb-1 text-base leading-loose flex items-center gap-2">
            <Tick/>
            Introduction to guitar
            </p>
            <p class="text-body-color mb-1 text-base leading-loose flex items-center gap-2">
            <Tick/>
            Chords basics
            </p>
            <p class="text-body-color mb-1 text-base leading-loose flex items-center gap-2">
            <Tick/>
            Strumming, picking & plucking
            </p>
            <p class="text-body-color mb-1 text-base leading-loose flex items-center gap-2">
            <Tick/>Scales, Intervals & time signature
            </p>
            <p class="text-body-color mb-1 text-base leading-loose flex items-center gap-2">
            <Tick/>Scales, Intervals & time signature
            </p>
            <p class="text-body-color mb-1 text-base leading-loose flex items-center gap-2">
            <Tick/>Etudes & improvisation
            </p>
            <p class="text-body-color mb-1 text-base leading-loose flex items-center gap-2">
            <Tick/>Playing songs
            </p>
          </div>
          <a
            href="javascript:void(0)"
            class="text-primary hover:bg-primary hover:border-primary block w-full rounded-md border border-[#D4DEFF] bg-transparent p-4 text-center text-base font-semibold transition hover:text-white"
          >
            Choose Personal
          </a>
          <div>
            <span class="absolute right-0 top-7 z-[-1]">
              <svg
                width="77"
                height="172"
                viewBox="0 0 77 172"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="86"
                    y1="0"
                    x2="86"
                    y2="172"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3056D3" stop-opacity="0.09" />
                    <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div class="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          class="border-primary shadow-pricing relative z-10 mb-10 overflow-hidden rounded-xl border border-opacity-20 bg-white py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12"
        >
          <span class="text-primary mb-4 block text-4xl text-[#3056D3] font-semibold">
            Intermediate
          </span>
          <p
            class="text-body-color mb-8 border-b border-[#F2F2F2] pb-8 text-base"
          >
            Great for <span className='text-blue-650'>amateur players</span> who want to deep-dive on techniques & music theory 
          </p>
          <div class="mb-7">
            <p class="text-body-color mb-1 text-base leading-loose flex items-center gap-2">
            <Tick/>
            Introduction to guitar
            </p>
            <p class="text-body-color mb-1 text-base leading-loose flex items-center gap-2">
            <Tick/>
            Chords basics
            </p>
            <p class="text-body-color mb-1 text-base leading-loose flex items-center gap-2">
            <Tick/>
            Strumming, picking & plucking
            </p>
            <p class="text-body-color mb-1 text-base leading-loose flex items-center gap-2">
            <Tick/>Scales, Intervals & time signature
            </p>
            <p class="text-body-color mb-1 text-base leading-loose flex items-center gap-2">
            <Tick/>Scales, Intervals & time signature
            </p>
            <p class="text-body-color mb-1 text-base leading-loose flex items-center gap-2">
            <Tick/>Etudes & improvisation
            </p>
            <p class="text-body-color mb-1 text-base leading-loose flex items-center gap-2">
            <Tick/>Playing songs
            </p>
          </div>
          <a
            className="text-primary hover:bg-primary hover:border-primary block w-full rounded-md border border-[#D4DEFF] bg-transparent p-4 text-center text-base font-semibold transition hover:text-white"
          >
            Choose Personal
          </a>
          <div>
            <span class="absolute right-0 top-7 z-[-1]">
              <svg
                width="77"
                height="172"
                viewBox="0 0 77 172"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="86"
                    y1="0"
                    x2="86"
                    y2="172"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3056D3" stop-opacity="0.09" />
                    <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div class="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          class="border-primary shadow-pricing relative z-10 mb-10 overflow-hidden rounded-xl border border-opacity-20 bg-white py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12"
        >
          <span class="text-primary mb-4 block text-4xl text-[#3056D3] font-semibold">
            Professional
          </span>
          <p
            class="text-body-color mb-8 border-b border-[#F2F2F2] pb-8 text-base"
          >
            Best for hardcore guitar players who want to get <span className='text-blue-650'>one-on-one help</span> with their playing
          </p>
          <div class="mb-7">
            <p class="text-body-color mb-1 text-base leading-loose flex items-center gap-2">
            <Tick/>
            Introduction to guitar
            </p>
            <p class="text-body-color mb-1 text-base leading-loose flex items-center gap-2">
            <Tick/>
            Chords basics
            </p>
            <p class="text-body-color mb-1 text-base leading-loose flex items-center gap-2">
            <Tick/>
            Strumming, picking & plucking
            </p>
            <p class="text-body-color mb-1 text-base leading-loose flex items-center gap-2">
            <Tick/>Scales, Intervals & time signature
            </p>
            <p class="text-body-color mb-1 text-base leading-loose flex items-center gap-2">
            <Tick/>Scales, Intervals & time signature
            </p>
            <p class="text-body-color mb-1 text-base leading-loose flex items-center gap-2">
            <Tick/>Etudes & improvisation
            </p>
            <p class="text-body-color mb-1 text-base leading-loose flex items-center gap-2">
            <Tick/>Playing songs
            </p>
          </div>
          <a
            className="text-primary hover:bg-primary hover:border-primary block w-full rounded-md border border-[#D4DEFF] bg-transparent p-4 text-center text-base font-semibold transition hover:text-white"
          >
            Choose Personal
          </a>
          <div>
            <span class="absolute right-0 top-7 z-[-1]">
              <svg
                width="77"
                height="172"
                viewBox="0 0 77 172"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="86"
                    y1="0"
                    x2="86"
                    y2="172"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3056D3" stop-opacity="0.09" />
                    <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] flex flex-col justify-center sm:p-10">
  <Portfolio/>
</section>

<section class="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
  <div class="container mx-auto">
    <div class="-mx-4 flex flex-wrap">
      <div class="w-full px-4">
        <div class="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
          <span class="text-primary mb-2 block text-lg font-semibold text-blue-650">
            Our Services
          </span>
          <h2
            class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
          >
            Why Learn with us?
          </h2>
          <p class="text-gray-500">
          There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form. 
          </p>
        </div>
      </div>
    </div>
    <div class="-mx-4 flex flex-wrap">
      <div class="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
        >
          <div
            class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-[#3056D3]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
          </div>
          <h4 class="text-dark mb-3 text-xl font-semibold">
          Structured in-depth lessons
          </h4>
          <p class="text-gray-500">
          Learn step-by-step by building a solid foundation and gradually advance at a pace that suits you best. 
          </p>
        </div>
      </div>
      <div class="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
        >
          <div
            class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-[#3056D3]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
            </svg>
          </div>
          <h4 class="text-dark mb-3 text-xl font-semibold">
          Multiple course and exercise
          </h4>
          <p class="text-gray-500">
          Get a wealth of practice materials, including sheet music, play-along tracks, and interactive exercises.
          </p>
        </div>
      </div>
      <div class="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
        >
          <div
            class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-[#3056D3]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
          </svg>

          </div>
          <h4 class="text-dark mb-3 text-xl font-semibold">Expert Instruction</h4>
          <p class="text-gray-500">
            Benefit from the guidance of Abhishek who is both skilled musician and passionate educator.
          </p>
        </div>
      </div>
      <div class="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
        >
          <div
            class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-[#3056D3]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>

          </div>
          <h4 class="text-dark mb-3 text-xl font-semibold">Personalized Approach</h4>
          <p class="text-gray-500">
            Receive tailored instruction that caters to your current skill level and learning goals.
          </p>
        </div>
      </div>
      <div class="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
        >
          <div
            class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-[#3056D3]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </div>
          <h4 class="text-dark mb-3 text-xl font-semibold">
          Supportive Environment
          </h4>
          <p class="text-gray-500">
            Join a community of fellow beginners, where encouragement and support are paramount.
          </p>
        </div>
      </div>
      <div class="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
        >
          <div
            class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-[#3056D3]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
          </div>
          <h4 class="text-dark mb-3 text-xl font-semibold">Assess your progress</h4>
          <p class="text-gray-500">
          With custom made backing tracks you will actually be able to apply what you learn into your playing. 
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className='bg-gray-100 pt-24 pb-24'>
    <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div class="grid grid-cols-1 gap-24 lg:grid-cols-2">
            <div class="flex flex-col w-full max-w-lg text-left lg:mx-auto">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3oBSWsGKsBM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div class="flex flex-col w-full max-w-lg text-left lg:mx-auto">
              <div class="block mt-2 space-y-6">
                <h3 class="text-2xl font-semibold leading-none tracking-tighter text-neutral-600 flex"><StarFilled/><StarFilled/><StarFilled/><StarFilled/><StarFilled/></h3>
                <p class="text-lg  text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quas libero iure cumque aperiam dolores. Consectetur voluptas aperiam accusantium quaerat?</p>
                <div class="flex items-center mt-6">
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  </div>
                  <div class="ml-2">
                    <p class="text-lg font-medium text-[#3056D3] group-hover:text-neutral-600">Mike Oxmaul</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</section>


<section class="text-gray-900 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center max-w-6xl">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-600">One-on-one classes
        <br class="hidden lg:inline-block"/>
      </h1>
      <p class="mb-8 leading-relaxed text-gray-500">Are you an experienced guitar player looking to break through creative barriers? Our Personalized One-on-One guitar classes are designed specifically for individuals like you who need personalized attention and tailored feedback instruction to conquer your unique goals and challenges.
  </p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" control-id="ControlID-111">Explore</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="/one-on-one.jpg"/>
    </div>
  </div>
</section>

<section class="text-gray-600 body-font ">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center  max-w-6xl">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-600">Music consultations</h1>
      <p class="mb-8 leading-relaxed  text-gray-500">Confused what to do with your musical talents? Book a session with us and we will help you find your way. 
      .</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" control-id="ControlID-111">Explore</button>
      </div>
      
    </div>
  </div>
</section>

<section class="text-gray-900 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center max-w-6xl">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-600">Join our Discord
        <br class="hidden lg:inline-block"/>
      </h1>
      <p class="mb-8 leading-relaxed text-gray-500">Are you an experienced guitar player looking to break through creative barriers? Our Personalized One-on-One guitar classes are designed specifically for individuals like you who need personalized attention and tailored feedback instruction to conquer your unique goals and challenges.
  </p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" control-id="ControlID-111">Join</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    </div>
  </div>
</section>

<footer class="relative z-10 bg-white pt-20 pb-10 lg:pt-[120px] lg:pb-20">
  <div class="container mx-auto">
    <div class="-mx-4 flex flex-wrap">
      <div class="w-full px-4 sm:w-2/3 lg:w-3/12">
        <div class="mb-10 w-full">
          <a href="javascript:void(0)" class="mb-6 inline-block max-w-[160px]">
            <img
              src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
              alt="logo"
              class="max-w-full"
            />
          </a>
          <p class="text-body-color mb-7 text-base">
            Sed ut perspiciatis undmnis is iste natus error sit amet voluptatem
            totam rem aperiam.
          </p>
          <p class="text-dark flex items-center text-sm font-medium">
            <span class="text-primary mr-3">
              <svg
                width="19"
                height="21"
                viewBox="0 0 19 21"
                class="fill-current"
              >
                <path
                  d="M17.8076 11.8129C17.741 11.0475 17.1088 10.5151 16.3434 10.5151H2.16795C1.40261 10.5151 0.803643 11.0808 0.703816 11.8129L0.00502514 18.8008C-0.0282506 19.2001 0.104853 19.6327 0.371059 19.9322C0.637265 20.2317 1.03657 20.398 1.46916 20.398H17.0755C17.4748 20.398 17.8741 20.2317 18.1736 19.9322C18.4398 19.6327 18.5729 19.2334 18.5396 18.8008L17.8076 11.8129ZM17.2751 19.1668C17.2419 19.2001 17.1753 19.2667 17.0422 19.2667H1.46916C1.36933 19.2667 1.2695 19.2001 1.23623 19.1668C1.20295 19.1336 1.1364 19.067 1.16968 18.9339L1.86847 11.9127C1.86847 11.7463 2.00157 11.6465 2.16795 11.6465H16.3767C16.5431 11.6465 16.6429 11.7463 16.6762 11.9127L17.375 18.9339C17.3417 19.0337 17.3084 19.1336 17.2751 19.1668Z"
                />
                <path
                  d="M9.25704 13.1106C7.95928 13.1106 6.92773 14.1422 6.92773 15.4399C6.92773 16.7377 7.95928 17.7693 9.25704 17.7693C10.5548 17.7693 11.5863 16.7377 11.5863 15.4399C11.5863 14.1422 10.5548 13.1106 9.25704 13.1106ZM9.25704 16.6046C8.6248 16.6046 8.09239 16.0722 8.09239 15.4399C8.09239 14.8077 8.6248 14.2753 9.25704 14.2753C9.88928 14.2753 10.4217 14.8077 10.4217 15.4399C10.4217 16.0722 9.88928 16.6046 9.25704 16.6046Z"
                />
                <path
                  d="M0.802807 6.05619C0.869358 7.52032 2.16711 8.11928 2.83263 8.11928H5.16193C5.19521 8.11928 5.19521 8.11928 5.19521 8.11928C6.19348 8.05273 7.19175 7.38722 7.19175 6.05619V5.25757C8.28985 5.25757 10.8188 5.25757 11.9169 5.25757V6.05619C11.9169 7.38722 12.9152 8.05273 13.9135 8.11928H13.9467H16.2428C16.9083 8.11928 18.206 7.52032 18.2726 6.05619C18.2726 5.95636 18.2726 5.59033 18.2726 5.25757C18.2726 4.99136 18.2726 4.75843 18.2726 4.72516C18.2726 4.69188 18.2726 4.6586 18.2726 4.6586C18.1727 3.72688 17.84 2.96154 17.2743 2.36258L17.241 2.3293C16.4091 1.56396 15.4109 1.13138 14.6455 0.865169C12.416 0 9.62088 0 9.48778 0C7.52451 0.0332757 6.26003 0.199654 4.36331 0.865169C3.63125 1.0981 2.63297 1.53068 1.80108 2.29603L1.7678 2.3293C1.20212 2.92827 0.869359 3.69361 0.769531 4.62533C0.769531 4.6586 0.769531 4.69188 0.769531 4.69188C0.769531 4.75843 0.769531 4.95809 0.769531 5.22429C0.802807 5.52377 0.802807 5.92308 0.802807 6.05619ZM2.5997 3.12792C3.26521 2.52896 4.09711 2.16292 4.7959 1.89672C6.52624 1.26448 7.65761 1.13138 9.55433 1.0981C9.68743 1.0981 12.2829 1.13138 14.2795 1.89672C14.9783 2.16292 15.8102 2.49568 16.4757 3.12792C16.8417 3.52723 17.0746 4.05964 17.1412 4.69188C17.1412 4.79171 17.1412 4.95809 17.1412 5.22429C17.1412 5.55705 17.1412 5.92308 17.1412 6.02291C17.1079 6.78825 16.3759 6.95463 16.276 6.95463H13.98C13.6472 6.92135 13.1148 6.78825 13.1148 6.05619V4.69188C13.1148 4.42567 12.9485 4.22602 12.7155 4.12619C12.5159 4.05964 6.69262 4.05964 6.49296 4.12619C6.26003 4.19274 6.09365 4.42567 6.09365 4.69188V6.05619C6.09365 6.78825 5.56124 6.92135 5.22848 6.95463H2.93246C2.83263 6.95463 2.10056 6.78825 2.06729 6.02291C2.06729 5.92308 2.06729 5.55705 2.06729 5.22429C2.06729 4.95809 2.06729 4.82498 2.06729 4.72516C2.00073 4.05964 2.23366 3.52723 2.5997 3.12792Z"
                />
              </svg>
            </span>
            <span>+012 (345) 678 99</span>
          </p>
        </div>
      </div>
      <div class="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div class="mb-10 w-full">
          <h4 class="text-dark mb-9 text-lg font-semibold">Resources</h4>
          <ul>
            <li>
              <a
                href="javascript:void(0)"
                class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                SaaS Development
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                Our Products
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                User Flow
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                User Strategy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div class="mb-10 w-full">
          <h4 class="text-dark mb-9 text-lg font-semibold">Company</h4>
          <ul>
            <li>
              <a
                href="javascript:void(0)"
                class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                About TailGrids
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                Contact & Support
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                Success History
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                Setting & Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div class="mb-10 w-full">
          <h4 class="text-dark mb-9 text-lg font-semibold">Quick Links</h4>
          <ul>
            <li>
              <a
                href="javascript:void(0)"
                class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                Premium Support
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                Our Services
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                Know Our Team
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
              >
                Download App
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full px-4 sm:w-1/2 lg:w-3/12">
        <div class="mb-10 w-full">
          <h4 class="text-dark mb-9 text-lg font-semibold">Follow Us On</h4>
          <div class="mb-6 flex items-center">
            <a
              href="javascript:void(0)"
              class="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
            >
              <svg
                width="8"
                height="16"
                viewBox="0 0 8 16"
                class="fill-current"
              >
                <path
                  d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z"
                />
              </svg>
            </a>
            <a
              href="javascript:void(0)"
              class="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
            >
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                class="fill-current"
              >
                <path
                  d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z"
                />
              </svg>
            </a>
            <a
              href="javascript:void(0)"
              class="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
            >
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                class="fill-current"
              >
                <path
                  d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z"
                />
              </svg>
            </a>
            <a
              href="javascript:void(0)"
              class="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                class="fill-current"
              >
                <path
                  d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z"
                />
              </svg>
            </a>
          </div>
          <p class="text-body-color text-base">&copy; 2025 TailGrids</p>
        </div>
      </div>
    </div>
  </div>
  <div>
    <span class="absolute left-0 bottom-0 z-[-1]">
      <svg
        width="217"
        height="229"
        viewBox="0 0 217 229"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
          fill="url(#paint0_linear_1179_5)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1179_5"
            x1="76.5"
            y1="281"
            x2="76.5"
            y2="1.22829e-05"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3056D3" stop-opacity="0.08" />
            <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </span>
    <span class="absolute top-10 right-10 z-[-1]">
      <svg
        width="75"
        height="75"
        viewBox="0 0 75 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
          fill="url(#paint0_linear_1179_4)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1179_4"
            x1="-1.63917e-06"
            y1="37.5"
            x2="75"
            y2="37.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#13C296" stop-opacity="0.31" />
            <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  </div>
</footer>

</>
  )
}

export default Home