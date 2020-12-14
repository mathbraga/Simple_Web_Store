const { 
    queryUser, 
    insertUser, 
    removeUser, 
    selectGPU, 
    selectCPU, 
    selectMB,
    insertProduct,
    removeProduct,
    searchProduct,
    insertOrder,
    removeOrder,
    updateOrder
} = require('../src/fetchDB/fetchFullTable');

const userData = {
    name: "test name",
    email: "test@name.com",
    password: "12345",
    address: "test address",
}

const testProduct = {
    id: 99,
    category: 1,
    name: "motherboard",
    price: 9999,
    avatar: "url"
}

const testOrder = {
    barcode: "qwertyuiopasdfghjklçzxcvbnm",
    owner: "matheus@email.com",
    price: 999,
    products: "testlistproducts",
    status: 1
}

const testUpdateOrder = {
    barcode: "qwertyuiopasdfghjklçzxcvbnm",
    status: 2
}

test('Select GPU table', () => {
    return expect(selectGPU).
            resolves.
            not.toEqual([]);
});

test('Select CPU table', () => {
    return expect(selectCPU).
            resolves.
            not.toEqual([]);
});

test('Select Motherboard table', () => {
    return expect(selectMB).
            resolves.
            not.toEqual([]);
});

test('Insert new user', () => {
    return expect(insertUser(userData)).
            resolves.
            toEqual("Success.");
});

test('Search user', () => {
    return expect(queryUser(userData)).
            resolves.
            toEqual(JSON.parse(`[{"email":"test@name.com","role_id":3}]`));
});

test('Delete user', () => {
    return expect(removeUser(userData)).
            resolves.
            toEqual("Success.");
});

test('Search user', () => {
    return expect(queryUser(userData)).
            resolves.
            toEqual([]);
});

test('Insert product', () => {
    return expect(insertProduct(testProduct)).
            resolves.
            toEqual("Success.");
});

test('Search product', () => {
    return expect(searchProduct(testProduct)).
            resolves.
            toEqual(JSON.parse(`[{"name":"motherboard"}]`));
});

test('Remove product', () => {
    return expect(removeProduct(testProduct)).
            resolves.
            toEqual("Success.");
});

test('Insert order', () => {
    return expect(insertOrder(testOrder)).
            resolves.
            toEqual("Success.");
});

test('Update order', () => {
    return expect(updateOrder(testUpdateOrder)).
            resolves.
            toEqual("Success.");
});

test('Remove order', () => {
    return expect(removeOrder(testOrder)).
            resolves.
            toEqual("Success.");
});