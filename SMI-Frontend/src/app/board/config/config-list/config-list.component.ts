import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-config-list',
  templateUrl: './config-list.component.html',
  styleUrls: ['./config-list.component.css']
})
export class ConfigListComponent implements OnInit {
  listConfigs = [];
  
  constructor(    private adminService: AdminService,
    private router: Router) { }

  ngOnInit(): void {    this.adminService.getConfigs().subscribe((res) => {
    this.listConfigs = res;
  });
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
        this.adminService.getConfigs().subscribe((res) => {
          this.listConfigs = res;
        });
      },
      (err) => {
      }
    );
  }

  retour(){
    this.router.navigateByUrl('/configList');
  }
}
