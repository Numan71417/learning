const getToStudy = ()=>{
    const studyP = document.getElementById('study')
    const study = [
        "C.N",
        "D.B.M.S",
        "Automata",
        "C.D",
        "D.M.S",
        "Python",
        "Project",
        "D.S.A",
        "Web Dev concepts (redux etc..)",
        "DevOps",
        "Java Oops",
        "C++ oops",
        "Java Oops",
        "O.S/Linux",
        "Java SpringBoot",
    ]
    const guessNum = Math.floor(Math.random()*study.length);
    studyP.innerHTML = 'Study : '+study[guessNum]  
    console.log(guessNum);
}


