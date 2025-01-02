ServerEvents.recipes(e => {
    // Silicon RAM
    e.recipes.gtceu.litho_machine("silicon_wafer_ram")
     .itemInputs("gtceu:silicon_wafer")
     .itemOutputs("gtceu:ram_wafer")
     .inputFluids([Fluid.of("gtceu:tin", 144), Fluid.of("gtceu:nitrogen", 500)])
     .notConsumable("#forge:lenses/green")
     .duration(540).EUt(2048).circuit(1)

     e.recipes.gtceu.litho_machine("silicon_wafer_ram_2")
     .itemInputs("gtceu:silicon_wafer")
     .itemOutputs("gtceu:ram_wafer")
     .inputFluids([Fluid.of("gtceu:tin", 288), Fluid.of("gtceu:oxygen", 1000)])
     .notConsumable("#forge:lenses/green")
     .duration(340).EUt(2048).circuit(2)

    // Silicon CPU
    e.recipes.gtceu.litho_machine("silicon_wafer_cpu")
    .itemInputs("gtceu:silicon_wafer")
    .itemOutputs("gtceu:cpu_wafer")
    .inputFluids([Fluid.of("gtceu:tin", 144), Fluid.of("gtceu:nitrogen", 500)])
    .notConsumable("#forge:lenses/light_blue")
    .duration(540).EUt(2048).circuit(1)

    e.recipes.gtceu.litho_machine("silicon_wafer_cpu_2")
     .itemInputs("gtceu:silicon_wafer")
     .itemOutputs("gtceu:cpu_wafer")
     .inputFluids([Fluid.of("gtceu:tin", 288), Fluid.of("gtceu:oxygen", 1000)])
     .notConsumable("#forge:lenses/light_blue")
     .duration(340).EUt(2048).circuit(2)

    // Silicon ULPIC
    e.recipes.gtceu.litho_machine("silicon_wafer_ulpic")
    .itemInputs("gtceu:silicon_wafer")
    .itemOutputs("gtceu:ulpic_wafer")
    .inputFluids([Fluid.of("gtceu:tin", 144), Fluid.of("gtceu:nitrogen", 500)])
    .notConsumable("#forge:lenses/blue")
    .duration(540).EUt(2048).circuit(1)

    e.recipes.gtceu.litho_machine("silicon_wafer_ulpic_2")
     .itemInputs("gtceu:silicon_wafer")
     .itemOutputs("gtceu:ulpic_wafer")
     .inputFluids([Fluid.of("gtceu:tin", 288), Fluid.of("gtceu:oxygen", 1000)])
     .notConsumable("#forge:lenses/blue")
     .duration(340).EUt(2048).circuit(2)

    // Silicon Simple SoC 
    e.recipes.gtceu.litho_machine("silicon_wafer_simple_soc")
    .itemInputs("gtceu:silicon_wafer")
    .itemOutputs("gtceu:simple_soc_wafer")
    .inputFluids([Fluid.of("gtceu:tin", 144), Fluid.of("gtceu:nitrogen", 500)])
    .notConsumable("#forge:lenses/cyan")
    .duration(540).EUt(2048).circuit(1)

    e.recipes.gtceu.litho_machine("silicon_wafer_simple_soc_2")
     .itemInputs("gtceu:silicon_wafer")
     .itemOutputs("gtceu:simple_soc_wafer")
     .inputFluids([Fluid.of("gtceu:tin", 288), Fluid.of("gtceu:oxygen", 1000)])
     .notConsumable("#forge:lenses/cyan")
     .duration(340).EUt(2048).circuit(2)

    // Silicon LPIC
    e.recipes.gtceu.litho_machine("silicon_wafer_lpic")
    .itemInputs("gtceu:silicon_wafer")
    .itemOutputs("gtceu:lpic_wafer")
    .inputFluids([Fluid.of("gtceu:tin", 144), Fluid.of("gtceu:nitrogen", 500)])
    .notConsumable("#forge:lenses/orange")
    .duration(540).EUt(2048).circuit(1)

    e.recipes.gtceu.litho_machine("silicon_wafer_lpic_2")
     .itemInputs("gtceu:silicon_wafer")
     .itemOutputs("gtceu:lpic_wafer")
     .inputFluids([Fluid.of("gtceu:tin", 288), Fluid.of("gtceu:oxygen", 1000)])
     .notConsumable("#forge:lenses/orange")
     .duration(340).EUt(2048).circuit(2)

    // Silicon ILC
    e.recipes.gtceu.litho_machine("silicon_wafer_ilc")
    .itemInputs("gtceu:silicon_wafer")
    .itemOutputs("gtceu:ilc_wafer")
    .inputFluids([Fluid.of("gtceu:tin", 144), Fluid.of("gtceu:nitrogen", 500)])
    .notConsumable("#forge:lenses/red")
    .duration(540).EUt(2048).circuit(1)

    e.recipes.gtceu.litho_machine("silicon_wafer_ilc_2")
     .itemInputs("gtceu:silicon_wafer")
     .itemOutputs("gtceu:ilc_wafer")
     .inputFluids([Fluid.of("gtceu:tin", 288), Fluid.of("gtceu:oxygen", 1000)])
     .notConsumable("#forge:lenses/red")
     .duration(340).EUt(2048).circuit(2)
})

