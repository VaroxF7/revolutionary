ServerEvents.recipes(e => {
    e.recipes.gtceu.ore_laser("level_1_laser_mineral_sand_1")
     .inputFluids([Fluid.of("gtceu:dense_hydrogen", 2000)])
     .notConsumable("gtceu:brown_glass_lens")
     .chancedOutput("44x gtceu:raw_basaltic_mineral_sand", 5000, 400)
     .chancedOutput("47x gtceu:raw_granitic_mineral_sand", 2500, 400)
     .chancedOutput("43x gtceu:raw_fullers_earth", 5000, 400)
     .chancedOutput("46x gtceu:raw_gypsum", 2500, 400)
     .duration(1000).EUt(512).circuit(1).dimension("ad_astra:moon_orbit")

     e.recipes.gtceu.ore_laser("level_2_laser_iron_vein")
     .inputFluids([Fluid.of("gtceu:dense_hydrogen", 2000)])
     .notConsumable("gtceu:diamond_lens")
     .chancedOutput("44x gtceu:raw_vanadium_magnetite", 2500, 400)
     .chancedOutput("34x gtceu:raw_magnetite", 5000, 400)
     .chancedOutput("42x minecraft:raw_gold", 2500, 400)
     .duration(1000).EUt(512).circuit(2).dimension("ad_astra:moon_orbit")

     e.recipes.gtceu.ore_laser("level_3_laser_calco")
     .inputFluids([Fluid.of("gtceu:dense_hydrogen", 2000)])
     .notConsumable("gtceu:blue_glass_lens")
     .chancedOutput("42x gtceu:raw_chalcopyrite", 2500, 400)
     .chancedOutput("32x minecraft:raw_iron", 2500, 400)
     .chancedOutput("41x gtceu:raw_magnetite", 5000, 400)
     .chancedOutput("17x minecraft:raw_copper", 5000, 400)
     .chancedOutput("32x kubejs:monoway_crystal_1", 2500, 400)
     .duration(1000).EUt(512).circuit(3).dimension("ad_astra:moon_orbit")

     e.recipes.gtceu.ore_laser("level_4_laser_mica")
     .inputFluids([Fluid.of("gtceu:dense_hydrogen", 2000)])
     .notConsumable("gtceu:emerald_lens")
     .chancedOutput("44x gtceu:raw_kyanite", 2500, 400)
     .chancedOutput("41x gtceu:raw_mica", 2500, 400)
     .chancedOutput("44x gtceu:raw_bauxite", 2500, 400)
     .chancedOutput("47x gtceu:raw_pollucite", 2500, 400)
     .chancedOutput("32x kubejs:monoway_crystal_3", 2500, 400)
     .duration(1000).EUt(512).circuit(4).dimension("ad_astra:moon_orbit")

     e.recipes.gtceu.ore_laser("level_5_laser_graphite")
     .inputFluids([Fluid.of("gtceu:dense_hydrogen", 2000)])
     .notConsumable("gtceu:lime_glass_lens")
     .chancedOutput("32x gtceu:raw_graphite", 5000, 400)
     .chancedOutput("42x gtceu:raw_diamond", 5000, 400)
     .chancedOutput("41x gtceu:raw_emerald", 2500, 400)
     .chancedOutput("48x minecraft:coal", 2500, 400)
     .duration(1000).EUt(512).circuit(5).dimension("ad_astra:moon_orbit")

     e.recipes.gtceu.ore_laser("level_6_laser_pink_stuff")
     .inputFluids([Fluid.of("gtceu:dense_hydrogen", 2000)])
     .notConsumable("gtceu:ruby_lens")
     .chancedOutput("32x gtceu:raw_salt", 2500, 400)
     .chancedOutput("44x gtceu:raw_rock_salt", 2500, 400)
     .chancedOutput("41x gtceu:raw_lepidolite", 2500, 400)
     .chancedOutput("32x gtceu:raw_spodumene", 2500, 400)
     .duration(1000).EUt(512).circuit(6).dimension("ad_astra:moon_orbit")

     e.recipes.gtceu.ore_laser("level_7_laser_olivine")
     .inputFluids([Fluid.of("gtceu:dense_hydrogen", 2000)])
     .notConsumable("gtceu:cyan_glass_lens")
     .chancedOutput("45x gtceu:raw_bentonite", 2500, 400)
     .chancedOutput("47x gtceu:raw_magnesite", 5000, 400)
     .chancedOutput("32x gtceu:raw_olivine", 2500, 400)
     .chancedOutput("42x gtceu:raw_glauconite_sand", 2500, 400)
     .duration(1000).EUt(512).circuit(7).dimension("ad_astra:moon_orbit")

     e.recipes.gtceu.ore_laser("level_8_laser_lapis")
     .inputFluids([Fluid.of("gtceu:dense_hydrogen", 2000)])
     .notConsumable("gtceu:lime_glass_lens")
     .chancedOutput("47x gtceu:raw_lazurite", 5000, 400)
     .chancedOutput("29x gtceu:raw_sodalite", 2500, 400)
     .chancedOutput("45x gtceu:raw_lapis", 5000, 400)
     .chancedOutput("34x gtceu:raw_calcite", 2500, 400)
     .duration(1000).EUt(512).circuit(8).dimension("ad_astra:moon_orbit")

     e.recipes.gtceu.ore_laser("level_8_laser_pyrolusite")
     .inputFluids([Fluid.of("gtceu:dense_hydrogen", 2000)])
     .notConsumable("gtceu:brown_glass_lens")
     .chancedOutput("42x gtceu:raw_pyrolusite", 2500, 400)
     .chancedOutput("44x gtceu:raw_grossular", 2500, 400)
     .chancedOutput("32x gtceu:raw_spessartine", 5000, 400)
     .chancedOutput("34x gtceu:raw_tantalite", 5000, 400)
     .duration(1000).EUt(512).circuit(8).dimension("ad_astra:moon_orbit")

     e.recipes.gtceu.ore_laser("level_9_laser_galena")
     .inputFluids([Fluid.of("gtceu:dense_hydrogen", 2000)])
     .notConsumable("gtceu:emerald_lens")
     .chancedOutput("35x gtceu:raw_silver", 2500, 400)
     .chancedOutput("31x gtceu:raw_galena", 5000, 400)
     .chancedOutput("37x gtceu:raw_lead", 5000, 400)
     .chancedOutput("42x gtceu:raw_lithium", 2500, 400)
     .duration(1000).EUt(512).circuit(9).dimension("ad_astra:moon_orbit")

     e.recipes.gtceu.ore_laser("level_10_laser_nickel")
     .inputFluids([Fluid.of("gtceu:dense_hydrogen", 2000)])
     .notConsumable("gtceu:yellow_glass_lens")
     .chancedOutput("42x gtceu:raw_nickel", 2500, 400)
     .chancedOutput("33x gtceu:raw_garnierite", 2500, 400)
     .chancedOutput("41x gtceu:raw_cobaltite", 2500, 400)
     .chancedOutput("42x gtceu:raw_pentlandite", 2500, 400)
     .duration(1000).EUt(512).circuit(10).dimension("ad_astra:moon_orbit")

     e.recipes.gtceu.ore_laser("level_11_laser_cassiterite")
     .inputFluids([Fluid.of("gtceu:dense_hydrogen", 2000)])
     .notConsumable("gtceu:orange_glass_lens")
     .chancedOutput("47x gtceu:raw_cassiterite_sand", 2500, 400)
     .chancedOutput("32x gtceu:raw_garnet_sand", 5000, 400)
     .chancedOutput("44x gtceu:raw_asbestos", 5000, 400)
     .chancedOutput("41x gtceu:raw_diatomite", 2500, 400)
     .duration(1000).EUt(512).circuit(11).dimension("ad_astra:moon_orbit")

     e.recipes.gtceu.ore_laser("level_12_laser_saphire_ruby")
     .inputFluids([Fluid.of("gtceu:dense_hydrogen", 2000)])
     .notConsumable("gtceu:orange_glass_lens")
     .chancedOutput("47x gtceu:raw_sapphire", 2500, 400)
     .chancedOutput("42x gtceu:raw_ruby", 5000, 400)
     .chancedOutput("34x gtceu:raw_green_sapphire", 2500, 400)
     .chancedOutput("44x gtceu:raw_almandine", 5000, 400)
     .duration(1000).EUt(512).circuit(12).dimension("ad_astra:moon_orbit")

     // Rare Earth
     e.recipes.gtceu.ore_laser("rare_earth_level_1")
     .inputFluids([Fluid.of("gtceu:dense_hydrogen", 500)])
     .notConsumable("gtceu:green_glass_lens")
     .chancedOutput("128x gtceu:rare_earth_dust", 5000, 400)
     .duration(670).EUt(1048).circuit(13).dimension("ad_astra:moon_orbit")

     // - Nether Ores - //

     e.recipes.gtceu.ore_laser("level_1_laser_basnatite")
     .inputFluids([Fluid.of("gtceu:ultra_dense_hydrogen", 2000)])
     .notConsumable("gtceu:orange_glass_lens")
     .chancedOutput("43x gtceu:raw_bastnasite", 2500, 400)
     .chancedOutput("32x gtceu:raw_monazite", 2500, 400)
     .chancedOutput("41x gtceu:raw_neodymium", 2500, 400)
     .chancedOutput("45x kubejs:rare_earth_2", 2500, 400)
     .duration(1000).EUt(512).circuit(1).dimension("ad_astra:mars_orbit")

     e.recipes.gtceu.ore_laser("level_2_laser_molybdenum")
     .inputFluids([Fluid.of("gtceu:ultra_dense_hydrogen", 2000)])
     .notConsumable("gtceu:red_glass_lens")
     .chancedOutput("41x gtceu:raw_molybdenum", 5000, 400)
     .chancedOutput("42x gtceu:raw_wulfenite", 5000, 400)
     .chancedOutput("32x gtceu:raw_molybdenite", 2500, 400)
     .chancedOutput("44x gtceu:raw_powellite", 2500, 400)
     .duration(1000).EUt(512).circuit(2).dimension("ad_astra:mars_orbit")

     e.recipes.gtceu.ore_laser("level_3_laser_emerald")
     .inputFluids([Fluid.of("gtceu:ultra_dense_hydrogen", 2000)])
     .notConsumable("gtceu:orange_glass_lens")
     .chancedOutput("44x gtceu:raw_emerald", 2500, 400)
     .chancedOutput("41x gtceu:raw_beryllium", 2500, 400)
     .chancedOutput("17x gtceu:raw_thorium", 2500, 400)
     .duration(1000).EUt(512).circuit(3).dimension("ad_astra:mars_orbit")

     e.recipes.gtceu.ore_laser("level_4_laser_tetrahedrite")
     .inputFluids([Fluid.of("gtceu:ultra_dense_hydrogen", 2000)])
     .notConsumable("gtceu:brown_glass_lens")
     .chancedOutput("41x gtceu:raw_tetrahedrite", 5000, 400)
     .chancedOutput("37x gtceu:raw_stibnite", 5000, 400)
     .chancedOutput("42x minecraft:raw_copper", 2500, 400)
     .duration(1000).EUt(512).circuit(4).dimension("ad_astra:mars_orbit")

     e.recipes.gtceu.ore_laser("level_5_laser_certus")
     .inputFluids([Fluid.of("gtceu:ultra_dense_hydrogen", 2000)])
     .notConsumable("gtceu:pink_glass_lens")
     .chancedOutput("32x gtceu:raw_certus_quartz", 2500, 400)
     .chancedOutput("32x gtceu:raw_quartzite", 5000, 400)
     .chancedOutput("42x gtceu:raw_barite", 5000, 400)
     .duration(1000).EUt(512).circuit(5).dimension("ad_astra:mars_orbit")

     e.recipes.gtceu.ore_laser("level_6_laser_saltpeter")
     .inputFluids([Fluid.of("gtceu:ultra_dense_hydrogen", 2000)])
     .notConsumable("gtceu:magenta_glass_lens")
     .chancedOutput("32x gtceu:raw_saltpeter", 2500, 400)
     .chancedOutput("41x gtceu:raw_diatomite", 2500, 400)
     .chancedOutput("32x gtceu:raw_electrotine", 2500, 400)
     .chancedOutput("47x gtceu:raw_alunite", 2500, 400)
     .duration(1000).EUt(512).circuit(6).dimension("ad_astra:mars_orbit")

     e.recipes.gtceu.ore_laser("level_7_laser_quartz")
     .inputFluids([Fluid.of("gtceu:ultra_dense_hydrogen", 2000)])
     .notConsumable("gtceu:light_blue_glass_lens")
     .chancedOutput("48x gtceu:raw_nether_quartz", 5000, 400)
     .chancedOutput("32x gtceu:raw_quartzite", 5000, 400)
     .duration(1000).EUt(512).circuit(7).dimension("ad_astra:mars_orbit")

     e.recipes.gtceu.ore_laser("level_8_laser_pryite")
     .inputFluids([Fluid.of("gtceu:ultra_dense_hydrogen", 2000)])
     .notConsumable("gtceu:emerald_lens")
     .chancedOutput("48x gtceu:raw_pyrite", 2500, 400)
     .chancedOutput("32x gtceu:raw_sulfur", 5000, 400)
     .chancedOutput("32x gtceu:raw_sphalerite", 5000, 400)
     .duration(1000).EUt(512).circuit(8).dimension("ad_astra:mars_orbit")

     e.recipes.gtceu.ore_laser("level_9_laser_limonite")
     .inputFluids([Fluid.of("gtceu:ultra_dense_hydrogen", 2000)])
     .notConsumable("gtceu:ruby_lens")
     .chancedOutput("31x gtceu:raw_yellow_limonite", 2500, 400)
     .chancedOutput("47x minecraft:raw_iron", 2500, 400)
     .chancedOutput("32x minecraft:raw_gold", 2500, 400)
     .chancedOutput("32x kubejs:marian_crystal", 2500, 400)
     .duration(1000).EUt(512).circuit(9).dimension("ad_astra:mars_orbit")

     // - The End Ores - //

     e.recipes.gtceu.ore_laser("level_1_laser_scheelite")
     .inputFluids([Fluid.of("gtceu:ultra_dense_hydrogen", 2000)])
     .notConsumable("gtceu:nether_star_lens")
     .chancedOutput("47x gtceu:raw_scheelite", 5000, 400)
     .chancedOutput("32x gtceu:raw_tungstate", 5000, 400)
     .chancedOutput("42x gtceu:raw_lithium", 2500, 400)
     .duration(1000).EUt(512).circuit(1).dimension("minecraft:the_end")

     e.recipes.gtceu.ore_laser("level_2_laser_naquadah")
     .inputFluids([Fluid.of("gtceu:ultra_dense_hydrogen", 2000)])
     .notConsumable("gtceu:nether_star_lens")
     .chancedOutput("48x gtceu:raw_naquadah", 5000, 400)
     .chancedOutput("32x gtceu:raw_plutonium", 2500, 400)
     .duration(1200).EUt(8192).circuit(2).dimension("minecraft:the_end")

     e.recipes.gtceu.ore_laser("level_3_laser_sheldonite")
     .inputFluids([Fluid.of("gtceu:ultra_dense_hydrogen", 2000)])
     .notConsumable("gtceu:nether_star_lens")
     .chancedOutput("23x gtceu:raw_bornite", 2500, 400)
     .chancedOutput("42x gtceu:raw_cooperite", 5000, 400)
     .duration(1000).EUt(512).circuit(3).dimension("minecraft:the_end")

     e.recipes.gtceu.ore_laser("level_4_laser_magnetite")
     .inputFluids([Fluid.of("gtceu:ultra_dense_hydrogen", 2000)])
     .notConsumable("gtceu:nether_star_lens")
     .chancedOutput("21x gtceu:raw_magnetite", 2500, 400)
     .chancedOutput("32x gtceu:raw_vanadium_magnetite", 2500, 400)
     .chancedOutput("22x gtceu:raw_chromite", 2500, 400)
     .chancedOutput("14x minecraft:raw_gold", 2500, 400)
     .duration(1000).EUt(512).circuit(4).dimension("minecraft:the_end")

     e.recipes.gtceu.ore_laser("level_5_laser_bauxite")
     .inputFluids([Fluid.of("gtceu:ultra_dense_hydrogen", 2000)])
     .notConsumable("gtceu:nether_star_lens")
     .chancedOutput("44x gtceu:raw_bauxite", 5000, 400)
     .chancedOutput("42x gtceu:raw_ilmenite", 5000, 400)
     .chancedOutput("32x gtceu:raw_aluminium", 2500, 400)
     .duration(1000).EUt(512).circuit(5).dimension("minecraft:the_end")

     e.recipes.gtceu.ore_laser("level_6_laser_pitchblend")
     .inputFluids([Fluid.of("gtceu:ultra_dense_hydrogen", 2000)])
     .notConsumable("gtceu:nether_star_lens")
     .chancedOutput("33x gtceu:raw_pitchblende", 5000, 400)
     .chancedOutput("41x gtceu:raw_uraninite", 2500, 400)
     .duration(1000).EUt(512).circuit(6).dimension("minecraft:the_end")

})