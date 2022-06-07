
<template>
    <div>

        <!--Nav-->
        <nav class="naveBar bg-yellow-50 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <a href="https://flowbite.com" class="flex items-center">
                    <img src="../img/logo.jpg" class="mr-3 h-10 sm:h-20 rounded" alt="Flowbite Logo">
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
                        style="color:chocolate">Dignidad Capilla Del Monte</span>
                </a>


                <!-- <br> -->
                <!-- <p><span>Selected job title: {{ selectedJobTitle }}</span></p> -->

                <div class=" w-full md:block md:w-auto">
                    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <a href="https://www.instagram.com/ladignidadcapilladelmonte/"
                                class="flex space-x-2  font-normal text-base hover:text-gray-400">
                                <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span>
                                    Instagram
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://web.facebook.com/ladignidadcapilladelmonte"
                                class="flex space-x-2  font-normal text-base hover:text-gray-400">
                                <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span>
                                    Facebook
                                </span>
                            </a>
                        </li>
                        <li>
                            <!--Dropdown-->
                            <div class="w-1/6 bg-yellow-50">
                                <select class="form-control" name="choice-search" id="choice-search"
                                    @change="changeJobTitle($event)">
                                    <option value="" selected disabled>°°°</option>
                                    <option v-for="jobTitle in jobTitles" :value="jobTitle.id" :key="jobTitle.id"><a
                                            href="facebook.com">
                                            {{ jobTitle.name }}
                                        </a>
                                    </option>
                                </select>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>


        <!-- component -->
        <div id="blog" class="bg-yellow-100 px-4 xl:px-4 py-6">
            <div class="mx-auto container ">
                <!-- <span role="contentinfo ">
                    <h1 tabindex="0"
                        class="focus:outline-none text-center text-3xl lg:text-5xl tracking-wider text-gray-900">
                        <p class="font-semibold" style="color:chocolate">Dignidad Capilla Del Monte</p>
                    </h1>
                </span> -->
                <div tabindex="0" aria-label="Group of cards" class="focus:outline-none mt-12 lg:mt-24">
                    <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                        <div tabindex="0" class="focus:outline-none" aria-label="card 1">
                            <img role="img" aria-label="code editor" tabindex="0" class="focus:outline-none w-full"
                                src="../img/portPh1.jpg" alt="code editor" style="border-radius:19px;" />
                            <div class="py-4 px-8 w-full flex justify-between bg-indigo-700"
                                style="border-radius:19px;background: chocolate;">
                                <p tabindex=" 0"
                                    class="focus:outline-none text-sm text-white font-semibold tracking-wide">Pié de
                                    página</p>
                                <p tabindex="0"
                                    class="focus:outline-none text-sm text-white font-semibold tracking-wide">Fecha</p>
                            </div>
                            <div class=" px-10 py-6 rounded-bl-3xl rounded-br-3xl bg-yellow-50"
                                style="border-radius:15px;  background: coral">
                                <h1 tabindex=" 0"
                                    class="focus:outline-none text-4xl text-gray-900 font-semibold tracking-wider">
                                    Título</h1>
                                <p tabindex="0"
                                    class="focus:outline-none text-gray-700 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12">
                                    Información más relevante... Relleno con Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Illo corporis eveniet sint laborum eum itaque asperiores adipisci
                                    cumque. Totam reprehenderit minima laudantium tempore sit, eaque voluptates odio nam
                                    voluptatem quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                                    delectus, voluptates autem aut dolorem sequi. Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Velit voluptatibus impedit molestiae asperiores aut numquam, iusto
                                    explicabo nemo ducimus modi?</p>
                                <div class="w-full flex justify-end">
                                    <button
                                        class="focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer">
                                        <span class=" text-base tracking-wide text-indigo-700">Ver más info..</span>
                                        <svg class="ml-3 lg:ml-6 text-indigo-700" xmlns="http://www.w3.org/2000/svg"
                                            width="20" height="18" viewBox="0 0 20 18" fill="none">
                                            <path d="M11.7998 1L18.9998 8.53662L11.7998 16.0732" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M1 8.53662H19" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div class="h-5 w-2"></div>
                            </div>
                        </div>
                        <div>
                            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                <div tabindex="0" class="focus:outline-none " aria-label="card 2">
                                    <img tabindex="0" role="img" aria-label="gaming" class="focus:outline-none w-full"
                                        src="../img/article4.jpg" alt="games" style="border-radius:15px;" />
                                    <div class="py-2 px-4 w-full flex justify-between bg-indigo-700"
                                        style="border-radius:15px; background: chocolate;">
                                        <p tabindex="0"
                                            class="focus:outline-none  text-sm text-white font-semibold tracking-wide">
                                            Pié de página</p>
                                        <p tabindex="0"
                                            class="focus:outline-none text-sm text-white font-semibold tracking-wide">
                                            Fecha</p>
                                    </div>
                                    <div class="bg-yellow-50 px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl"
                                        style="border-radius:15px; background: coral;">
                                        <h1 tabindex="0"
                                            class="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">
                                            Título</h1>
                                        <p tabindex="0"
                                            class="focus:outline-none text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">
                                            Informacón-... relleno con Lorem ipsum dolor sit amet consectetur
                                            adipisicing elit. Corporis, nesciunt.</p>
                                        <div class="w-full flex justify-end">
                                            <button
                                                class="focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer">
                                                <span class=" text-base tracking-wide text-indigo-700">Ver más
                                                    info..</span>
                                                <svg class="ml-3 lg:ml-6 text-indigo-700"
                                                    xmlns="http://www.w3.org/2000/svg" width="20" height="18"
                                                    viewBox="0 0 20 18" fill="none">
                                                    <path d="M11.7998 1L18.9998 8.53662L11.7998 16.0732"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                    <path d="M1 8.53662H19" stroke="currentColor" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div tabindex="0" class="focus:outline-none" aria-label="card 3">
                                    <img tabindex="0" role="img" aria-label="gaming"
                                        class="focus:outline-none focus:outline-none w-full"
                                        src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(3).png" alt="notes"
                                        style="border-radius:15px;" />
                                    <div class="py-2 px-4 w-full flex justify-between bg-indigo-700"
                                        style="border-radius:15px; background: chocolate; ">
                                        <p tabindex="0"
                                            class="focus:outline-none text-sm text-white font-semibold tracking-wide">
                                            Pié de página</p>
                                        <p tabindex="0"
                                            class="focus:outline-none text-sm text-white font-semibold tracking-wide">
                                            Fecha</p>
                                    </div>
                                    <div class="bg-yellow-50 px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl"
                                        style="border-radius:15px; background: coral;">
                                        <h1 tabindex="0"
                                            class="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">
                                            Título</h1>
                                        <p tabindex="0"
                                            class="focus:outline-none text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">
                                            Información relevante... relleno con Lorem ipsum dolor sit amet consectetur
                                            adipisicing elit. Nemo, reiciendis?</p>
                                        <div class="w-full flex justify-end">
                                            <button
                                                class="focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer">
                                                <span class=" text-base tracking-wide text-indigo-700">Ver más
                                                    info..</span>
                                                <svg class="ml-3 lg:ml-6 text-indigo-700"
                                                    xmlns="http://www.w3.org/2000/svg" width="20" height="18"
                                                    viewBox="0 0 20 18" fill="none">
                                                    <path d="M11.7998 1L18.9998 8.53662L11.7998 16.0732"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                    <path d="M1 8.53662H19" stroke="currentColor" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                <div tabindex="0" class="focus:outline-none " aria-label="card 4">
                                    <img tabindex="0" role="img" aria-label="laptop" class="focus:outline-none w-full"
                                        src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(4).png"
                                        alt="laptop" style="border-radius:15px;" />
                                    <div class="py-2 px-4 w-full flex justify-between bg-indigo-700"
                                        style="border-radius:15px; background: chocolate;">
                                        <p tabindex="0"
                                            class="focus:outline-none text-sm text-white font-semibold tracking-wide">
                                            Bruce Wayne</p>
                                        <p tabindex="0"
                                            class="focus:outline-none text-sm text-white font-semibold tracking-wide">
                                            13TH Oct, 2020</p>
                                    </div>
                                    <div class="bg-yellow-50 px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl"
                                        style="border-radius:15px;background: coral;">
                                        <h1 tabindex="0"
                                            class="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">
                                            Transactions</h1>
                                        <p tabindex="0"
                                            class="focus:outline-none text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">
                                            Find the latest events updates or create events, concerts, conferences,
                                            workshops...</p>
                                        <div class="w-full flex justify-end">
                                            <button
                                                class="focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer">
                                                <span class=" text-base tracking-wide text-indigo-700">Ver más
                                                    info..</span>
                                                <svg class="ml-3 lg:ml-6 text-indigo-700"
                                                    xmlns="http://www.w3.org/2000/svg" width="20" height="18"
                                                    viewBox="0 0 20 18" fill="none">
                                                    <path d="M11.7998 1L18.9998 8.53662L11.7998 16.0732"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                    <path d="M1 8.53662H19" stroke="currentColor" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div tabindex="0" class="focus:outline-none" aria-label="card 5">
                                    <img tabindex="0" role="img" aria-label="worker" class="focus:outline-none w-full"
                                        src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(5).png"
                                        alt="worker" style="border-radius:15px;background: chocolate" />
                                    <div class="py-2 px-4 w-full flex justify-between bg-indigo-700"
                                        style="border-radius:15px;background: chocolate;">
                                        <p tabindex="0"
                                            class="focus:outline-none text-sm text-white font-semibold tracking-wide">
                                            Bruce Wayne</p>
                                        <p tabindex="0"
                                            class="focus:outline-none text-sm text-white font-semibold tracking-wide">
                                            13TH Oct, 2020</p>
                                    </div>
                                    <div class="bg-yellow-50 px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl"
                                        style="border-radius:15px;background: coral;">
                                        <h1 tabindex="0"
                                            class="focus:outline-none  text-lg text-gray-900 font-semibold tracking-wider">
                                            Transactions</h1>
                                        <p tabindex="0"
                                            class="focus:outline-none  text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">
                                            Find the latest events updates or create events, concerts, conferences,
                                            workshops...</p>
                                        <div class="w-full flex justify-end">
                                            <button
                                                class="focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer">
                                                <span class=" text-base tracking-wide text-indigo-700">Ver más
                                                    info</span>
                                                <svg class="ml-3 lg:ml-6 text-indigo-700"
                                                    xmlns="http://www.w3.org/2000/svg" width="20" height="18"
                                                    viewBox="0 0 20 18" fill="none">
                                                    <path d="M11.7998 1L18.9998 8.53662L11.7998 16.0732"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                    <path d="M1 8.53662H19" stroke="currentColor" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--Footer-->
        <footer class="bg-yellow-50 text-gray-600 px-6 lg:px-8 py-12">
            <div class="max-w-screen-xl mx-auto mb-12 lg:mb-16  ">
                <img class="h-8" src="/images/pathway-logo.svg" alt="UptimeMate logo">
            </div>
            <div class="max-w-screen-xl mx-auto ">
                <div
                    class="grid grid-cols-8 md:grid-cols-9  lg:grid-cols-8  divide-gray-200 divide-y-2 md:divide-x-2 md:divide-y-0 md:-mx-8">
                    <div class="col-span-8 md:col-span-3 lg:col-span-2 md:px-8 py-4 md:py-0">
                        <h5 class="text-xl font-semibold text-gray-700">La Dignidad</h5>
                        <nav class="mt-4">
                            <ul class="space-y-2">
                                <li>
                                    <a href="#" class="font-normal text-base hover:text-gray-400">Landingpages</a>
                                </li>
                                <li>
                                    <a href="#" class="font-normal text-base hover:text-gray-400">Features</a>
                                </li>
                                <li>
                                    <a href="#" class="font-normal text-base hover:text-gray-400">Download brochure</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="col-span-8 md:col-span-3 lg:col-span-3 md:px-8 py-4 md:py-0">

                        <!--Form Footer-->
                        <p>Consultas</p>
                        <div class="block p-6 rounded-lg shadow-lg bg-green-200 max-w-md">

                            <form>
                                <div class="form-group mb-6">
                                    <input v-model="Nombre" type="text" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                                        placeholder="Nombre">
                                </div>
                                <div class="form-group mb-6">
                                    <input v-model="Contacto" type="contact" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                                        placeholder="Contacto">
                                </div>
                                <div class="form-group mb-6">
                                    <textarea v-model="Mensaje" class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      " id="exampleFormControlTextarea13" rows="3" placeholder="Mensaje"></textarea>
                                </div>
                                <div class="form-group form-check text-center mb-6">
                                    <!-- <input type="checkbox"
                                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                                        id="exampleCheck87" checked>
                                    <label class="form-check-label inline-block text-gray-800" for="exampleCheck87">Send
                                        me
                                        a copy of this message</label> -->
                                </div>
                                <button class="
      w-full
      px-6
      py-2.5
      bg-yellow-500
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-yellow-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out" @click="sendMsg()">Enviar</button>
                            </form>
                        </div>

                    </div>
                    <div class="col-span-8 md:col-span-3 lg:col-span-3 md:px-8 py-4 md:py-0">
                        <h5 class="text-xl font-semibold text-gray-700">Redes sociales</h5>
                        <nav class="mt-4">
                            <ul class="grid lg:grid-cols-2">

                                <li class="mb-2">
                                    <a href="https://www.instagram.com/ladignidadcapilladelmonte/"
                                        class="flex space-x-2  font-normal text-base hover:text-gray-400">
                                        <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd"
                                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        <span>
                                            Instagram
                                        </span>
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a href="https://web.facebook.com/ladignidadcapilladelmonte"
                                        class="flex space-x-2  font-normal text-base hover:text-gray-400">
                                        <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd"
                                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        <span>
                                            Facebook
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div
                class="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 mt-8 lg:mt-12 border-t-2 border-gray-200 pt-8">
                <nav class="flex flex-wrap justify-center space-x-6">
                    <a href="#" class="font-normal text-sm hover:text-gray-400 mb-2">Cookie settings</a>
                </nav>
                <p class="text-sm text-center md:text-right">&copy;2022 La Dignidad. All rights reserved. | All rights
                    reserved</p>
            </div>
        </footer>







    </div>
</template>


<script>

export default {
  data(){
        return {
            jobTitles: [
                { name: "Dignidad Rural", id: 1 },
                { name: "Merendarte", id: 2 },
                { name: "Cultivarte", id: 3 },
                { name: "Taku", id: 4 },
                { name: "Almacén", id: 5 },
                { name: "Cultivarte", id: 6 },
                { name: "ECOS", id: 7 }
            ],
            selectedJobTitle: null,
            chat_id: "2047819373",
            Nombre: "",
            Contacto: "",
            Mensaje:"",
    }

    },
    methods: {
        changeJobTitle(event) {
            this.selectedJobTitle = event.target.options[event.target.options.selectedIndex].text
        },
        sendMsg() {
            this.$axios.post('https://api.telegram.org/bot5171770731:AAE37wm0BsTmWUXRcK35ShAi266CVJI3k34/sendMessage?chat_id=2047819373', {
                chat_id: this.chat_id,
                text: "Nombre: " + this.Nombre + " Contacto: " + this.Contacto + " Mensaje " + this.Mensaje
            }).then((response) => {
                console.log("response: " + response);
            }).catch(function (error) {
                console.log("error:" + error);
            });
        }

        
    }
  }

    
</script>


<style>
.naveBar {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
}
</style>