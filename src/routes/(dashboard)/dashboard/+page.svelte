<script lang="ts">
	import { goto } from "$app/navigation";
	import { addToast } from "$lib/toast/store";

    const logout = () => {
        // use filter to find current account and change isLoggedIn to false.
        addToast("You have been logged out.");
        goto("/");
    }
</script>

<h1>Dashboard</h1>

<button on:click={logout}>Logout</button>