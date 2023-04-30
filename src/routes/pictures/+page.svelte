<script>
// @ts-nocheck

    import { 
        Lightbox,
        LightboxGallery,
        GalleryThumbnail,
        GalleryImage
    } from 'svelte-lightbox'

    import { Carousel, CarouselTransition, Alert, Img, Card, Button  } from 'flowbite-svelte' 
    
    let lightboxProgrammaticController
</script>

<div class="p-8">
	<Alert>
		<span class="font-medium">9:16 Format</span> Here are some of the more than 5000 pictures I snapped
	</Alert>
</div>

    
    <LightboxGallery>
        <!-- Layout-->
    <svelte:fragment slot="thumbnail">
    
    <GalleryThumbnail class="grid grid-cols-2 md:grid-cols-3 gap-4 p-12">
        <img src="indigo.jpg" alt="Simple lightbox">
        <img src="b24.jpg" alt="Simple lightbox">
        <img src="mor3p.jpg" alt="Simple lightbox">
        <img src="mo14p.jpg" alt="Simple lightbox">

        <img src="anh.jpg" alt="Simple lightbox">

        <img src="b20.jpg" alt="Simple lightbox">
        <img src="b22.jpg" alt="Simple lightbox">
   
    <img src="v60p.jpg" alt="Simple lightbox">
    <img src="v29p.jpg" alt="Simple lightbox">
    <img src="v35womansday.jpg" alt="Simple lightbox">
    <img src="t26p.jpg" alt="Simple lightbox">
    <img src="t41.jpg" alt="Simple lightbox">
    <img src="t46scorpions.jpg" alt="Simple lightbox">
    <img src="work.jpg" alt="Helmar Bächle">
    <img src="t2p.jpg" alt="Simple lightbox">
    <img src="pboatmep.jpg" alt="Simple lightbox">
    <img src="vt.jpg" alt="Simple lightbox">
    <img src="v22p.jpg" alt="Simple lightbox">
    <img src="v67pmee.jpg" alt="Simple lightbox">
    <img src="t30pcovid.jpg" alt="Simple lightbox">
    <img src="t58pmassage.jpg" alt="Simple lightbox">
    <img src="t3p.jpg" alt="Simple lightbox">
    <img src="v41dogp.jpg" alt="Simple lightbox">
    <img src="t7p.jpg" alt="Simple lightbox">
    <img src="t16p.jpg" alt="Simple lightbox">
    <img src="indiaWTCme.jpg" alt="Simple lightbox">
    <img src="p1hit.jpg" alt="Simple lightbox">
    <img src="mo6p.jpg" alt="Simple lightbox">
    <img src="p35pme.jpg" alt="Simple lightbox">
    <img src="mor5p.jpg" alt="Simple lightbox">
        <img src="t4p.jpg" alt="Simple lightbox">
        <img src="v26p.jpg" alt="Simple lightbox">
        <img src="v38p.jpg" alt="Simple lightbox">
   
   
    </GalleryThumbnail>
               
           
        </svelte:fragment>


        <GalleryImage>
            <img src="b1.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="b2.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="b3.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="b5.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="b7.jpg" alt="Simple lightbox">
        </GalleryImage>

        <GalleryImage>
            <img src="b6.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="b8.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="b9.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="b10.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="b11.jpg" alt="Simple lightbox">
        </GalleryImage>

        <GalleryImage>
            <img src="b12.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="b13.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="b18.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="b19.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="b20.jpg" alt="Simple lightbox">
        </GalleryImage>

        <GalleryImage>
            <img src="b21.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="b22.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="b23.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="b24.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="b25.jpg" alt="Simple lightbox">
        </GalleryImage>

        <GalleryImage>
            <img src="b27.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="b29.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="b30.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="b31.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="b34.jpg" alt="Simple lightbox">
        </GalleryImage>

        <GalleryImage>
            <img src="b35.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="b36.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="b37.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="b41.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="b42.jpg" alt="Simple lightbox">
        </GalleryImage>


        
        <GalleryImage>
            <img src="town.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="green.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="t15p.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="v67pmee.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="v59p.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="t25p.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="v26.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="t46scorpions.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="v13.jpg" alt="Simple lightbox">
        </GalleryImage>

        <GalleryImage>
            <img src="t12p.jpg" alt="Simple lightbox">
        </GalleryImage>
        
        <GalleryImage>
            <img src="indiabusp.jpg" alt="Simple lightbox">
        </GalleryImage>
        
        <GalleryImage>
            <img src="v31prun.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="v41dogp.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="mo1p.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="sport.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="t11p.jpg" alt="Simple lightbox">
        </GalleryImage>

        <GalleryImage>
            <img src="mo11p.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="dog.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="t24p.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="packed.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="t47pgasoline.jpg" alt="Simple lightbox">
        </GalleryImage>

        <GalleryImage>
            <img src="t42thai.jpg" alt="Simple lightbox">
        </GalleryImage>



        <GalleryImage>
            <img src="v49prescue.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="v51p.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="t31prolls.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="v31prun.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="vt.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="t8p.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="v35womansday.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="t26p.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="t19psport.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="t28pme.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="t22ptemple.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="p15p.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="meRent.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="mo3p.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="v97pme.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="t8p.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="mo2p.jpg" alt="Simple lightbox">
        </GalleryImage>

        <GalleryImage>
            <img src="b1.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="b2.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="b3.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="b5.jpg" alt="Simple lightbox">
        </GalleryImage>
        <GalleryImage>
            <img src="b7.jpg" alt="Simple lightbox">
        </GalleryImage>
    </LightboxGallery>