import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminLibros } from './admin-libros';

describe('AdminLibros', () => {
  let component: AdminLibros;
  let fixture: ComponentFixture<AdminLibros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminLibros],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminLibros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
