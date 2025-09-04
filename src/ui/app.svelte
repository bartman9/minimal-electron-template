<script lang="ts">
  let title: string = "Bartman's Minimal Electron Project Template";
</script>

<div class="example">
  <h1 class="text-2xl font-bold text-emerald-500">{title}</h1>
  <p class="text-md text-zinc-200">Electron + Vite + TypeScript + Svelte + Tailwind = 🚀</p>
</div>

<style lang="postcss">
  @reference "tailwindcss";
  .example {
    @apply flex flex-col items-center justify-center min-h-screen bg-zinc-800;
  }
</style>
