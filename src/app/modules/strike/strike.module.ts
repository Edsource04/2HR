import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StrikeRoutingModule } from './strike-routing.module';
import { FormsModule } from '@angular/forms';
import { StrikeFormComponent } from './components/strike-form/strike-form.component';
import { StrikeService } from './strike.service';
import { StrikeListComponent } from './components/strike-list/strike-list.component';
import { SearchStrikeComponent } from './components/search-strike/search-strike.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StrikeRoutingModule
  ],
  declarations: [StrikeFormComponent, StrikeListComponent, SearchStrikeComponent],
  providers: [StrikeService],
  exports: [StrikeFormComponent, StrikeListComponent, SearchStrikeComponent]
})
export class StrikeModule { 

  static forRoot(): ModuleWithProviders{
    return {
        ngModule: StrikeModule,
        providers: [StrikeService]
    }
  }
}
