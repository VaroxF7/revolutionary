ServerEvents.recipes(e => {  
e.recipes.gtceu.autoclave("kubejs:fluix_crystal_recipe")
       .itemInputs("3x ae2:fluix_dust")
       .inputFluids([Fluid.of('kubejs:clean_fluix', 250 )])
       .itemOutputs('2x ae2:fluix_crystal')
       .duration(140)
       .EUt(25)

       e.recipes.gtceu.autoclave("kubejs:mv_fluix_crystal_recipe")
       .itemInputs("2x ae2:fluix_dust", "3x gtceu:nether_quartz_dust")
       .inputFluids([Fluid.of('kubejs:clean_fluix', 150 )])
       .itemOutputs('6x ae2:fluix_crystal')
       .duration(95)
       .EUt(124)

       e.recipes.gtceu.electric_blast_furnace("kubejs:fluix_to_silicon_recipe")
       .itemInputs("2x ae2:fluix_dust")
       .inputFluids([Fluid.of('gtceu:distilled_water', 450 )])
       .itemOutputs('1x ae2:silicon')
       .duration(350)
       .EUt(124)
       .circuit(13)
       .blastFurnaceTemp(1300)

       // Certus Quartz - Fluix Recipe MV Line 

       e.recipes.gtceu.mixer("kubejs:mixing_quartz_certus_redstone")
       .itemInputs("1x gtceu:certus_quartz_dust", "1x gtceu:nether_quartz_dust")
       .inputFluids([Fluid.of('gtceu:redstone', 500)])
       .outputFluids([Fluid.of('kubejs:liquid_fluix', 1000)])
       .duration(300)
       .EUt(20)

       e.recipes.gtceu.centrifuge("kubejs:centrifuge_fluix_fluid")
       .inputFluids([Fluid.of('kubejs:liquid_fluix', 500 )])
       .outputFluids([Fluid.of('gtceu:sodium_potassium', 350 )])
       .itemOutputs('3x ae2:fluix_dust')
       .duration(660) 
       .EUt(20)

       e.recipes.gtceu.centrifuge("kubejs:mv_centrifuge_fluix_fluid")
       .inputFluids([Fluid.of('kubejs:liquid_fluix', 250 )])
       .itemInputs("1x gtceu:nether_quartz_dust")
       .outputFluids([Fluid.of('gtceu:sodium_potassium', 250 )])
       .itemOutputs('6x ae2:fluix_dust')
       .duration(560) 
       .EUt(124)

       e.recipes.gtceu.centrifuge("kubejs:sky_stone_centri_from_moon_sand")
       .inputFluids([Fluid.of('gtceu:distilled_water', 1000 )])
       .outputFluids([Fluid.of("gtceu:liquid_sky_stone", 144 )])
       .itemInputs("4x ad_astra:moon_sand")
       .duration(860) 
       .EUt(15)

       e.recipes.gtceu.extractor("kubejs:extractor_fluix_dust")
       .itemInputs("1x ae2:fluix_dust")
       .outputFluids([Fluid.of('kubejs:clean_fluix', 144 )])
       .duration(460)
       .EUt(25)
})