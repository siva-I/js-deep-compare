import {expect} from 'chai';
import compare from './index';

describe('Compare', function() {
  describe('premitive', function() {
    it('should be true for 2 same value strings', function() {
      expect(compare('test', 'test')).to.be(true);
    });
  });
});
