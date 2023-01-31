"use client";

import { useContext } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { Flex, Text } from "@chakra-ui/react";
import { ConnectMedia, ScrollTop } from "components";
import { LayoutContext } from "context/layout";

export function AppFooter() {
	const { footerRef } = useContext(LayoutContext);

	return (
		<LazyMotion features={domAnimation}>
			<Flex
				as="footer"
				py={10}
				justifyContent="space-between"
				alignItems="center"
				flexDirection={["column", "row"]}
				gap={5}
				borderTop="1px solid currentColor"
				ref={footerRef}
			>
				<Flex flexDirection={["column"]}>
					<Text>{"This website doesn't track you. Have a nice day."}</Text>
				</Flex>
				<ScrollTop />
				<ConnectMedia />
			</Flex>
		</LazyMotion>
	);
}
