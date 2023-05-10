<script>

import Navbar from '../components/navbar.svelte';
	import '../app.postcss';
	import { DarkMode } from 'flowbite-svelte';
	import Footer from '../components/footer.svelte';
	let darkmodebtn =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed right-4 top-2 z-50';

		import { beforeNavigate } from '$app/navigation';
    import { updated } from '$app/stores';

    beforeNavigate(({ willUnload, to }) => {
        if ($updated && !willUnload && to?.url) {
            location.href = to.url.href;
        }
    });





</script>

<Navbar />


<darkmode btnclass={darkmodebtn} />
<slot />

<Footer />
