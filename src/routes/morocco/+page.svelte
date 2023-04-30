<script>
// @ts-nocheck

	import {fade,} from 'svelte/transition'
	import Transitions from '../../components/transitions.svelte';
    import { Carousel, CarouselTransition, Alert, Img, Card, Button  } from 'flowbite-svelte'  

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
		<span class="font-medium">M O R O C C O</span> it was Ramadan
	</Alert>
</div>


    <!-- Layout-->

<div class="grid grid-cols-2 md:grid-cols-2 gap-4 p-12">
    
        <img class="h-auto max-w-full rounded-lg" src="../mo1.jpg" alt="">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="mor5.jpg" alt="">
        </div>

    <div>
        <img class="h-auto max-w-full rounded-lg" src="mo2.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="mor8.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="mor4.jpg" alt="">
    </div>
    
    <div>
        <img class="h-auto max-w-full rounded-lg" src="mor10.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="mor7.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="mor9.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="mo12.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="mo8.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="mo10.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="a20.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="mo3.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="mor6.jpg" alt="">
    </div>

    <Button class="flex items-stretch hover:items-center self-center" pill size="xl" color="alternative">
        <a href="/"
        >.</a
        > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
      </Button>
    
</div>





