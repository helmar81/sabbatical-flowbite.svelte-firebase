<script>
	import {fade} from 'svelte/transition'
	// @ts-ignore
	import Transitions from '../../components/transitions.svelte';
	// @ts-ignore
	import Todo from '../../components/todo.svelte';
	// @ts-ignore
	// @ts-ignore
		
	const carouselPhotos = [
		// @ts-ignore
		'src="mo3.jpg',
		'https://picsum.photos/300/200?random=1',
		'https://picsum.photos/300/200?random=2',
		'https://picsum.photos/300/200?random=3',
		
	]
	
	let index = 0

	
	
	const next = () => {
		index = (index + 1) % carouselPhotos.length
	}
</script>

<style>
	img {
		position: absolute;
		max-width: 1536px;
		align-items: center;
		object-fit: fill;
		background-color: #F87171;
		display: center;
		width: 54rem;

	}
</style>

{#each [carouselPhotos[index]] as src (index)}
	<img transition:fade {src} alt="" />	
{/each}

<button on:click={next}>click</button>