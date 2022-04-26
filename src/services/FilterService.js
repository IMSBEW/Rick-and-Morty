const usefilterService = () => {
    const dataFilterCharacters = {
        Species: [
            'human', 'alien',
            'humanoid', 'unknown',
            'poopybutthole', 'mythologi',
            'animal', 'robot', 'cronenberg',
            'disease'
        ],
        Gender: [
            'female', 'male',
            'genderless', 'unknown'
        ],
        Status: [
            'alive', 'dead', 'unknown'
        ]
    }

    const dataFilterLocations = [
        "Planet",
        "Cluster",
        "Space station",
        "Microverse",
        "TV",
        "Resort",
        "Fantasy town",
        "Dream",
        "Dimension",
        "unknown",
        "Menagerie",
        "Game",
        "Customs",
        "Daycare",
        "Dwarf planet (Celestial Dwarf)",
        "Miniverse",
        "Teenyverse",
        "Box",
        "Spacecraft",
        "Artificially generated world",
        "Machine",
        "Arcade",
        "Spa",
        "Quadrant",
        "Quasar",
        "Mount",
        "Liquid",
        "Convention",
        "Woods",
        "Diegesis",
        "Non-Diegetic Alternative Reality",
        "Nightmare",
        "Asteroid",
        "Acid Plant",
        "Reality",
        "Death Star",
        "Base",
        "Elemental Rings",
        "Human",
        "Space",
        "Hell",
        "Police Department",
        "",
        "Country",
        "Consciousness",
        "Memory"
    ]

    return {
        dataFilterCharacters,
        dataFilterLocations
    }
}

export default usefilterService