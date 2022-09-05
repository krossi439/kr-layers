import { BypassHrefSecurityPipe } from './bypass-href-security.pipe';

describe('BypassHrefSecurityPipe', () => {
  it('create an instance', () => {
    const pipe = new BypassHrefSecurityPipe();
    expect(pipe).toBeTruthy();
  });
});
