import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[si-inner-tmp]' })
export class SiInnerTemplateDirective {
    constructor(public template: TemplateRef<any>) { }
}
