import { Component, OnInit} from '@angular/core';
import { Router, NavigationStart, NavigationError, NavigationCancel, NavigationEnd } from '@angular/router';
import { AuthService } from './user/auth.service';
import { MessageService } from './messages/message.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // myControl = new FormControl();
  // options: string[] = ['One', 'Two', 'Three'];
  pageTitle = 'Acme Product Management';
  loading = true;
  selectIndex: number = null;
  isOpen = false;
  ngOnInit() {
  }

  togglei() {
    this.isOpen = !this.isOpen;
  }
  setActive(index: number) {
    this.selectIndex = index;
  }
  // get isLoggedIn(): boolean {
  //   return this.authService.isLoggedIn;
  // }

  // get isMessageDisplayed(): boolean {
  //   return this.messageService.isDisplayed;
  // }

  // get userName(): string {
  //   if (this.authService.currentUser) {
  //     return this.authService.currentUser.userName;
  //   }
  //   return '';
  // }

  // constructor(private authService: AuthService,
  //             private router: Router,
  //             private messageService: MessageService) {
  //   // router.events.subscribe((routerEvent: Event) => {
  //   //   this.checkRouterEvent(routerEvent);
  //   // });
  // }

  // checkRouterEvent(routerEvent: Event): void {
  //   if (routerEvent instanceof NavigationStart) {
  //     this.loading = true;
  //   }

  //   if (routerEvent instanceof NavigationEnd ||
  //       routerEvent instanceof NavigationCancel ||
  //       routerEvent instanceof NavigationError) {
  //     this.loading = false;
  //   }
  // }

  // displayMessages(): void {
  //   // Example of primary and secondary routing together
  //   // this.router.navigate(['/login', {outlets: { popup: ['messages']}}]); // Does not work
  //   // this.router.navigate([{outlets: { primary: ['login'], popup: ['messages']}}]); // Works
  //   this.router.navigate([{ outlets: { popup: ['messages'] } }]); // Works
  //   this.messageService.isDisplayed = true;
  // }

  // hideMessages(): void {
  //   this.router.navigate([{ outlets: { popup: null } }]);
  //   this.messageService.isDisplayed = false;
  // }

  // logOut(): void {
  //   this.authService.logout();
  //   this.router.navigateByUrl('/welcome');
  // }
}
