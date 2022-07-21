export default function Layout({ children }) {
    return (
      
<main class="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
    <div class="flex items-start justify-between">
        <div class="h-screen hidden lg:block my-4 ml-4 shadow-lg relative ">
         
        </div>
        <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-2">
            <header class="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
                <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                    <div class="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                        <div class="container relative left-0 z-50 flex w-3/4 h-auto h-full">
                            <div class="relative flex items-center w-full lg:w-64 h-full group">
                                {/* <div class="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                                    <svg fill="none" class="relative w-5 h-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
                                        </path>
                                    </svg>
                                </div> */}
                                {/* <svg class="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                                    </path>
                                </svg> */}
                                <input type="text" class="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input" placeholder="Search"/>
                                    <div class="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
                                        +
                                    </div>
                                </div>
                            </div>
                            <div class="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
                                <a href="#" class="block relative">
                                    
                                    <img alt="profil" src="https://profile-images.xing.com/images/bdf8aa24093aaf50d13a6a31d02b3ca0-1/saskia-steinbach.1024x1024.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                                    <span class="text-sm text-amber font-semibold dark:text-white ml-2">
                                                    Souad Hamdi
                                                </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                <div class="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                    <div class="flex flex-col flex-wrap sm:flex-row ">
                        <div class="w-full sm:w-1/2 xl:w-1/3">
                            <div class="mb-4">
                                <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
                                    <div class="flex items-center justify-between mb-6">
                                        <div class="flex items-center">
                                            <span class="rounded-xl relative p-2 bg-blue-100">
                                           
                                            </span>
                                            <div class="flex flex-col">
                                                <span class="font-bold text-md text-black dark:text-amber-400 ml-2">
                                                    User management 
                                                </span>
                                               
                                            </div>
                                        </div>
                                        <div class="flex items-center">
                                            <button class="border p-1 border-gray-200 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                                                    <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                    </path>
                                                </svg>
                                            </button>
                                            <button class="text-gray-200">
                                                <svg width="25" height="25" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z">
                                                    </path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between mb-4 space-x-12">
                                        <span class="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-gray-500 bg-gray-200">
                                            PROGRESS
                                        </span>
                                        <span class="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-red-400 border border-red-400  bg-white">
                                            HIGH PRIORITY
                                        </span>
                                    </div>
                                    <div class="block m-auto">
                                        <div>
                                            <span class="text-sm inline-block text-gray-500 dark:text-gray-100">
                                                Task done :
                                                <span class="text-gray-700 dark:text-white font-bold">
                                                    25
                                                </span>
                                                /50
                                            </span>
                                        </div>
                                        <div class="w-full h-2 bg-gray-200 rounded-full mt-2">
                                            <div class="w-1/2 h-full text-center text-xs text-white bg-red-500 rounded-full">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-start my-4 space-x-4">
                                        <span class="px-2 py-1 flex items-center text-xs rounded-md font-semibold text-green-500 bg-green-50">
                                          Mute user
                                        </span>
                                        <span class="px-2 py-1 flex items-center text-xs rounded-md text-blue-500 font-semibold bg-blue-100">
                                           Ban user
                                        </span>
                                    </div>
                                    <div class="flex -space-x-2">
                                        <a href="#" class="">
                                            <img class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="https://th.bing.com/th/id/OIP.i62VhEqtoEVN4-8CDZvOfgHaHW?pid=ImgDet&rs=1" alt="Guy"/>
                                        </a>
                                        <a href="#" class="">
                                            <img class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="https://sun9-52.userapi.com/s/v1/ig2/h2e1P5vgtSdxSgQy5kqFmhjv8rc43cF9fK_C-bfOoC9q1HdFVM9d8ko6bE1kfyF4wtduPh407D1Al7PT__TzuoEq.jpg?size=400x0&quality=96&crop=1,0,867,867&ava=1" alt="Max"/>
                                        </a>
                                        <a href="#" class="">
                                            <img class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="https://i.pinimg.com/originals/af/81/7f/af817f68fc3cca287518267157adf834.jpg" alt="Charles"/>
                                        </a>
                                        <a href="#" class="">
                                            <img class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="https://sf1.bibamagazine.fr/wp-content/uploads/biba/2016/06/Comment-choisir-sa-photo-de-profil-sur-les-applications-de-rencontres-750x410.png" alt="Jade"/>
                                        </a>
                                    </div>
                                    <span class="px-2 py-1 flex w-36 mt-4 items-center text-xs rounded-md font-semibold text-yellow-500 bg-yellow-100">
                                        DUE DATE : 05 Aug
                                    </span>
                                </div>
                            </div>
                            <div class="mb-4">
                                <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
                                    <div class="flex items-center justify-between mb-6">
                                        <div class="flex items-center">
                                            <span class="rounded-xl relative p-2 bg-blue-100">
                                                
                                            </span>
                                            <div class="flex flex-col">
                                                <span class="font-bold text-md text-black dark:text-amber-400 ml-2">
                                                Posts management 
                                                </span>
                                               
                                            </div>
                                        </div>
                                        <div class="flex items-center">
                                            <button class="border p-1 border-gray-200 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                                                    <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                    </path>
                                                </svg>
                                            </button>
                                            <button class="text-gray-200">
                                                <svg width="25" height="25" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z">
                                                    </path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between mb-4 space-x-12">
                                        <span class="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-green-700 bg-green-50">
                                            COMPLETED
                                        </span>
                                        <span class="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-green-600 border border-green-600 bg-white">
                                            MEDIUM PRIORITY
                                        </span>
                                    </div>
                                    <div class="block m-auto">
                                        <div>
                                            <span class="text-sm inline-block text-gray-500 dark:text-gray-100">
                                                Task done :
                                                <span class="text-gray-700 dark:text-white font-bold">
                                                    50
                                                </span>
                                                /50
                                            </span>
                                        </div>
                                        <div class="w-full h-2 bg-gray-200 rounded-full mt-2">
                                            <div class="w-full h-full text-center text-xs text-white bg-green-400 rounded-full">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-start my-4 space-x-4">
                                        <span class="px-2 py-1 flex items-center text-xs rounded-md text-yellow-600 font-semibold bg-yellow-200">
                                            Delete posts
                                        </span>
                                    </div>
                                    <div class="flex -space-x-2">
                                        <a href="#" class="">
                                            <img class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="https://image.freepik.com/photos-gratuite/rire-homme-age-mur-assis-exterieur-telephone-mobile_33839-7657.jpg" alt="Guy"/>
                                        </a>
                                        <a href="#" class="">
                                            <img class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="https://2.bp.blogspot.com/-KNxbM_VGea0/WWBACMMoWHI/AAAAAAAEotM/-sU3cuRZvwQIycEM2P_8PxeS5NnZRIjZwCLcBGAs/s1600/398fd357f12f74632a42689c55089cb3.jpg&resize_w=320" alt="Max"/>
                                        </a>
                                        <a href="#" class="">
                                            <img class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="https://th.bing.com/th/id/OIP.EyuFMuQ0WmvYvNrvXu_hlAHaDt?pid=ImgDet&rs=1" alt="Charles"/>
                                        </a>
                                        <a href="#" class="">
                                            <img class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="https://www.cinematographe.it/wp-content/uploads/2019/03/Chiara-Del-Francia-cinematographe.it_.jpg" alt="Jade"/>
                                        </a>
                                    </div>
                                    <span class="px-2 py-1 flex w-36 mt-4 items-center text-xs rounded-md font-semibold text-yellow-500 bg-yellow-100">
                                        DUE DATE : 18 JUN
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2 xl:w-1/3">
                            <div class="mb-4 mx-0 sm:ml-4 xl:mr-4">
                                <div class="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full">
                                    <p class="font-bold text-md p-4 text-black dark:text-white">
                                        My Tasks
                                        <span class="text-sm text-gray-500 dark:text-gray-300 dark:text-white ml-2">
                                            (05)
                                        </span>
                                    </p>
                                    <ul>
                                        <li class="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                                            <div class="flex items-center justify-start text-sm">
                                                <span class="mx-4">
                                                    01
                                                </span>
                                                <span>
                                                 prepare a report about the last week alerts
                                                </span>
                                            </div>
                                            <svg width="20" height="20" fill="currentColor" class="mx-4 text-gray-400 dark:text-gray-300" viewBox="0 0 1024 1024">
                                                <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" fill="currentColor">
                                                </path>
                                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="currentColor">
                                                </path>
                                            </svg>
                                        </li>
                                        <li class="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                                            <div class="flex items-center justify-start text-sm">
                                                <span class="mx-4">
                                                    02
                                                </span>
                                                <span>
                                                    Ckeck same users conversation and ban or mute malicious users
                                                </span>
                                                <span class="lg:ml-6 ml-2 flex items-center text-gray-400 dark:text-gray-300">
                                                    3
                                                    <svg width="15" height="15" fill="currentColor" class="ml-1" viewBox="0 0 512 512">
                                                        <path d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z" fill="currentColor">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <span class="mx-4 flex items-center text-gray-400 dark:text-gray-300">
                                                    3
                                                    <svg width="15" height="15" class="ml-1" fill="currentColor" viewBox="0 0 384 512">
                                                        <path d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8c-.6 16.1-4.2 28.5-11 36.9c-15.4 19.2-49.3 22.4-85.2 25.7c-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3c0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6c3.1-5.2 7.8-9.8 14.9-13.4c16.2-8.2 40.4-10.4 66.1-12.8c42.2-3.9 90-8.4 118.2-43.4c14-17.4 21.1-39.8 21.6-67.9c31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16z" fill="currentColor">
                                                        </path>
                                                    </svg>
                                                </span>
                                            </div>
                                            <svg width="20" height="20" fill="currentColor" class="mx-4 text-gray-400 dark:text-gray-300" viewBox="0 0 1024 1024">
                                                <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" fill="currentColor">
                                                </path>
                                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="currentColor">
                                                </path>
                                            </svg>
                                        </li>
                                        <li class="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                                            <div class="flex items-center justify-start text-sm">
                                                <span class="mx-4">
                                                    03
                                                </span>
                                                <span>
                                                Create a new circuits if necessary 
                                                </span>
                                                <span class="lg:ml-6 ml-2 flex items-center text-gray-400 dark:text-gray-300">
                                                    3
                                                    <svg width="15" height="15" fill="currentColor" class="ml-1" viewBox="0 0 512 512">
                                                        <path d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z" fill="currentColor">
                                                        </path>
                                                    </svg>
                                                </span>
                                            </div>
                                            <svg width="20" height="20" fill="currentColor" class="mx-4 text-gray-400 dark:text-gray-300" viewBox="0 0 1024 1024">
                                                <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" fill="currentColor">
                                                </path>
                                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="currentColor">
                                                </path>
                                            </svg>
                                        </li>
                                        <li class="flex items-center text-gray-400 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                                            <div class="flex items-center justify-start text-sm">
                                                <span class="mx-4">
                                                    04
                                                </span>
                                                <span class="line-through">
                                                    Google logo design
                                                </span>
                                            </div>
                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1024 1024" class="text-green-500 mx-4">
                                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" fill="currentColor">
                                                </path>
                                            </svg>
                                        </li>
                                        <li class="flex items-center text-gray-400  justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                                            <div class="flex items-center justify-start text-sm">
                                                <span class="mx-4">
                                                    05
                                                </span>
                                                <span class="line-through">
                                                    Do the daily meeting twith your team leader to check the new circuits to add
                                                </span>
                                            </div>
                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1024 1024" class="text-green-500 mx-4">
                                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" fill="currentColor">
                                                </path>
                                            </svg>
                                        </li>
                                        <li class="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                                            <div class="flex items-center justify-start text-sm">
                                                <span class="mx-4">
                                                    06
                                                </span>
                                                <span>
                                                    Verify the chat room conversations
                                                </span>
                                                <span class="lg:ml-6 ml-2 flex items-center text-gray-400 dark:text-gray-300">
                                                    3
                                                    <svg width="15" height="15" fill="currentColor" class="ml-1" viewBox="0 0 512 512">
                                                        <path d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z" fill="currentColor">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <span class="mx-4 flex items-center text-gray-400 dark:text-gray-300">
                                                    3
                                                    <svg width="15" height="15" class="ml-1" fill="currentColor" viewBox="0 0 384 512">
                                                        <path d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8c-.6 16.1-4.2 28.5-11 36.9c-15.4 19.2-49.3 22.4-85.2 25.7c-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3c0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6c3.1-5.2 7.8-9.8 14.9-13.4c16.2-8.2 40.4-10.4 66.1-12.8c42.2-3.9 90-8.4 118.2-43.4c14-17.4 21.1-39.8 21.6-67.9c31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16z" fill="currentColor">
                                                        </path>
                                                    </svg>
                                                </span>
                                            </div>
                                            <svg width="20" height="20" fill="currentColor" class="mx-4 text-gray-400 dark:text-gray-300" viewBox="0 0 1024 1024">
                                                <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" fill="currentColor">
                                                </path>
                                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="currentColor">
                                                </path>
                                            </svg>
                                        </li>
                                        <li class="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3">
                                            <div class="flex items-center justify-start text-sm">
                                                <span class="mx-4">
                                                    07
                                                </span>
                                                <span>
                                                    Ckeck the new posts and incident
                                                </span>
                                            </div>
                                            <svg width="20" height="20" fill="currentColor" class="mx-4 text-gray-400 dark:text-gray-300" viewBox="0 0 1024 1024">
                                                <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" fill="currentColor">
                                                </path>
                                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="currentColor">
                                                </path>
                                            </svg>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="mb-4 sm:ml-4 xl:mr-4">
                                <div class="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full">
                                    <div class="flex items-center p-4 justify-between">
                                        <p class="font-bold text-md text-black dark:text-white">
                                        Training  session
                                        </p>
                                        <button class="text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4">
                                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                                                <g fill="none">
                                                    <path d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z" fill="currentColor">
                                                    </path>
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="py-2 px-4 bg-blue-100 dark:bg-gray-800 text-gray-600 border-l-4 border-blue-500 flex items-center justify-between">
                                        <p class="text-xs flex items-center dark:text-white">
                                            <svg width="20" height="20" fill="currentColor" class="text-blue-500 mr-2" viewBox="0 0 24 24">
                                                <g fill="none">
                                                    <path d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z" fill="currentColor">
                                                    </path>
                                                </g>
                                            </svg>
                                           User management
                                        </p>
                                        <div class="flex items-center">
                                            <span class="font-bold text-xs dark:text-gray-200 mr-2 ml-2 md:ml-4">
                                                25 min 20s
                                            </span>
                                            <button class="text-sm p-1 text-gray-400 border rounded bg-blue-500 mr-4">
                                                <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24" class="text-white">
                                                    <g fill="none">
                                                        <path d="M9 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1zm6 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1z" fill="currentColor">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="flex items-center p-4 justify-between border-b-2 border-gray-100">
                                        <p class="font-bold text-md text-black dark:text-white">
                                        Tostponed training
                                        </p>
                                        <button class="text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4">
                                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                                                <g fill="none">
                                                    <path d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z" fill="currentColor">
                                                    </path>
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="py-2 px-4 text-gray-600 flex items-center justify-between border-b-2 border-gray-100">
                                        <p class="text-xs flex items-center dark:text-white">
                                            <svg width="20" height="20" fill="currentColor" class="mr-2" viewBox="0 0 24 24">
                                                <g fill="none">
                                                    <path d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z" fill="currentColor">
                                                    </path>
                                                </g>
                                            </svg>
                                            Posts management
                                        </p>
                                        <div class="flex items-center">
                                            <span class="text-xs text-gray-400 mr-2 ml-2 md:ml-4">
                                                30 min
                                            </span>
                                            <button class="text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4">
                                                <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                                                    <g fill="none">
                                                        <path d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z" fill="currentColor">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="py-2 px-4 text-gray-600 flex items-center justify-between border-b-2 border-gray-100">
                                        <p class="text-xs flex items-center dark:text-white">
                                            <svg width="20" height="20" fill="currentColor" class="mr-2" viewBox="0 0 24 24">
                                                <g fill="none">
                                                    <path d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z" fill="currentColor">
                                                    </path>
                                                </g>
                                            </svg>
                                            Chat room management
                                        </p>
                                        <div class="flex items-center">
                                            <span class="text-xs text-gray-400 mr-2 ml-2 md:ml-4">
                                                30 min
                                            </span>
                                            <button class="text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4">
                                                <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                                                    <g fill="none">
                                                        <path d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z" fill="currentColor">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="py-2 px-4 text-gray-600 flex items-center justify-between">
                                        <p class="text-xs flex items-center dark:text-white">
                                            <svg width="20" height="20" fill="currentColor" class="mr-2" viewBox="0 0 24 24">
                                                <g fill="none">
                                                    <path d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z" fill="currentColor">
                                                    </path>
                                                </g>
                                            </svg>
                                           New stations creation
                                        </p>
                                        <div class="flex items-center">
                                            <span class="text-xs text-gray-400 mr-2 ml-2 md:ml-4">
                                                30 min
                                            </span>
                                            <button class="text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4">
                                                <svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
                                                    <g fill="none">
                                                        <path d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z" fill="currentColor">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2 xl:w-1/3">
                            <div class="mb-4">
                                <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700">
                                    <div class="flex flex-wrap overflow-hidden">
                                        <div class="w-full rounded shadow-sm">
                                            <div class="flex items-center justify-between mb-4">
                                                <div class="text-left font-bold text-xl text-black dark:text-white">
                                                    Juil 2022
                                                </div>
                                                <div class="flex space-x-4">
                                                    <button class="p-2 rounded-full bg-blue-500 text-white">
                                                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                                                            <path fill="currentColor" d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z">
                                                            </path>
                                                        </svg>
                                                    </button>
                                                    <button class="p-2 rounded-full bg-blue-500 text-white">
                                                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                                                            <path fill="currentColor" d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z">
                                                            </path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="-mx-2">
                                                <table class="w-full dark:text-white">
                                                    <tr>
                                                        <th class="py-3 px-2 md:px-3 ">
                                                            S
                                                        </th>
                                                        <th class="py-3 px-2 md:px-3 ">
                                                           S
                                                        </th>
                                                        <th class="py-3 px-2 md:px-3 ">
                                                            M
                                                        </th>
                                                        <th class="py-3 px-2 md:px-3 ">
                                                            T
                                                        </th>
                                                        <th class="py-3 px-2 md:px-3 ">
                                                            W
                                                        </th>
                                                        <th class="py-3 px-2 md:px-3 ">
                                                            T
                                                        </th>
                                                        <th class="py-3 px-2 md:px-3 ">
                                                            F
                                                        </th>
                                                    </tr>
                                                    <tr class="text-gray-400 dark:text-gray-500">
                                                        <td class="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                                                            25
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                                                            26
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                                                            27
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                                                            28
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                                                            29
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                                                            30
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center text-gray-800 cursor-pointer">
                                                            1
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            2
                                                        </td>
                                                        <td class="py-3 relative px-1  hover:text-blue-500 text-center cursor-pointer">
                                                            3
                                                            <span class="absolute rounded-full h-2 w-2 bg-blue-500 bottom-0 left-1/2 transform -translate-x-1/2">
                                                            </span>
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            4
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            5
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            6
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            7
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3 md:px-2 relative lg:px-3 hover:text-blue-500 text-center cursor-pointer">
                                                            8
                                                            <span class="absolute rounded-full h-2 w-2 bg-yellow-500 bottom-0 left-1/2 transform -translate-x-1/2">
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            9
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            10
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            11
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            12
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  text-center text-white cursor-pointer">
                                                       
                                                                13
                                                       
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            14
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            15
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            16
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            17
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            18
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            19
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            20
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            21
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            22
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            <span span class="p-2 rounded-full bg-blue-500">      23</span>
                                                      
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            24
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  hover:text-blue-500 relative text-center cursor-pointer">
                                                            25
                                                            <span class="absolute rounded-full h-2 w-2 bg-red-500 bottom-0 left-1/2 transform -translate-x-1/2">
                                                            </span>
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            26
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            27
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            28
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            29
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            30
                                                        </td>
                                                        <td class="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                            31
                                                        </td>
                                                        <td>
                                                        </td>
                                                        <td>
                                                        </td>
                                                        <td>
                                                        </td>
                                                        <td>
                                                        </td>
                                                        <td>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-4">
                                <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
                                    <p class="font-bold text-md text-black dark:text-white">
                                        Team interaction
                                    </p>
                                    <ul>
                                        <li class="flex items-center my-6 space-x-2">
                                            <a href="#" class="block relative">
                                                <img alt="profil" src="https://3zaee7z1nhqqava71wm2hiyc-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/portrait-hani-basile.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                                            </a>
                                            <div class="flex flex-col">
                                                <span class="text-sm text-gray-900 font-semibold dark:text-white ml-2">
                                                    Ahmed
                                                </span>
                                                <span class="text-sm text-gray-400 dark:text-gray-300 ml-2">
                                                    Hey Souad ! Do you read the new travel companion  doc ?
                                                </span>
                                            </div>
                                        </li>
                                        <li class="flex items-center my-6 space-x-2">
                                            <a href="#" class="block relative">
                                                <img alt="profil" src="https://th.bing.com/th/id/R.f0fcd342455ce97bad71dbaf115e345f?rik=W7JRleke3xyB3w&riu=http%3a%2f%2fcdn2-public.ladmedia.fr%2fvar%2fpublic%2fstorage%2fimages%2fnews%2fphotos%2fphotos-solweig-rediger-lizlow-la-miss-meteo-trop-fine-et-alors-109963%2fune-jeune-fille-toute-fraiche-109975%2f910893-1-fre-FR%2fUne-jeune-fille-toute-fraiche_portrait_w674.jpg&ehk=h5HFQMm7AgA0q5kGWfXvpRIQo1dnPJqsHnf3STEFIQk%3d&risl=&pid=ImgRaw&r=0" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                                            </a>
                                            <div class="flex flex-col">
                                                <span class="text-sm text-gray-900 font-semibold dark:text-white ml-2">
                                                   Sabrina
                                                </span>
                                                <span class="text-sm text-gray-400 dark:text-gray-300 ml-2">
                                                   Please the next meeting will be tomorow?
                                                </span>
                                            </div>
                                        </li>
                                        <li class="flex items-center my-6 space-x-2">
                                            <a href="#" class="block relative">
                                                <img alt="profil" src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/i9FJRq3Ajw6CFjvAaK1viewjehn.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                                            </a>
                                            <div class="flex flex-col">
                                                <span class="text-sm text-gray-900 font-semibold dark:text-white ml-2">
                                                   Maria
                                                </span>
                                                <span class="text-sm text-gray-400 dark:text-gray-300 ml-2">
                                                    can you send to me the last version of travel companion rules via my email?
                                                </span>
                                            </div>
                                        </li>
                                        <li class="flex items-center my-6 space-x-2">
                                            <a href="#" class="block relative">
                                                <img alt="profil" src="https://i.pinimg.com/originals/66/00/9a/66009af3e45a6e4fa331614acae97b6f.png" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                                            </a>
                                            <div class="flex flex-col">
                                                <span class="text-sm text-gray-900 font-semibold dark:text-white ml-2">
                                                    Marina 
                                                </span>
                                                <span class="text-sm text-gray-400 dark:text-gray-300 ml-2">
                                                    Can you share the next week meeting schedule?
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

) }
      
      
      
