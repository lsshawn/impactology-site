<script lang="ts">
	interface Props {
		title: string;
		description: string;
		ogTitle?: string;
		ogDescription?: string;
		ogImage?: string;
		ogType?: string;
		canonical?: string;
		noindex?: boolean;
		jsonLd?: object;
		twitterCard?: string;
	}

	let {
		title,
		description,
		ogTitle,
		ogDescription,
		ogImage,
		ogType = 'website',
		canonical,
		noindex = false,
		jsonLd,
		twitterCard = 'summary_large_image'
	}: Props = $props();

	let siteName = 'Impactology';
	let siteUrl = 'https://impactology.com.au';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={ogTitle || title} />
	<meta property="og:description" content={ogDescription || description} />
	<meta property="og:type" content={ogType} />
	<meta property="og:site_name" content={siteName} />
	{#if ogImage}
		<meta property="og:image" content={ogImage} />
	{/if}
	{#if canonical}
		<link rel="canonical" href={canonical} />
	{/if}
	<meta name="twitter:card" content={twitterCard} />
	{#if noindex}
		<meta name="robots" content="noindex, nofollow" />
	{/if}
	{#if jsonLd}
		{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
	{/if}
</svelte:head>
