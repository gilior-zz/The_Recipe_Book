import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Recipe} from "../../models/ingredient";

/**
 * Generated class for the EditRecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipePage implements OnInit {
  options = ['easy', 'medium', 'hard'];
  private isNew: boolean;
  private formGroup: FormGroup;
  private recipe: Recipe;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private  fb: FormBuilder) {

  }

  get status(): string {
    return this.isNew ? 'add' : 'edit';
  }

  ngOnInit(): void {
    this.recipe = this.navParams.get('recipe') as Recipe;
    this.isNew = this.recipe === undefined;
    this.createForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditRecipePage');
  }

  onSubmit(){
    console.log('this.formGroup ',this.formGroup)
  }

  private createForm() {
    this.formGroup = this.fb.group({
      name: [this.isNew ? '': this.recipe.name,[Validators.required]],
      description: [this.isNew ? '': this.recipe.description,Validators.required],
      difficulty: [this.isNew ? 'easy': this.recipe.difficulty,Validators.required],
    })
  }

}
