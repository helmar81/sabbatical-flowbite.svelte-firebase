<script>
    // @ts-nocheck
    
        import { Alert, Img, Card, Button  } from 'flowbite-svelte'  
     
     let vCard = false;
     let hCard = false;
     </script>

<div class="p-8">
	<Alert>
		<span class="font-medium">Info alert!</span> this was an amazing trip
	</Alert>
</div>


<div class=" mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left text-zinc-600 px-12 flex-auto ">


	<div>
		<Card img="../t8.jpg" reverse={vCard}>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Thailand</h5>
		  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			Nearly 30 years later, I visited for the third time
		  </p>
		  <Button>
            <a href="/thailand"
			>P I C T U R E S</a
            > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
		  </Button>
		</Card>
	  </div>
	

	  <div>
		<Card img="../indiagoapeople.jpg" reverse={vCard}>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">India</h5>
		  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			I had a thrilling adventure on my first visit 
		  </p>
		  <Button>
			<a href="/india"
			>P I C T U R E S</a> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
		  </Button>
		</Card>
	  </div>
	

	  <div>
		<Card img="../v72.jpg" reverse={vCard}>
		  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Vietnam</h5>
		  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			Essentially an alternative residence for me
		  </p>
		  <Button>
			<a href="/vietnam"
			>P I C T U R E S</a> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
		  </Button>
		</Card>
	  </div>
	
	
	  
	
	  <div>
		<Card img="../p6.jpg" reverse={vCard}>
		  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Philippines</h5>
		  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			The rural scenery delighted me
		  </p>
		  <Button>
			<a href="/philippines"
			>P I C T U R E S</a> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
		  </Button>
		</Card>
	  </div>
	
	
	  <div>
		<Card img="../k5.jpg" reverse={vCard}>
		  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Kuwait</h5>
		  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			having a quick stopover before arriving in India
		  </p>
		  <Button>
			<a href="/kuwait"
			>P I C T U R E S</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
		  </Button>
		</Card>
	  </div>
	


	  <div>
		<Card img="../mo10.jpg" reverse={vCard}>
		  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Morocco</h5>
		  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
			I had someone waiting for me there.
		  </p>
		  <Button>
			<a href="/morocco"
			>P I C T U R E S</a> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
		  </Button>
		</Card>
	  </div>
	
	  
	</div>
	