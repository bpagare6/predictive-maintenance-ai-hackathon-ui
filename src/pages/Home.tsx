import NavBar from '@src/layouts/NavBar';
import ProjectGrid from '@src/layouts/ProjectGrid';

function Home() {
	return (
		<div className="w-screen h-full">
			<NavBar />
			<ProjectGrid />
		</div>
	);
}

export default Home;
