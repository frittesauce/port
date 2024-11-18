<script lang="ts">
  import { onMount } from "svelte";
  import { pages, type Pages } from "../types";

  export let page: Pages;
  let darkmode: boolean = false;

  onMount(() => {
    let theme = localStorage.getItem("theme");

    if (!theme) {
      localStorage.setItem("theme", "light");
      theme = "light";
    }

    if (theme == "light") {
      darkmode = false;
    } else {
      darkmode = true;
    }

    if (darkmode) {
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
    }
  });

  function changePage(value: string) {
    page = value;
    localStorage.setItem("page", value);
  }

  function changeTheme() {
    darkmode = !darkmode;

    if (darkmode) {
      document.documentElement.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.add("light-mode");
    }
  }
</script>

<nav
  class=" bg-top-color flex justify-between items-center text-lg w-dvw fixed top-0 z-50 p-3"
>
  <button on:click={changeTheme}>
    <img src="./theme.jpg" alt="Theme" class=" w-12 h-12 rounded-md" />
  </button>
  <div class="flex justify-center gap-x-4">
    {#each pages as pg}
      <button
        class=" hover:border-current border-width-0 border-b-2 rounded-md p-2 transition- border-transparent"
        on:click={() => changePage(pg)}
      >
        {pg}
      </button>
    {/each}
  </div>
  <button on:click={() => changePage("Home")}>
    <img src="./logo.jpg" alt="logo" class=" w-12 h-12 rounded-md" />
  </button>
</nav>
