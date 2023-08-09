export default function removeDuplicate(quizQuestions){
    let uniqueQuestions = [];
     let seenQuestions = new Set();
    for(let questions of quizQuestions){
        if(!seenQuestions.has(questions.question)){
            uniqueQuestions.push(questions);
            seenQuestions.add(questions.question)
        }
    }
    return uniqueQuestions
}