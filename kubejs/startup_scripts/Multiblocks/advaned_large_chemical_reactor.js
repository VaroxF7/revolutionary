GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('alcr')
         .category('alcr')
         .setEUIO('in')
         .setMaxIOSize(1, 0, 1, 1) // Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
         .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
         .setSound(GTSoundEntries.CHEMICAL)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
  event.create('alcr', 'multiblock')
      .rotationState(RotationState.NON_Y_AXIS)
      .recipeType('alcr')
      .appearanceBlock(GTBlocks.CASING_PTFE_INERT)
      .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
      .pattern(definition => FactoryBlockPattern.start()
        .aisle('CCCCCCC',  'CGGGGGC',   'CGGGGGC',    'CCCCCCC')
        .aisle('CCCCCCC',  ' WHWHW ',   ' WHWHW ',    'CJJOJJC')
        .aisle('CCCCCCC',  ' WHWHW ',   ' WHWHW ',    'CJJOJJC')
        .aisle('CCCCCCC',  'CGGKGGC',   'CGGGGGC',    'CCCCCCC')
          .where('K', Predicates.controller(Predicates.blocks(definition.get())))
          .where('W', Predicates.heatingCoils()) 
          .where('G', Predicates.blocks('gtceu:tempered_glass'))
          .where('H', Predicates.blocks('powah:nitro_crystal_block'))
          .where('J', Predicates.blocks('gtceu:assembly_line_grating'))
          .where('O', Predicates.blocks('gtceu:ptfe_pipe_casing'))
          .where('C', Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get())
            .or(Predicates.autoAbilities(definition.getRecipeTypes())
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH))
          ))
          .build()
     )
     .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_inert_ptfe', 
        'gtceu:block/multiblock/implosion_compressor', false)
})