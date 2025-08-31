import { Link } from "react-router";


const Card = ({home, raidsArmourWarrior}) => {

	const basePathImg = '/src/assets/img'

	/* Фото рейдовая броня гл стр */
	const warriorCardImg = `${basePathImg}/promo/bg/classes/garrosh-hellscrim.png`
	const druidCardImg = `${basePathImg}/promo/bg/classes/malfurion.png`
	const priestCardImg = `${basePathImg}/promo/bg/classes/velen.png`
	const mageCardImg = `${basePathImg}/promo/bg/classes/djaina-proudmoure.png`
	const monkCardImg = `${basePathImg}/promo/bg/classes/tjan-dju.png`
	const hunterCardImg = `${basePathImg}/promo/bg/classes/rexar.png`
	const demonHunterCardImg = `${basePathImg}/promo/bg/classes/illidan.png`
	const paladinCardImg = `${basePathImg}/promo/bg/classes/tirion-fordring.png`
	const rogueCardImg = `${basePathImg}/promo/bg/classes/valira-sangvinar.png`
	const deathKnightCardImg = `${basePathImg}/promo/bg/classes/lich-king.png`
	const warlockCardImg = `${basePathImg}/promo/bg/classes/guldan.png`
	const shamanCardImg = `${basePathImg}/promo/bg/classes/thrall.png`
	const awakenerCardImg = `${basePathImg}/promo/bg/classes/sarkareth.png`

	/* Фото оружие гл стр */
	const OneHandedWeaponsCardImg = `${basePathImg}/weapons/bg/one-handed.png`
	const TwoHandedWeaponsCardImg = `${basePathImg}/weapons/bg/two-handed.png`
	const RangeWeaponsCardImg = `${basePathImg}/weapons/bg/range.png`
	const LegendaryWeaponsCardImg = `${basePathImg}/weapons/bg/legendary.png`
	const ArtefactWeaponsCardImg = `${basePathImg}/weapons/bg/artefact.png`
	const DecorativeWeaponsCardImg = `${basePathImg}/weapons/bg/decorative.png`

	/* Фото броня гл стр */
	const CloaksCardImg = `${basePathImg}/armours/bg/cloak.png`
	const ShieldsCardImg = `${basePathImg}/armours/bg/shields.png`
	const FishingRodsCardImg = `${basePathImg}/armours/bg/fishing-rods.png`

	/* Фото маунты гл стр */
	const WaterMountsCardImg = `${basePathImg}/mounts/bg/water.png`
	const EarthMountsCardImg = `${basePathImg}/mounts/bg/earth.png`
	const FlyMountsCardImg = `${basePathImg}/mounts/bg/fly.png`


	/* Фото золото гл стр */
	const HordeGoldCardImg = `${basePathImg}/gold/bg/horde.png`
	const AllianceGoldCardImg = `${basePathImg}/gold/bg/alliance.png`




	/* Фото pvp гл стр */
	const HonourCardImg = `${basePathImg}/pvp/bg/honour.png`
	const ArenaCardImg = `${basePathImg}/pvp/bg/arena.png`
	const RbgCardImg = `${basePathImg}/pvp/bg/rbg.png`


	const dollarImg = `${basePathImg}/gold/bg/dollar.png`
	const dollarAlt = '$'

	const goldImg = `${basePathImg}/gold/bg/gold.png`
	const goldAlt = 'gold-img'


	return (
		<section className="services">
			<div className="container">
				<div className="tab-content" id="pills-tabContent">
					{ home &&
						<>
							{/* Таб контент рейдовая броня */}
							<div className="tab-pane fade show active" id="pills-raids-armour">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									<div className="card card-warrior">
										<Link to="raids-armours/warrior">
											<img src={warriorCardImg} className="card-img" alt="Комплекты рейдовой брони для воина" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids-armours/warrior">
												<h3 className="card-title card-title-warrior">Воин</h3>
											</Link>
											<p className="card-text card-text-warrior">Комплекты рейдовой брони для воина</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-warrior">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids-armours/warrior" className="card-btn card-btn-warrior">Подробнее</Link>
										</div>
									</div>

									<div className="card card-druid">
										<Link to="raids-armours/druid">
											<img src={druidCardImg} className="card-img" alt="Комплекты рейдовой брони для друида" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids-armours/druid">
												<h3 className="card-title card-title-druid">Друид</h3>
											</Link>
											<p className="card-text card-text-druid">Комплекты рейдовой брони для друида</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-druid">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids-armours/druid" className="card-btn card-btn-druid">Подробнее</Link>
										</div>
									</div>

									<div className="card card-priest">
										<Link to="raids-armours/priest">
											<img src={priestCardImg} className="card-img" alt="Комплекты рейдовой брони для жреца" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids-armours/priest">
												<h3 className="card-title card-title-priest">Жрец</h3>
											</Link>
											<p className="card-text card-text-priest">Комплекты рейдовой брони для жреца</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-priest">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids-armours/priest" className="card-btn card-btn-priest">Подробнее</Link>
										</div>
									</div>

									<div className="card card-mage">
										<Link to="raids-armours/mage">
											<img src={mageCardImg} className="card-img" alt="Комплекты рейдовой брони для мага" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids-armours/mage">
												<h3 className="card-title card-title-mage">Маг</h3>
											</Link>
											<p className="card-text card-text-mage">Комплекты рейдовой брони для мага</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-mage">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids-armours/mage" className="card-btn card-btn-mage">Подробнее</Link>
										</div>
									</div>

									<div className="card card-monk">
										<Link to="raids-armours/monk">
											<img src={monkCardImg} className="card-img" alt="Комплекты рейдовой брони для монаха" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids-armours/monk">
												<h3 className="card-title card-title-monk">Монах</h3>
											</Link>
											<p className="card-text card-text-monk">Комплекты рейдовой брони для монаха</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-monk">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids-armours/monk" className="card-btn card-btn-monk">Подробнее</Link>
										</div>
									</div>

									<div className="card card-hunter">
										<Link to="raids-armours/hunter">
											<img src={hunterCardImg} className="card-img" alt="Комплекты рейдовой брони для охотника" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids-armours/hunter">
												<h3 className="card-title card-title-hunter">Охотник</h3>
											</Link>
											<p className="card-text card-text-hunter">Комплекты рейдовой брони для охотника</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-hunter">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids-armours/hunter" className="card-btn card-btn-hunter">Подробнее</Link>
										</div>
									</div>

									<div className="card card-demon-hunter">
										<Link to="raids-armours/demon-hunter">
											<img src={demonHunterCardImg} className="card-img" alt="Комплекты рейдовой брони для охотника на демонов" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids-armours/demon-hunter">
												<h3 className="card-title card-title-demon-hunter">Охотник на демонов</h3>
											</Link>
											<p className="card-text card-text-demon-hunter">Комплекты рейдовой брони для охотника на демонов</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-demon-hunter">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids-armours/demon-hunter" className="card-btn card-btn-demon-hunter">Подробнее</Link>
										</div>
									</div>

									<div className="card card-paladin">
										<Link to="raids-armours/paladin">
											<img src={paladinCardImg} className="card-img" alt="Комплекты рейдовой брони для паладина" />
										</Link>
										<div className="card-body">
											<Link className="card-link paladin-link" to="raids-armours/paladin">
												<h3 className="card-title card-title-paladin">Паладин</h3>
											</Link>
											<p className="card-text card-text-paladin">Комплекты рейдовой брони для паладина</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-paladin">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids-armours/paladin" className="card-btn card-btn-paladin">Подробнее</Link>
										</div>
									</div>

									<div className="card card-awakener">
										<Link to="raids-armours/awakener">
											<img src={awakenerCardImg} className="card-img" alt="Комплекты рейдовой брони для пробудителя" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids-armours/awakener">
												<h3 className="card-title card-title-awakener">Пробудитель</h3>
											</Link>
											<p className="card-text card-text-awakener">Комплекты рейдовой брони для пробудителя</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-awakener">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids-armours/awakener" className="card-btn card-btn-awakener">Подробнее</Link>
										</div>
									</div>

									<div className="card card-rogue">
										<Link to="raids-armours/rogue">
											<img src={rogueCardImg} className="card-img" alt="Комплекты рейдовой брони для разбойника" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids-armours/rogue">
												<h3 className="card-title card-title-rogue">Разбойник</h3>
											</Link>
											<p className="card-text card-text-rogue">Комплекты рейдовой брони для разбойника</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-rogue">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids-armours/rogue" className="card-btn card-btn-rogue">Подробнее</Link>
										</div>
									</div>

									<div className="card card-death-knight">
										<Link to="raids-armours/death-knight">
											<img src={deathKnightCardImg} className="card-img" alt="Комплекты рейдовой брони для рыцаря Смерти" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids-armours/death-knight">
												<h3 className="card-title card-title-death-knight">Рыцарь Смерти</h3>
											</Link>
											<p className="card-text card-text-death-knight">Комплекты рейдовой брони для рыцаря смерти</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-death-knight">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids-armours/death-knight" className="card-btn card-btn-death-knight">Подробнее</Link>
										</div>
									</div>

									<div className="card card-warlock">
										<Link to="raids-armours/warlock">
											<img src={warlockCardImg} className="card-img" alt="Комплекты рейдовой брони для чернокнижника" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids-armours/warlock">
												<h3 className="card-title card-title-warlock">Чернокнижник</h3>
											</Link>
											<p className="card-text card-text-warlock">Комплекты рейдовой брони для чернокнижника</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-warlock">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids-armours/warlock" className="card-btn card-btn-warlock">Подробнее</Link>
										</div>
									</div>

									<div className="card card-shaman">
										<Link to="raids-armours/shaman">
											<img src={shamanCardImg} className="card-img" alt="Комплекты рейдовой брони для шамана" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="raids-armours/shaman">
												<h3 className="card-title card-title-shaman">Шаман</h3>
											</Link>
											<p className="card-text card-text-shaman">Комплекты рейдовой брони для шамана</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-shaman">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="raids-armours/shaman" className="card-btn card-btn-shaman">Подробнее</Link>
										</div>
									</div>
								</div>
							</div>

							{ /* Таб контент оружие */}
							<div className="tab-pane fade show active mt-5" id="pills-weapons">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									<div className="card card-weapons card-weapons-one-handed">
										<Link to="weapons/one-handed">
											<img src={OneHandedWeaponsCardImg} className="card-img" alt="Одноручное Оружие" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="weapons/one-handed">
												<h3 className="card-title card-title-weapons card-title-weapons-one-handed">Одноручное Оружие</h3>
											</Link>
											<p className="card-text card-text-weapons card-text-weapons-one-handed">Закажите любое одноручное оружие на выбор</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-weapons card-price-weapons-one-handed">от 300<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="weapons/one-handed" className="card-btn card-btn-weapons card-btn-weapons-one-handed">Подробнее</Link>
										</div>
									</div>

									<div className="card card-weapons card-weapons-two-handed">
										<Link to="weapons/two-handed">
											<img src={TwoHandedWeaponsCardImg} className="card-img" alt="Двуручное Оружие" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="weapons/two-handed">
												<h3 className="card-title card-title-weapons card-title-weapons-two-handed">Двуручное Оружие</h3>
											</Link>
											<p className="card-text card-text-weapons card-text-weapons-two-handed">Закажите любое двуручное оружие на выбор</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-weapons card-price-weapons-two-handed">от 300<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="weapons/two-handed" className="card-btn card-btn-weapons card-btn-weapons-two-handed">Подробнее</Link>
										</div>
									</div>

									<div className="card card-weapons card-weapons-range">
										<Link to="weapons/range">
											<img src={RangeWeaponsCardImg} className="card-img" alt="Оружие дальнего боя" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="weapons/range">
												<h3 className="card-title card-title-weapons card-title-weapons-range">Оружие дальнего боя</h3>
											</Link>
											<p className="card-text card-text-weapons card-text-weapons-range">Закажите любое оружие дальнего боя на выбор</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-weapons card-price-weapons-range">от 300<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="weapons/range" className="card-btn card-btn-weapons card-btn-weapons-range">Подробнее</Link>
										</div>
									</div>

									<div className="card card-weapons card-weapons-legendary">
										<Link to="weapons/legendary">
											<img src={LegendaryWeaponsCardImg} className="card-img" alt="Легендарное Оружие" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="weapons/legendary">
												<h3 className="card-title card-title-weapons card-title-weapons-legendary">Легендарное Оружие</h3>
											</Link>
											<p className="card-text card-text-weapons card-text-weapons-legendary">Закажите любое легендарное оружие</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-weapons card-price-weapons-legendary">от 500<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="weapons/legendary" className="card-btn card-btn-weapons card-btn-weapons-legendary">Подробнее</Link>
										</div>
									</div>

									<div className="card card-weapons card-weapons-artefact">
										<Link to="weapons/artefact">
											<img src={ArtefactWeaponsCardImg} className="card-img" alt="Артефакты Legion" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="weapons/artefact">
												<h3 className="card-title card-title-weapons card-title-weapons-artefact">Артефакты Legion</h3>
											</Link>
											<p className="card-text card-text-weapons card-text-weapons-artefact">Закажите любое артефактное оружие</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-weapons card-price-weapons-artefact">от 800<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="weapons/artefact" className="card-btn card-btn-weapons card-btn-weapons-artefact">Подробнее</Link>
										</div>
									</div>

									<div className="card card-weapons card-weapons-decorative">
										<Link to="weapons/decorative">
											<img src={DecorativeWeaponsCardImg} className="card-img" alt="Декоративное Оружие" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="weapons/decorative">
												<h3 className="card-title card-title-weapons card-title-weapons-decorative">Декоративное оружие</h3>
											</Link>
											<p className="card-text card-text-weapons card-text-weapons-decorative">Закажите любое декоративное оружие</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-weapons card-price-weapons-decorative">от 1000<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="weapons/decorative" className="card-btn card-btn-weapons card-btn-weapons-decorative">Подробнее</Link>
										</div>
									</div>
								</div>
							</div>

							{/* Таб контент броня */}
							<div className="tab-pane fade show active mt-5" id="pills-armour">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									<div className="card card-armours card-armours-shields">
										<Link to="armours/shields">
											<img src={ShieldsCardImg} className="card-img" alt="Щиты" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="armours/shields">
												<h3 className="card-title card-title-armours card-title-armours-shields">Щиты</h3>
											</Link>
											<p className="card-text card-text-armours card-text-armours-shields">Закажите любой щит на выбор</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-armours card-price-armours-shields">от 300<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="armours/shields" className="card-btn card-btn-armours card-btn-armours-shields">Подробнее</Link>
										</div>
									</div>

									<div className="card card-armours card-armours-cloak">
										<Link to="armours/cloaks">
											<img src={CloaksCardImg} className="card-img" alt="Плащи" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="armours/cloaks">
												<h3 className="card-title card-title-armours card-title-armours-cloak">Плащи</h3>
											</Link>
											<p className="card-text card-text-armours card-text-armours-cloak">Закажите любой плащ на выбор</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-armours card-price-armours-cloak">от 300<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="armours/cloaks" className="card-btn card-btn-armours card-btn-armours-cloak">Подробнее</Link>
										</div>
									</div>

									<div className="card card-armours card-armours-fishing-rods">
										<Link to="armours/fishing-rods">
											<img src={FishingRodsCardImg} className="card-img" alt="Удочки" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="armours/fishing-rods">
												<h3 className="card-title card-title-armours card-title-armours-fishing-rods">Удочки</h3>
											</Link>
											<p className="card-text card-text-armours card-text-armours-fishing-rods">Закажите любую удочку на выбор</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-armours card-price-armours-fishing-rods">от 300<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="armours/fishing-rods" className="card-btn card-btn-armours card-btn-armours-fishing-rods">Подробнее</Link>
										</div>
									</div>
								</div>
							</div>

							{/* Таб контент маунты */}
							<div className="tab-pane fade fade show active mt-5" id="pills-mounts" >
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									<div className="card card-mounts card-mounts-water">
										<Link to="mounts/water">
											<img src={WaterMountsCardImg} className="card-img" alt="Водные маунты" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="mounts/water">
												<h3 className="card-title card-title-mounts card-title-mounts-water">Водные</h3>
											</Link>
											<p className="card-text card-text-mounts card-text-mounts-water">Водные маунты, обитатели морей и океанов, могучие владыки глубин. Они обеспечат вам скорость морской бури и откроют тайны подводного мира. Покорите глубины Азерота!</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-mounts card-price-mounts-water">от 100<img className="dollar" src={dollarImg} alt={dollarAlt} /></p>
											<Link to="mounts/water" className="card-btn card-btn-mounts-water">Подробнее</Link>
										</div>
									</div>

									<div className="card card-mounts card-mounts-earth">
										<Link to="mounts/earth">
											<img src={EarthMountsCardImg} className="card-img" alt="Наземные маунты" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="mounts/earth">
												<h3 className="card-title card-title-mounts card-title-mounts-earth">Наземные</h3>
											</Link>
											<p className="card-text card-text-mounts card-text-mounts-earth">Наземные маунты, обитатели пещер, могучие бегуны. Они обеспечат вам молниеносную скорость и превосходство в любом путешествии. Покорите бескрайние просторы Азерота!</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-mounts card-price-mounts-earth">от 100<img className="dollar" src={dollarImg}  alt={dollarAlt} /></p>
											<Link to="mounts/earth" className="card-btn card-btn-mounts-earth">Подробнее</Link>
										</div>
									</div>

									<div className="card card-mounts card-mounts-fly">
										<Link to="mounts/fly">
											<img src={FlyMountsCardImg} className="card-img" alt="Летающие маунты" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="mounts/fly">
												<h3 className="card-title card-title-mounts card-title-mounts-fly">Летающие</h3>
											</Link>
											<p className="card-text card-text-mounts card-text-mounts-fly">Летающие маунты, властелины небес, повелители бескрайних воздушных просторов. Они обеспечат вам скорость ветра и абсолютное превосходство в воздухе. Покорите небеса Азерота!</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-mounts card-price-mounts-fly">от 100<img className="dollar" src={dollarImg}  alt={dollarAlt} /></p>
											<Link to="mounts/fly" className="card-btn card-btn-mounts-fly">Подробнее</Link>
										</div>
									</div>
								</div>
							</div>

							{/* Таб контент голд */}
							<div className="tab-pane fade fade show active mt-5" id="pills-gold">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									<div className="card card-gold card-gold-horde">
										<Link to="gold/horde">
											<img src={HordeGoldCardImg} className="card-img" alt="Золото для игроков Орды" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="gold/horde">
												<h3 className="card-title card-title-gold card-title-gold-horde">Орда</h3>
											</Link>
											<p className="card-text card-text-gold card-text-gold-horde">Золото для игроков Орды. Любой сервер. За Орду!</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-gold card-price-gold-horde">от 1000<img className="gold" src={goldImg} alt={goldAlt} /></p>
											<Link to="gold/horde" className="card-btn card-btn-gold card-btn-gold-horde">Подробнее</Link>
										</div>
									</div>

									<div className="card card-gold card-gold-alliance">
										<Link to="gold/alliance">
											<img src={AllianceGoldCardImg} className="card-img" alt="Золото для игроков Альянса" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="gold/alliance">
												<h3 className="card-title card-title-gold card-title-gold-alliance">Альянс</h3>
											</Link>
											<p className="card-text card-text-gold card-text-gold-alliance">Золото для игроков Альянса. Любой сервер. За Альянс!</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-gold card-price-gold-alliance">от 1000<img className="gold" src={goldImg} alt={goldAlt} /></p>
											<Link to="gold/alliance" className="card-btn card-btn-gold card-btn-gold-alliance">Подробнее</Link>
										</div>
									</div>
								</div>
							</div>

							{/* Таб контент профессии */}
							<div className="tab-pane fade fade show active mt-5" id="pills-professions">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									<div className="card card-professions card-alchemy">
										<a href="html/professions/alchemy.html">
											<img src="img/mainpage/bg/professions/alchemy.png" className="card-img" alt="Алхимия" />
										</a>
										<div className="card-body">
											<a className="card-link" href="html/professions/alchemy.html">
												<h3 className="card-title card-title-professions card-title-alchemy">Алхимия</h3>
											</a>
											<p className="card-text card-text-professions card-text-alchemy">С помощью алхимии можно создавать мощные зелья, настои и элексиры</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-alchemy">от 200<img className="dollar" src="img/mainpage/bg/gold/dollar.png" alt="dollar" /></p>
											<a href="html/professions/alchemy.html" className="card-btn card-btn-professions card-btn-alchemy">Подробнее</a>
										</div>
									</div>

									<div className="card card-professions card-mining">
										<a href="html/professions/mining.html">
											<img src="img/mainpage/bg/professions/mining.png" className="card-img" alt="Горное дело" />
										</a>
										<div className="card-body">
											<a className="card-link" href="html/professions/mining.html">
												<h3 className="card-title card-title-professions card-title-mining">Горное дело</h3>
											</a>
											<p className="card-text card-text-professions card-text-mining">Горное дело позволяет добывать руду во множестве мест по всему миру</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-mining">от 200<img class="dollar" src="img/mainpage/bg/gold/dollar.png" alt="dollar" /></p>
											<a href="html/professions/mining.html" className="card-btn card-btn-professions card-btn-mining">Подробнее</a>
										</div>
									</div>

									<div className="card card-professions card-engineering">
										<a href="html/professions/engineering.html">
											<img src="img/mainpage/bg/professions/engineering.png" className="card-img" alt="Инженерное дело" />
										</a>
										<div className="card-body">
											<a className="card-link" href="html/professions/engineering.html">
												<h3 className="card-title card-title-professions card-title-engineering">Инженерное дело</h3>
											</a>
											<p className="card-text card-text-professions card-text-engineering">Инженеры превращают различные материалы в интересные и полезные гаджеты, необычные предметы и даже в эпические шлемы и очки, оружия дальнего боя и прицелы к ним</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-engineering">от 200<img className="dollar" src="img/mainpage/bg/gold/dollar.png" alt="dollar" /></p>
											<a href="html/professions/engineering.html" className="card-btn card-btn-professions card-btn-engineering">Подробнее</a>
										</div>
									</div>

									<div className="card card-professions card-leatherworking">
										<a href="html/professions/leatherworking.html">
											<img src="img/mainpage/bg/professions/leatherworking.png" className="card-img" alt="Кожевничество" />
										</a>
										<div className="card-body">
											<a className="card-link" href="html/professions/leatherworking.html">
												<h3 className="card-title card-title-professions card-title-leatherworking">Кожевничество</h3>
											</a>
											<p className="card-text card-text-professions card-text-leatherworking">Ремесленная профессия, которая использует шкуры и кожу для изготовления доспехов и барабанов</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-leatherworking">от 200<img className="dollar" src="img/mainpage/bg/gold/dollar.png" alt="dollar" /></p>
											<a href="html/professions/leatherworking.html" className="card-btn card-btn-professions card-btn-leatherworking">Подробнее</a>
										</div>
									</div>

									<div className="card card-professions card-blacksmithing">
										<a href="html/professions/blacksmithing.html">
											<img src="img/mainpage/bg/professions/blacksmithing.png" className="card-img" alt="Кузнечное дело" />
										</a>
										<div className="card-body">
											<a className="card-link" href="html/professions/blacksmithing.html">
												<h3 className="card-title card-title-professions card-title-blacksmithing">Кузнечное дело</h3>
											</a>
											<p className="card-text card-text-professions card-text-blacksmithing">Ремесленная профессия которая использует различные металлы для изготовления пластинчатых доспехов, оружия и других полезных предметов</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-blacksmithing">от 200<img className="dollar" src="img/mainpage/bg/gold/dollar.png" alt="dollar" /></p>
											<a href="html/professions/blacksmithing.html" className="card-btn card-btn-professions card-btn-blacksmithing">Подробнее</a>
										</div>
									</div>

									<div className="card card-professions card-enchanting">
										<a href="html/professions/enchanting.html">
											<img src="img/mainpage/bg/professions/enchanting.png" className="card-img" alt="Наложение чар" />
										</a>
										<div className="card-body">
											<a className="card-link" href="html/professions/enchanting.html">
												<h3 className="card-title card-title-professions card-title-enchanting">Наложение чар</h3>
											</a>
											<p className="card-text card-text-professions card-text-enchanting">Наложение чар позволяет получать материалы для зачаровывания путем распыления брони необычного или лучшего качества и превращать их в постоянные улучшения для собственной брони или брони союзников</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-enchanting">от 200<img className="dollar" src="img/mainpage/bg/gold/dollar.png" alt="dollar" /></p>
											<a href="html/professions/enchanting.html" className="card-btn card-btn-professions card-btn-enchanting">Подробнее</a>
										</div>
									</div>

									<div className="card card-professions card-inscription">
										<a href="html/professions/inscription.html">
											<img src="img/mainpage/bg/professions/inscription.png" className="card-img" alt="Начертание" />
										</a>
										<div className="card-body">
											<a className="card-link" href="html/professions/inscription.html">
												<h3 className="card-title card-title-professions card-title-inscription">Начертание</h3>
											</a>
											<p className="card-text card-text-professions card-text-inscription">Начертание позволяет создавать символы, свитки и карты с помощью чернил получаемых при измельчении трав</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-inscription">от 200<img className="dollar" src="img/mainpage/bg/gold/dollar.png" alt="dollar" /></p>
											<a href="html/professions/inscription.html" className="card-btn card-btn-professions card-btn-inscription">Подробнее</a>
										</div>
									</div>

									<div className="card card-professions card-tailoring">
										<a href="html/professions/tailoring.html">
											<img src="img/mainpage/bg/professions/tailoring.png" className="card-img" alt="Портняжное дело" />
										</a>
										<div className="card-body">
											<a className="card-link" href="html/professions/tailoring.html">
												<h3 className="card-title card-title-professions card-title-tailoring">Портняжное дело</h3>
											</a>
											<p className="card-text card-text-professions card-text-tailoring">Ремесленная профессия которая использует различные ткани для создания брони, сумок, чародейских нитей и даже ковров-самолетов</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-tailoring">от 200<img className="dollar" src="img/mainpage/bg/gold/dollar.png" alt="dollar" /></p>
											<a href="html/professions/tailoring.html" className="card-btn card-btn-professions card-btn-tailoring">Подробнее</a>
										</div>
									</div>

									<div className="card card-professions card-skinning">
										<a href="html/professions/skinning.html">
											<img src="img/mainpage/bg/professions/skinning.png" className="card-img" alt="Снятие шкур" />
										</a>
										<div className="card-body">
											<a className="card-link" href="html/professions/skinning.html">
												<h3 className="card-title card-title-professions card-title-skinning">Снятие шкур</h3>
											</a>
											<p className="card-text card-text-professions card-text-skinning">Собирательная профессия, позволяющая снимать кожу, шкуры, чешуйки и панцири с убитых животных, драконов, нерубов и силитидов</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-skinning">от 200<img className="dollar" src="img/mainpage/bg/gold/dollar.png" alt="dollar" /></p>
											<a href="html/professions/skinning.html" className="card-btn card-btn-professions card-btn-skinning">Подробнее</a>
										</div>
									</div>

									<div className="card card-professions card-herbalism">
										<a href="html/professions/herbalism.html">
											<img src="img/mainpage/bg/professions/herbalism.png" className="card-img" alt="Травничество" />
										</a>
										<div className="card-body">
											<a className="card-link" href="html/professions/herbalism.html">
												<h3 className="card-title card-title-professions card-title-herbalism">Травничество</h3>
											</a>
											<p className="card-text card-text-professions card-text-herbalism">Собирательная профессия позволяющая собирать травы</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-herbalism">от 200<img className="dollar" src="img/mainpage/bg/gold/dollar.png" alt="dollar" /></p>
											<a href="html/professions/herbalism.html" className="card-btn card-btn-professions card-btn-herbalism">Подробнее</a>
										</div>
									</div>

									<div className="card card-professions card-jewelcrafting">
										<a href="html/professions/jewelcrafting.html">
											<img src="img/mainpage/bg/professions/jewelcrafting.png" className="card-img" alt="Ювелирное дело" />
										</a>
										<div className="card-body">
											<a className="card-link" href="html/professions/jewelcrafting.html">
												<h3 className="card-title card-title-professions card-title-jewelcrafting">Ювелирное дело</h3>
											</a>
											<p className="card-text card-text-professions card-text-jewelcrafting">Ремесленная профессия с помощью которой можно создавать различные драгоценные камни, повышающие различные характеристики. Эти камни могут быть вставлены в экипировку</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-jewelcrafting">от 200<img className="dollar" src="img/mainpage/bg/gold/dollar.png" alt="dollar" /></p>
											<a href="html/professions/jewelcrafting.html" className="card-btn card-btn-professions card-btn-jewelcrafting">Подробнее</a>
										</div>
									</div>

									<div className="card card-professions card-archaeology">
										<a href="html/professions/archaeology.html">
											<img src="img/mainpage/bg/professions/archaeology.png" className="card-img" alt="Археология" />
										</a>
										<div className="card-body">
											<a className="card-link" href="html/professions/archaeology.html">
												<h3 className="card-title card-title-professions card-title-archaeology">Археология</h3>
											</a>
											<p className="card-text card-text-professions card-text-archaeology">Вторичная профессия позволяющая увидеть, что скрывают в себе глубины Азерота. Археологи должны путешествовать по всему миру в поисках фрагментов древних артефактов, которые содержат интереснейшие частицы истории мира</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-archaeology">от 200<img className="dollar" src="img/mainpage/bg/gold/dollar.png" alt="dollar" /></p>
											<a href="html/professions/archaeology.html" className="card-btn card-btn-professions card-btn-archaeology">Подробнее</a>
										</div>
									</div>

									<div className="card card-professions card-riding">
										<a href="html/professions/riding.html">
											<img src="img/mainpage/bg/professions/riding.png" className="card-img" alt="Верховая езда" />
										</a>
										<div className="card-body">
											<a className="card-link" href="html/professions/riding.html">
												<h3 className="card-title card-title-professions card-title-riding">Верховая езда</h3>
											</a>
											<p className="card-text card-text-professions card-text-riding">Пассивный навык, позволяющий использовать верховых животных для передвижения по всему миру. Чем выше навык верховой езды, тем быстрее ваши верховые животные могут передвигаться по миру</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-riding">от 200<img className="dollar" src="img/mainpage/bg/gold/dollar.png" alt="dollar" /></p>
											<a href="html/professions/riding.html" className="card-btn card-btn-professions card-btn-riding">Подробнее</a>
										</div>
									</div>

									<div className="card card-professions card-cooking">
										<a href="html/professions/cooking.html">
											<img src="img/mainpage/bg/professions/cooking.png" className="card-img" alt="Кулинария" />
										</a>
										<div className="card-body">
											<a className="card-link" href="html/professions/cooking.html">
												<h3 className="card-title card-title-professions card-title-cooking">Кулинария</h3>
											</a>
											<p className="card-text card-text-professions card-text-cooking">Вторичная профессия, позволяющая комбинировать рыбу или мясо, превращая их во вкусную еду и напитки, восстанавливающие здоровье или ману, и дающие полезные боевые баффы</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-cooking">от 200<img className="dollar" src="img/mainpage/bg/gold/dollar.png" alt="dollar" /></p>
											<a href="html/professions/cooking.html" className="card-btn card-btn-professions card-btn-cooking">Подробнее</a>
										</div>
									</div>

									<div className="card card-professions card-first-aid">
										<a href="html/professions/first-aid.html">
											<img src="img/mainpage/bg/professions/first-aid.png" className="card-img" alt="Первая помощь" />
										</a>
										<div className="card-body">
											<a className="card-link" href="html/professions/first-aid.html">
												<h3 className="card-title card-title-professions card-title-first-aid">Первая помощь</h3>
											</a>
											<p className="card-text card-text-professions card-text-cooking">Вторичная профессия позволяющая превращать ткани в бинты. Очень полезна классам, у которых нет собственного лечащего заклинания</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-first-aid">от 200<img className="dollar" src="img/mainpage/bg/gold/dollar.png" alt="dollar" /></p>
											<a href="html/professions/first-aid.html" className="card-btn card-btn-professions card-btn-first-aid">Подробнее</a>
										</div>
									</div>

									<div className="card card-professions card-fishing">
										<a href="html/professions/fishing.html">
											<img src="img/mainpage/bg/professions/fishing.png" className="card-img" alt="Рыбная ловля" />
										</a>
										<div className="card-body">
											<a className="card-link" href="html/professions/fishing.html">
												<h3 className="card-title card-title-professions card-title-fishing">Рыбная ловля</h3>
											</a>
											<p className="card-text card-text-professions card-text-fishing">Вторичная собирательная профессия, позволяющая рыбачить в различных водоемах по всему миру</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-fishing">от 200<img class="dollar" src="img/mainpage/bg/gold/dollar.png" alt="dollar" /></p>
											<a href="html/professions/fishing.html" className="card-btn card-btn-professions card-btn-fishing">Подробнее</a>
										</div>
									</div>

									<div className="card card-professions card-artisanal-mechanics">
										<a href="html/professions/artisanal-mechanics.html">
											<img src="img/mainpage/bg/professions/artisanal-mechanics.png" className="card-img" alt="Кустарная механика" />
										</a>
										<div className="card-body">
											<a className="card-link" href="html/professions/artisanal-mechanics.html">
												<h3 className="card-title card-title-professions card-title-artisanal-mechanics">Кустарная механика</h3>
											</a>
											<p className="card-text card-text-professions card-text-artisanal-mechanics">Паскал-К0Р0Л6, огромный железный робот, изготавливающий снаряжение, средства передвижения, игрушки, расходные материалы и другие полезные вещи в обмен на запчасти и аккумуляторы, которые можно добывать в Мехагоне. Также на острове можно находить чертежи новых предметов</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-professions card-price-artisanal-mechanics">от 200<img className="dollar" src="img/mainpage/bg/gold/dollar.png" alt="dollar" /></p>
											<a href="html/professions/artisanal-mechanics.html" className="card-btn card-btn-professions card-btn-artisanal-mechanics">Подробнее</a>
										</div>
									</div>
								</div>
							</div>

							{/* Таб контент pvp */}
							<div className="tab-pane fade fade show active mt-5" id="pills-pvp">
								<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
									<div className="card card-pvp card-pvp-honor">
										<Link to="pvp/honour">
											<img src={HonourCardImg} className="card-img" alt="Очки чести" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="pvp/honour">
												<h3 className="card-title card-title-pvp card-title-honor">Честь</h3>
											</Link>
											<p className="card-text card-text-pvp card-text-honor">Очки чести необходимые для покупки PvP экипировки</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-pvp price-honor">от 100<img className="dollar" src={dollarImg} alt={goldAlt} /></p>
											<Link to="pvp/honour" className="card-btn card-btn-pvp card-btn-honor">Подробнее</Link>
										</div>
									</div>

									<div className="card card-pvp card-pvp-arena">
										<Link to="pvp/arena">
											<img src={ArenaCardImg} className="card-img" alt="Очки Арены" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="pvp/arena">
												<h3 className="card-title card-title-pvp card-title-arena">Арена</h3>
											</Link>
											<p className="card-text card-text-pvp card-text-arena">Очки Арены необходимые для покупки мощной и самой лучшей PvP экипировки</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-pvp price-arena">от 200<img className="dollar" src={dollarImg} alt={goldAlt} /></p>
											<Link to="pvp/arena" className="card-btn card-btn-pvp card-btn-arena">Подробнее</Link>
										</div>
									</div>

									<div className="card card-pvp card-pvp-rbg">
										<Link to="pvp/rbg">
											<img src={RbgCardImg} className="card-img" alt="Рейтинговые Поля Боя" />
										</Link>
										<div className="card-body">
											<Link className="card-link" to="pvp/rbg">
												<h3 className="card-title card-title-pvp card-title-rbg">Рейтинговые Поля Боя</h3>
											</Link>
											<p className="card-text card-text-pvp card-text-rbg">Рейтинговые бои для покупки уникальной PvP экипировки и званий таких как Гладиатор</p>
										</div>
										<div className="card-footer d-flex justify-content-between align-items-center">
											<p className="card-price card-price-pvp price-rbg">от 300<img className="dollar" src={dollarImg} alt={goldAlt} /></p>
											<Link to="pvp/rbg" className="card-btn card-btn-pvp card-btn-rbg">Подробнее</Link>
										</div>
									</div>
								</div>
							</div>

						</>
					}

					{ raidsArmourWarrior &&

						<div className="card-box d-flex flex-wrap justify-content-center justify-content-xl-start">
							{/* Таб контент Огненные Недра */}
							<div className="card card-tiers card-warrior">
								<a href="../buy/raids-armours/molten-core.html">
									<img src="../../img/services/bg/armour/warrior/Battlegear-of-Might.png" className="card-img card-img-tiers" alt="Броня Мощи" />
								</a>
								<div className="card-body">
									<a className="card-link" href="../buy/raids-armours/molten-core.html">
										<h3 className="card-title card-title-tiers">Броня Мощи</h3>
									</a>
									<p className="card-text card-text-tiers">Первый комплект брони для воина из рейда 60-го уровня Огненные Недра дополнения classNameic. Повелитель Огня будет повержен! Очищение огнем пройдено!</p>
								</div>
								<div className="card-footer d-flex justify-content-between align-items-center">
									<p className="card-price card-price-tiers">от 100<img className="dollar" src={dollarImg} alt="dollar" /></p>
									<a href="../buy/raids-armours/molten-core.html" className="card-btn card-btn-tiers">Подробнее</a>
								</div>
							</div>

							{/* Таб контент Логово Крыла Тьмы */}
							<div className="card card-tiers card-warrior">
								<a href="../buy/raids-armours/blackwing-lair.html">
									<img src="../../img/services/bg/armour/warrior/Battlegear-of-Wrath.png" className="card-img card-img-tiers" alt="Броня Гнева" />
								</a>
								<div className="card-body">
									<a className="card-link" href="../buy/raids-armours/blackwing-lair.html">
										<h3 className="card-title card-title-tiers">Броня Гнева</h3>
									</a>
									<p className="card-text card-text-tiers">Второй комплект брони для воина из рейда 60-го уровня Логово Крыла Тьмы дополнения classNameic. Лорд Черной Горы будет повержен! Теперь у вас невероятная сила!</p>
								</div>
								<div className="card-footer d-flex justify-content-between align-items-center">
									<p className="card-price card-price-tiers">от 100<img className="dollar" src={dollarImg} alt="dollar" /></p>
									<a href="../buy/raids-armours/blackwing-lair.html" className="card-btn card-btn-tiers">Подробнее</a>
								</div>
							</div>

							{/* Таб контент Храм Анкиража */}
							<div className="card card-tiers card-warrior">
								<a href="../buy/raids-armours/temple-of-ahnqiraj.html">
									<img src="../../img/services/bg/armour/warrior/Conquerors-Battlegear.png" className="card-img card-img-tiers" alt="Броня Завоевателя" />
								</a>
								<div className="card-body">
									<a className="card-link" href="../buy/raids-armours/temple-of-ahnqiraj.html">
										<h3 className="card-title card-title-tiers">Броня Завоевателя</h3>
									</a>
									<p className="card-text card-text-tiers">Комплект брони для воина 2.5 из рейда 60-го уровня Храм Ан'Киража дополнения classNameic. Владыка Ан'Киража будет повержен! Вы еще не мертвы!</p>
								</div>
								<div className="card-footer d-flex justify-content-between align-items-center">
									<p className="card-price card-price-tiers">от 100<img className="dollar" src={dollarImg} alt="dollar" /></p>
									<a href="../buy/raids-armours/temple-of-ahnqiraj.html" className="card-btn card-btn-tiers">Подробнее</a>
								</div>
							</div>
						</div>
					}
				</div>
			</div>
		</section>
	)
}


export default Card