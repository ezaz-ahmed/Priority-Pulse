import { gql } from 'graphql-request';

export const authorsQuery = gql`
	query GetAuthors {
		authors {
			name
			intro
			bio
			slug
			picture {
				url
			}
		}
	}
`;
