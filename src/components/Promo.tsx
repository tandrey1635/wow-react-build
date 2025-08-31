const Promo = ({ warrior, druid, priest, mage, monk, hunter, demonHunter, paladin, awakener, rogue, deathKnight, warlock, shaman, oneHandedWeapons, twoHandedWeapons, rangeWeapons, legendaryWeapons, artefactWeapons, decorativeWeapons, shields, cloaks, fishingRods, waterMounts, earthMounts, flyMounts, hordeGold, allianceGold, alchemy, mining, engineering, leatherworking, blacksmithing, enchanting,  inscription, tailoring, skinning, herbalism, jewelcrafting, archaeology, riding, cooking, firstAid, fishing, junkyardTinkering, honour, arena, rbg }) => {
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
						awakener
							? "promo__raitings promo__raitings_awakener"
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
						oneHandedWeapons
							? "promo__raitings promo__raitings_one-handed-weapons"
							:
						twoHandedWeapons
							? "promo__raitings promo__raitings_two-handed-weapons"
							:
						rangeWeapons
							? "promo__raitings promo__raitings_range-weapons"
							:
						legendaryWeapons
							? "promo__raitings promo__raitings_legendary-weapons"
							:
						artefactWeapons
							? "promo__raitings promo__raitings_artefact-weapons"
							:
						decorativeWeapons
							? "promo__raitings promo__raitings_decorative-weapons"
							:
						shields
							? "promo__raitings promo__raitings_shields"
							:
						cloaks
							? "promo__raitings promo__raitings_cloaks"
							:
						fishingRods
							? "promo__raitings promo__raitings_fishing-rods"
							:
						waterMounts
							? "promo__raitings promo__raitings_water-mounts"
							:
						earthMounts
							? "promo__raitings promo__raitings_earth-mounts"
							:
						flyMounts
							? "promo__raitings promo__raitings_fly-mounts"
							:
						hordeGold
							? "promo__raitings promo__raitings_horde-gold"
							:
						allianceGold
							? "promo__raitings promo__raitings_alliance-gold"
							:
						alchemy
							? "promo__raitings promo__raitings_alchemy"
							:
						mining
							? "promo__raitings promo__raitings_mining"
							:
						engineering
							? "promo__raitings promo__raitings_engineering"
							:
						leatherworking
							? "promo__raitings promo__raitings_leatherworking"
							:
						blacksmithing
							? "promo__raitings promo__raitings_blacksmithing"
							:
						enchanting
							? "promo__raitings promo__raitings_enchanting"
							:
						inscription
							? "promo__raitings promo__raitings_inscription"
							:
						tailoring
							? "promo__raitings promo__raitings_tailoring"
							:
						skinning
							? "promo__raitings promo__raitings_skinning"
							:
						herbalism
							? "promo__raitings promo__raitings_herbalism"
							:
						jewelcrafting
							? "promo__raitings promo__raitings_jewelcrafting"
							:
						archaeology
							? "promo__raitings promo__raitings_archaeology"
							:
						riding
							? "promo__raitings promo__raitings_riding"
							:
						cooking
							? "promo__raitings promo__raitings_cooking"
							:
						firstAid
							? "promo__raitings promo__raitings_first-aid"
							:
						fishing
							? "promo__raitings promo__raitings_fishing"
							:
						junkyardTinkering
							? "promo__raitings promo__raitings_junkyard-tinkering"
							:
						honour
							? "promo__raitings promo__raitings_honour"
							:
						arena
							? "promo__raitings promo__raitings_arena"
							:
						rbg
							? "promo__raitings promo__raitings_rbg"
							: "promo__raitings"
						} mt-md-5`
					}
				></div>
			</div>
		</section>
	);
};

export default Promo;
