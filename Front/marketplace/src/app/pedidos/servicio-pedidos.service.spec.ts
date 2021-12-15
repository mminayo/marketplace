import { TestBed } from '@angular/core/testing';

import { ServicioPedidosService } from './servicio-pedidos.service';

describe('ServicioPedidosService', () => {
  let service: ServicioPedidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPedidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
