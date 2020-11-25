const { selectRoles, selectUsers, selectCategories } = require('../src/fetchDB/fetchFullTable');

test('Select Roles table', () => {
    return expect(selectRoles).
            resolves.
            toEqual(JSON.parse(`[{"id":1,"role":"admin"},{"id":2,"role":"colaborator"},{"id":3,"role":"customer"}]`));
});

test('Select Users table', () => {
    return expect(selectUsers).
            resolves.
            toEqual(JSON.parse(`[{"id":1,"role_id":1,"full_name":"admin","email":"admin@admin.com","password":"admin123"}]`));
});

test('Select Categories table', () => {
    return expect(selectCategories).
            resolves.
            toEqual(JSON.parse(`[{"id":1,"category":"motherboards"},{"id":2,"category":"graphicscard"},{"id":3,"category":"processor"}]`));
});