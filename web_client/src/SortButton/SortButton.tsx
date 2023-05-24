import * as React from 'react'
import { NavLink } from 'react-router-dom'


export const SortButton:React.FC = () => {

	return (
		<NavLink to="/sorted">
			<button className="SortButton">sort!</button>
		</NavLink>

	)
}