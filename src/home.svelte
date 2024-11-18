<script lang="ts">
  function sendMessage() {
    fetch(
      "https://discord.com/api/webhooks/1306526016377978912/FWn5QTcN670obTuCzBZqmMZxH3OcAn8-Vf-GL4SxuEMXVFaN1PfOt6O6W2B11UcX0evd",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: "test",
        }),
      },
    );
  }
</script>

<div class="w-dvw h-dvh">
  <div
    class=" gap-8 flex justify-center sm:flex-row flex-col items-center w-full h-full"
  >
    <div class="w-96 h-96 rounded-xl overflow-hidden relative">
      <div class="home-glow-div"></div>
      <img src="./logo.jpg" alt="me" class=" w-full p-1 h-full rounded-xl" />
    </div>
    <div class="gap-y-4 flex flex-col w-96 h-96">
      <h1 class="typewriter text-4xl font-semibold">Hello i'm fiskur!</h1>
      <p class="max-w-96 text-base">blah blah blah blah blaj</p>
      <button
        class=" bg-top-color p-2 text-base font-semibold w-32 sm:self-end rounded-md hover-grow"
        on:click={sendMessage}>contact me!</button
      >
    </div>
  </div>
</div>
