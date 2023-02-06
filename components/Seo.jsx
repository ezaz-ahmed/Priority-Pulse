export function Seo() {
	const seo = {
		author: "Ezaz Ahmed",
		title: "Ezaz Ahmed",
		description:
			"Expert full stack dev w/ MERN spec. Delivers high-performing, innovative apps w/ MongoDB, Express, React, & Node.js. Focused on seamless user exp. Partner for your next web dev project. Boost your online presence w/ a skilled pro",
		url: "https://ezaz.web.app",
		keywords:
			"MERN Stack, Full Stack Development, MongoDB, Express, React, Node.js, Web Applications, User Experience, Innovative Solutions, Performance-Driven, Latest Tools and Technologies, Seamless User Interfaces, Skilled Professional, Web Development Projects, Online Presence, High-Performing, Dedicated Developer"
	};

	return (
		<>
			<link rel="canonical" href={seo.url} />
			<meta name="description" content={seo.description} />
			<meta name="keywords" content={seo.keywords} />
			<meta name="author" content={seo.author} />
			<meta name="og:title" content={seo.title} />
			<meta property="og:site_name" data-page-subject="true" content={seo.title} />
			<meta property="og:url" content={seo.url} />
			<meta name="og:description" content={seo.description} />
			<meta name="og:image" content={seo.url + "/screenshot.webp"} />
			<meta property="og:image:width" content="800" />
			<meta property="og:image:height" content="288" />
		</>
	);
}
