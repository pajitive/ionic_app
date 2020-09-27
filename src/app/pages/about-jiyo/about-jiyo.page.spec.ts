import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutJiyoPage } from './about-jiyo.page';

describe('AboutJiyoPage', () => {
  let component: AboutJiyoPage;
  let fixture: ComponentFixture<AboutJiyoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutJiyoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutJiyoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
