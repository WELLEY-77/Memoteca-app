import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {

  pensamento = {
    id:'1',
    conteudo:'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }

  constructor () {}

  ngOnInit() {}

  criarPensamento() {
    alert('Pensamento criado')
  }

  cancelar() {
    alert('Pensamento Cancelado')
  }

}
