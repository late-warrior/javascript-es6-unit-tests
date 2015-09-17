var r = require('./echo');

describe('Testing echoes', function() {
    it('Does it echo back ? ', function() {
        expect(r.echo('rs')).toEqual('Echoing back rs');
    });

    it('Does it give the correct version ? ', function() {
        expect(r.htVersion()).toEqual('2.1.5');
    });
});