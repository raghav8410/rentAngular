export class faqModel{
    private question : string;
    private answer : string;
    private features : string[];

    public setQuestion(question){
        this.question = question.question,
        this.answer = question.answer,
        this.features = question.features
    };

    public getQuestion(){
        let question={
            question : this.question,
            answer : this.answer,
            features : this.features
        }
        return question;
    }
}