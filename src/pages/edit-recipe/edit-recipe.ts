import {Component, OnInit} from '@angular/core';
import {
  ActionSheetController,
  AlertController,
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from 'ionic-angular';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Ingredient, Recipe} from "../../models/models";
import {RecipesService} from "../../services/recipes.service";


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
              private  fb: FormBuilder,
              private actionSheetController: ActionSheetController,
              private  alertController: AlertController,
              private toastController: ToastController,
              private recipesService: RecipesService) {

  }

  get status(): string {
    return this.isNew ? 'add' : 'edit';
  }

  get ingredientsCtrl(): FormArray {
    return this.formGroup.get('ingredients') as FormArray
  }

  ngOnInit(): void {
    this.recipe = this.navParams.data as Recipe;
    this.isNew = this.recipe === undefined;
    this.createForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditRecipePage');
  }

  onSubmit() {
    console.log('this.formGroup ', this.formGroup)
    const formModel = this.formGroup.value;
    // deep copy of form model lairs
    const ingredientsDeepCopy: Ingredient[] = formModel.ingredients.map(
      (name: string) => {
        return {name: name, amount: 0}
      }
    );

    const toSave: Recipe = {
      name: formModel.name,
      ingredients: ingredientsDeepCopy,
      difficulty: formModel.difficulty,
      description: formModel.description
    }

    this.recipesService.addRecipe(toSave);
    this.formGroup.reset();
    this.navCtrl.popToRoot();
  }

  onManageIngredients() {
    const actionSheetController = this.actionSheetController.create(
      {
        title: 'wat y wana do', buttons: [
        {
          text: 'add ingredients', handler: () => {
          let ctrl = this.createIngredientCtrl();
          ctrl.present();
        }
        },
        {
          text: 'remove ingredients', role: 'destructive', handler: () => {
          let len = this.ingredientsCtrl.length;
          for (let i = len - 1; i >= 0; i--) {
            this.ingredientsCtrl.removeAt(i);
          }
          this.toastController.create({duration: 1000, message: 'all removed'}).present();
        }
        },
        {text: 'cancel', role: 'cancel'},
      ]
      }
    );
    actionSheetController.present();
  }

  private createIngredientCtrl() {
    const alertController = this.alertController.create({
      title: 'add ingredients',
      inputs: [
        {
          name: 'name',
          placeholder: 'name'
        }
      ],
      buttons: [
        {text: 'cancel', role: 'Cancel'},
        {
          text: 'add', handler: (data) => {
          if (!data.name.trim()) {
            this.toastController.create({message: 'imaginary text?', duration: 1000}).present();
          }
          else {
            this.ingredientsCtrl.push(new FormControl(data.name, Validators.required))
            this.toastController.create({duration: 1000, message: 'added'}).present();
          }
        }
        },
      ]
    });

    return alertController;
  }

  private createForm() {
    this.formGroup = this.fb.group({
      name: [this.isNew ? '' : this.recipe.name, [Validators.required]],
      description: [this.isNew ? '' : this.recipe.description, Validators.required],
      difficulty: [this.isNew ? 'easy' : this.recipe.difficulty, Validators.required],
      ingredients: this.fb.array(this.isNew ? [] : this.recipe.ingredients)


    })
  }
}
