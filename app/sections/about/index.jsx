"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { Box, Flex, Text } from "@chakra-ui/react";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<Box as="section" id="about" className="section">
				<HeadingDivider title="About me" />
				<Flex direction="column" gap={3} pt={10} pb={16} maxW="5xl">
					<Text
						fontSize="xl"
						tabIndex="0"
						ref={ref}
						sx={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						My name is Ezaz. I have been a web developer for more than 2 years. I have started my
						programming journey as Full-stack web developer. Now I&apos;m in love with MERN
						ecosystem. In the future I see myself learning Golang or Rust, because of my big
						interest in these technologies.
					</Text>
					<Text
						fontSize="xl"
						tabIndex="0"
						ref={ref}
						sx={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
						}}
					>
						I have studied computer science at Bangladesh Institute of Science & Technology where I
						definitely fall in love with problem solving and programming.
					</Text>
					<Text
						fontSize="xl"
						tabIndex="0"
						ref={ref}
						sx={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s"
						}}
					>
						{`I'm familiar with Front-end technologies like React.js, Next.js, SvelteKit, Back-end technologies like Express.js, Nest.js & Database like MongoDB & PostgreSQL. I enjoy learning technologies I like.`}
					</Text>
					<Text
						fontSize="xl"
						tabIndex="0"
						ref={ref}
						sx={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2s"
						}}
					>
						Spending time working, improving, reading interesting dev articles or watching new
						videos of tech youtubers is something I enjoy a lot, as it is something I use for many
						hours daily. It allows me to be familiar with cutting-edge technologies and save time
						when I start some project.
					</Text>
				</Flex>

				<TimeLine />
			</Box>
		</LazyMotion>
	);
}
