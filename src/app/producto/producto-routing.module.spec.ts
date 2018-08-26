import { ProductoRoutingModule } from './producto-routing.module';

describe('ProductoRoutingModule', () => {
  let productoRoutingModule: ProductoRoutingModule;

  beforeEach(() => {
    productoRoutingModule = new ProductoRoutingModule();
  });

  it('should create an instance', () => {
    expect(productoRoutingModule).toBeTruthy();
  });
});
