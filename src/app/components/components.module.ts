import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenComponent } from './screen/screen.component';
import { BypassHrefSecurityPipe } from './bypass-href-security.pipe';
import { LibModule } from '../lib/lib.module';
import { CodePenComponent } from './code-pen/code-pen.component';
import { EffectsModule } from '@ngrx/effects';
import { FeatureEffects } from './store/feature.effects';

@NgModule({
  declarations: [
    ScreenComponent,
    BypassHrefSecurityPipe,
    CodePenComponent
  ],
  imports: [
    CommonModule,
    LibModule,
    EffectsModule.forFeature([FeatureEffects])
  ]
})
export class ComponentsModule { }
