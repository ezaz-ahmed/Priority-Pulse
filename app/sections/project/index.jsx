"use client";

import Link from "next/link";
import { useRef, Suspense } from 'react';
import { useInView } from "framer-motion"
import dynamic from "next/dynamic";
import { Box, Button, Center, SimpleGrid } from "@chakra-ui/react";
// import { db } from "@config/firebase";

import { HeadingDivider } from "components";

const DynamicLoader = dynamic(() => import("components/Loader").then((mod) => mod.Loader));


export function ProjectsSection() {
	const btnRef = useRef(null);
	const isBtnInView = useInView(btnRef, { once: true });

	return (
		<Box as="section" id="projects" className="section">
			<HeadingDivider title="Latest projects" />
			<Box py={8} />

			<Suspense fallback={<DynamicLoader width="100%" />}> 
				 <SimpleGrid spacingY={10} spacingX={6} columns={[1, 1, 3]}>
					{/* {projects
						?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
						?.map((project, index) => (
							<ProjectItem key={project._id} project={project} index={index} />
						))} */}
				</SimpleGrid>
			</Suspense>

			<Center mt={[8, 8, 16]}>
				<Link
					href="/projects"
					tabIndex={-1}
					aria-label="Go to project page"
					ref={btnRef}
					style={{
						transform: btnRef ? "none" : "translateX(-50px)",
						opacity: isBtnInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
					}}
				>
					<Button aria-label="See more projects">More projects</Button>
				</Link>
			</Center>
		</Box>
	);
}
