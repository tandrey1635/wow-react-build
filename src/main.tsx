import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.sass'
import { BrowserRouter, Routes, Route } from "react-router";



import Warrior  from "./pages/raids-armours/Warrior.tsx";
import Druid  from "./pages/raids-armours/Druid.tsx";
import Priest  from "./pages/raids-armours/Priest.tsx";
import Mage  from "./pages/raids-armours/Mage.tsx";
import Monk  from "./pages/raids-armours/Monk.tsx";
import Hunter  from "./pages/raids-armours/Hunter.tsx";
import DemonHunter  from "./pages/raids-armours/DemonHunter.tsx";
import Paladin  from "./pages/raids-armours/Paladin.tsx";
import Rogue  from "./pages/raids-armours/Rogue.tsx";
import DeathKnight  from "./pages/raids-armours/DeathKnight.tsx";
import Warlock  from "./pages/raids-armours/Warlock.tsx";
import Shaman  from "./pages/raids-armours/Shaman.tsx";
import Awakener  from "./pages/raids-armours/Awakener.tsx";


import OneHandedWeapons  from "./pages/weapons/OneHanded.tsx";
import TwoHandedWeapons  from "./pages/weapons/TwoHanded.tsx";
import RangeWeapons  from "./pages/weapons/Range.tsx";
import LegendaryWeapons  from "./pages/weapons/Legendary.tsx";
import ArtefactWeapons  from "./pages/weapons/Artefact.tsx";
import DecorativeWeapons  from "./pages/weapons/Decorative.tsx";



import Cloaks  from "./pages/armours/Cloaks.tsx";
import Shields  from "./pages/armours/Shields.tsx";
import FishingRods  from "./pages/armours/FishingRods.tsx";



import WaterMounts  from "./pages/mounts/Water.tsx";
import EarthMounts  from "./pages/mounts/Earth.tsx";
import FlyMounts  from "./pages/mounts/Fly.tsx";



import HordeGold  from "./pages/gold/Horde.tsx";
import AllianceGold  from "./pages/gold/Alliance.tsx";






import Honour  from "./pages/pvp/Honour.tsx";
import Arena  from "./pages/pvp/Arena.tsx";
import Rbg  from "./pages/pvp/Rbg.tsx";







createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="raids-armours/warrior" element={<Warrior />} />
				<Route path="raids-armours/druid" element={<Druid />} />
				<Route path="raids-armours/priest" element={<Priest />} />
				<Route path="raids-armours/mage" element={<Mage />} />
				<Route path="raids-armours/monk" element={<Monk />} />
				<Route path="raids-armours/hunter" element={<Hunter />} />
				<Route path="raids-armours/demon-hunter" element={<DemonHunter />} />
				<Route path="raids-armours/paladin" element={<Paladin />} />
				<Route path="raids-armours/rogue" element={<Rogue />} />
				<Route path="raids-armours/death-knight" element={<DeathKnight />} />
				<Route path="raids-armours/warlock" element={<Warlock />} />
				<Route path="raids-armours/shaman" element={<Shaman />} />
				<Route path="raids-armours/awakener" element={<Awakener />} />


				<Route path="weapons/one-handed" element={<OneHandedWeapons />} />
				<Route path="weapons/two-handed" element={<TwoHandedWeapons />} />
				<Route path="weapons/range" element={<RangeWeapons />} />
				<Route path="weapons/legendary" element={<LegendaryWeapons />} />
				<Route path="weapons/artefact" element={<ArtefactWeapons />} />
				<Route path="weapons/decorative" element={<DecorativeWeapons />} />


				<Route path="armours/shields" element={<Shields />} />
				<Route path="armours/cloaks" element={<Cloaks />} />
				<Route path="armours/fishing-rods" element={<FishingRods />} />


				<Route path="mounts/water" element={<WaterMounts />} />
				<Route path="mounts/earth" element={<EarthMounts />} />
				<Route path="mounts/fly" element={<FlyMounts />} />


				<Route path="gold/horde" element={<HordeGold />} />
				<Route path="gold/alliance" element={<AllianceGold />} />






				<Route path="pvp/honour" element={<Honour />} />
				<Route path="pvp/arena" element={<Arena />} />
				<Route path="pvp/rbg" element={<Rbg />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
