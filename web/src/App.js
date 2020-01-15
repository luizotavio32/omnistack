import React, { useState } from 'react';
import './Global.css';
import './App.css';

// componente: bloco isolado de html css e js o qual não intefere no restante da aplicação
// estado: infos mantidas pelo componente (lembrar: imutabilidade)
// propriedade: infos que um componente pai passa pra um componente filho




function App()
{
	
	return (
		<div id = "App">
			<aside>
				<strong>Cadastrar</strong>
				<form>

					<div class="input-block">
						<label htmlFor="github_username">Usuário do Github</label>
						<input name="github_username" id="github_username" required />
					</div>

					<div class="input-block">
						<label htmlFor="techs">Tecnologias</label>
						<input name="techs" id="techs" required />
					</div>

					<div class="input-block">
							<label htmlFor="username_github">Usuário do Github</label>
							<input name="github_username" id="username_github" required />
						</div>
						<div className="input-group">
							<label htmlFor="latitude">latitude</label>
							<input name="latitude" id="latitude" required />

						<div className="input-group">
							<label htmlFor="longitude">longitude</label>
							<input name="longitude" id="longitude" required />
						</div>
					</div>

					<button type = "submit">Salvar </button>
				</form>
				
			</aside>


			<main>

			</main>
		</div>
	);
}

export default App;
