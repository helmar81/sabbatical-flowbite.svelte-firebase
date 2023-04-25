<script>
	
	import { Card, Button, Toggle,} from "flowbite-svelte";
  let vCard = false;

  
  </script>

<header>
	<!-- Navbar -->
	<nav
	  class="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
	  data-te-navbar-ref>
	  <div class="px-6">
		<!-- Hamburger menu button -->
		<button
		  class="border-0 bg-transparent px-2 py-3 text-xl leading-none md:hidden"
		  type="button"
		  data-te-collapse-init
		  data-te-target="#navbarSupportedContentY"
		  aria-controls="navbarSupportedContentY"
		  aria-expanded="false"
		  aria-label="Toggle navigation">
		  <!-- Hamburger menu icon -->
		  <span class="[&>svg]:w-5">
			<svg
			  xmlns="http://www.w3.org/2000/svg"
			  fill="none"
			  viewBox="0 0 24 24"
			  stroke-width="1.5"
			  stroke="currentColor"
			  class="h-6 w-6">
			  <path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
			</svg>
		  </span>
		</button>
  
		<!-- Navigation links -->
		<div
		  class="!visible hidden grow basis-[100%] items-center md:!flex md:basis-auto"
		  id="navbarSupportedContentY"
		  data-te-collapse-item>
		  <ul
			class="mr-auto flex flex-col md:flex-row"
			data-te-navbar-nav-ref>
			<li data-te-nav-item-ref>
			  <a
				class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:border-primary [&.active]:text-primary"
				href="#!"
				data-te-nav-link-ref
				data-te-ripple-init
				data-te-ripple-color="light"
				>Home</a
			  >
			</li>
			<li data-te-nav-item-ref>
			  <a
				class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:border-primary [&.active]:text-primary"
				href="#!"
				data-te-nav-link-ref
				data-te-ripple-init
				data-te-ripple-color="light"
				>Features</a
			  >
			</li>
			<li data-te-nav-item-ref>
			  <a
				class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:border-primary [&.active]:text-primary"
				href="#!"
				data-te-nav-link-ref
				data-te-ripple-init
				data-te-ripple-color="light"
				>Pricing</a
			  >
			</li>
			<li data-te-nav-item-ref>
			  <a
				class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:border-primary [&.active]:text-primary "
				href="#!"
				data-te-nav-link-ref
				data-te-ripple-init
				data-te-ripple-color="light"
				>About</a
			  >
			</li>
		  </ul>
		</div>
	  </div>
	</nav>
	<!-- Navbar -->
  
	<!-- Hero section with background image, heading, subheading and button -->
	<div
	  class="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center"
	  style="
		background-image: url('../t26piano.jpg');
		height: 400px;
	  ">
	  <div
		class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
		style="background-color: rgba(0, 0, 0, 0.6)">
		<div class="flex h-full items-center justify-center">
		  <div class="text-white">
			<h2 class="mb-4 text-4xl font-semibold">SABBATICAL</h2>
			<h4 class="mb-6 text-xl font-semibold">Welcome</h4>
			<button
			  type="button"
			  class="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
			  data-te-ripple-init
			  data-te-ripple-color="light">
			  soon available
			</button>
		  </div>
		</div>
	  </div>
	</div>
  </header>


  
<div class="mt-16 grid pt-0.5 justify-items-center text-center ">
    <h3>
        <span
            class=" bg-gradient-to-r p4 from-blue-400 to-purple-400  box-decoration-clone bg-clip-text text-4xl font-bold text-transparent p-4"
        >
        I took this leave to make a long journey
        </span>
    </h3>



<p></p>


</div>

