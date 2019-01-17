const h1 = (...props) => {
    return `<h1 class="${props[1]}">${props[0]}</h1>`
}

const section = (...props) => {
    return `<section class="bordered dashed ${props[1]}">${props[0]}</section>`
}

const aside = (...props) => {
    return `<aside class="${props[1]}">${props[0]}</aside>`
}

const student = (name, sectionContent, info, passorFail) => {
    return `
        <div id="student">
            ${h1(name, "xx-large " + passorFail)}
            ${section(sectionContent, "gold")}
            ${aside(info, "pushRight")}
            
        </div>
    `
}

// students.forEach(currentStudent => {
//     const studentHTMLRepresentation = student(
//         currentStudent.name,
//         currentStudent.class,
//         currentStudent.info)
//     document.querySelector("#container").innerHTML += studentHTMLRepresentation
// })






 for (studentz of students) {
     let studentComponent = ""
     if (studentz.score >= 60) {
         studentComponent = student(
             studentz.name,
             studentz.class,
             studentz.info,
             "passing")
    } else {
         studentComponent = student(
             studentz.name,
             
studentz.class,
             studentz.info,
             "failing")
     }
     document.querySelector("#container").innerHTML += studentComponent
}
