const roadmap = {
    'Bee Movie': getRoadmapInFile('http://localhost:5500/extension/data/bee_movie.txt'),
    'Shrek': getRoadmapInFile('http://localhost:5500/extension/data/shrek.txt')
}

function startRoadmap() {
    console.log("Roadmap loaded")
}

startRoadmap()

async function getRoadmapInFile(file) {

    const response = await fetch(file);
    const texto = await response.text();
    console.log("texto", texto)
    return texto;
}

