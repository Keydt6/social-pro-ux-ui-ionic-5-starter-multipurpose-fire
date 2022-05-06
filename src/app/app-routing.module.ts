import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule) },
  { path: 'welcome2', loadChildren: () => import('./pages/welcome2/welcome2.module').then(m => m.Welcome2PageModule) },
  { path: 'welcome3', loadChildren: () => import('./pages/welcome3/welcome3.module').then(m => m.Welcome3PageModule) },
  { path: 'welcome4', loadChildren: () => import('./pages/welcome4/welcome4.module').then(m => m.Welcome4PageModule) },
  { path: 'welcome5', loadChildren: () => import('./pages/welcome5/welcome5.module').then(m => m.Welcome5PageModule) },
  { path: 'onboarding', loadChildren: () => import('./pages/onboarding/onboarding.module').then(m => m.OnboardingPageModule) },
  { path: 'discover', loadChildren: () => import('./pages/discover/discover.module').then(m => m.DiscoverPageModule) },
  { path: 'feeds', loadChildren: () => import('./pages/feeds/feeds.module').then(m => m.FeedsPageModule) },
  { path: 'activity', loadChildren: () => import('./pages/activity/activity.module').then(m => m.ActivityPageModule) },
  { path: 'updates', loadChildren: () => import('./pages/updates/updates.module').then(m => m.UpdatesPageModule) },
  { path: 'updates2', loadChildren: () => import('./pages/updates2/updates2.module').then(m => m.Updates2PageModule) },
  { path: 'updates3', loadChildren: () => import('./pages/updates3/updates3.module').then(m => m.Updates3PageModule) },
  { path: 'signin', loadChildren: () => import('./pages/signin/signin.module').then(m => m.SigninPageModule) },
  { path: 'feeds2', loadChildren: () => import('./pages/feeds2/feeds2.module').then(m => m.Feeds2PageModule) },
  { path: 'welcome6', loadChildren: () => import('./pages/welcome6/welcome6.module').then(m => m.Welcome6PageModule) },
  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule) },
  { path: 'profile2', loadChildren: () => import('./pages/profile2/profile2.module').then(m => m.Profile2PageModule) },
  { path: 'profile4', loadChildren: () => import('./pages/profile4/profile4.module').then(m => m.Profile4PageModule) },
  { path: 'categories', loadChildren: () => import('./pages/categories/categories.module').then(m => m.CategoriesPageModule) },
  { path: 'dashboard/posts', loadChildren: () => import('./pages/dashboard/post/post.module').then(m => m.PostPageModule)},
  { path: 'dashboard/posts/:id', loadChildren: () => import('./pages/dashboard/post-details/post-details.module').then(m => m.PostDetailsPageModule)},
  { path: 'dashboard/users', loadChildren: () => import('./pages/dashboard/user/user.module').then(m => m.UserPageModule)},
  { path: 'dashboard/users/:id', loadChildren: () => import('./pages/dashboard/user-details/user-details.module').then(m => m.UserDetailsPageModule)},
  { path: 'dashboard/categories', loadChildren: () => import('./pages/dashboard/categories/categories.module').then(m => m.CategoriesPageModule)},
  { path: 'dashboard/categories/:id', loadChildren: () => import('./pages/dashboard/categories-details/categories-details.module').then(m => m.CategoriesDetailsPageModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
