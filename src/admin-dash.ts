import AdminDash from './pages/admin-dash.svelte';

const dash = new AdminDash({
	target: document.getElementById('admin-dash') as Element,
	props: {
		// name: 'world'
	}
});

export default dash;
