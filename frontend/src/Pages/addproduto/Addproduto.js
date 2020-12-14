import React, { useState } from 'react';
import connect from '../../services/connect';
import * as strap from 'reactstrap';

import './styles.css';

function Addproduto(){
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState("1");
    const [price, setPrice] = useState("");
    const [avatar, setAvatar] = useState("");

    function insertProduct(){
        connect.post("/addproduct", {
            id,
            name,
            category,
            price,
            avatar
        }).then((res) => {
            console.log(res);
            window.location.href = "http://localhost:3000/";
        });
    }

    return (
        <div className="flex-row align-items-center animated fadeIn card-container">
            <strap.Container>
                <strap.Row className="justify-content-center">
                    <strap.Col md="8">
                    <strap.Card className="mx-4">
                        <strap.CardBody className="p-4 card-body-container">
                            <strap.Form>
                                <strap.FormGroup>
                                    <strap.Label for="p_Id">Id</strap.Label>
                                    <strap.Input name="id" id="p_Id" value={id} onChange={(e) => {setId(e.target.value)}} placeholder="Id" />
                                </strap.FormGroup>
                                <strap.FormGroup>
                                    <strap.Label for="p_Name">Nome do Produto</strap.Label>
                                    <strap.Input name="name" id="p_Name" value={name} onChange={(e) => {setName(e.target.value)}} placeholder="Nome" />
                                </strap.FormGroup>
                                <strap.FormGroup>
                                    <strap.Label for="category">Categoria Id</strap.Label>
                                    <strap.Input type="select" name="category" id="category" value={category} onChange={(e) => {setCategory(e.target.value)}}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </strap.Input>
                                </strap.FormGroup>
                                <strap.FormGroup>
                                    <strap.Label for="price">Preço</strap.Label>
                                    <strap.Input name="price" id="price" value={price} onChange={(e) => {setPrice(e.target.value)}} placeholder="Preço" />
                                </strap.FormGroup>
                                <strap.FormGroup>
                                    <strap.Label for="avatar">Imagem do Produto</strap.Label>
                                    <strap.Input name="avatar" id="avatar" value={avatar} onChange={(e) => {setAvatar(e.target.value)}} placeholder="Img URL" />
                                </strap.FormGroup>
                                <strap.Button color="primary" onClick={() => insertProduct()}>Adicionar</strap.Button>
                            </strap.Form>
                        </strap.CardBody>
                    </strap.Card>
                    </strap.Col>
                </strap.Row>
            </strap.Container>
        </div>
    )
}

export default Addproduto;