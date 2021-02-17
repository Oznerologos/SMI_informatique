import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-config-details',
  templateUrl: './config-details.component.html',
  styleUrls: ['./config-details.component.css']
})
export class ConfigDetailsComponent implements OnInit {
  idConfig = null;
  dataConfig = null;
  existConfig: boolean;

  constructor(
    private activedRoute: ActivatedRoute,
    private adminService: AdminService,
    private router: Router
  ) {
    if (this.activedRoute.snapshot.paramMap.get('id')) {
      this.idConfig = this.activedRoute.snapshot.paramMap.get('id');
    }
  }

  ngOnInit(): void {
    this.existConfig = false;
    if (this.idConfig) {
      this.adminService.getConfig(this.idConfig).subscribe((res) => {
        this.dataConfig = res;
        this.existConfig = true;
      });
    }
  }

  retour(){
    this.router.navigateByUrl('/configList');
  }
}
