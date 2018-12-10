import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
import { environment } from '../../environments/environment';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-user',
    templateUrl: 'user.component.html',
    styleUrls: ['./user.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class UserComponent implements OnInit {
    loadingIndicator: Boolean = true;
    reorderable: Boolean = true;
    public rows: Array<any>;
    public userSeletected;
    public form: FormGroup;
    public permissions: any;
    public isUpdateBtn = false;

    public modal: NgbModalRef;
    
    constructor(
        private userService: UserService,
        private toastr: ToastrService,
        private modalService: NgbModal,
        fb: FormBuilder
    ) { 
        this.form = fb.group({
            name: ["", Validators.required],
            email: ["", Validators.required],
            password: ["", Validators.required]
        });
    }

    ngOnInit() {
        this.get();
    }

    get() {
        this.userService.get().subscribe(
            data => {
                this.rows = data.data;
                this.rows = [...this.rows];
            },
            error => {
                console.log(error);
                this.toastr.error(environment.SERVER_ERROR_MSG);
            },
            () => {

            }
        );
    }
    delete(id) {
        this.userService.delete(id).subscribe(
            data => {
                this.get();
                this.toastr.success("Se a eliminado al usuario con exito");
            },
            error => {
                console.log(error);
                this.toastr.error(environment.SERVER_ERROR_MSG);
            }
        );
    }


    public openModal(modal, row) {
        this.form.reset();
        if(!row) {
            this.isUpdateBtn = false;
            this.modal = this.modalService.open(modal);
        } else {
            this.isUpdateBtn = true;
            this.userSeletected = row;
            this.form.patchValue(row);
            this.modal = this.modalService.open(modal);
        }
    }

    public update() {
        let user = this.form.value;
        this.userService.patch(this.userSeletected.id, user).subscribe(
            data => {
                this.get();
                this.toastr.success("Se a actualizado al usuario con exito");
            },
            error => {
                console.log(error);
                this.toastr.error(environment.SERVER_ERROR_MSG);
            }
        );
        this.modal.close();
    }

    public create() {
        let user = this.form.value;
        this.userService.post(user).subscribe(
            data => {
                this.get();
                this.toastr.success("Se a creado al usuario con exito");
            },
            error => {
                console.log(error);
                this.toastr.error(environment.SERVER_ERROR_MSG);
            }
        );
        this.modal.close();
    }
}
