import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CourseDetailsComponent } from './course-details/course-details';
import { IonicModule } from "ionic-angular";

@NgModule({
	declarations: [CourseDetailsComponent],
	imports: [IonicModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA ],
	exports: [CourseDetailsComponent],
})
export class ComponentsModule {}
