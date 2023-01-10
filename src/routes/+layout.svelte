<script lang="ts">
	import '../app.css';
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<a href="/" class="font-bold text-xl">Ezaz</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/test">Item 1</a></li>
			<li><a href="/fest">Item 2</a></li>
			<li><a href="/den">Item 3</a></li>
		</ul>
	</div>
</div>
<slot />
