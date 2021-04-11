const {tags} = require('jest-tags');

    tags("tag1").test('Just a test with tag1', () => {
        expect(true).toBe(true);
    });

    tags("tag2").test('Just a test with tag2', () => {
        expect(true).toBe(true);
    });

    tags("tag1", "tag2").test('Just a test with tag1 and tag2', () => {
        expect(true).toBe(true);
    });

    tags("tag3").test('Just a test with tag3', () => {
        expect(true).toBe(true);
    });