ServerEvents.recipes(e => {
    const toRemoveId = [
      'gtceu:laser_engraver/engrave_ulpic_silicon','gtceu:laser_engraver/engrave_ilc_silicon',
      'gtceu:laser_engraver/engrave_ram_silicon', 'gtceu:laser_engraver/engrave_ssoc_silicon', 'gtceu:laser_engraver/engrave_lpic_silicon',
      'gtceu:laser_engraver/engrave_cpu_silicon'
    ];
    toRemoveId.forEach(element => {
    e.remove({ id: element});
    })
})



ServerEvents.recipes(e => {
    // Phosphorus-doped MPIC
    e.recipes.gtceu.litho_machine("phosphorus_wafer_mpic")
    .itemInputs("gtceu:phosphorus_wafer")
    .itemOutputs("gtceu:mpic_wafer")
    .inputFluids([Fluid.of("gtceu:silver", 144), Fluid.of("gtceu:nitrogen", 500)])
    .notConsumable("#forge:lenses/brown")
    .duration(540).EUt(2048).circuit(1).cleanroom(CleanroomType.CLEANROOM)

    e.recipes.gtceu.litho_machine("phosphorus_wafer_mpic_2")
    .itemInputs("gtceu:phosphorus_wafer")
    .itemOutputs("gtceu:mpic_wafer")
    .inputFluids([Fluid.of("gtceu:silver", 288), Fluid.of("gtceu:oxygen", 1000)])
    .notConsumable("#forge:lenses/brown")
    .duration(340).EUt(8192).circuit(2).cleanroom(CleanroomType.CLEANROOM)

    // Phosphorus-doped SOC
    e.recipes.gtceu.litho_machine("phosphorus_wafer_soc")
    .itemInputs("gtceu:phosphorus_wafer")
    .itemOutputs("gtceu:soc_wafer")
    .inputFluids([Fluid.of("gtceu:silver", 144), Fluid.of("gtceu:nitrogen", 500)])
    .notConsumable("#forge:lenses/yellow")
    .duration(540).EUt(8192).circuit(1).cleanroom(CleanroomType.CLEANROOM)

    e.recipes.gtceu.litho_machine("phosphorus_wafer_soc_2")
    .itemInputs("gtceu:phosphorus_wafer")
    .itemOutputs("gtceu:soc_wafer")
    .inputFluids([Fluid.of("gtceu:silver", 288), Fluid.of("gtceu:oxygen", 1000)])
    .notConsumable("#forge:lenses/yellow")
    .duration(340).EUt(8192).circuit(2).cleanroom(CleanroomType.CLEANROOM)

    // Phosphorus-doped CPU
    e.recipes.gtceu.litho_machine("phosphorus_wafer_cpu")
    .itemInputs("gtceu:phosphorus_wafer")
    .itemOutputs("4x gtceu:cpu_wafer")
    .inputFluids([Fluid.of("gtceu:silver", 144), Fluid.of("gtceu:nitrogen", 500)])
    .notConsumable("#forge:lenses/light_blue")
    .duration(340).EUt(2048).circuit(1).cleanroom(CleanroomType.CLEANROOM)
    
    e.recipes.gtceu.litho_machine("phosphorus_wafer_cpu_2")
    .itemInputs("gtceu:phosphorus_wafer")
    .itemOutputs("6x gtceu:cpu_wafer")
    .inputFluids([Fluid.of("gtceu:silver", 288), Fluid.of("gtceu:oxygen", 1000)])
    .notConsumable("#forge:lenses/light_blue")
    .duration(240).EUt(8192).circuit(2).cleanroom(CleanroomType.CLEANROOM)

    // Phosphorus-doped LPIC
    e.recipes.gtceu.litho_machine("phosphorus_wafer_lpic")
    .itemInputs("gtceu:phosphorus_wafer")
    .itemOutputs("4x gtceu:lpic_wafer")
    .inputFluids([Fluid.of("gtceu:silver", 144), Fluid.of("gtceu:nitrogen", 500)])
    .notConsumable("#forge:lenses/orange")
    .duration(340).EUt(2048).circuit(1).cleanroom(CleanroomType.CLEANROOM)
        
    e.recipes.gtceu.litho_machine("phosphorus_wafer_lpic_2")
    .itemInputs("gtceu:phosphorus_wafer")
    .itemOutputs("6x gtceu:lpic_wafer")
    .inputFluids([Fluid.of("gtceu:silver", 288), Fluid.of("gtceu:oxygen", 1000)])
    .notConsumable("#forge:lenses/orange")
    .duration(240).EUt(8192).circuit(2).cleanroom(CleanroomType.CLEANROOM)

    // Phosphorus-doped NAND
    e.recipes.gtceu.litho_machine("phosphorus_wafer_nand")
    .itemInputs("gtceu:phosphorus_wafer")
    .itemOutputs("gtceu:nand_memory_wafer")
    .inputFluids([Fluid.of("gtceu:silver", 144), Fluid.of("gtceu:nitrogen", 500)])
    .notConsumable("#forge:lenses/gray")
    .duration(540).EUt(2048).circuit(1).cleanroom(CleanroomType.CLEANROOM)
            
    e.recipes.gtceu.litho_machine("phosphorus_wafer_nand_2")
    .itemInputs("gtceu:phosphorus_wafer")
    .itemOutputs("gtceu:nand_memory_wafer")
    .inputFluids([Fluid.of("gtceu:silver", 288), Fluid.of("gtceu:oxygen", 1000)])
    .notConsumable("#forge:lenses/gray")
    .duration(340).EUt(8192).circuit(2).cleanroom(CleanroomType.CLEANROOM)

    // Phosphorus-doped ULPIC
    e.recipes.gtceu.litho_machine("phosphorus_wafer_ulpic")
    .itemInputs("gtceu:phosphorus_wafer")
    .itemOutputs("4x gtceu:ulpic_wafer")
    .inputFluids([Fluid.of("gtceu:silver", 144), Fluid.of("gtceu:nitrogen", 500)])
    .notConsumable("#forge:lenses/blue")
    .duration(340).EUt(2048).circuit(1).cleanroom(CleanroomType.CLEANROOM)
                
    e.recipes.gtceu.litho_machine("phosphorus_wafer_ulpic_2")
    .itemInputs("gtceu:phosphorus_wafer")
    .itemOutputs("6x gtceu:ulpic_wafer")
    .inputFluids([Fluid.of("gtceu:silver", 288), Fluid.of("gtceu:oxygen", 1000)])
    .notConsumable("#forge:lenses/blue")
    .duration(240).EUt(8192).circuit(2).cleanroom(CleanroomType.CLEANROOM)

    // Phosphorus-doped ILC
    e.recipes.gtceu.litho_machine("phosphorus_wafer_ilc")
    .itemInputs("gtceu:phosphorus_wafer")
    .itemOutputs("4x gtceu:ilc_wafer")
    .inputFluids([Fluid.of("gtceu:silver", 144), Fluid.of("gtceu:nitrogen", 500)])
    .notConsumable("#forge:lenses/red")
    .duration(340).EUt(2048).circuit(1).cleanroom(CleanroomType.CLEANROOM)
                    
    e.recipes.gtceu.litho_machine("phosphorus_wafer_ilc_2")
    .itemInputs("gtceu:phosphorus_wafer")
    .itemOutputs("6x gtceu:ilc_wafer")
    .inputFluids([Fluid.of("gtceu:silver", 288), Fluid.of("gtceu:oxygen", 1000)])
    .notConsumable("#forge:lenses/red")
    .duration(240).EUt(8192).circuit(2).cleanroom(CleanroomType.CLEANROOM)

    // Phosphorus-doped NOT
    e.recipes.gtceu.litho_machine("phosphorus_wafer_nor")
    .itemInputs("gtceu:phosphorus_wafer")
    .itemOutputs("gtceu:nor_memory_wafer")
    .inputFluids([Fluid.of("gtceu:silver", 144), Fluid.of("gtceu:nitrogen", 500)])
    .notConsumable("#forge:lenses/pink")
    .duration(540).EUt(2048).circuit(1).cleanroom(CleanroomType.CLEANROOM)
                        
    e.recipes.gtceu.litho_machine("phosphorus_wafer_nor_2")
    .itemInputs("gtceu:phosphorus_wafer")
    .itemOutputs("gtceu:nor_memory_wafer")
    .inputFluids([Fluid.of("gtceu:silver", 288), Fluid.of("gtceu:oxygen", 1000)])
    .notConsumable("#forge:lenses/pink")
    .duration(340).EUt(8192).circuit(2).cleanroom(CleanroomType.CLEANROOM)

    // Phosphorus-doped RAM
    e.recipes.gtceu.litho_machine("phosphorus_wafer_ram")
    .itemInputs("gtceu:phosphorus_wafer")
    .itemOutputs("4x gtceu:ram_wafer")
    .inputFluids([Fluid.of("gtceu:silver", 144), Fluid.of("gtceu:nitrogen", 500)])
    .notConsumable("#forge:lenses/green")
    .duration(340).EUt(2048).circuit(1).cleanroom(CleanroomType.CLEANROOM)
                            
    e.recipes.gtceu.litho_machine("phosphorus_wafer_ram_2")
    .itemInputs("gtceu:phosphorus_wafer")
    .itemOutputs("6x gtceu:ram_wafer")
    .inputFluids([Fluid.of("gtceu:silver", 288), Fluid.of("gtceu:oxygen", 1000)])
    .notConsumable("#forge:lenses/green")
    .duration(240).EUt(8192).circuit(2).cleanroom(CleanroomType.CLEANROOM)

    // Phosphorus-doped Simple SOC
    e.recipes.gtceu.litho_machine("phosphorus_wafer_simple_soc")
    .itemInputs("gtceu:phosphorus_wafer")
    .itemOutputs("4x gtceu:simple_soc_wafer")
    .inputFluids([Fluid.of("gtceu:silver", 144), Fluid.of("gtceu:nitrogen", 500)])
    .notConsumable("#forge:lenses/cyan")
    .duration(340).EUt(2048).circuit(1).cleanroom(CleanroomType.CLEANROOM)
                                
    e.recipes.gtceu.litho_machine("phosphorus_wafer_simple_soc_2")
    .itemInputs("gtceu:phosphorus_wafer")
    .itemOutputs("6x gtceu:simple_soc_wafer")
    .inputFluids([Fluid.of("gtceu:silver", 288), Fluid.of("gtceu:oxygen", 1000)])
    .notConsumable("#forge:lenses/cyan")
    .duration(240).EUt(8192).circuit(2).cleanroom(CleanroomType.CLEANROOM)
})


