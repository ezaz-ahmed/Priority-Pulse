"use client";

import { FaGoogle } from "react-icons/fa"
import { Button, Center } from "@chakra-ui/react";

export default function Page() {
	return (
			<Center mt={[8, 8, 16]}>
					<Button aria-label="See more projects" leftIcon={<FaGoogle />}>Continue With Google</Button>
			</Center>
	);
}
