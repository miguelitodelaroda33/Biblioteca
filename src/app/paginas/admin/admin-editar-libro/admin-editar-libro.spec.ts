import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminEditarLibro } from './admin-editar-libro';

describe('AdminEditarLibro', () => {
  let component: AdminEditarLibro;
  let fixture: ComponentFixture<AdminEditarLibro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEditarLibro],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminEditarLibro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