ServerEvents.recipes(e => {
        const toRemoveId = [
          'gtceu:laser_engraver/engrave_pic_phosphorus','gtceu:laser_engraver/engrave_soc_phosphorus',
          'gtceu:laser_engraver/engrave_cpu_phosphorus', 'gtceu:laser_engraver/engrave_lpic_phosphorus', 'gtceu:laser_engraver/engrave_ilc_phosphorus',
          'gtceu:laser_engraver/engrave_nor_phosphorus', 'gtceu:laser_engraver/engrave_ram_phosphorus', 'gtceu:laser_engraver/engrave_ssoc_phosphorus',
          'gtceu:laser_engraver/engrave_ulpic_phosphorus', 'gtceu:laser_engraver/engrave_nand_phosphorus', 'gtceu:chemical_bath/etching_nano_circuit',
          'gtceu:chemical_reactor/nano_cpu_wafer'
        ];
        toRemoveId.forEach(element => {
        e.remove({ id: element});
    })
})

//////////////////////////////
//                          //
//    MK - 2 LITHOGRAPHY    //
//                          //
//////////////////////////////

ServerEvents.recipes(e => {
  // NANO - Normal to Raw
  e.recipes.gtceu.litho_machine_mk2("normal_silicon_to_raw_nano_wafer")
   .itemInputs("gtceu:cpu_wafer", "8x gtceu:carbon_fibers")
   .itemOutputs("kubejs:raw_nano_cpu_wafer")
   .inputFluids([
    Fluid.of("gtceu:oxygen", 500),
    Fluid.of("gtceu:epoxy", 250)
  ])
   .notConsumable("kubejs:nano_mask")
   .duration(1200).EUt(1850).cleanroom(CleanroomType.CLEANROOM)

   // Raw to Nano
   e.recipes.gtceu.litho_machine_mk2("raw_nano_to_nano")
   .itemInputs("kubejs:raw_nano_cpu_wafer")
   .itemOutputs("gtceu:nano_cpu_wafer")
   .inputFluids([
    Fluid.of("gtceu:sulfuric_acid", 250), 
    Fluid.of("gtceu:kryptonian_glowstream", 500)
    ])
   .duration(242).EUt(1700).cleanroom(CleanroomType.CLEANROOM).circuit(2)
})


