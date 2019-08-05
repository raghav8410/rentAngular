export class PlanModel{
    private planName: string;
    private rentPerPiece: number;
    private swapPiece: number;
    private totalPiece: number;
    private price: number;

    public setPlan(plan) {
        this.planName = plan.planName;
        this.rentPerPiece = plan.rentPerPiece;
        this.swapPiece = plan.swapPiece;
        this.totalPiece = plan.totalPiece;
        this.price = plan.price;
    }

    public getPlan() {
        let plan = {
            planName: this.planName,
            rentPerPiece: this.rentPerPiece,
            swapPiece: this.swapPiece,
            totalPiece: this.totalPiece,
            price: this.price
        }
        return plan;
    }
}