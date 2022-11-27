import styled from "styled-components";

export const Screen = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: linear-gradient(to right, black, blue);
	width: 100vw;
	height: 100vh;
	box-sizing: border-box;
`;

export const SmartPhoneContainer = styled.div`
	width: 400px;
	height: 85vh;
	background-color: ${(props) => (props.noturno ? "#1C1C1C" : "#8d99ae")};
	box-sizing: border-box;
	overflow: scroll;
	position: relative;
	border-radius: 30px;
	/* Hide scrollbar for Chrome, Safari and Opera */
	&::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */

	@media (max-width: 600px) {
		width: 100%;
		height: 100vh;
		border-radius: 0px;
	}
`;
