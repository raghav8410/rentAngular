export class ExclusiveOfferModel{

    private planType: string;
    private duration: number;
    private discount: number;
    private pricePerMonth: number;
    private totalPiece: string;
    private regularPrice: number;
    private color: string;
    private extraFeatureMonths: number;

    public setOffer(offer){
        this.planType = offer.planType,
        this.duration = offer.duration,
        this.discount = offer.discount,
        this.pricePerMonth = offer.pricePerMonth,
        this.totalPiece = offer.totalPiece,
        this.regularPrice = offer.regularPrice,
        this.color = offer.color,
        this.extraFeatureMonths = offer.extraFeatureMonths
    }

    public getOffer(){
        let offer={
            planType : this.planType,
            duration : this.duration,
            discount : this.discount,
            pricePerMonth : this.pricePerMonth,
            totalPiece : this.totalPiece,
            regularPrice : this.regularPrice,
            color : this.color,
            extraFeatureMonths : this.extraFeatureMonths
        }
        return offer;
    }
}