
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardBpm, AuthGuardEcm } from '@alfresco/adf-core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppsComponent } from './apps/apps.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { StartProcessComponent } from './start-process/start-process.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { FileViewComponent } from './file-view/file-view.component';
import { BlobViewComponent } from './file-view/blob-view.component';
import { ProcessComponent } from './process/process.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProcesslistComponent } from './processlist/processlist.component';

export const appRoutes: Routes = [
  { path: 'files/:nodeId/view', component: FileViewComponent, canActivate: [AuthGuardEcm], outlet: 'overlay' },
  { path: 'preview/blob', component: BlobViewComponent, outlet: 'overlay', pathMatch: 'full' },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
              {
                  path: '',
                  component: HomeComponent
              },
              {
                path: 'home',
                component: HomeComponent
            },
              {
                path: 'apps',
                component: AppsComponent,
                canActivate: [ AuthGuardBpm ]
              },
              {
                path: 'apps/:appId/tasks',
                component: TasksComponent,
                canActivate: [ AuthGuardBpm ]
              },
              {
                path: 'task',
                component: TasksComponent,
                canActivate: [ AuthGuardBpm ]
              },
             // ['/apps',this.processId||0, 'task', taskId]
            //  {
            //   path: 'apps/:appId/task',
            //   component: TaskDetailsComponent,
            //   canActivate: [ AuthGuardBpm ]
            // },
             
              {
                path: 'apps/:appId/task/:taskId',
                component: TaskDetailsComponent,
                canActivate: [ AuthGuardBpm ]
              },
              
              {
                path: 'apps/:appId/start-process',
                component: StartProcessComponent,
                canActivate: [ AuthGuardBpm ]
              },
              {
                path:'process',
                component:ProcessComponent,
                canActivate: [ AuthGuardBpm ]
              },
              {
                path:'process/:processInstanceId/processDetails',
                component:ProcesslistComponent
              }

          ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
