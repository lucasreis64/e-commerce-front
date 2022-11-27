import React from "react";
import { Categorias, IconeExcluir, SideBarStyled } from "./SideBarStyled";
import iconeExcluir from "../../img/Cancel.png";
import { Link } from "react-router-dom";

export default function SideBar({ active }) {
	const closesidebar = () => {
		active(false);
	};

	return (
		<>
			<SideBarStyled sidebar={active}>
				<IconeExcluir>
					<img
						onClick={closesidebar}
						src={iconeExcluir}
					/>
				</IconeExcluir>

				<Categorias>
					<Link to='/'>
						<h1>Todos</h1>
					</Link>
					<Link to='/celular'>
						<h1> Smarthphones </h1>
					</Link>
<<<<<<< HEAD
					<Link to='/notebooks'>
						<h1> Notebooks</h1>
					</Link>
=======
					<Link to=''>
						<h1> Notebooks</h1>
					</Link>
					<Link to=''>
						<h1> PC Gamer</h1>
					</Link>
>>>>>>> 4a49127 (feat: added links to routes)
					<Link to='/tv'>
						<h1>TV</h1>
					</Link>
				</Categorias>
			</SideBarStyled>
		</>
	);
}
