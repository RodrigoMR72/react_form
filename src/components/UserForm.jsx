import React, { useState } from 'react'
import { LabelForm } from './LabelForm'

export const UserForm = () => {

    const [nome, setName] = useState();
    const [email, setEmail] = useState();    
    const [senha, setSenha] = useState();

    const submitForm = (event) => {

        event.preventDefault();
        console.log('Submit', nome, email, senha);

    }

    return (
        <div className='container'>
            <h1>Cadastro de Usuário</h1>
            <form className="form" onSubmit={submitForm}>

                <div className="col-md-4 mb-3">
                    <LabelForm name='Nome' />
                    {/* <label htmlFor='nome' className='form-label'>Nome</label> - Substituído por um COMPONENTE*/}
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        className='form-control'
                        onChange={event => setName(event.target.value)}
                        value={nome}
                    />
                </div>

                <div className="col-md-3 mb-3">
                    <LabelForm name='Email' />
                    {/* <label htmlFor='email' className='form-label'>e-mail</label> */}
                    <input
                        type="text"
                        name="email"
                        id="email"
                        className='form-control'
                        onChange={event => setEmail(event.target.value)}
                        value={email}
                    />
                </div>

                <div className="col-md-3 mb-3">
                    <LabelForm name='Senha' />
                    {/* <label htmlFor='senha' className='form-label'>Senha</label> */}
                    <input
                        type="password"
                        name="senha"
                        id="senha"
                        className='form-control'
                        onChange={event => setSenha(event.target.value)}
                        value={senha}
                    />
                </div>

                <button type="submit" className="btn btn-secondary btn-sm" >Enviar</button>

            </form>

        </div>
    )
}
