import { Component, OnInit } from "@angular/core";
import { QuotesService } from "src/app/services/quotes.service";

@Component({
    selector: "app-dashboard",
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    MONEY_LIST: string = "CAD-BRL,ARS-BRL,GBP-BRL"
    
    constructor (
        private quotesService: QuotesService
    ) {}

    ngOnInit() {
        this.loadMoneyQuotes(this.MONEY_LIST)
    }

    loadMoneyQuotes(moneyList: any) {
        this.quotesService.getQuotesByLocaleMoneyList(moneyList).subscribe(
            result => {
                console.log("result", result)
            },
            err => console.log("err", err)
        )
    }
}