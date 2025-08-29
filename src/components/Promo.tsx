const Promo = ({ warrior, druid, priest, mage, monk, hunter, demonHunter, paladin, rogue, deathKnight, warlock, shaman, awakener, oneHanded, twoHanded, range, legendary, artefact, decorative, shields, cloaks, fishingRods }) => {
	return (
		<section className="promo">
			<div className="container d-flex justify-content-between align-items-center flex-column flex-lg-row">
				<div className="promo__info">
					<div className="promo__descriptions">
						<h2 className="promo__header main__header">
							Получите предметы вашей мечты и наслаждайтесь игрой
						</h2>
						<p className="promo__text">
							На WowForAll можно купить и продать предметы или
							услуги с выгодой до 80% без посредников. Просто и
							безопасно.
						</p>
					</div>
					<div className="promo__block__btns d-flex justify-content-between mt-5 flex-column flex-lg-row">
						<button
							className="promo-btn"
							data-toggle="modal"
							data-target="#modal"
						>
							Создать Аккаунт
						</button>
						<a
							href="#how-its-work"
							className="promo-btn mt-3 mt-lg-0 promo-btn_color"
						>
							Как Это работает
						</a>
					</div>
				</div>
				<div
					className={`${
						warrior
							? "promo__raitings promo__raitings_warrior"
							:
						druid
							? "promo__raitings promo__raitings_druid"
							:
						priest
							? "promo__raitings promo__raitings_priest"
							:
						mage
							? "promo__raitings promo__raitings_mage"
							:
						monk
							? "promo__raitings promo__raitings_monk"
							:
						hunter
							? "promo__raitings promo__raitings_hunter"
							:
						demonHunter
							? "promo__raitings promo__raitings_demon-hunter"
							:
						paladin
							? "promo__raitings promo__raitings_paladin"
							:
						rogue
							? "promo__raitings promo__raitings_rogue"
							:
						deathKnight
							? "promo__raitings promo__raitings_death-knight"
							:
						warlock
							? "promo__raitings promo__raitings_warlock"
							:
						shaman
							? "promo__raitings promo__raitings_shaman"
							:
						awakener
							? "promo__raitings promo__raitings_awakener"
							:
						oneHanded
							? "promo__raitings promo__raitings_one-handed"
							:
						twoHanded
							? "promo__raitings promo__raitings_two-handed"
							:
						range
							? "promo__raitings promo__raitings_range"
							:
						legendary
							? "promo__raitings promo__raitings_legendary"
							:
						artefact
							? "promo__raitings promo__raitings_artefact"
							:
						decorative
							? "promo__raitings promo__raitings_decorative"
							:
						shields
							? "promo__raitings promo__raitings_shields"
							:
						cloaks
							? "promo__raitings promo__raitings_cloaks"
							:
						fishingRods
							? "promo__raitings promo__raitings_fishing-rods"
							: "promo__raitings"
					} mt-md-5`}
				></div>
			</div>
		</section>
	);
};

export default Promo;
