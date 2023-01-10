<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>svelte-deno-demo</title>
	<link
		rel="icon"
		href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦕</text></svg>"
	/>
</svelte:head>

<main class="min-h-screen grid place-items-center bg-gradient-to-b from-teal-400 to-teal-600">
	<section class="text-center text-white px-4">
		<h1 class="text-6xl font-bold mb-6">Welcome to SvelteKit running on Deno 🦕</h1>
		<p class="text-xl">
			Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
		</p>
		<p>{data.now}</p>
	</section>
</main>
