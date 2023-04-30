<script>
	// These values are bound to properties of the video
	let time = 0;
	/**
	 * @type {number}
	 */
	let duration;
	let paused = true;

	let showControls = true;
	/**
	 * @type {string | number | NodeJS.Timeout | undefined}
	 */
	let showControlsTimeout;

	// Used to track time of last mouse down event
	/**
	 * @type {number | Date}
	 */
	let lastMouseDown;

	/**
	 * @param {{type: string;buttons: number;touches: {clientX: any;}[];clientX: any;}} e
	 * @this {{ poster: string; src: string; "on:mousemove": (e: { type: string; buttons: number; touches: { clientX: any; }[]; clientX: any; }) => void; "on:touchmove": (e: { type: string; buttons: number; touches: { clientX: any; }[]; clientX: any; }) => void; "on:mousedown": (_e: any) => void; "on:mouseup": (e: any) => void; "bind:currentTime": number; "bind:paused": boolean; }}
	 */
	function handleMove(e) {
		// Make the controls visible, but fade out after
		// 2.5 seconds of inactivity
		clearTimeout(showControlsTimeout);
		showControlsTimeout = setTimeout(() => showControls = false, 2500);
		showControls = true;

		if (!duration) return; // video not loaded yet
		if (e.type !== 'touchmove' && !(e.buttons & 1)) return; // mouse not down

		const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
		// @ts-ignore
		const { left, right } = this.getBoundingClientRect();
		time = duration * (clientX - left) / (right - left);
	}

	// we can't rely on the built-in click event, because it fires
	// after a drag — we have to listen for clicks ourselves
	/**
	 * @param {any} _e
	 */
	function handleMousedown(_e) {
		lastMouseDown = new Date();
	}

	/**
	 * @param {{ target: { play: () => void; pause: () => void; }; }} e
	 */
	function handleMouseup(e) {
		// @ts-ignore
		if (new Date() - lastMouseDown < 300) {
			if (paused) e.target.play();
			else e.target.pause();
		}
	}

	/**
	 * @param {string | number} seconds
	 */
	function format(seconds) {
		// @ts-ignore
		if (isNaN(seconds)) return '...';

		// @ts-ignore
		const minutes = Math.floor(seconds / 60);
		// @ts-ignore
		seconds = Math.floor(seconds % 60);
		if (seconds < 10) seconds = '0' + seconds;

		return `${minutes}:${seconds}`;
	}
</script>

<h1>have fun watching</h1>


<div>
	<video
		poster="../a8.jpg"
		src="https://sveltejs.github.io/assets/caminandes-llamigos.mp4"
		on:mousemove={handleMove}
		on:touchmove|preventDefault={handleMove}
		on:mousedown={handleMousedown}
		on:mouseup={handleMouseup}
		bind:currentTime={time}
		bind:duration
		bind:paused>
			<track kind="captions"/>
	</video>

	<div class="controls" style="opacity: {duration && showControls ? 1 : 0}">
		<progress value="{(time / duration) || 0}"/>

		<div class="info">
			<span class="time">{format(time)}</span>
			<span>click anywhere to {paused ? 'play' : 'pause'} / drag to seek</span>
			<span class="time">{format(duration)}</span>
		</div>
	</div>
</div>

<style>
	div {
		position: relative;
	}

	.controls {
		position: absolute;
		top: 0;
		width: 100%;
		transition: opacity 1s;
	}

	.info {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}

	span {
		padding: 0.2em 0.5em;
		color: white;
		text-shadow: 0 0 8px black;
		font-size: 1.4em;
		opacity: 0.7;
	}

	.time {
		width: 3em;
	}

	.time:last-child { text-align: right }

	progress {
		display: block;
		width: 100%;
		height: 10px;
		-webkit-appearance: none;
		appearance: none;
	}

	progress::-webkit-progress-bar {
		background-color: rgba(0,0,0,0.2);
	}

	progress::-webkit-progress-value {
		background-color: rgba(255,255,255,0.6);
	}

	video {
		width: 100%;
	}
</style>
