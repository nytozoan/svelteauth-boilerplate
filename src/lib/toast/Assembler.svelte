<script lang="ts">
    import { toastList, dismissToast } from "./store";
    import Styling from "./Styling.svelte";
    let toastContent:string;
    let toastContentArray:Array<string>;
    toastList.subscribe((value:Array<any>) => {
        toastContent = value.toString();
        toastContentArray = value;
    })
</script>

<div>
    {#each toastContentArray as item} <!-- Can add a second argument, `i`, for an iterative variable..-->
        <div><Styling>{item}</Styling></div>
    {/each}
    <button on:click={dismissToast}>Clear</button>
</div>