import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  idUser = null;
  dataUser = null;
  listConfigs = [];
  existUser: boolean;

  constructor(
    private activedRoute: ActivatedRoute,
    private adminService: AdminService,
    private router: Router
  ) {
    if (this.activedRoute.snapshot.paramMap.get('id')) {
      this.idUser = this.activedRoute.snapshot.paramMap.get('id');
    }
  }

  ngOnInit(): void {
    this.existUser = false;
    if (this.idUser) {
      this.adminService.getUser(this.idUser).subscribe((res) => {
        this.dataUser = res;
        this.existUser = true;
        this.adminService.getConfigsUser(this.idUser).subscribe((res) => {
          this.listConfigs = res;
        });
      });
    }
  }

  public onAdd() {
    this.router.navigateByUrl('/configForm');
  }

  public onUpdate(configId: number) {
    this.router.navigateByUrl('/configForm/' + configId);
  }

  public onDelete(configId: number) {
    this.adminService.deleteConfig(configId).subscribe(
      (res) => {
        this.adminService.getConfigsUser(this.idUser).subscribe((res) => {
          this.listConfigs = res;
        });
      },
      (err) => {
      }
    );
  }

  retour(){
    this.router.navigateByUrl('/userList');
  }
}
