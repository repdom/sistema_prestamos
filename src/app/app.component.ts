import { Component, OnInit, AfterViewInit, ElementRef, AfterViewChecked } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
    constructor(private translate: TranslateService, private elementRef: ElementRef) {
        translate.setDefaultLang('en');
    }
    ngAfterViewInit() {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#494949';
        // microlink('.link-preview');
    }
    ngOnInit() {
    }
}
