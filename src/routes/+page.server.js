/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const now = new Date().toISOString();
	return { now };
}
