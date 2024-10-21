import React, {useContext} from 'react'
import { ThemeContext } from './Theme'

function Form (){

    const context = useContext(ThemeContext)

    const renderForm = (
        <form>
        <label>
            Name:
            <input type="text" />
        </label>
        <label>
            Age:
            <input type="text" />
        </label>
        <label>
            Address :
            <input type="text" />
        </label>
        <label>
            Email:
            <input type="text" />
        </label>
        <label>
            Phone:
            <input type="text" />
        </label>
    </form>
    )

    const renderNotLogged =(
        <h1>é necessário realizar o login</h1>
    )

  return (
    <div>
        {!context.token ? renderNotLogged : renderForm}
    </div>
  )
}


export default Form