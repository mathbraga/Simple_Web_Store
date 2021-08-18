const {db} = require('../database/Database');

/**
* Pesquisa no banco de dados tabelas com todas as CPUs
*
* Assertivas de entrada: nenhuma
*
* Assertivas de Saída: String formatada contendo cada linha da tabela
*/
const selectCPU = new Promise((resolve) => {
  db.all('select * from products where category_id = 3', [], (err, rows) => {
    if (err) {
      throw err;
    }
    resolve(rows);
  });
});

/**
* Pesquisa no banco de dados tabelas com todas as GPUs
*
* Assertivas de entrada: nenhuma
*
* Assertivas de Saída: String formatada contendo cada linha da tabela
*/
const selectGPU = new Promise((resolve) => {
  db.all('select * from products where category_id = 2', [], (err, rows) => {
    if (err) {
      throw err;
    }
    resolve(rows);
  });
});

/**
* Pesquisa no banco de dados tabelas com todas as Placas-mãe
*
* Assertivas de entrada: nenhuma
*
* Assertivas de Saída: String formatada contendo cada linha da tabela
*/
const selectMB = new Promise((resolve) => {
  db.all('select * from products where category_id = 1', [], (err, rows) => {
    if (err) {
      throw err;
    }
    resolve(rows);
  });
});

/**
* Pesquisa no banco de dados um usuário específico
*
* Assertivas de entrada: dados do usuário
*
* Assertivas de Saída: String formatada contendo cada linha da tabela
*/
const queryUser = (data) => {
  return new Promise((resolve) => {
    db.all(`select email, role_id from users where 
    email = ${JSON.stringify(data.email)} 
    AND password = ${JSON.stringify(data.password)}`,
    [], (err, rows) => {
      if (err) {
        throw err;
      }
      resolve(rows);
    });
  });
};

/**
* Insere no BD um novo usuário
*
* Assertivas de entrada: dados do usuário
*
* Assertivas de Saída: String formatada contendo cada linha da tabela
*/
const insertUser = (data) => {
  return new Promise((resolve) => {
    db.all(`insert into users (role_id, full_name, address, email, password) 
    values (3, ${JSON.stringify(data.name)}, ${JSON.stringify(data.address)}, 
    ${JSON.stringify(data.email)}, ${JSON.stringify(data.password)})`,
    [], (err) => {
      if (err) {
        throw err;
      }
      resolve('Success.');
    });
  });
};

/**
* Remove um usuário do BD
*
* Assertivas de entrada: email do usuário
*
* Assertivas de Saída: String indicando sucesso na ação
*/
const removeUser = (data) => {
  return new Promise((resolve) => {
    db.all(`delete from users where email = ${JSON.stringify(data.email)}`,
        [], (err) => {
          if (err) {
            throw err;
          }
          resolve('Success.');
        });
  });
};

/**
* Insere novo produto no BD
*
* Assertivas de entrada: dados do produto
*
* Assertivas de Saída: String indicando sucesso na ação
*/
const insertProduct = (data) => {
  return new Promise((resolve) => {
    db.all(`insert into products (id, category_id, name, price, avatar) 
    values (${parseInt(data.id)}, ${parseInt(data.category)},
    ${JSON.stringify(data.name)}, ${parseFloat(data.price)},
    ${JSON.stringify(data.avatar)})`,
    [], (err) => {
      if (err) {
        throw err;
      }
      resolve('Success.');
    });
  });
};

/**
* Remove um produto do BD
*
* Assertivas de entrada: id do produto
*
* Assertivas de Saída: String indicando sucesso na ação
*/
const removeProduct = (data) => {
  return new Promise((resolve) => {
    db.all(`delete from products where id = ${parseInt(data.id)}`,
        [], (err) => {
          if (err) {
            throw err;
          }
          resolve('Success.');
        });
  });
};

/**
* Pesquisa um produto no BD
*
* Assertivas de entrada: id do produto
*
* Assertivas de Saída: String formatada com o resultado da busca
*/
const searchProduct = (data) => {
  return new Promise((resolve) => {
    db.all(`select name from products where id = ${parseInt(data.id)}`,
        [], (err, rows) => {
          if (err) {
            throw err;
          }
          resolve(rows);
        });
  });
};

/**
* Insere um pedido no BD
*
* Assertivas de entrada: dados do pedido
*
* Assertivas de Saída: String indicando sucesso na ação
*/
const insertOrder = (data) => {
  return new Promise((resolve) => {
    db.all(`insert into orders (barcode, owner, price, products, status)
    values (${JSON.stringify(data.barcode)}, ${JSON.stringify(data.owner)},
    ${parseInt(data.price)}, ${JSON.stringify(data.products)}, 1)`,
    [], (err) => {
      if (err) {
        throw err;
      }
      resolve('Success.');
    });
  });
};

/**
* Remove um pedido no BD
*
* Assertivas de entrada: código de barras do pedido
*
* Assertivas de Saída: String indicando sucesso na ação
*/
const removeOrder = (data) => {
  return new Promise((resolve) => {
    db.all(`delete from orders where barcode = ${JSON.stringify(data.barcode)}`,
        [], (err) => {
          if (err) {
            throw err;
          }
          resolve('Success.');
        });
  });
};

/**
* Remove um pedido no BD
*
* Assertivas de entrada: código de barras do pedido
*
* Assertivas de Saída: String indicando sucesso na ação
*/
const updateOrder = (data) => {
  return new Promise((resolve) => {
    db.all(`update orders set status = ${parseInt(data.status)}
    where barcode = ${JSON.stringify(data.barcode)}`,
    [], (err) => {
      if (err) {
        throw err;
      }
      resolve('Success.');
    });
  });
};

/**
* Pesquisa no BD os pedidos de um usuário
*
* Assertivas de entrada: id do usuário
*
* Assertivas de Saída: String formatada com o resultado da busca
*/
const selectOrders = (data) => {
  return new Promise((resolve) => {
    db.all(`select * from orders where owner = ${JSON.stringify(data.owner)}`,
        [], (err, rows) => {
          if (err) {
            throw err;
          }
          resolve(rows);
        });
  });
};

/**
* Pesquisa no BD todos os pedidos no sistema
*
* Assertivas de entrada: nenhum
*
* Assertivas de Saída: String formatada com o resultado da busca
*/
const selectAllOrders = (data) => {
  return new Promise((resolve) => {
    db.all(`select * from orders`, [], (err, rows) => {
      if (err) {
        throw err;
      }
      console.log(data)
      resolve(rows);
    });
  });
}

module.exports = {
  selectCPU,
  selectGPU,
  selectMB,
  queryUser,
  insertUser,
  removeUser,
  insertProduct,
  removeProduct,
  searchProduct,
  insertOrder,
  removeOrder,
  updateOrder,
  selectOrders,
  selectAllOrders,
};
