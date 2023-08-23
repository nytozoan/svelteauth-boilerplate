<script lang="ts">
    import Assembler from "$lib/toast/Assembler.svelte";
    // import { addToast } from "$lib/toast/store";
</script>
<nav>
	<a href="/login">Login</a>
	<a href="/register">Register</a>
</nav>

<!-- TODO: Put you toasts here -->
<Assembler />
<slot />
