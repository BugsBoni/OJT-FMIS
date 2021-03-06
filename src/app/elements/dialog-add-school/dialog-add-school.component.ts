import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user.service';
import { SchoolService } from 'src/app/service/school.service';

@Component({
  selector: 'app-dialog-add-school',
  templateUrl: './dialog-add-school.component.html',
  styleUrls: ['./dialog-add-school.component.css']
})
export class DialogAddSchoolComponent implements OnInit {


  types : any[] = [

    {value: 'Elementary'},
    {value: 'Secondary'},
    {value: 'Vocational'},
    {value: 'College'},
    {value: 'Graduate Studies'}

  ]
  isCheck = true;
  isLoading = false;
  
  id:string;
  mode : string;
  form: FormGroup;
  constructor( public dialogRef: MatDialogRef<DialogAddSchoolComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private facultyService: UserService,
    private schoolService: SchoolService) {

      //this.isLoading = true;
      this.id = this.facultyService.getUserId();
      console.log("myId: " + this.id);
      this.form = new FormGroup({

        'nameOfSchool' : new FormControl(null, {validators:[Validators.required]}),
        'course' : new FormControl(null, {validators:[Validators.required]}),
        'fromYear' : new FormControl(null, {validators:[Validators.required]}),
        'toYear' : new FormControl(null),
        'highestLevel' : new FormControl(null),
        'yearGraduated' : new FormControl(null),
        'honors' : new FormControl(null),
        'checkBox' : new FormControl(true),
        'type' : new FormControl(null, {validators:[Validators.required]})



      })

      if(this.data){

        this.mode = 'edit';
        this.form.patchValue({nameOfSchool : this.data.nameOfSchool});
        this.form.patchValue({course : this.data.course});
        this.form.patchValue({fromYear : this.data.fromYear});
        this.form.patchValue({toYear : this.data.toYear});
        this.form.patchValue({checkBox : true});

        if(this.data.highestLevel){
          this.form.patchValue({highestLevel : this.data.highestLevel});
        this.form.patchValue({checkBox : false});

        }
        if( this.data.yearGraduated){

          this.form.patchValue({yearGraduated : this.data.yearGraduated});
        }

        this.form.patchValue({honors : this.data.honors});
        this.form.patchValue({type : this.data.type});


      }
      else{
        this.mode = 'create';

      }

   


    }

  ngOnInit(): void {


  }

  onCreateSchool(){

    this.isLoading = true;
    
    if(this.form.invalid){
      return;
    }
    
    if(this.mode === 'create'){ 
      

      this.schoolService.addSchool(
        this.form.value.nameOfSchool,
        this.form.value.course,
        this.form.value.fromYear,
        this.form.value.toYear,
        this.form.value.highestLevel,
        this.form.value.yearGraduated,
        this.form.value.honors,
        this.form.value.type,
        this.id
      ).subscribe(
        res=>{
  
          this.isLoading = false;
          window.alert('Success');
          this.dialogRef.close('success');
  
  
        },
        err =>{
  
          this.isLoading = false;
          window.alert('error');
          console.log(err)
  
        }
      );

    }
    else{

      //edit 

      if(this.form.value.checkBox){
        this.form.value.highestLevel = null;
      }
      else{
        this.form.value.yearGraduated = null;
      }

      this.schoolService.updateSchool(
        this.data._id,
        this.form.value.nameOfSchool,
        this.form.value.course,
        this.form.value.fromYear,
        this.form.value.toYear,
        this.form.value.highestLevel,
        this.form.value.yearGraduated,
        this.form.value.honors,
        this.form.value.type
      )
      .subscribe(
        res =>{

          window.alert("Success!");
          this.dialogRef.close("Success");

        },
        err =>{

          window.alert("Error!" + err);
          this.dialogRef.close();

        }
      );




    }




  }

  onNoClick(){
    this.dialogRef.close();
  }

}
