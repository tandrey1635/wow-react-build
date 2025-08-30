const Announcement = ({ warrior, druid, priest, mage, monk, hunter, demonHunter, paladin, awakener, rogue, deathKnight, warlock, shaman, oneHandedWeapons, twoHandedWeapons, rangeWeapons, legendaryWeapons, artefactWeapons, decorativeWeapons, shields, cloaks, fishingRods, waterMounts, earthMounts, flyMounts, hordeGold, allianceGold, honour, arena, rbg }) => {
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
								:
							honour
								? "announcement__header announcement__header_honour"
								:
							arena
								? "announcement__header announcement__header_arena"
								:
							rbg
								? "announcement__header announcement__header_rbg"
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
								:
							honour
								? "Очки чести"
								:
							arena
								? "Очки арены"
								:
							rbg
								? "Рейтинговые поля боя"
								: "World of Warcraft"
						}
					</h1>
					<h2 className="announcement__subheader text-center">
						{
							warrior
								? "Обрети мощь титана. Получите полный комплект, станьте неудержимой силой в бою и легендой Азерота!"
								:
							druid
								? "Обрети мудрость Древних. Получите полный комплект, станьте воплощением неудержимой силы природы и легендой Азерота!"
								:
							priest
								? "Твой путь к абсолютной власти над Светом и Тьмой. Получите полный комплект, станьте проводником божественной воли и легендой Азерота!"
								:
							mage
								? "Покори магию стихий. Получите полный комплект, станьте повелителем огня, льда и тайной магии, обретите силу, доступную лишь избранным и станьте легендой Азерота!"
								:
							monk
								? "Обрети гармонию стихий и единство духа через энергию ци. Получите полный комплект, станьте воплощением баланса сил и легендой Азерота!"
								:
							hunter
								? "Стань хозяином диких земель. Получите полный комплект, обретите верного зверя, станьте неумолимым преследователем и легендой Азерота!"
								:
							demonHunter
								? "Открой в себе ярость Иллидари, охотников на демонов Пылающего Легиона. Получите полный комплект, станьте воплощением мести и легендой Азерота!"
								:
							paladin
								? "Обрушь на врагов молот правосудия и испепели их священным огнём возмездия. Получите полный комплект, станьте благородным воителем Света, непоколебимым защитником и легендой Азерота!"
								:
							awakener
								? "Управляй магией пяти драконьих родов. Получите полный комплект, обрушьте на врагов испепеляющее дыхание красных драконов, леденящую магию синих, целительную силу зелёных, сокрушающую мощь чёрных и вневременную силу бронзовых драконов, парите над полем боя и станьте легендой Азерота!"
								:
							rogue
								? "Растворись в тенях и нанеси смертельный удар отравленным клинком. Получите полный комплект, станьте скрытным убийцей, мастером ядовитых клинков и легендой Азерота!"
								:
							deathKnight
								? "Пробуди силы, что правят самой смертью. Ледяное дыхание смерти, всепоглощающую чуму, пожирающую плоть, и кровь, дарующую вечную жизнь ценой тысяч жертв. Получите полный комплект, обрушьте на врагов истинную мощь Властелина Смерти и станьте легендой Азерота!"
								:
							warlock
								? "Подчини себе необузданную силу хаоса и испепеляющее пламя Скверны. Получите полный комплект, обрушьте на врагов адское пламя, энергию хаоса и станьте легендой Азерота!"
								:
							shaman
								? "Пробуди силу духов земли, огня, воды и воздуха. Прими благословение древних предков. Получите полный комплект, станьте воплощением могущества стихий и легендой Азерота!"
								: "Станьте легендой Азерота!"
						}
					</h2>
					<p className="announcement__text text-center">
						Сэкономьте свое время, приобретая предметы, валюту и
						достижения, чтобы играть на другом уровне
					</p>
				</div>
			</div>
		</section>
	);
};

export default Announcement;
