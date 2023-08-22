<script lang="ts">
    import { fade } from "svelte/transition";
</script>

<section id="toastBody" in:fade={{ delay: 30 }} out:fade={{ delay: 80 }}>
    <div id="toastMessage"><slot /></div>
</section>

<style>
    #toastBody {
        border: 2px solid #064789;
        background: #ebf2fa;
        color: #064789;
        padding: 30px;
        width: 200px;
    }
</style>