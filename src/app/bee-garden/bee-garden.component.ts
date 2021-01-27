import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { BeeGarden } from 'src/models/beeGarden';
import { AuthService } from 'src/services/auth.service';
import { BeeGardenService } from 'src/services/bee-garden.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-beegarden',
  templateUrl: './bee-garden.component.html',
  styleUrls: ['./bee-garden.component.css']
})
export class BeeGardenComponent implements OnInit {

  @ViewChild('readOnlyTemplate', { static: false }) readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate', { static: false }) editTemplate: TemplateRef<any>;
  
  beeGardens: Array<BeeGarden>;
  
  statusMessage: string;
  editedBeeGarden: BeeGarden;
  isNewRecord: boolean;

  constructor(
    private authService: AuthService,
    private beeGardenService: BeeGardenService,
    private userService: UserService,
    private vref: ViewContainerRef
  ) {
    this.beeGardens = new Array<BeeGarden>();
    this.statusMessage = '';
    this.editedBeeGarden = new BeeGarden();
    this.isNewRecord = false;
  }

  ngOnInit() {
    this.loadBeeGardens();
    this.vref.createEmbeddedView(this.readOnlyTemplate);
    this.vref.createEmbeddedView(this.editTemplate);
  }

  private loadBeeGardens() {
    var userId = this.authService.getUserId();
    this.userService.getBeeGardens(userId).subscribe(res => {
      this.beeGardens = res;
    });
  }

  loadTemplate(beeGarden: BeeGarden) {
    if (this.editedBeeGarden && this.editedBeeGarden.id === beeGarden.id) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }

  addBeeGarden() {
    this.editedBeeGarden = new BeeGarden();
    this.beeGardens.push(this.editedBeeGarden);
    this.isNewRecord = true;
  }

  editBeeGarden(beeGarden: BeeGarden) {
    this.editedBeeGarden = new BeeGarden();
    this.editedBeeGarden.id = beeGarden.id;
    this.editedBeeGarden.name = beeGarden.name;
    this.editedBeeGarden.description = beeGarden.description;
    this.editedBeeGarden.userId = beeGarden.userId;
  }

  saveBeeGarden() {
    if (this.isNewRecord) {
      this.editedBeeGarden.userId = 2;//this.authService.getUserId();
      this.beeGardenService.post(this.editedBeeGarden)
        .subscribe(res => {
          this.statusMessage = 'Данные успешно добавлены',
          this.loadBeeGardens();
      });

      this.isNewRecord = false;
      this.editedBeeGarden = new BeeGarden();
    } else {
      this.beeGardenService.put(this.editedBeeGarden.id, this.editedBeeGarden)
        .subscribe(res => {
          this.statusMessage = 'Данные успешно обновлены',
          this.loadBeeGardens();
        });

      this.editedBeeGarden = new BeeGarden();
    }
  }

  // отмена редактирования
  cancel() {
    // если отмена при добавлении, удаляем последнюю запись
    if (this.isNewRecord) {
        this.beeGardens.pop();
        this.isNewRecord = false;
    }
    this.editedBeeGarden = new BeeGarden();
  }

  // удаление
  deleteBeeGarden(beeGarden: BeeGarden) {
    this.beeGardenService.delete(beeGarden.id)
      .subscribe(res => {
        this.statusMessage = 'Данные успешно удалены';
        this.loadBeeGardens();
      });
  }
}