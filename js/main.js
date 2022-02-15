//RenderSelect Options

const problemSelect = document.querySelector("#problem");
const conditionHeader = document.querySelector(".condition-header")
const conditionDescription = document.querySelector(".condition-description");

const examplesList = document.querySelector(".stdio ul");

const problemResult = document.querySelector("#problemResult");
const button = document.querySelector("#btn")

const textarea = document.querySelector("#textarea");

const problemStatus = document.querySelector(".right-side-status ul"); 

function renderSelectOptions(problems){
    for(let problem of problems){
        let option = document.createElement("option");
        option.value = problem.problemId
        option.textContent = problem.problemId + ". " + problem.problemTitle;
        
        problemSelect.append(option);
    }
}

problemSelect.onchange = (e) => {
    problemStatus.textContent = null
    renderProblemsContent(e.target.value);
}


function renderProblemsContent(problemId){
    let findProblem = problems.find(problem => problem.problemId == problemId);
    if(findProblem == undefined) return

    conditionHeader.textContent = findProblem.problemId + ". " + findProblem.problemTitle;
    conditionDescription.textContent = findProblem.problemDescription;

    let allExamples = ""
    for(let example of findProblem.examples){
        allExamples += `
        <li>
            <div class="stdio-header">
                Example ${example.exampleId}:
            </div>
            <div class="stdio-content">
                <div class="stdio-code">
                    <span>Input:</span> <code>${example.exampleInput}</code>
                </div>
                <div class="stdio-code">
                    <span>Output:</span> <code>${example.exampleOutput}</code>
                </div>
                ${example.exampleExplanation ? `<div class="stdio-code"><span>Explanation:</span> <code>${example.exampleExplanation}</code></div>` : ""}
            </div>
         </li>
        `
    }
    examplesList.innerHTML = null
    examplesList.innerHTML = allExamples;

    textarea.value = `
        ${findProblem.functionContent}
    `

    button.onclick = (e) => {
        e.preventDefault();
        problemStatus.textContent = null
        try{
            let func = new Function(findProblem.functionArguments.join(","), `
                ${textarea.value}
            return ${findProblem.functionName}(${findProblem.functionArguments.join(",")})
            `);
        
            for(let test of findProblem.tests){
                let result = func(test.test[0], test.test[1], test.test[2], test.test[3])
                if(result == undefined) return

                //Check if result is equal to test.result
                if(result.toString() == test.result.toString()){
                    let [li, span, i] = createElements("li", "span", "i")
                    li.textContent = `${test.testId}.`
                    span.classList.add("status")
                    span.textContent = "Pass"
                    i.classList.add("fas")
                    i.classList.add("fa-check")
                    li.append(span, i)
                    problemStatus.append(li)
                }else{
                    let [li, span, i] = createElements("li", "span", "i")
                    li.textContent = `${test.testId}. `
                    span.classList.add("status")
                    span.textContent = "Fail"
                    i.classList.add("fas")
                    i.classList.add("fa-times")
                    li.append(span, i)
                    problemStatus.append(li)
                }
            }
        }catch(error){
            alert(error.messgae);
        }
    }
}










renderSelectOptions(problems);