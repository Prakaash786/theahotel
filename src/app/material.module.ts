import {NgModule} from '@angular/core';
import {
    MatBadgeModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule
} from '@angular/material';
@NgModule({
    imports: [
        MatBadgeModule,
        MatListModule,
        MatIconModule,
        MatSidenavModule,
        MatButtonModule,
        MatToolbarModule,
        MatTabsModule],
    exports: [
        MatBadgeModule,
        MatListModule,
        MatIconModule,
        MatSidenavModule,
        MatButtonModule,
        MatToolbarModule,
        MatTabsModule
    ]
})
export class MaterialModule {

}
