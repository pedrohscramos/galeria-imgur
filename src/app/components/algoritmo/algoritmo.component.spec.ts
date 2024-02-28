import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AlgoritmoComponent } from './algoritmo.component';

describe('AlgoritmoComponent', () => {
  let component: AlgoritmoComponent;
  let fixture: ComponentFixture<AlgoritmoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlgoritmoComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(AlgoritmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AlgoritmoComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should calculate array correctly', () => {
    const fixture = TestBed.createComponent(AlgoritmoComponent);
    const app = fixture.componentInstance;
    app.userInput = 200;
    expect(app.array.length).toEqual(10);
    expect(Math.round(app.array[2])).toEqual(180);
  });

  it('should calculate sum correctly for odd positions', () => {
    const fixture = TestBed.createComponent(AlgoritmoComponent);
    const app = fixture.componentInstance;
    app.array = [20, 40, 180, 80, 100, 360, 140, 160, 540, 200];
    app.choice = 'odd';
    app.calculateSum();
    expect(app.sum).toEqual(840);
  });

  it('should calculate sum correctly for even positions', () => {
    const fixture = TestBed.createComponent(AlgoritmoComponent);
    const app = fixture.componentInstance;
    app.array = [20, 40, 180, 80, 100, 360, 140, 160, 540, 200];
    app.choice = 'even';
    app.calculateSum();
    expect(app.sum).toEqual(980);
  });
});
