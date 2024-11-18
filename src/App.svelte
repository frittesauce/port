<script lang="ts">
    import { onMount } from "svelte";
  import Home from "./home.svelte";
import Navbar from "./lib/navbar.svelte";
  import type { Pages } from "./types.ts";

  let page: Pages;

  onMount(() => {
      let data = localStorage.getItem("page");
      if(!data) {
        data = "Home";
        localStorage.setItem("page", "Home");
      } 
      page = data
    })

</script>

<Navbar bind:page></Navbar>
<main class="sm:mt-0 mt-10">
  {#if page == "Home"}
    <Home />
  {:else if page == "Projects"}
    <p>projects</p>
  {:else if page == "Socials"}
    <p>socials</p>
  {/if}
</main>
