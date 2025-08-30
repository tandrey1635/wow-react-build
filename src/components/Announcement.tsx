const Announcement = ({ warrior, druid, priest, mage, monk, hunter, demonHunter, paladin, awakener, rogue, deathKnight, warlock, shaman, oneHandedWeapons, twoHandedWeapons, rangeWeapons, legendaryWeapons, artefactWeapons, decorativeWeapons, shields, cloaks, fishingRods, waterMounts, earthMounts, flyMounts, hordeGold, allianceGold }) => {
	return (
		<section className="announcement">
			<div className="container">
				<div className="announcement__description d-flex flex-column justify-content-center mx-auto my-5">
					<h1
						className={`${
							warrior
								? "announcement__header announcement__header_warrior"
								:
							druid
								? "announcement__header announcement__header_druid"
								:
							priest
								? "announcement__header announcement__header_priest"
								:
							mage
								? "announcement__header announcement__header_mage"
								:
							monk
								? "announcement__header announcement__header_monk"
								:
							hunter
								? "announcement__header announcement__header_hunter"
								:
							demonHunter
								? "announcement__header announcement__header_demon-hunter"
								:
							paladin
								? "announcement__header announcement__header_paladin"
								:
							rogue
								? "announcement__header announcement__header_rogue"
								:
							deathKnight
								? "announcement__header announcement__header_death-knight"
								:
							warlock
								? "announcement__header announcement__header_warlock"
								:
							shaman
								? "announcement__header announcement__header_shaman"
								:
							awakener
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
								:
							waterMounts
								? "announcement__header announcement__header_water-mounts"
								:
							earthMounts
								? "announcement__header announcement__header_earth-mounts"
								:
							flyMounts
								? "announcement__header announcement__header_fly-mounts"
								:
							hordeGold
								? "announcement__header announcement__header_horde-gold"
								:
							allianceGold
								? "announcement__header announcement__header_alliance-gold"
								: "announcement__header"
							} text-center`
						}
					>
						{
							warrior
								? "Комплекты рейдовой брони на воина"
								:
							druid
								? "Комплекты рейдовой брони на друида"
								:
							priest
								? "Комплекты рейдовой брони на жреца"
								:
							mage
								? "Комплекты рейдовой брони на мага"
								:
							monk
								? "Комплекты рейдовой брони на монаха"
								:
							hunter
								? "Комплекты рейдовой брони на охотника"
								:
							demonHunter
								? "Комплекты рейдовой брони на охотника на демонов"
								:
							paladin
								? "Комплекты рейдовой брони на паладина"
								:
							awakener
								? "Комплекты рейдовой брони на пробудителя"
								:
							rogue
								? "Комплекты рейдовой брони на разбойника"
								:
							deathKnight
								? "Комплекты рейдовой брони на рыцаря смерти"
								:
							warlock
								? "Комплекты рейдовой брони на чернокнижника"
								:
							shaman
								? "Комплекты рейдовой брони на шамана"
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
								:
							waterMounts
								? "Водные маунты"
								:
							earthMounts
								? "Наземные маунты"
								:
							flyMounts
								? "Летающие маунты"
								:
							hordeGold
								? "Золото для игроков орды"
								:
							allianceGold
								? "Золото для игроков альянса"
								: "World of Warcraft"
						}
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
