import { Component } from '@angular/core';

@Component({
    selector: 'feature',
    template: `
                {{title}}
                `
})

export class FeatureComponent {
    title: string = "Feature";
}