import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent()
  })

  it('should create the app', () => {
    expect(fixture.COUNTER).toBe(0);
  });

  it('should incrementing counter', () => {
    fixture.addCounter()
    expect(fixture.COUNTER).toBe(1);
  });

  it('should incrementing counter', () => {
    const func = jest.spyOn(fixture, 'addCounter')
    fixture.addCounter()
    expect(func).toBeCalledWith();
  });
});
