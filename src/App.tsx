import Wrapper  from "./components/Wrapper";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer  from "./components/Footer";


import Announcement from "./components/Announcement";
import Promo from "./components/Promo";
import Nav from "./components/Nav";
import Cards from "./components/Cards";


const App = () => {
	return (
		<>
			<Wrapper>
				<Header />
				<Main>
					<Announcement home />
					<Promo />
					<Nav />
					<Cards home />
				</Main>
				<Footer />
			</Wrapper>
		</>
	)
}

export default App;
