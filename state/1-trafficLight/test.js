import TrafficLight from './TrafficLight.js';

describe('TrafficLight', () => {
  it('should have default values', () => {
    const light = new TrafficLight();
    expect(light.getCurrentMode()).toBe('red');
  });

  it('should change state', () => {
    const light = new TrafficLight();
    expect(light.getCurrentMode()).toBe('red');
    light.tick();
    expect(light.getCurrentMode()).toBe('red');
    light.tick();
    expect(light.getCurrentMode()).toBe('red');
    light.tick();
    expect(light.getCurrentMode()).toBe('yellow');
    light.tick();
    expect(light.getCurrentMode()).toBe('green');
    light.tick();
    expect(light.getCurrentMode()).toBe('green');
    light.tick();
    expect(light.getCurrentMode()).toBe('green');
    light.tick();
    expect(light.getCurrentMode()).toBe('red');
  });

  it('should be red', () => {
    const light = new TrafficLight();
    for (let i = 1; i < 22; i += 1) {
      light.tick();
    }
    expect(light.getCurrentMode()).toBe('red');
  });

  it('should be yellow', () => {
    const light = new TrafficLight();
    for (let i = 1; i < 39; i += 1) {
      light.tick();
    }
    expect(light.getCurrentMode()).toBe('yellow');
  });

  it('should be green', () => {
    const light = new TrafficLight();
    for (let i = 1; i < 62; i += 1) {
      light.tick();
    }
    expect(light.getCurrentMode()).toBe('green');
  });
});
