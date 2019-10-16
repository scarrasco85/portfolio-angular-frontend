import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importamos nuestros componentes
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
	{path: '', component: AboutComponent},
	{path: 'sobre-mi', component: AboutComponent},
	{path: 'proyectos', component: ProjectsComponent},
	{path: 'crear-proyecto', component: CreateProjectComponent},
	{path: 'contacto', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
