import React from 'react'

// import './WebApi.styles.css';

import { ConsoleBox, ConsoleTitle, List, ListItem } from '../../styles/console'
import { Box } from '../../styles/flex'

const WebApi = (input) => {
	return (
		<ConsoleBox>
			<Box display="flex" justifyContent="center" alignItems="center">
				<ConsoleTitle p="10px">WebApi</ConsoleTitle>
			</Box>

			<Box borderTop={1} borderStyle="solid" color="colorBlue" />

			<Box display="flex" justifyContent="center" m="20px 0">
				<List>
					<ListItem>$.on('button', 'click', ...)</ListItem>

					<ListItem>timeout()</ListItem>
				</List>
			</Box>
		</ConsoleBox>
	)
}

export default WebApi
