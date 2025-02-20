<script>
    import { goto } from "$app/navigation";
  </script>
  
  <h1>Access Denied</h1>
  <p>You need a valid invitation link to view this portfolio.</p>
  <button on:click={() => goto("/")}>Go Back</button>