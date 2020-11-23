import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// App components
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailProjectComponent } from './components/detail-project/detail-project.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { CvComponent } from './components/cv/cv.component';

const routes: Routes = [
	{path: '', component: AboutComponent},
	{path: 'sobre-mi', component: AboutComponent},
	{path: 'cv', component: CvComponent},
	{path: 'proyectos', component: ProjectsComponent},
	{path: 'crear-proyecto', component: CreateProjectComponent},
	{path: 'contacto', component: ContactComponent},
	{path: 'proyecto/:id', component: DetailProjectComponent},
	{path: 'editar-proyecto/:id', component: EditProjectComponent},
	{path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