// Recipes for all Blocks of the Multiblocks MK1 and MK2 
ServerEvents.recipes(e => {
  e.recipes.gtceu.assembler("mk1_litho_casing")
   .itemInputs("gtceu:plascrete", "16x gtceu:redstone_alloy_single_wire", "8x #gtceu:circuits/mv")
   .itemOutputs("4x kubejs:casing_litho")
   .inputFluids([Fluid.of("gtceu:silver", 570)])
   .duration(120).EUt(120)

   e.recipes.gtceu.assembler("mk2_litho_casing")
    .itemInputs("2x gtceu:plascrete", "32x gtceu:energetic_alloy_single_wire", "4x #gtceu:circuits/ev")
    .itemOutputs("2x kubejs:casing_advanced_litho")
    .inputFluids([Fluid.of("gtceu:titanium_silver", 1200)])
    .duration(320).EUt(510)

   e.recipes.gtceu.assembler("mk1_controller")
    .itemInputs("2x kubejs:casing_litho", "32x gtceu:redstone_alloy_single_wire", "2x #gtceu:circuits/mv")
    .itemOutputs("gtceu:litho_machine")
    .duration(250).EUt(120).circuit(1)

    e.recipes.gtceu.assembler("mk2_controller")
     .itemInputs("4x kubejs:casing_advanced_litho", "32x gtceu:energetic_alloy_single_wire", "4x #gtceu:circuits/ev")
     .itemOutputs("gtceu:litho_machine_mk2")
     .duration(200).EUt(510).circuit(2)
})