"use client";

import { Fragment, useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { Box, Heading, SimpleGrid, Flex, Text, Tooltip } from "@chakra-ui/react";
import { HeadingDivider } from "components";
import { AiFillHtml5, AiOutlineAntDesign, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiVisualstudio, DiGit } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaAws } from "react-icons/fa";
import {
	SiSvelte,
	SiExpress,
	SiNestjs,
	SiGraphql,
	SiNodedotjs,
	SiTypescript,
	SiMongodb,
	SiPostgresql,
	SiPrisma,
	SiDocker,
	SiPostman
} from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";

import HeadlessUiIcon from "public/assets/svg/headlessui.svg";
import MuiIcon from "public/assets/svg/mui.svg";
import ChakraIcon from "public/assets/svg/chakraui.svg";
import StyledIcon from "public/assets/svg/styledcomponents.svg";

const Technologies = [
	{
		category: "Front-end",
		items: [
			{ name: "HTML", icon: <AiFillHtml5 size={32} /> },
			{ name: "CSS", icon: <DiCss3 size={32} /> },
			{ name: "JS", icon: <IoLogoJavascript size={32} /> },
			{ name: "React", icon: <FaReact size={32} /> },
			{ name: "Next", icon: <TbBrandNextjs size={32} /> },
			{ name: "Svelte", icon: <SiSvelte size={32} /> },
			{ name: "Tailwind CSS", icon: <TbBrandTailwind size={32} /> },
			{ name: "MUI", icon: <MuiIcon width={32} /> },
			{ name: "AntD", icon: <AiOutlineAntDesign size={32} /> },
			{ name: "Bootstrap", icon: <BsBootstrap size={32} /> },
			{ name: "Chakra", icon: <ChakraIcon width={32} /> },
			{ name: "styled components", icon: <StyledIcon width={32} /> },
			{ name: "HeadlessUI", icon: <HeadlessUiIcon width={32} /> }
		]
	},
	{
		category: "Back-end",
		items: [
			{ name: "Node.js", icon: <SiNodedotjs size={32} /> },
			{ name: "Express.js", icon: <SiExpress size={32} /> },
			{ name: "GraphQL", icon: <SiGraphql size={32} /> },
			{ name: "POSTMAN", icon: <SiPostman size={32} /> },
			{ name: "Nest.js", icon: <SiNestjs width={32} /> }
		]
	},
	{
		category: "Database",
		items: [
			{ name: "MongoDB", icon: <SiMongodb size={32} /> },
			{ name: "PostgreSQL", icon: <SiPostgresql width={36} /> },
			{ name: "Prisma", icon: <SiPrisma width={32} /> }
		]
	},
	{
		category: "Other tools",
		items: [
			{ name: "Git", icon: <DiGit size={32} /> },
			{ name: "Docker", icon: <SiDocker size={32} /> },
			{ name: "Github", icon: <AiFillGithub size={32} /> },
			{ name: "VsCode", icon: <DiVisualstudio size={32} /> },
			{ name: "AWS", icon: <FaAws size={32} /> },
			{ name: "TypeScript", icon: <SiTypescript width={32} /> }
		]
	}
];

export function TechnologiesSection() {
	const textRef = useRef(null);
	const stackRef = useRef(null);
	const isTextInView = useInView(textRef, { once: true });
	const isStackInView = useInView(stackRef, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<Box as="section" id="tech" className="section">
				<HeadingDivider title="Technologies" />
				<Text
					fontSize="xl"
					pt={5}
					pb={10}
					tabIndex="0"
					ref={textRef}
					style={{
						transform: isTextInView ? "none" : "translateX(-200px)",
						opacity: isTextInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
					}}
				>
					{`I'm familiar with the following technologies and tools:`}
				</Text>

				{!!Technologies.length && (
					<SimpleGrid columns={[1, null, 4]} spacing={[5, 10]}>
						{Technologies.map((tech, index) => {
							return (
								<Box
									key={tech.category}
									ref={stackRef}
									sx={{
										transform: isStackInView
											? "none"
											: `${index === 0 ? "translateY(250px)" : `translateY(${200 / index}px)`}`,
										opacity: isStackInView ? 1 : 0,
										transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
											index === 0 ? 0 : 0.5 * index
										}s`
									}}
								>
									<Heading as="h3" fontSize="2xl" tabIndex="0">
										{tech.category}
									</Heading>
									<Flex py={5} gap={4} flexWrap="wrap">
										{tech.items.map((item) => (
											<Fragment key={item.name}>
												<Tooltip label={item.name} hasArrow arrowSize={8}>
													<span aria-label={item.name} tabIndex="0" role="img">
														{item.icon}
													</span>
												</Tooltip>
											</Fragment>
										))}
									</Flex>
								</Box>
							);
						})}
					</SimpleGrid>
				)}
			</Box>
		</LazyMotion>
	);
}
