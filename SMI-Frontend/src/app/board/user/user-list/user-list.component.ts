import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  listUser = [];

  constructor(
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit() {
    this.adminService.getUsers().subscribe((res) => {
      this.listUser = res;
    });
  }

  public onAdd() {
    this.router.navigateByUrl('/userForm');
  }

  public onUpdate(userId: number) {
    this.router.navigateByUrl('/userForm/' + userId);
  }

  public onDelete(userId: number) {
    this.adminService.deleteUser(userId).subscribe(
      (res) => {
        this.adminService.getUsers().subscribe((res) => {
          this.listUser = res;
        });
      },
      (err) => {
      }
    );
  }

  retour(){
    this.router.navigateByUrl('/admin');
  }
}
