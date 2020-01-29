import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

/*import { ThrowStmt } from "@angular/compiler";*/

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.css"]
})
export class ContactUsComponent implements OnInit {
  constructor() {}

  exampleForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl()
  });

  submitForm() {
    /*  this.loading = true;  */
    console.log("Submitting....");
    const user = {
      /* name: this.firstNameFormControl.value,
      email: this.emailFormControl.value */
    };
  }

  ngOnInit() {
    /*---  Create API Call ---*/
    /*---  Create Form based on API Call ---*/
  }
}
