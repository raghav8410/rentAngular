export class ProfileModel{
    private height: string;
    private dressSize : number;
    private topSize: string;
    private pantSize : number;
    private topHalf: string;
    private bottomHalf: string;
    private flaunt: string;
    private downPlay: string;
    private focus: string;
    private incorporate: string;
    private avoid: string;

    public setProfile(profile){
     this.height = profile.height;
     this.dressSize = profile.dressSize;
     this.topSize = profile.topSize;
     this.pantSize = profile.pantSize;
     this.topHalf = profile.topHalf;
     this.bottomHalf = profile.bottomHalf;
     this.flaunt = profile.flaunt;
     this.downPlay = profile.downPlay;
     this.focus = profile.focus;
     this.incorporate = profile.incorporate;
     this.avoid = profile.avoid;
    }

    public getProfile(){
        let profile={
            height : this.height,
            dressSize : this.dressSize,
            topSize : this.topSize,
            pantSize : this.pantSize,
            topHalf : this.topHalf,
            bottomHalf : this.bottomHalf,
            flaunt : this.flaunt,
            downPlay : this.downPlay,
            focus : this.focus,
            incorporate : this.incorporate,
            avoid : this.avoid
        }

        return profile;
    }
}