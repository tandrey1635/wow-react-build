const Announcement = ({ raidsArmourWarrior, raidsArmourDruid, raidsArmourPriest, raidsArmourMage, raidsArmourMonk, raidsArmourHunter, raidsArmourDemonHunter, raidsArmourPaladin, raidsArmourRogue, raidsArmourDeathKnight, raidsArmourWarlock, raidsArmourShaman, raidsArmourAwakener, oneHandedWeapons, twoHandedWeapons, rangeWeapons, legendaryWeapons, artefactWeapons, decorativeWeapons, shields, cloaks, fishingRods }) => {
	return (
		<section className="announcement">
			<div className="container">
				<div className="announcement__description d-flex flex-column justify-content-center mx-auto my-5">
					<h1
						className={`${
							raidsArmourWarrior
								? "announcement__header announcement__header_warrior"
								:
							raidsArmourDruid
								? "announcement__header announcement__header_druid"
								:
							raidsArmourPriest
								? "announcement__header announcement__header_priest"
								:
							raidsArmourMage
								? "announcement__header announcement__header_mage"
								:
							raidsArmourMonk
								? "announcement__header announcement__header_monk"
								:
							raidsArmourHunter
								? "announcement__header announcement__header_hunter"
								:
							raidsArmourDemonHunter
								? "announcement__header announcement__header_demon-hunter"
								:
							raidsArmourPaladin
								? "announcement__header announcement__header_paladin"
								:
							raidsArmourRogue
								? "announcement__header announcement__header_rogue"
								:
							raidsArmourDeathKnight
								? "announcement__header announcement__header_death-knight"
								:
							raidsArmourWarlock
								? "announcement__header announcement__header_warlock"
								:
							raidsArmourShaman
								? "announcement__header announcement__header_shaman"
								:
							raidsArmourAwakener
								? "announcement__header announcement__header_awakener"
								:
							oneHandedWeapons
								? "announcement__header announcement__header_one-handed-weapons"
								:
							twoHandedWeapons
								? "announcement__header announcement__header_two-handed-weapons"
								:
							rangeWeapons
								? "announcement__header announcement__header_range-weapons"
								:
							legendaryWeapons
								? "announcement__header announcement__header_legendary-weapons"
								:
							artefactWeapons
								? "announcement__header announcement__header_artefact-weapons"
								:
							decorativeWeapons
								? "announcement__header announcement__header_decorative-weapons"
								:
							shields
								? "announcement__header announcement__header_shields"
								:
							cloaks
								? "announcement__header announcement__header_cloaks"
								:
							fishingRods
								? "announcement__header announcement__header_fishing-rods"
								: "announcement__header"
						} text-center`}
					>
						{raidsArmourWarrior
							? "Комплекты рейдовой брони на воина"
							:
						raidsArmourDruid
							? "Комплекты рейдовой брони на друида"
							:
						raidsArmourPriest
							? "Комплекты рейдовой брони на жреца"
							:
						raidsArmourMage
							? "Комплекты рейдовой брони на мага"
							:
						raidsArmourMonk
							? "Комплекты рейдовой брони на монаха"
							:
						raidsArmourHunter
							? "Комплекты рейдовой брони на охотника"
							:
						raidsArmourDemonHunter
							? "Комплекты рейдовой брони на охотника на демонов"
							:
						raidsArmourPaladin
							? "Комплекты рейдовой брони на паладина"
							:
						raidsArmourRogue
							? "Комплекты рейдовой брони на разбойника"
							:
						raidsArmourDeathKnight
							? "Комплекты рейдовой брони на рыцаря смерти"
							:
						raidsArmourWarlock
							? "Комплекты рейдовой брони на чернокнижника"
							:
						raidsArmourShaman
							? "Комплекты рейдовой брони на шамана"
							:
						raidsArmourAwakener
							? "Комплекты рейдовой брони на пробудителя"
							:
						oneHandedWeapons
							? "Одноручное оружие"
							:
						twoHandedWeapons
							? "Двуручное оружие"
							:
						rangeWeapons
							? "Оружие дальнего боя"
							:
						legendaryWeapons
							? "Легендарное оружие"
							:
						artefactWeapons
							? "Артефакты Legion"
							:
						decorativeWeapons
							? "Декоративное оружие"
							:
						shields
							? "Щиты"
							:
						cloaks
							? "Плащи"
							:
						fishingRods
							? "Удочки"
							: "World of Warcraft"}
					</h1>
					<p className="announcement__text text-center">
						Сэкономьте свое время, приобретая предметы, валюту и
						навыки, чтобы играть на другом уровне
					</p>
				</div>
			</div>
		</section>
	);
};

export default Announcement;
