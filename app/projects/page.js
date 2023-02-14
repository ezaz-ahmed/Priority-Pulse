"use client";

import { ErrorBoundary } from "react-error-boundary";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { HeadingDivider } from "components";
import { Filter } from "./components/Filter";
// rome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import  Error from "./error";

export default function Page() {

	const onClick = () => {

	}

	return (
		<Box as="section" id="projects" className="section">
			<HeadingDivider title="Relevant projects" />

			<Filter onClick={onClick} />

			<ErrorBoundary FallbackComponent={Error}>
				<SimpleGrid spacingY={10} spacingX={6} columns={[1, 1, 3]}>
					{/* {filteredProjects
						?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
						?.map((project) => (
							<ProjectItem key={project._id} project={project} />
						))} */}
				</SimpleGrid>
			</ErrorBoundary>
		</Box>
	);
}
