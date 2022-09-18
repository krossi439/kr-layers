import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSplitModule } from 'angular-split';
import { ComponentOutletDirective } from './directives/component-outlet.directive';
import { LayoutRootComponent } from './layout-root/layout-root.component';
import { SplitViewComponent } from './split-view/split-view.component';
import { DisableGuttersDirective } from './directives/disable-gutters.directive';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/component-state.reducer';
import { StyleGuttersDirective } from './directives/style-gutters.directive';
import { EffectsModule } from '@ngrx/effects';
import { LibEffects } from './store/lib.effects';
import { ActionButtonComponent } from './action-button/action-button.component';

@NgModule({
  declarations: [
    LayoutRootComponent,
    ComponentOutletDirective,
    SplitViewComponent,
    DisableGuttersDirective,
    StyleGuttersDirective,
    ActionButtonComponent
  ],
  imports: [
    CommonModule,
    AngularSplitModule,
    StoreModule.forFeature('components', reducer),
    EffectsModule.forFeature([LibEffects])
  ],
  exports: [
    LayoutRootComponent,
    ComponentOutletDirective
  ]
})
export class LibModule { }
