

export class Trivia {
    constructor(data) {
        this.category = data.category
        this.question = data.question
        this.answer = data.answer
        this.wrongAnswer = data.wrongAnswer

    }

    get TriviaTemplate() {
        return `
        
        `
    }
}