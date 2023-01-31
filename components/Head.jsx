import { Seo } from "components";

export function AppHead({ title = "Ezaz Ahmed | Software Developer & Probelm Solver" }) {
	return (
		<>
			<title>{title}</title>
			<meta content="width=device-width, initial-scale=1" name="viewport" />
			<link rel="icon" href="/favicon.png" />
			<Seo />
		</>
	);
}
