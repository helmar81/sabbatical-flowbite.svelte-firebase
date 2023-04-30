<script>
// @ts-nocheck

	import { Alert } from "flowbite-svelte";


	import Todo from "../../components/todo.svelte";
	import Footer from "../../components/footer.svelte";
	import Carousel from "../../components/carousel.svelte";

	import { 
        Lightbox,
        LightboxGallery,
        GalleryThumbnail,
        GalleryImage
    } from 'svelte-lightbox'

    
    
    let lightboxProgrammaticController

</script>

<div class="p-8">
	<Alert>
		<span class="font-medium">Flights</span> cost me in total 1200 EURO
	</Alert>
</div>

<div class=" text-justify text-inherit text-zinc-800 decoration-slate-800 px-8">
<h2 class=" text-center">My journey took me from Stuttgart via Istanbul and Kuwait to Mumbai.</h2>
<h2 class=" text-center"> I spent some time in India before arriving in Vietnam in late January.</h2>
<h2 class=" text-center"> I found a great deal on a flight from Phuket to Casablanca on my way back.</h2>
<h2 class=" text-center"> My trip included visiting a friend in the Philippines and going to Thailand before returning home.</h2>
</div>
<LightboxGallery>
	<!-- Layout-->
<svelte:fragment slot="thumbnail">

<GalleryThumbnail class="grid grid-cols-2 md:grid-cols-2 gap-4 p-12">
<img src="map1.png" alt="Simple lightbox">
<img src="map2.png" alt="Simple lightbox">
<img src="map4.png" alt="Simple lightbox">
<img src="map11.png" alt="Simple lightbox">
<img src="map5.png" alt="Simple lightbox">
<img src="map6.png" alt="Simple lightbox">
<img src="map7.png" alt="Simple lightbox">
<img src="map8.png" alt="Simple lightbox">
<img src="map9.png" alt="Simple lightbox">
<img src="map10.png" alt="Simple lightbox">

<img src="fr9.jpg" alt="Helmar Bächle">
<img src="fr10.jpg" alt="Simple lightbox">
<img src="meGIF.gif" alt="Helmar Bächle">
<img src="a4.jpg" alt="Helmar Bächle">


</GalleryThumbnail>
		   
	   
	</svelte:fragment>
	
	<GalleryImage>
		<img src="map1.png" alt="Simple lightbox">
	</GalleryImage>
	<GalleryImage>
		<img src="map2.png" alt="Simple lightbox">
	</GalleryImage>
	<GalleryImage>
		<img src="map4.png" alt="Simple lightbox">
	</GalleryImage>
	<GalleryImage>
		<img src="map5.png" alt="Simple lightbox">
	</GalleryImage>
	<GalleryImage>
		<img src="map6.png" alt="Simple lightbox">
	</GalleryImage>

	<GalleryImage>
		<img src="map7.png" alt="Simple lightbox">
	</GalleryImage>
	<GalleryImage>
		<img src="map8.png" alt="Simple lightbox">
	</GalleryImage>
	<GalleryImage>
		<img src="map9.png" alt="Simple lightbox">
	</GalleryImage>

	<GalleryImage>
		<img src="map10.png" alt="Simple lightbox">
	</GalleryImage>
	<GalleryImage>
		<img src="map11.png" alt="Simple lightbox">
	</GalleryImage>
	
</LightboxGallery>




<slot />




