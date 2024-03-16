import { CommonModule } from '@angular/common';
import { Component, HostBinding, ViewChild } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterOutlet,
    NzFlexModule,
    NzAvatarModule,
    NzButtonModule,
    NzDropDownModule,
    AvatarModule,
    ButtonModule,
    PanelMenuModule,
    NzIconModule,
    CommonModule,
    NzMenuModule,
    NzLayoutModule,
    SidebarModule,
    RouterModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  items!: any[];
  isCollapsed: boolean = false;

  @HostBinding('style.--my-variable')
  get myVariable() {
    return this.isCollapsed ? '80px' : '256px';
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private menuService: MenuService
  ) {}

  ngOnInit() {
    this.assignMenuByType();
  }

  assignMenuByType() {
    this.route.url.subscribe((url) => {
      const routeAux = url.map((seg) => seg.path).join('/');
      if (routeAux.includes('admin')) {
        this.menu('ADMIN');
      } else {
        this.menu('USER');
      }
    });
  }

  closeSession() {
    this.menuService.closeSession().subscribe(
      (data) => {
        sessionStorage.clear();
        location.reload();
      },
      (error) => {
        console.log(error);
        sessionStorage.clear();
        location.reload();
      }
    );
  }

  menu(ROL: string) {
    this.menuService.getOptionsMenu(ROL).subscribe((data) => {
      this.items = data;
      console.log(this.items);
      this.items.push({
        url: 'close',
        nombreOpcion: 'Cerrar Sesión',
        icon: 'close',
      });
    });
  }
}
