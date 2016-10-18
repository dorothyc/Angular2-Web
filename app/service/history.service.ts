import {Subject} from "rxjs/Subject";
import {Library} from "./library";
import {Injectable} from "@angular/core";

@Injectable()
export class HistoryService{
    private reviewedHistory = new Subject<any>();
    reviewedLibs: Library[] = [];

    reviewedHistory$ = this.reviewedHistory.asObservable();

    addReviewedLibrary(lib: Library){
        this.reviewedHistory.next(lib);
        this.reviewedLibs.push(lib);
    }

    getReviewed(){
        return this.reviewedLibs;
    }
}